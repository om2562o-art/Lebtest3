abstract class ShippingCaculator{
    constructor(public standdard: number){}
    abstract caculateWeight(): number;
    print(): void{
        console.log(`${this.standdard}`);
    }

}
class StandardShipping extends ShippingCaculator{
    caculateWeight(): number {
        return this.standdard;
    }
class ExpressShipping extends ShippingCaculator{
    
}
}