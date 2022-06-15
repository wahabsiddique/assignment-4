var cityname = prompt(" Enter city name")
var welcome = ("WELCOME TO CITY OF LIGHT")
var ifcity = ("welcome")

if (cityname === "karachi"){ alert ( welcome) }
else (alert ( ifcity ) )


// question = 02 
var gender = prompt ("gender")

if (gender === "male"){ alert ("welcome sir !")}
else if ( gender === "female"){ alert  ("welcome maam !")}
else(alert = ("welcome"))

// question = 03

var colours = prompt ("Enter traffic colour (ie . red , yellow , green)")

if (colours === "red"){ alert ("MUST STOP")}
else if (colours === "green"){alert ("MOVE NOW")}
else if (colours === "yellow"){ alert ("READY TO MOVE NOW")}

// question no = 04

var fuel = +prompt ("Enter the remaining fuel of your car in litres")

if (fuel < "0.25"){ alert ("Please ! refill the fuel in your car")}
else (alert("your fuel is enough"))

// question no = 05 

var a = (4)
if (++a === 5){ alert("given condition of variable a in question on 5 is TRUE")}

var b = (82)
if(b++ === 83){ alert("given condition of variable b in question on 5 is TRUE")}

var c = (12)
if(c++ === 13){alert ("Condition 1  of variable c in question no 5 is true")}
if(c === 13){alert ("Condition 2 of variable c in question no 5 is true")}
if(++c === 14){alert ("Condition 3 of variable c in question no 5  is true")}
if(c === 14){alert ("Condition 4 of variable c in question no 5 is true")}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }


// question no = 06

var sub1 = +prompt ("Enter marks of subject 1")
var sub2 = +prompt ("Enter marks of subject 2")
var sub3 = +prompt ("Enter marks of subject 3")
var total = +prompt ("Enter total marks")
var tobt = ( sub1 + sub2 + sub3)
var percent = (tobt / total * 100)

document.write("Total marks = " + total  + "<br />")
document.write("Obtained marks = " + tobt  + "<br />")

if (percent >= 80){ document.write("percentage = " + percent + "% <br />")}
else if (percent >= 70){document.write("percentage = " + percent + "% <br />")}
else if (percent >= 60){document.write("percentage = " + percent + "% <br />")}
else if (percent < 60){document.write("percentage = " + percent + "% <br />")}

if (percent >= 80){document.write ("Grade = A-one <br />")}
else if (percent >= 70){document.write ("Grade = A <br />")}
else if (percent >= 60){document.write ("Grade = B <br />")}
else if (percent < 60){document.write ("Grade = Fail <br />")}

if (percent >= 80){document.write ("Remarks = Excellent <br />")}
else if (percent >= 70){document.write ("Remarks = Good <br />")}
else if (percent >= 60){document.write ("Remarks = You need to be improve <br />")}
else if (percent < 60){document.write ("Remarks = Sorry <br />")}

// question no = 07

var secrnum = 7
var num = +prompt (" Enter a number")

if (num === secrnum){ alert ("BINGO ! Correct Answer")}
else if (num === 6){ alert("Close enough to the answer")}
else if (num === 8){ alert ("Close enough to the asnwer")}
else (alert ("wrong answer"))

// question no = 08

var divive3 = +prompt("enter a number")
if (divive3%3==0){alert("The number can divisible by 3")}
else (alert ("the number cannot divsible by 3"))

// question no = 09

var even = +prompt("Enter any number")
if(even%2==0){alert("the numer is even")}
else  (alert ("the number is odd"))

// question no = 10

var temperature = +prompt("Enter the temperature")
if (temperature > 40){alert("Its too hot outside")}
else if (temperature > 30){alert("The weather today is normal")}
else if (temperature > 20){alert ("Today's weather is cool")}
else if (temperature > 10){alert("OMG ! today's weather is soo cool")}

// question no = 11

var num1 = +prompt("Enter number 1")
var opt = prompt ("Enter operator (ie . + , - , * , /)")
var num2 = +prompt ("Enter number 2")

if (opt === "+"){alert("Answer is = " + (num1+num2))}
else if (opt === "-"){alert("Answer is = " + (num1+num2))}
else if (opt === "*"){alert("Answer is = " + (num1+num2))}
else if (opt === "/"){alert("Answer is = " + (num1+num2))}

// chp 12 13

// question no = 2
var integers = +prompt("enter integer 1")
var integers2 =+prompt("enter integer 2")

if (integers > integers2){ alert("the larger integer is = " +integers )}
else if (integers2 > integers){ alert("the larger integer is = " +integers2 )}
else if (integers === integers2){ alert("both integers are equal")}

// question no = 3
var numm =+prompt("enter a number")
 if (numm === 0){ alert("the number is zero")}
else if (numm === -numm){alert("the number is negative")}
else if (numm === +numm){alert("the number is positive")}

// question no = 4
var vowel = prompt ("enter any alphabet")
if (vowel === "a"){alert("the alphabet you've entered is a VOWEL")}
else if(vowel === "e"){alert("the alphabet you've entered is a VOWEL")}
else if (vowel === "i"){alert("the alphabet you've entered is a VOWEL")}
else if (vowel === "o"){alert("the alphabet you've entered is a VOWEL")}
else if (vowel === "u"){alert("the alphabet you've entered is a VOWEL")}
else (alert("the alphabet you've entered is not a VOWEL"))

// question no = 5
var pass = prompt("Enter your new password")
var passwaord = pass
var enterpass = prompt("Enter your password")
if (enterpass === passwaord) {alert("Correct! The password you entered matches the original password")}
else if (enterpass == ""){alert("Please! enter your password")}
else {alert("Incorrect password")}

// question no = 6
var greating = ("GOOD DAY")
var greating2 = ("GOOD EVENING")
var hour = 13
var askhour = +prompt("Enter time in hours")
if (hour<18){alert(greating)}
else(alert(greating2))

// question no = 7
var time24 = +prompt("Enter time in 24 hours formate ie (0000 to 2359 eg 1900 = 7pm)")
if(time24 >= 0000 && time24 < 1200){alert("GOOD MORNING")}
else if (time24 >= 1200 && time24 < 1700){alert("GOOD AFTERNOON")}
else if (time24 >= 1700 && time24 < 2100){alert("GOOD EVENING")}
else if (time24 >= 2100 && time24 < 2359){alert("GOOD NIGHT")} 
                      
// question no = 1
var array = ["(" , "" , ""]

// question no = 2 
var array = ["" , "" , ""]

// question no = 3
var stringarray = ["hi" , "by" , "sea" , "moon"]
console.log (stringarray)

// question no = 4
var numarray = [2 , 3 , 4 , 5]
console.log (numarray)

// question no = 5
var boolean = [true , false]
console.log (boolean)

// question no = 6
var mixarray = [ "zubair " , 23 , true]
console.log (mixarray)

// question no = 7
var qualification = [" ,1) SSC <br />","2) HCS <br />","3) BCS <br />","4) BS <br />","5) B.COM <br />","6) MS <br />","7) M.Phill <br />","8) PhD <br />"]
document.write("<h3>QUALIFICATION</h3> <br />" + qualification)

// question no = 8
var stuname = ["ali" , "amir" , "asif"]
var score = [320 , 230 , 480 ]
var percenscore = [ 320/500*100 , 230/500*100 ,480/500*100]
var tscore = (500)
document.write("<br /> Score of " + stuname[0] + " is " + score[0] + " = " + percenscore[0] + "%")
document.write("<br /> Score of " + stuname[1] + " is " + score[1] + " = " + percenscore[1] + "%") 
document.write("<br /> Score of " + stuname[2] + " is " + score[2] + " = " + percenscore[2] + "% <br />")

// question no = 9
var colour = ["<br /> ,red <br />" + "blue <br />" + "green <br />" + "yellow <br />" + "black <br />" + "white <br/>"]
document.write("<br /> <h3>COLOURS</h3> <br />" + colour)
var askcolour = prompt ("Enter the name of the colour you want to add in the begining")
//  var startcolour = askcolour
colour.unshift  (askcolour)
document.write(" <br /> <h3> adding colour in first </h3> <br />" + colour)

var askcolour2 = prompt ("Enter the colour you want to add in last")
colour.push (askcolour2)
document.write(" <br /> <h3> adding colour in last </h3> <br />" + colour)

var colourarr = ["pink <br />" + "brown <br />"]
colour.splice(0 , 0 ,colourarr)
document.write(" <br /> <h3> adding 2 colour in first by ussing array </h3> <br />" + colour)

colourarr.splice(0 , 1)
document.write(" <br /> <h3> deleting a colour in first  </h3> <br />" + colour)

colourarr.splice(1 , 1)
document.write(" <br /> <h3> deleting a colour in last  </h3> <br />" + colour)

var askindex = +prompt("at which index no you want to add a colour")
var indexcolour = prompt ("enter the colour you wanted to add at the given index")
colour.splice(askindex , 0 ,"<br />" + indexcolour)
document.write(" <br /> <h3> adding a colour in given index number by the user  </h3> <br />" + colour)

var askdelindex = +prompt("at which index number you want to delete a colour ")
var delcolour = prompt("how many colours you want to delete ")
colour.splice(askdelindex , delcolour)
document.write(" <br /> <h3> deleted the colour that you want  </h3> <br />" + colour)

// question no = 10
var studscore = [367 , 754, 45 , 345 , 765]
document.write("<br /> scores of students = " + studscore)
var ascend = [45 , 345 , 367 , 754 , 765]
document.write(" <br /> ordered score of student = " + ascend)

// question no = 11
var cities = ["karachi " , " lahore" , " islamabad" , " peshawar" , " quetta"]
document.write(" <br /> cities are = " + cities)
var selectedcity = [cities[0] + cities[2] + cities[3]]
document.write("<br /> selected cities are = " + selectedcity)

var sentencearr = ["<br /> This" , "is" , "my" , "cat"]
document.write(sentencearr.join(" "))
