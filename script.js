let percentage  = prompt("Enter your percentage");

if(percentage < 30)
{
    console.log("F")
    grades = "F"
}
else if(percentage >= 30 && percentage < 50)
{
    console.log("D")
    grades = "D"
}
else if(percentage >= 50 && percentage < 60)
{
    console.log("C")
    grades = "C"
}
else if (percentage >= 60 && percentage < 70)
{
    console.log("B")
    grades = "B"
}
else if (percentage >= 70 && percentage < 80)
{
    console.log("A")
    grades = "A"

}
else if (percentage >= 80 && percentage < 99)
{
    console.log("A+")
    grades = "A+"
}
else 
{
    console.log("Kindly Enter Valid Percentage" )
}
switch(grades)
{
    case "A+":
        console.log("you have done excellent job");
        break;
        case "A":
        console.log("you have done great job");
        break;
        case "B":
        console.log("you have done good job");
        break;
        case "C":
        console.log("Keep it up");
        break;
        case "D":
        console.log("Keep improvement");
        break;
        case "F":
        console.log("Failed");
        break;
    
}
