const text =
  "This is the opening square bracket [ and this is the closing square bracket ] Both [ and ] are everyday part of regex";

const regex = /\[|\]/g;

console.log(regex.test(text)); //true

let match;
while ((match = regex.exec(text)) !== null) {
  console.log("A match:", match[0], "at Index:", match.index);
}
