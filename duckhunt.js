window.onload = function() {
  const body = document.body
  console.log(body)

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // const duckDiv = function () {
  //   const duckElement = document.createElement("div")
  //   duckElement.classList.add('duck')
  //   body.appendChild(duckElement)
  //   return duckElement
  // }

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
//   const flapDuck = function(duckElement){
//     setInterval(function(){
//       duckElement.classList.toggle("flap")
//   }, 250) 
//   return duckElement
//  }
  

 // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
//   const moveDuck = function(duckThing){
//   duckThing.style.top = (Math.random() * window.innerHeight).toString() +"px"
//   duckThing.style.left = (Math.random() * window.innerWidth).toString() +"px"
// }


  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
  // const moveDuck = function(duckThing){
  //   setInterval(function(){
  //     duckThing.style.top = (Math.random() * window.innerHeight).toString() +"px"
    //   duckThing.style.left = (Math.random() * window.innerWidth).toString() +"px"
  //   }, 1000)
  // }


  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  const createDuck = function(){
    
    let duckElement = document.createElement("div")
      duckElement.classList.add('duck')
      body.appendChild(duckElement)
      duckElement.style.top = (Math.random() * window.innerHeight).toString() + "px"
      duckElement.style.left = (Math.random() * window.innerWidth).toString() + "px"
      setInterval(function(){
        duckElement.classList.toggle('flap')
      }, 250)
    
      const moveDuck = function(duckElement) {
        duckElement.style.top = (Math.random() * window.innerHeight).toString() + "px"
        duckElement.style.left = (Math.random() * window.innerWidth).toString() + "px"
      }

    setInterval(function(){
      moveDuck(duckElement)
    }, 1000)

    let shotDucks = document.querySelectorAll(".duck")
      for(let i=0; i<shotDucks.length;i++){
          shotDucks[i].addEventListener('click', function(){
            shotDucks[i].classList.add('shot')
            let removeDuck =setTimeout(function(){
              shotDucks[i].remove()
            }, 1000)
            setTimeout(function(){
            checkForWinner()
            }, 1200)
          })
      }
    }
    
    for(let i = 0; i < 5; i++){
      createDuck()
    }

    function checkForWinner() {  
      let winDuck = document.querySelectorAll(".duck")
        if(winDuck.length === 0){
          alert("YOU WIN!")
        }
      }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  // for(let i = 0; i < 5; i++){
  //   createDuck()
  // }

  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;
  // const randomPosition = function(){
    
  //   duck.style.position = "absolute"
  //   duck.style.top = windowTop.toString()+"px"
  //   windowLeft = Math.random() * window.innerWidth
  //   duck.style.left = windowLeft.toString()+"px"
  // }
  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // let shotDucks = document.querySelectorAll(".duck")
  //   for(let i=0; i<shotDucks.length;i++){
  //     shotDucks[i].addEventListener('click', function(){
  //     shotDucks[i].classList.add('shot')
  //     let removeDuck =setTimeout(function(){
  //     shotDucks[i].remove()
  //     }, 1000)
  //     setTimeout(function(){
  //     checkForWinner()
  //     }, 1200)
  //     })
  //   }


  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // const killDuck = function(){
  //   setTimeout(function(duck){
  //     shotducks[i].remove()
  //   }, 1000)
  //   return killDuck
  //   }
  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  // function checkForWinner(){
  // function checkForWinner() {  
  // let winDuck = document.querySelectorAll(".duck")
  //   if(winDuck.length === 0){
  //     alert("YOU WIN!")
  //   }
  //   return checkForWinner
  // }
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
}
