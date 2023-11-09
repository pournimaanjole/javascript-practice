const convertor = (num)=>{
    const celcium = ((num*9/5)+32);
    return celcium;
}
const findalresult = convertor(20);
console.log(`celsius to fahrenite ${findalresult} `);