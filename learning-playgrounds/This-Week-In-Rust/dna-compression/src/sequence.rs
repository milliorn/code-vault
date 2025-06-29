use crate::nucleotide::NucleotideWord;

/// A sequence of packed 4-base words.
#[derive(Debug)]
pub struct NucleotideBlockVec(pub Vec<NucleotideWord>);

impl NucleotideBlockVec {
    // How many bases each NucleotideWord packs
    const BASES_PER_WORD: usize = 4;

    /// Break a full IUPAC string into 4-base chunks (padding the last) and encode.
    pub fn from_str(sequence: &str) -> Self {
        let sequence_length = sequence.len();

        // Number of complete 4-base words
        let full_word_count = sequence_length / Self::BASES_PER_WORD;

        // Pre-allocate enough capacity (rounding up)
        let mut blocks =
            Vec::with_capacity((sequence_length + Self::BASES_PER_WORD - 1) / Self::BASES_PER_WORD);

        // Encode each complete 4-base block
        for word_index in 0..full_word_count {
            let start_index = word_index * Self::BASES_PER_WORD;
            let end_index = start_index + Self::BASES_PER_WORD;
            let base_chunk = &sequence[start_index..end_index];
            blocks.push(NucleotideWord::from_str(base_chunk));
        }

        // Handle any trailing bases (<4) with automatic padding
        let leftover_bases = sequence_length % Self::BASES_PER_WORD;

        if leftover_bases != 0 {
            let start_index = full_word_count * Self::BASES_PER_WORD;
            let partial_chunk = &sequence[start_index..];
            blocks.push(NucleotideWord::from_str(partial_chunk));
        }

        NucleotideBlockVec(blocks)
    }

    /// Decode the entire sequence of words back into one continuous IUPAC string.
    pub fn to_string(&self) -> String {
        self.0.iter().map(|word| word.to_string()).collect()
    }

    /// Serialize all packed words into a little-endian byte vector.
    pub fn to_bytes(&self) -> Vec<u8> {
        // Each NucleotideWord wraps a u16; convert that to two LE bytes.
        self.0
            .iter()
            .flat_map(|word| word.0.to_le_bytes())
            .collect()
    }

    /// Reconstruct a NucleotideBlockVec from a slice of little-endian bytes.
    pub fn from_bytes(bytes: &[u8]) -> Self {
        // Number of bytes per u16 (always 2).
        let bytes_per_word = std::mem::size_of::<u16>();
        let mut blocks = Vec::new();

        // Process in windows of exactly 2 bytes.
        for byte_window in bytes.chunks(bytes_per_word) {
            if byte_window.len() == bytes_per_word {
                let value = u16::from_le_bytes([byte_window[0], byte_window[1]]);
                blocks.push(NucleotideWord(value));
            }
        }

        NucleotideBlockVec(blocks)
    }

    /// Complement (bitwise‐rotate) the base at the given absolute index in the sequence.
    ///
    /// # Arguments
    /// * `absolute_index` – 0-based index into the full nucleotide sequence.
    pub fn complement_base_at(&mut self, absolute_index: usize) {
        // Which packed word contains our base?
        let block_index = absolute_index / Self::BASES_PER_WORD;
        // Position within that word (0…BASES_PER_WORD-1).
        let base_index = absolute_index % Self::BASES_PER_WORD;

        // Delegate to the word’s own complement_base method.
        if let Some(word) = self.0.get_mut(block_index) {
            word.complement_base(base_index);
        }
    }

    /// Complement every base in the entire sequence in‐place.
    pub fn complement_sequence(&mut self) {
        // Walk each packed word…
        for packed_word in &mut self.0 {
            // …and let it flip all its bases.
            packed_word.complement_all();
        }
    }

    /// Complement all bases using match-based logic.
    pub fn complement_sequence_match(&mut self) {
        for word in &mut self.0 {
            for idx in 0..Self::BASES_PER_WORD {
                word.complement_base_match(idx);
            }
        }
    }
}
