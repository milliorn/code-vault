use placing::placing;

#[placing] // this rewrites both the struct and impl
struct Cat {
    age: u8,
}

#[placing] // must go on the impl block, not individual fn
impl Cat {
    fn new(age: u8) -> Self {
        Self { age }
    }

    pub fn age(&self) -> u8 {
        self.age
    }
}

fn main() {
    let cat = Cat::new(12);
    assert_eq!(cat.age(), 12);
}
