# JS-Class-OOP

Завдання 1:

Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

Ось так повинен працювати наш клас:

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31
 
За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.
________________________________________
Завдання 2:

Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.
Наш клас повинен працювати так:
 
const str = new MyString();
console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

________________________________________
Завдання 3:

Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.
