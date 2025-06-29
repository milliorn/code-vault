/// Packed representation of up to 4 IUPAC nucleotides (4 bits each).
#[derive(Debug)]
pub struct NucleotideWord(pub u16);

impl NucleotideWord {
    // Number of bits used to encode each nucleotide.
    const BITS_PER_NUCLEOTIDE: u16 = 4;
    // Mask to isolate a single 4-bit nucleotide code.
    const NUCLEOTIDE_MASK: u16 = (1 << Self::BITS_PER_NUCLEOTIDE) - 1;

    // 4-bit codes for each IUPAC nucleotide.
    const CODE_PADDING: u16 = 0b0000;
    const CODE_A: u16 = 0b0001;
    const CODE_C: u16 = 0b0010;
    const CODE_T: u16 = 0b0100;
    const CODE_G: u16 = 0b1000;
    const CODE_R: u16 = 0b0011;
    const CODE_K: u16 = 0b0110;
    const CODE_Y: u16 = 0b1100;
    const CODE_M: u16 = 0b1001;
    const CODE_S: u16 = 0b0101;
    const CODE_W: u16 = 0b1010;
    const CODE_B: u16 = 0b1110;
    const CODE_D: u16 = 0b1101;
    const CODE_H: u16 = 0b1011;
    const CODE_V: u16 = 0b0111;
    const CODE_N: u16 = 0b1111;

    /// Encode up to 4 IUPAC nucleotides into a single 16-bit word.
    pub fn from_str(sequence: &str) -> Self {
        let mut packed_word: u16 = 0;

        for (position, nucleotide_char) in sequence.chars().enumerate() {
            let nucleotide_code = match nucleotide_char {
                '_' => Self::CODE_PADDING,
                'A' => Self::CODE_A,
                'C' => Self::CODE_C,
                'T' => Self::CODE_T,
                'G' => Self::CODE_G,
                'R' => Self::CODE_R,
                'K' => Self::CODE_K,
                'Y' => Self::CODE_Y,
                'M' => Self::CODE_M,
                'S' => Self::CODE_S,
                'W' => Self::CODE_W,
                'B' => Self::CODE_B,
                'D' => Self::CODE_D,
                'H' => Self::CODE_H,
                'V' => Self::CODE_V,
                'N' => Self::CODE_N,
                invalid => panic!("Invalid IUPAC nucleotide encountered: {}", invalid),
            };

            // Calculate how many bits to shift based on the position.
            let shift_amount = (position as u16) * Self::BITS_PER_NUCLEOTIDE;
            packed_word |= nucleotide_code << shift_amount;
        }

        NucleotideWord(packed_word)
    }

    /// Decode this 16-bit word back into an IUPAC nucleotide string,
    /// dropping any padding (`'_'`) at the end.
    pub fn to_string(&self) -> String {
        let mut decoded_sequence = String::new();

        for slot_index in 0..4 {
            let shift_amount = (slot_index as u16) * Self::BITS_PER_NUCLEOTIDE;
            let raw_code = (self.0 >> shift_amount) & Self::NUCLEOTIDE_MASK;

            let nucleotide_char = match raw_code {
                Self::CODE_PADDING => '_',
                Self::CODE_A => 'A',
                Self::CODE_C => 'C',
                Self::CODE_T => 'T',
                Self::CODE_G => 'G',
                Self::CODE_R => 'R',
                Self::CODE_K => 'K',
                Self::CODE_Y => 'Y',
                Self::CODE_M => 'M',
                Self::CODE_S => 'S',
                Self::CODE_W => 'W',
                Self::CODE_B => 'B',
                Self::CODE_D => 'D',
                Self::CODE_H => 'H',
                Self::CODE_V => 'V',
                Self::CODE_N => 'N',
                _ => unreachable!("Every 4-bit value should map to a nucleotide"),
            };

            if nucleotide_char != '_' {
                decoded_sequence.push(nucleotide_char);
            }
        }

        decoded_sequence
    }

    /// Complement (bitwise‐rotate) the nucleotide at the given index (0…3).
    pub fn complement_base(&mut self, index: usize) {
        // Compute bit offset for this nucleotide.
        let shift_amount = (index as u16) * Self::BITS_PER_NUCLEOTIDE;
        // Mask covering exactly those 4 bits.
        let segment_mask = Self::NUCLEOTIDE_MASK << shift_amount;
        // Extract the original 4-bit code.
        let original_code = (self.0 & segment_mask) >> shift_amount;
        // Rotate left by 2 bits within the 4-bit field: A↔T, C↔G, etc.
        let rotated_code = ((original_code << 2) | (original_code >> 2)) & Self::NUCLEOTIDE_MASK;
        // Clear old bits and insert the rotated bits.
        self.0 = (self.0 & !segment_mask) | (rotated_code << shift_amount);
    }

    /// Complement every nucleotide in this word.
    pub fn complement_all(&mut self) {
        // There are up to 4 packed bases.
        for slot in 0..4 {
            self.complement_base(slot);
        }
    }

    /// Complement using a lookup table (match) at the given position.
    pub fn complement_base_match(&mut self, index: usize) {
        // Compute bit offset for this nucleotide.
        let shift_amount = (index as u16) * Self::BITS_PER_NUCLEOTIDE;
        let segment_mask = Self::NUCLEOTIDE_MASK << shift_amount;
        // Extract the original 4-bit code.
        let original_code = (self.0 & segment_mask) >> shift_amount;

        // Match-based mapping to find the complement code.
        let complement_code = match original_code {
            Self::CODE_A => Self::CODE_T,
            Self::CODE_T => Self::CODE_A,
            Self::CODE_C => Self::CODE_G,
            Self::CODE_G => Self::CODE_C,
            Self::CODE_R => Self::CODE_Y,
            Self::CODE_Y => Self::CODE_R,
            Self::CODE_M => Self::CODE_K,
            Self::CODE_K => Self::CODE_M,
            Self::CODE_S => Self::CODE_S,
            Self::CODE_W => Self::CODE_W,
            Self::CODE_B => Self::CODE_V,
            Self::CODE_V => Self::CODE_B,
            Self::CODE_D => Self::CODE_H,
            Self::CODE_H => Self::CODE_D,
            Self::CODE_N => Self::CODE_N,
            Self::CODE_PADDING => Self::CODE_PADDING,
            _ => unreachable!("Invalid nucleotide code: {}", original_code),
        };

        // Clear the old bits and insert the complement.
        self.0 = (self.0 & !segment_mask) | (complement_code << shift_amount);
    }
}
