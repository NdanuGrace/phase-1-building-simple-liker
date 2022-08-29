// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeColor= "red"

// Your JavaScript code goes here!

const articleHearts = document.querySelectorAll(".like-glyph");
function likeHeart(e){
  const heart = e.target;
  
  mimicServerCall()
  .then(function(serverMessage){
    alert("server notified");
    alert(serverMessage);
    heart.innerText= EMPTY_HEART
    heart.innerText= FULL_HEART
    heart.style.color= likeColor

  })
  .catch(function(){
    setTimeout(function(){
      const errorMessage= document.querySelector('.hidden')
      if(isNaN(document.querySelectorAll(".like-glyph").value)){
        

      }
    }, 300);
   
    
  });
 }

for(const glyph of articleHearts){
  glyph.addEventListener('click', likeHeart)
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
