class Worker{
    constructor(firstName, secondName, rate, days){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        return this.rate * this.days
    }
}


class Worker2 extends Worker{
    sum(){
        return worker.getSalary() + worker2.getSalary()
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const worker2 = new Worker2('Petro', 'Petriv', 20, 10);
console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log(worker2.getSalary());
console.log(worker2.sum());

