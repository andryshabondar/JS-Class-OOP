class MyString{
    constructor(string){
        this.string = string;
    }
    reverse(newString){
            return newString.split('').reverse().join('');
    }
    ucFirst(firstUpper){
        return firstUpper[0].toUpperCase() + firstUpper.slice(1);
    }
    ucWords(allFirstUpper){
        return allFirstUpper.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}

const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));