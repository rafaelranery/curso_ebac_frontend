/* Classe 1.0 */
function Person(name, dob) {
    this.name = name;
    this.dob = dob;

    this.greet = function() {
        console.log(`${name} diz: 'Olá!'`);
    };
    this.bye = function() {
        console.log(`${name} diz: 'Adeus!'`);
    };
};
/* Classe 1.0 FIM */

/* Classes 1.n */
function Employed(name, dob, isEmployed, wage, cargo) { // 1.1
    Person.call(this, name, dob);

    this.isEmployed = isEmployed;
    this.cargo = cargo;
    
    let _wage = wage;
    this.getWage = function() {
        console.log(_wage);
    };
    this.setWage = function (newWage) {
        return _wage = newWage;
    };
    this.fire = function() {
        this.isEmployed = false;
        this.cargo = null;
        _wage = 0;
    };
}

function Unemployed(name, dob) { //1.2
    Person.call(this, name, dob);

    this.isEmployed = false;
    let _wage = null;
    
    this.getWage = function() {
        console.log(_wage);
    };
    this.addSpecialWage = function() {
        return _wage =+ 150;
    }
}
/* Classes 1.n FIM */

/* Instâncias 1.1.n */
function Architect(name, dob) { //1.1.1
    Employed.call(this, name, dob, true, 6000, 'Architect')
};
function SoftwareDeveloper(name, dob) { //1.1.2
    Employed.call(this, name, dob, true, 6500, 'Software Developer')
};
function Journalist(name, dob) { // 1.1.3
    Employed.call(this, name, dob, true, 3000, 'Journalist')
};
/* Instâncias 1.1.n FIM */

/* Instâncias 1.2.n */
function Retired(name, dob) { //1.2.1
    Unemployed.call(this, name, dob);

    this.isEmployed = 'Retired';

    this.addRetirement = function() {
        return setWage(600)
    };
    this.removeRetirement = function() {
        return setWage(0)
    };
};
function InformalWorker(name, dob) { //1.2.2
    Unemployed.call(this, name, dob);

    this.isEmployed = 'Informal';
    _wage = 'Not disclosed';
};
function Child(name, dob) { //1.2.3
    Unemployed.call(this, name, dob)

    this.isEmployed= null;
    _wage = 'Dependent';
}

/////////////////////////

let joaquim = new Person('Joaquim', 10032020);
console.log(joaquim);
console.log(joaquim.bye());

/////////////////////////

let carlos = new Employed('Carlos', 16072000, true, 3000, 'Police');
console.log(carlos);

let juliana = new Architect('Juliana', 14051989);
console.log(juliana);
let gabriel = new SoftwareDeveloper('Gabriel', 25081999);
console.log(gabriel);
let ana = new Journalist('Ana', 31012001);
console.log(ana);

////////////////////////

let igor = new Unemployed('Igor', 19031978);
console.log(igor);

let silvana = new Retired('Silvana', 21071939);
console.log(silvana);
let victor = new InformalWorker('Victor', 19021987);
console.log(victor);
let martha = new Child('Martha', 18092018);
console.log(martha);