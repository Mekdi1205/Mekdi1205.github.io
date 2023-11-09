

export const calculator = {
    operand1:0,
    operand2:0,
    setValues:function(x:number,y:number):void{
        this.operand1=x;
        this.operand2=y;
    },
    sum:function():number{
        return this.operand1 +this.operand2
    },
    multiply:function():number{
        return this.operand1*this.operand2
    }
    

};  // implement this

// chaining
// const calc={
//     value1:0,
//     value2:0,
//     setValue(a:number,b:number):this{
//         this.value1=a;
//         this.value2=b;
//         return this;
//     }
// }