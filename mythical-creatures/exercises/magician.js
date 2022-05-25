
class Magician {
  constructor(stageName) {
    this.name = `The Great ${stageName.name}`;
    this.assistant = stageName.assistant;
    this.favoriteAccessory = stageName.clothing || "top hat";
    this.confidencePercentage = 10;

  }
 performIncantation(incantation) {
   return `${incantation}!`.toUpperCase()

 }
 performTrick() {
   this.confidencePercentage += 10;
   if (this.favoriteAccessory === "top hat" )
   return 'PULL RABBIT FROM TOP HAT'
 } else {
   return 'PULL DOVE FROM SLEEVE'
 }
 performShowStopper() {
   if (this.confidencePercentage <= 99 && this.assistant === true) {
   return 'Oh no, this trick is not ready!'
 } else {
   return 'WOW! The magician totally just sawed that person in half!';
 }


}







module.exports = Magician;
