// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.getElementsByClassName("like-glyph");

const modal = document.getElementById('modal');
//modal.classList.add('.hidden')


for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function(){
    mimicServerCall()
    .then(response => response)
    .catch(() => {
      modal.hidden = false, setTimeout(() => modal.hidden = true, 3000)
      throw new Error('error');
    })
    .then(function() {
      if(like[i].innerHTML === EMPTY_HEART){
        like[i].innerHTML = FULL_HEART
        like[i].classList.add('activated-heart')
        } else{
           like[i].innerHTML = EMPTY_HEART
           like[i].classList.remove('activated-heart')
          }
          
        });
      })
    }
    
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
