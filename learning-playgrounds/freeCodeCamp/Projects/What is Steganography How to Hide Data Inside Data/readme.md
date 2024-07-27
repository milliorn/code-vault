# What is Steganography? How to Hide Data Inside Data

https://www.freecodecamp.org/news/what-is-steganography-hide-data-inside-data/

## Install Steghide

`sudo apt install steghide`

## Create a new image

`steghide embed -ef <data> -cf <image> -sf <stego_image> -v`

- steghide – We specify the tool to use
- embed – Tells the tool we want to embed data
- -ef – Embed file, specifies the file to hide
- -cf – Cover file, specifies the cover image
- -sf – Stego file, creates a duplicate of the original image with the embedded file in it
- -v – Verbose, gives us more information about the process

## Inspect the new file

`steghide info <stego_image>`

## Extract the data

`steghide extract -sf <stego_image> -xf <extracted_data> -v`
