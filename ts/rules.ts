interface Rule {
    input:number;
    isAccept(): boolean;
    answer(): string;
}

class FizzBuzzRule{
    input:number;

    constructor(input: number){
        this.input = input;
    }

    isAccept(): boolean {
        return this.input % 5 === 0 && this.input % 3 === 0;
    }

    answer(): string {
        return "FizzBuzz";
    }
}

class BuzzRule {
    input:number;

    constructor(input: number){
        this.input = input;
    }

    isAccept(): boolean {
        return this.input % 5 === 0;
    }

    answer(): string {
        return "Buzz";
    }
}

class FizzRule {
    input:number;

    constructor(input: number){
        this.input = input;
    }

    isAccept(): boolean {
        return this.input % 3 === 0;
    }

    answer(): string {
        return "Fizz";
    }
}

class OtherRule {
    input:number;

    constructor(input: number){
        this.input = input;
    }

    isAccept(): boolean {
        return true;
    }

    answer(): string {
        return String(this.input);
    }
}
