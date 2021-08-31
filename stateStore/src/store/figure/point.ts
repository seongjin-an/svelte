
export default class Point{
    x:number
    y:number
    constructor(x, y){
        this.x = x
        this.y = y
    }
    toString(){
        return `(${this.x}, ${this.y})`
    }
    translate(dx:number, dy:number){
        this.x +=dx;
        this.y += dy;
    }

}
