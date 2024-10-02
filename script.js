let a1 = document.querySelector('.dice1 .a');
let b1 = document.querySelector('.dice1 .b');
let c1 = document.querySelector('.dice1 .c');
let d1 = document.querySelector('.dice1 .d');
let e1 = document.querySelector('.dice1 .e');
let f1 = document.querySelector('.dice1 .f');
let g1 = document.querySelector('.dice1 .g');
let h1 = document.querySelector('.dice1 .h');
let i1 = document.querySelector('.dice1 .i');

let a2 = document.querySelector('.dice2 .a');
let b2 = document.querySelector('.dice2 .b');
let c2 = document.querySelector('.dice2 .c');
let d2 = document.querySelector('.dice2 .d');
let e2 = document.querySelector('.dice2 .e');
let f2 = document.querySelector('.dice2 .f');
let g2 = document.querySelector('.dice2 .g');
let h2 = document.querySelector('.dice2 .h');
let i2 = document.querySelector('.dice2 .i');

let dice1 = document.querySelector('.dice1');
let dice2 = document.querySelector('.dice2');

let refresh = document.querySelector('.refresh');

let winnerone=0;
let winnertwo=0;


function resetDice(elements) {
    elements.forEach(el => el.style.backgroundColor = "rgb(222, 86, 40)");
}

dice1.addEventListener("click", () => {
    dice1.classList.add('rotate')

    resetDice([a1, b1, c1, d1, e1, f1, g1, h1, i1]);
    let random1 = Math.floor(Math.random() * 6) + 1;
    winnerone=random1;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      console.log('Hello');
      sleep(1000).then(() => { 
        switch (random1) {
            case 1:
                e1.style.backgroundColor = "white";
                break;
            case 2:
                g1.style.backgroundColor = "white";
                c1.style.backgroundColor = "white";
                break;
            case 3:
                c1.style.backgroundColor = "white";
                e1.style.backgroundColor = "white";
                g1.style.backgroundColor = "white";
                break;
            case 4:
                a1.style.backgroundColor = "white";
                g1.style.backgroundColor = "white";
                i1.style.backgroundColor = "white";
                c1.style.backgroundColor = "white";
                break;
            case 5:
                a1.style.backgroundColor = "white";
                g1.style.backgroundColor = "white";
                i1.style.backgroundColor = "white";
                c1.style.backgroundColor = "white";
                e1.style.backgroundColor = "white";
                break;
            case 6:
                a1.style.backgroundColor = "white";
                g1.style.backgroundColor = "white";
                i1.style.backgroundColor = "white";
                c1.style.backgroundColor = "white";
                f1.style.backgroundColor = "white";
                d1.style.backgroundColor = "white";
                break;
        }

      });
    

    
    checkWinner()
});



dice2.addEventListener("click", () => {
    
    dice2.classList.add('rotate')

    resetDice([a2, b2, c2, d2, e2, f2, g2, h2, i2]);
    let random2 = Math.floor(Math.random() * 6) + 1;
    winnertwo=random2;


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      
      sleep(1000).then(() => { 
        switch (random2) {
            case 1:
                e2.style.backgroundColor = "white";
                break;
            case 2:
                g2.style.backgroundColor = "white";
                c2.style.backgroundColor = "white";
                
                break;
            case 3:
                c2.style.backgroundColor = "white";
                e2.style.backgroundColor = "white";
                g2.style.backgroundColor = "white";
                break;
            case 4:
                a2.style.backgroundColor = "white";
                g2.style.backgroundColor = "white";
                i2.style.backgroundColor = "white";
                c2.style.backgroundColor = "white";
                break;
            case 5:
                a2.style.backgroundColor = "white";
                g2.style.backgroundColor = "white";
                i2.style.backgroundColor = "white";
                c2.style.backgroundColor = "white";
                e2.style.backgroundColor = "white";
                break;
            case 6:
                a2.style.backgroundColor = "white";
                g2.style.backgroundColor = "white";
                i2.style.backgroundColor = "white";
                c2.style.backgroundColor = "white";
                f2.style.backgroundColor = "white";
                d2.style.backgroundColor = "white";
                break;
        }

       });

    
    checkWinner()
    
});

function checkWinner() {
    if (winnerone && winnertwo) {
        if (winnerone> winnertwo) {
            refresh.innerHTML = "PLAYER ONE WON!!!!!!!!!";
        } else if (winnertwo > winnerone) {
            refresh.innerHTML = "PLAYER TWO WON!!!!!!!!!";
        } else if (winnerone==winnertwo){
            refresh.innerHTML = "IT'S A TIE!!!!!!!!!";
        }
        else{
            refresh.innerHTML = "please Try again";
        }
    }
}

let play=document.querySelector('.play');

play.addEventListener("click", ()=>{
    location.reload()
})










