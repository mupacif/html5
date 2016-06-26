var level = 1;
/**
 * Return a random
 */
function random(max){
    return Math.floor((Math.random() * max) + 1);
}
/**
 * Example of class
 */
class person{
    
    constructor(name,age)
    {
        this.name=name;
        this.age = age;
    }
    getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
}
/**
 *generate one opération
 */
function generateOperation()
{
    return ['+','-','*','/'][random(3)];
}
/**
 * generate one question
 */
 
function generateQuestion()
{
    var a = random(level*10);
    var b = random(level*10);
    var op = a+generateOperation()+b;
    var solution = Math.ceil(eval(op));
    console.log(op+"="+solution)
}
