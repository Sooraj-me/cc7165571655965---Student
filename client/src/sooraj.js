var name="Sooraj";
var age=25;
var hobbies=["coding", "reading", "gaming"];
function greet(a,b,c) {
    return "My name is " + a + ", I am " + b + " years old, and I enjoy " + c.join(", ") + ".";
    
}
console.log(greet(name, age, hobbies));