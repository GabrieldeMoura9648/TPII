class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            this.value = 0; 
        }
        return Singleton.instance;
    }

    increment() {
        this.value += 1;
        console.log(`Value: ${this.value}`);
    }
}

const s1 = new Singleton();
const s2 = new Singleton();
const s3 = new Singleton();

console.log(s1 === s2); // true
console.log(s3 === s1); // true

s1.increment(); // Value: 1
s2.increment(); // Value: 2
s3.increment(); // Value: 3