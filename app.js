function myfunc(){
    let kam = document.getElementById("inputname").value
    let kam1 = +document.getElementById("inputage").value
    let kam2 = document.getElementById("inputgender").value
    let kam3 = document.getElementById("inputcountry").value
 
    if(kam == ""){

 alert("input field cannot be empty")

 }

else {

var outputHere = document.createElement('div')
outputHere.setAttribute("class","myId")
document.body.appendChild(outputHere)
    // IMAGE
var ourimage = document.createElement('img')
ourimage.src = "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
outputHere.appendChild(ourimage)
    // NAME
var myHeading = document.createElement('h3')
myHeading.textContent = kam
outputHere.appendChild(myHeading)
    // AGE
var myHeading2 = document.createElement('h3')
myHeading2.textContent = kam1
outputHere.appendChild(myHeading2)

  // GENDER

var myHeading3 = document.createElement('h3')
myHeading3.textContent = kam2
outputHere.appendChild(myHeading3)

 // COUNTRY

 var myHeading4 = document.createElement('h3')
 myHeading4.textContent = kam3
 outputHere.appendChild(myHeading4)


}




document.getElementById("inputname").value = ""
document.getElementById("inputage").value = ""
document.getElementById("inputgender").value = ""
document.getElementById("inputcountry").value = ""
}
















//     var outputHere = document.getElementById("output")
// //  var mainContainer =  document.createElement('p')
//     var disply = document.createElement('h3')
//     outputHere.appendChild(disply)
//     disply.textContent = kam

