//Built-in event
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}


var send =document.getElementById("send");
send.addEventListener("click", getMessage);
function getMessage(){
	var msg = alert("Your message was received");
}

///onclick events
document.getElementById("myP").addEventListener("click", function() {
    alert("You clicked the P element!");
}, false);

document.getElementById("myDiv").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the P element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, true);

//testing promises
test.addEventListener("click", getValue);

function addNumbers() {

	  var num = 10 + 10;
}

function generateRandomNumber () {

  return new Promise(function (resolve, reject) {

    var randomNumber = 9

    if (randomNumber <= 5) {

      resolve(randomNumber)

    } else {

      reject(randomNumber)

    }

  })

}

function getValue() {

	generateRandomNumber().then(function(result) {

	  console.log(result);

	}).catch(function(error) {

		console.log("failed");
		
	})

}




