class Dragon {
  constructor(name, rider, hunger) {
    this.name = name;
    this.rider = rider;
    this.hungry = true
    this.food = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.food ++
    if (this.food > 2) {
      this.hungry = false
  }

  }
}


module.exports = Dragon;
