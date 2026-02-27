var age=15;

if(age >= 18){
    document.write("You are an adult.<br>");
}

else{
    document.write("You are a minor.<br>");
}

switch(age){
    case "18":
        document.write("You just became an adult.<br>");
        break;
    case "25":
        document.write("You are in your prime years.<br>");
        break;
    case "30":
        document.write("You are in your 30s.<br>");
        break;
    default:
        document.write("Age is just a number.<br>");
}

var char="A";
switch(char){
    case "A":
        document.write("Good job<br>");
        break;
    case "B":
        document.write("Pretty Good<br>");
        break;
    case "C":
        document.write("Passed<br>");
        break;
    case "D":
        document.write("Not so good<br>");
        break;
    case "F":
        document.write("Failed")
        break;
    default:
        document.write("Unknown Grade")
}