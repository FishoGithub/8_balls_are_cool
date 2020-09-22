let eye = document.getElementById('eye');

let position = 50;
let direction = -5;


function eyeMovement() {
  position = position + direction;

  if(position > 65) {
    direction = -5;
  }

  if(position < 35) {
    direction = 5;
  }

  eye.style.left = position + '%';
}

//work on the below later::

/*let responses = [
  '0-try again', '1-it will happen!', '2-thats not happening', '3-false!!!!'
]

let result = document.getElementById('message')

result.onclick = response(responses)

function response(i) {
  choice = Math.round(Math.random() * responses.length);
  alert(i[choice])
}*/

eye.onclick = eyeMovement;