// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

/*
Create a function, validateCred() that has a parameter of an array. 
The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. 
This function should NOT mutate the values of the original array.
*/
const validateCred = (str) => {
  const regexp =
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  return regexp.test(str);
};

/*
Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. 
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, 
and return another nested array of invalid cards.
*/
const findInvalidCards = arr => {
  var temp = [];
  arr.forEach((x) => {
    const y = x.join("");

    if (!validateCred(y)) {
      temp.push(x);
    }

  });

  return temp;
};

const invalidCardList = findInvalidCards(batch);

/*
After finding all the invalid credit card numbers, 
it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. 
Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and 
returns an array of companies.
*/
const idInvalidCardCompanies = arr => {

  let temp = [];

  arr.forEach(e => {
    switch (e[0]) {
      case 3:
        temp.push("Amex");
        break;
      case 4:
        temp.push("Visa");
        break;
      case 5:
        temp.push("Mastercard");
        break;
      case 6:
        temp.push("Discover");
        break;
    }
  });

  return [...new Set(temp)];
};

const invalidCompanies = idInvalidCardCompanies(invalidCardList);

invalidCompanies.forEach(element => {
  console.log(element);
});