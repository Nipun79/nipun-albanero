class firstName{
    constructor(name){
        this.name=name ;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4)
        {
            console.log("invalid");
            return;
        }
        this._name = value;
    }
    static addition(){
        console.log(8)
    }
}
let user = new firstName("Nipun")
console.log(user.name)


class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  
  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  console.log( articles[0].title );

  //inheritance 
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); 
      this.hide(); 
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); 
  rabbit.stop(); 
  //ovverriding constructor 
  /*
  class base {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    // ...
  }
  
  class child extends base {
  
    constructor(name, earLength) {
      super(name,speed);    //key part is here
      this.earLength = earLength;
    }
  
    // ...
  }
  
  
  let rabbit = new base("White Rabbit", 10);

*/
class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100; 
 // console.log(machine.#waterAmount); //It can't access