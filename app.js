//                                              Chapter # 38-42 
//                                                    Q # 1


// var res;
// function power(a,b) {
//      res = a**b
//     return res
// }

// power(5,4)
// document.write(res)




//                                                    Q # 2


// var yearentered = +prompt("Enter The Year")
// var res;
// function leapyear(yearentered){
//     return res = ((yearentered%4 === 0) && (yearentered%100 != 0) || (yearentered%400 === 0))
// }

// leapyear(yearentered);
// document.write(res)


//                                                    Q # 3


// var a = +prompt("Enter the length of first side of triangle")
// var b = +prompt("Enter the length of second side of triangle")
// var c = +prompt("Enter the length of third side of triangle")
// var area;
// var S = ((a + b + c) /2);
// function TriangleArea(a,b,c) {
//     return area = (S *(S-a)*(S-b)*(S-c))
// }
// TriangleArea(a,b,c)
// document.write("Area of Triangle is: " + area + "<br>")



//                                                    Q # 4


// var sub1 = +prompt("Enter First subject marks: ")
// var sub2 = +prompt("Enter Second subject marks: ")
// var sub3 = +prompt("Enter Third subject marks: ")
// var total = sub1 + sub2 + sub3;
// var avg;
// var Totalper;



// function main() {
//     average(sub1, sub2, sub3)
//     document.write("Average: " + avg + "<br>")

//     percentage(total)
//     document.write("Percentage of All Subjects: " + Totalper + "%" + "<br>")

// }

// function average(sub1, sub2, sub3) {
//     return avg = ((sub1 + sub2 + sub3) / 3)
// }


// function percentage(total) {
//     return Totalper = ((total/300) * 100);
// }

// main();



//                                                    Q # 5




//                                                    Q # 6


// var sentence = prompt("Enter Sentence")
// function deletevowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');  
// }
// var res = deletevowels(sentence)
// document.write("Senetence : " + sentence + "<br>")
// document.write("Removal of Vowels: " + res)


//                                                    Q # 7


// function findvowelsoccurence() {
//     var str = "Pleases read this application and give me gratuity";
//     str.toLowerCase()
//     var count = 0

//     switch (str) {
//         case 'a':
//             document.write("occurence of a is: " + indexOf(a))
//             break;
    
//         default:
//             document.write("No vowel Found")
//             break;
//     }
//     return count
// }
// console.log(findvowelsoccurence())


//                                                    Q # 8


// var distance = +prompt("Enter Distance between two cities in Kilometers: ")
// function meter(distance) {
//    return  distance * 1000;
// }
// var res = meter(distance)
// document.write("Distance In meters: " + res + "<br>")


// function feet(distance) {
//  return distance * 3280.84
// }
// var res1 = feet(distance)
// document.write("Distance in feet: " + res1.toFixed(2) + "<br>")


// function centimeter(distance) {
//     return distance * 100000
//    }
//    var res2 = centimeter(distance)
//    document.write("Distance in Centimeter: " + res2 + "<br>")


//                                                    Q # 9


// var hour = +prompt("Enter overworked Hour: ")
// function overtime(hour) {
//     return (30 * hour * 12.00)
// }
// var res = overtime(hour)
// document.write("Overtime Salary : " + res)


//                                                    Q # 10

// var notes = 10
// var notes1 = 50
// var notes2 = 100
// var withdraw = +prompt("Enter Amount to be Withdrawn! ")
// function currency(withdraw) {
//    document.write("You will have " + Math.floor((withdraw/100)) + " hundred notes " + Math.floor((withdraw % 100) / 50) + " fifty notes " + Math.floor((((withdraw % 100) % 50) / 10)) + " ten notes")
// }
// currency(withdraw);
   

//  --------------------------------------------------END-------------------------------------------------



//                                              Chapter # 43-48 
//                                                    Q # 1



// function hassan () {
//     alert('Hello')
// }


//                                                    Q # 2


// function imageclick() {
//     alert("Image is Clicked")
// }



//                                                    Q # 3


// function deletefunc() {
//     document.getElementById("myTable").deleteRow(1);
// }


//                                                    Q # 4

// Its code is in Html File 



//                                                    Q # 5


// var count = 0;
// function increse() {
//     var a = document.getElementById('count')
//     a.innerHTML = ++count
// }

// function decrease() {
//     var a = document.getElementById('count')
//     a.innerHTML = --count
//     if (count < 0) {
//         a.innerHTML = 0
//     }
// }



//  --------------------------------------------------END-------------------------------------------------


//                                              Chapter # 49-52
//                                               Question # 1

// var a,b,c;
// function displaydata() {
//     displayemail()
//     displaypass()
//     displayreapeatpass()
// }

// function displayemail() {
//      a = document.getElementById('emailid')
//     document.write("Email :" + a.value + "<br>")
// }

// function displaypass() {
//      b = document.getElementById('password')
//     b.type = "text"
//     document.write("Password :" + b.value + "<br>")
// }

// function displayreapeatpass() {
//      c = document.getElementById('password-repeat')
//     c.type = "text"
//     document.write("Repeat Password :" + c.value + "<br>")
// }



//                                               Question # 2


// function readmore() {
//     var para = document.createElement("p")
//     var node = document.createTextNode("Samsung Galaxy A21s price in Pakistan starts at Rs. 33,500. This is for the base variant that comes with 4GB of RAM and 64GB of internal storage Retail Price of Samsung Galaxy A21s in Pakistan is Rs. 33,500.Retail Price of Samsung in USD is $250.")
//     para.appendChild(node)

//     var element = document.getElementById("card-text");
//     element.appendChild(para);

// }


//  --------------------------------------------------END-------------------------------------------------



//                                              Chapter # 58-67
//                                               Question # 1
//                                                  part 1


// var main = document.getElementsByTagName('div')
// console.log(main[2])



//                                                  part 2


// var div = document.getElementById('main-content')
// var element = div.getElementsByTagName('p')
// console.log(element)


//                                                  part 3


// var a = document.getElementsByTagName('p')
// for (let index = 0; index < a.length; index++) {
//     document.write(a[index].innerHTML + "<br>")
// }


//                                                  part 4


// var a = document.getElementById('first-name')
// a.value = "Hasan"


//                                                  part 5

// var a = document.getElementById('first-name')
// a.value = "Hasan"
// var a = document.getElementById('last-name')
// a.value = "Gilani"
// var b = document.getElementById('email')
// b.value = "alihasan21987@gmail.com"



//                                               Question # 2
//                                                  part 1



// var a = document.getElementById('form-content')
// console.log(a.nodeType)



//                                                  part 2


// var b = document.getElementById('lastName')
// console.log(b.nodeType)
// console.log(b.childNodes[0])


//                                                  part 3


// var b = document.getElementById('lastName')
// b.childNodes[0].nodeValue = "Ali Hassan"



//                                                  part 4


// var b = document.getElementById('main-content')
// console.log(b.firstChild)
// console.log(b.lastChild)


//                                                  part 5


// var b = document.getElementById('lastName')
// console.log(b.nextSibling)
// console.log(b.previousSibling)


//                                                  part 6


// var b = document.getElementById('email')
// console.log(b.parentNode)
// console.log(b.parentNode.nodeType)



//  --------------------------------------------------END-------------------------------------------------