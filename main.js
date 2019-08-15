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
}

let first = new Complex(1,1);
let second = new Complex(2,3);
alert(first.Sum(second));
