export default class Fisaghores {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c:number) {
        this.a = a;
        this.b = b;
        this.c = c;
        console.log(a, b, c);
        
    }

    getA() {
        let aB2 = Math.pow(2,2);
        let bB2 = Math.pow(9, 2);
        let sq = aB2 - bB2
        console.log(sq);
        
        console.log(Math.sqrt(sq));
        
        return Math.sqrt(Math.pow(this.c, 2) - Math.pow(this.b, 2))
    }
    
    getB() {
        return Math.sqrt(Math.pow(this.c, 2) - Math.pow(this.a, 2))
    }

    getC() {
        return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2))
    }
}