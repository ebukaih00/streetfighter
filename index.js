let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let sameEl = document.getElementById("same-el")
sameEl.textContent = "tee "

fightButton.addEventListener("click", function() {


      
    
    let fighter1 = Math.floor(Math.random() * fighters.length)
    let fighter2 = Math.floor(Math.random() * fighters.length)

        if(fighter1===fighter2){
            sameEl.textContent = "Same!"
            // fighter2 = Math.floor(Math.random() * fighters.length)
        }
        else{
            sameEl.textContent = ""
stageEl.textContent = fighters[fighter1] + " vs " + fighters[fighter2]
        }
        

    
   
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
