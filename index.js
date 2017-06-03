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
document.getElementById("myDiv").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, false);


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

    document.getElementById("testdata").innerHTML = result;

	  console.log(result);

	}).catch(function(error) {

    document.getElementById("testdata").innerHTML = "ooops";

		console.log("failed");
		
	})

}




