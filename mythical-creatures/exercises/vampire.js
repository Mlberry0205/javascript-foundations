


class Vampire {
  constructor(name, pet, isThirsty, ounces) {
    this.name = name;
    this.pet = pet || 'bat'
    this.thirsty = true;
    this.ouncesDrank = 0

  }
  drink(drankBlood) {
  if (this.ouncesDrank = 0) {
    this.thirsty = true
  } else if (this.ouncesDrank + 10) {
    this.ouncesDrank <= 50
    return 'I\'m too full to drink anymore!'

  }
  }
}







module.exports = Vampire;
