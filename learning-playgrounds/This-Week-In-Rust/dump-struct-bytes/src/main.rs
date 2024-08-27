struct Cat {
    name: &'static str, // static lifetime
    age: u8,            // u8 is Copy
}

enum Animal {
    Cat { name: &'static str, age: u8 },
    Dog { name: &'static str, good_boy: bool },
}

enum DetailedAnimal {
    Cat {
        name: &'static str,
        age: u8,
        legs: u8,
        eyes: u8,
    },

    Dog {
        name: &'static str,
        age: u8,
        legs: u8,
        eyes: u8,
        good_boy: bool,
    },
}

struct Ghost;

fn main() {
    println!("Hello, world!");

    println!(
        "Cat: {:?}",
        get_memory(&Cat {
            name: "Tom",
            age: 5
        })
    );

    println!("Ghost: {:?}", get_memory(&Ghost));

    println!(
        "Dog: {:?}",
        get_memory(&Animal::Dog {
            name: "Cleo",
            good_boy: true
        })
    );

    println!(
        "DetailedAnimal::Cat:  {:?}",
        get_memory(&DetailedAnimal::Cat {
            name: "Sir Whiskers",
            legs: 4,
            eyes: 1,
            age: 11,
        })
    );

    println!(
        "DetailedAnimal::Dog:  {:?}",
        get_memory(&DetailedAnimal::Dog {
            name: "Cleo",
            good_boy: true,
            age: 10,
            legs: 3,
            eyes: 2,
        })
    );
}

fn get_memory<'a, T>(input: &'a T) -> &'a [u8] {
    unsafe { std::slice::from_raw_parts(input as *const _ as *const u8, std::mem::size_of::<T>()) }
}
