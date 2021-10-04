class CoffeeMake{
    constructor(coffeeName){
        this.coffeeName = coffeeName;
        console.log('CoffeeMake');
    }
    on(){
        console.log('Coffee on');
    }
    of(){
        console.log('Coffee off');
    }
}

class DripMachine extends CoffeeMake{
    constructor(name){
        super(name);
    }
    doDrip(){
        console.log('Drip coffee done');
    }
}

class CarobMachine extends CoffeeMake{
    constructor(name){
        super(name);
    }
    doCarob(){
        console.log('Carob coffee done');
    }
}

class CoffeMachine extends CoffeeMake{
    constructor(name){
        super(name);
    }
    doCoffee(){
        console.log('Coffee done');
    }
}

let drip = new DripMachine('espresso');
let carob = new CarobMachine('american');
let coffee = new CoffeMachine('late');

console.log(drip);
console.log(carob);
console.log(coffee);

drip.doDrip()
carob.doCarob()
coffee.doCoffee()