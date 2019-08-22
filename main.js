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
        return this;
    }

    Out(){
        this.main.shift();
        this.size--;
        return this;
    }

    Quantity(){
        return this.size;
    }

    toString(){
        return JSON.stringify(this.main);
    }
}

class Stack extends Queue{
    Out(){
        this.main.pop();
        this.size--;
        return this;
    }
}

let first = new Complex(1,1);
let second = new Complex(2,3);
/*alert('first + second = ' + first.Sum(second));
alert('first - second = ' + first.Sub(second));
alert('first * second = ' + first.MultComplex(second));
alert('(1,1) * 5 = ' + first.MultNumber(5));
alert('conjugate ' + first.Conjugate());*/


/*let Que = new Queue();
Que.Add({"bad" : 12, "good" : 13}).Add(14).Add([16,17,18,19]).Add("20").Add({});
alert('quantity of elements in queue = ' + Que.Quantity());
alert('queue elements - ' + Que);
Que.Out();
alert('quantity of elements in queue = ' + Que.Quantity());
alert('queue elements - ' + Que);

let Stack1 = new Stack();
Stack1.Add({"bad" : 12, "good" : 13}).Add(14).Add([16,17,18,19]).Add("20").Add({});
alert('quantity of elements in stack = ' + Stack1.Quantity());
alert('stack elements - ' + Stack1);
Stack1.Out();
alert('quantity of elements in stack = ' + Stack1.Quantity());
alert('stack elements - ' + Stack1);*/