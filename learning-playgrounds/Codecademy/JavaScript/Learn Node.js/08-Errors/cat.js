/*
    We wrote a program where a Dog can fight a Cat,
    but it doesn’t work yet because we haven’t properly connected our code.
    We created two modules: cat.js, which contains our Cat class, and dog.js, which contains our Dog class.
    But we need to assign these modules to their module.exports.
    Let’s start with cat.js.
    Inside cat.js assign the Cat class as the value of module.exports.
*/
module.exports = class Cat {
    constructor(name, clawStrength) {
        this.name = name;
        this.clawStrength = clawStrength;
    }
};