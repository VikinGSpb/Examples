class Complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    Sum(CNumber){
        let result = new Complex(0,0);
        result.real = this.real + CNumber.real;
        result.imaginary = this.imaginary + CNumber.imaginary;
        return result;
    }

    Sub(CNumber){
        let result = new Complex(0,0);
        result.real = this.real - CNumber.real;
        result.imaginary = this.imaginary - CNumber.imaginary;
        return result;
    }

    MultComplex(CNumber){
        let result = new Complex(0,0);
        result.real = this.real * CNumber.real - this.imaginary * CNumber.imaginary;
        result.imaginary = this.real * CNumber.imaginary + CNumber.real * this.imaginary;
        return result;
    }

    MultNumber(RNumber){
        let result = new Complex(0,0);
        result.real = this.real * RNumber;
        result.imaginary = this.imaginary * RNumber;
        return result;
    }

    Conjugate(){
        let result = new Complex(0,0);
        result.real = this.real;
        result.imaginary = -this.imaginary;
        return result;
    }

    toString(){
        return `${this.real}, ${this.imaginary}`;
    }
}

class Queue{
    constructor(){
        this.size = 0;
        this.main = [];
    }

    IsEmpty(){
        if(this.size == 0) return true;
        else return false;
    }

    Add(Elem){
        this.main.push(Elem);
        this.size++;
    }

    Out(){
        this.main.shift();
        this.size--;
    }

    Quantity(){
        return this.size;
    }
}

let first = new Complex(1,1);
let second = new Complex(2,3);
alert('first + second = ' + first.Sum(second));
alert('first - second = ' + first.Sub(second));
alert('first * second = ' + first.MultComplex(second));
alert('(1,1) * 5 = ' + first.MultNumber(5));
alert('conjugate ' + first.Conjugate());


let Que = new Queue();