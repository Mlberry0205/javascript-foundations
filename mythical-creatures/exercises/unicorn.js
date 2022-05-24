
//1. read the test you sre running
//2. Ask yourself if its going to fail and why?
//3. Run the test
//4. Make the test pass



//This is our implimitation code

class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }

  }

  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
