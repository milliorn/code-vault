(function () { function r(e, n, t) { function o(i, f) { if (!n[ i ]) { if (!e[ i ]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[ i ] = { exports: {} }; e[ i ][ 0 ].call(p.exports, function (r) { var n = e[ i ][ 1 ][ r ]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[ i ].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[ i ]); return o } return r })()({
  1: [ function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var animals = exports.animals = {
      dolphin: {
        image: '/images/dolphin.jpg',
        facts: [ 'Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!' ]
      },
      lobster: {
        image: '/images/lobster.jpg',
        facts: [ 'Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.' ]
      },
      starfish: {
        image: '/images/starfish.jpg',
        facts: [ 'Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!' ]
      }
    };

  }, {} ], 2: [ function (require, module, exports) {
    "use strict";

    var _animals = require("./animals");

    var _react = require("react");

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = require("react-dom");

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /*
    Add a title constant that will hold the value of the title.
    For now, set its value to an empty string.
    */
    var title = "";

    /*
    Create a showBackground constant. You can set its value to either true or false.
    If showBackground is true, background should show up.
    If it’s false, it should not. Use the && operator in animalFacts to implement this feature.
    /*/
    var showBackground = true;

    /*
    Create a constant named background.
    Set its value to a <img /> element.
    */
    var background = _react2.default.createElement("img", { src: "/images/ocean.jpg", alt: "ocean", className: "background" });

    /*
    Use a for..in loop to iterate over the animals object that we’re importing line 1.
    For each animal, add a new <img /> to the images array.
    */
    var images = [];

    for (var animal in _animals.animals) {
      images.push(_react2.default.createElement("img", {
        key: animal,
        className: "animal",
        alt: animal,
        src: _animals.animals[ animal ].image,
        ariaLabel: animal,
        role: "button",
        onClick: displayFact
      }));
    }

    /*
    Create an animalFacts constant to hold the JSX expression that we’ll want to be compiled.
    Set its value to a <h1> element that contains our title.
    Now that we have our array of images, let’s inject it into the JSX expression.
    
    Underneath {background}, create a <div>.
    Give it a className attribute and set it equal to 'animals'.
    Nest the array of images inside of this element.
    
    Create a <p> element in animalFacts and give it an id attribute equal to 'fact'.
    */
    var animalFacts = _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        title === "" ? "Click an animal for a fun fact." : title
      ),
      showBackground && background,
      _react2.default.createElement(
        "div",
        { className: "animals" },
        images
      ),
      _react2.default.createElement("p", { id: "fact" })
    );

    /*
    Create a function displayFact() that takes one argument e, the event target.
    It should pick a random fun fact based on the selected animal.
    Remember the alt tags of each image match the property names in the animals object.
    */
    function displayFact(e) {
      var facts = _animals.animals[ e.target.alt ].facts;
      var rand = Math.floor(Math.random() * facts.length);
      var fact = _animals.animals[ e.target.alt ].facts[ rand ];

      document.getElementById("fact").innerHTML = fact;
    }

    /*
    It’s time to write our ReactDOM.render() method.
    Let’s pass in animalFacts as the JSX expression that we want to be compiled and rendered.
    */
    _reactDom2.default.render(animalFacts, document.getElementById("root"));

  }, { "./animals": 1, "react": undefined, "react-dom": undefined } ]
}, {}, [ 2 ]);
