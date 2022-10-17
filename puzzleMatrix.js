console.log("New MMX")


//========= listing variables ==================
const colonKeys = document.getElementById("colonKeys");
//const matrixBtn = document.getElementById("openSetValue");
const setTimer = document.getElementById("setTimer");
const timersvg = document.getElementById("timersvg");
let menuBtn = document.querySelector('.menu')
let matric = document.querySelectorAll('.matrix button')

let matrixContent = ""
let matrixType = 9
let upOrDown = 3;
let rightOrLeft = 1;
let colonIndexUpLeft =  3
let colonIndexUpRight = 2 
let colonIndexDownLeft =6
let colonIndexDownRight=5
let colonIndexLowerRight = ""
let colonIndexLowerLeft = ""
let colonindexLowerMostRight = ""
let colonindexLowerMostLeft = ""
let matrix = [];
let matrixDemo = []
let timerIndicator = false;

//function to open nav list
function openNav(){
    document.querySelector('.nav').classList.toggle('show')
    //add_ripple()
}

// ======== alt window event for matrixTypeList
let nav = document.querySelector('.nav')
window.addEventListener('click', (e)=>{
    if(!e.target.matches('body')){

    }
    if(e.target.matches('.menu')){
        openNav()
    }else{
        document.querySelector('.nav').classList.remove('show')
    }
})
//====== event for matrixTypeList =======
let matrixTypeTracker = true //>>>>> keep track for displaying and hiding matrixTypeList
//matrixBtn.addEventListener('click',e=>{
//    if(matrixTypeTracker===true){
//            document.getElementById('matrixTypeList').style.height = '80px'
//            matrixTypeTracker = false
//        }else{
//            document.getElementById('matrixTypeList').style.height = '0px'
//            matrixTypeTracker = true
//        }
//})

//setTimer.setAttribute('disabled','disabled')
    let intervaler
    let timeSeconds = 0;
    let timeMinutes = 0;
    let timeHour = 0;
setTimer.addEventListener('click', e=>{
    setTimer.removeAttribute('disabled','disabled')
    let timerSeconds = document.getElementById("timerSeconds");
    let timerMinutes = document.getElementById("timerMinutes");
    let timerHour = document.getElementById("timerHour");

    function startInterval(){ 
        intervaler = setInterval(e=>{
         timeSeconds++; timerSeconds.innerHTML = timeSeconds
         if(timeSeconds === 59){
             timeSeconds = -1;
             timeMinutes++;  timerMinutes.innerHTML = timeMinutes;
         }if(timeMinutes===59){
                    timeMinutes = -1
                    timeHour++; timerHour.innerHTML = timeHour;
         }
        },1000)
   }
   function clearsInterval(){
       clearInterval(intervaler)
   }
    
    if(timerIndicator===false){
      startInterval()
      timersvg.classList.add('timerIcon')
      timerIndicator = true
      document.querySelector('.timeDisplay').classList.add('showTimer')
    }
     else{
        clearsInterval()
        timersvg.classList.remove('timerIcon')
        timerIndicator = false
        document.querySelector('.timeDisplay').classList.remove('showTimer')
    }
   
  

})
//===== set the MatrixTypeList =======
function setValue(matrixTypeN){
   
     matrixType = matrixTypeN
     matrix = []
     matrixDemo = []
     matrixContent = ""
     //console.log(colonKeys.innerHTML)
     if(matrixTypeN===9){
         upOrDown = 3;
         rightOrLeft = 1;
         colonIndexUpLeft =  3
         colonIndexUpRight = 2 
         colonIndexDownLeft =6
         colonIndexDownRight=5
        // console.log(upOrDown, rightOrLeft)
     }else if(matrixTypeN===16){
         upOrDown = 4;
        rightOrLeft = 1;
        colonIndexUpLeft =  4
        colonIndexUpRight = 3 
        colonIndexDownLeft =8
        colonIndexDownRight=7
        colonIndexLowerRight=11
        colonIndexLowerLeft=12;
        //console.log(upOrDown, rightOrLeft)
    }else if(matrixTypeN===25){
        upOrDown = 5;
        rightOrLeft = 1;
        colonIndexUpLeft =  5
        colonIndexUpRight = 4 
        colonIndexDownLeft = 10
        colonIndexDownRight = 9
        colonIndexLowerRight = 14
        colonIndexLowerLeft = 15
        colonindexLowerMostRight = 19
        colonindexLowerMostLeft = 20
        //console.log(upOrDown, rightOrLeft)
    }
   AutomatingPuzzleContent()
  //playBtn()
}
function AutomatingPuzzleContent (){
    const prevRandomKey = Math.floor(Math.random()*9)+1;
    function shuffleArray(arr){
    for(let i = arr.length-1; i > 0; i--){
        const v = Math.floor(Math.random()*(i + 1));
        [arr[i],arr[v]] = [arr[v],arr[i]]
    }
}
for (let  i = 1; i < matrixType+1; i++){
    if(prevRandomKey===i){
     matrix.push("");
     //console.log(prevRandomKey,i)
     shuffleArray(matrix)
    }else{
        matrix.push(i);
        shuffleArray(matrix)
    }
    matrixDemo.push(i)
}
//console.log(prevRandomKey)
console.log(matrixDemo)

for( i = 0; i < matrix.length; i++){
    matrixContent +=`<button class="keys" onclick="playBtn(${i})"> ${matrix[i]}</button>`
}
colonKeys.innerHTML = matrixContent;


function set_width(){
    let root = Math.sqrt(i)
    var clientWidth = window.innerWidth
    let colon = document.querySelector('.matrix')
    colon.style.width = `calc(${clientWidth}px - 20px)`
    let colon_btn = document.querySelectorAll('.keys')
    let colon_btn_width = (clientWidth - 20)/root
    let matrix_width = clientWidth 
    for (let x = 0; x < i; x++){
       
        colon_btn[x].style.width = `calc(${colon_btn_width}px - 4px)`
       }
   
}
set_width()


//playBtn()
}
function playBtn(n){
    const getValues = matrix.values();
    const getValue = colonKeys.childNodes;
//
    //console.log(n)
    //for(body of getValue){
    //    if(matrixType===16){
    //        body.style.width = "20vw"
    //         
    //    }else if(matrixType===25){
    //        body.style.width = "15vw"
    //    }else if(matrixType===36){
    //        body.style.width = "12vw"
    //    }
    //}
    const gameOn = matrix
    let amp;
    let tmp;
    //console.log(newGame[n].innerHTML)
    for(let value of getValues){
            let emptyCell = ''
        if(value===''){
          emptyCell = matrix.indexOf(value)
        // console.log(emptyCell)
        }
        if(emptyCell===n+rightOrLeft||emptyCell===n-rightOrLeft||
            emptyCell===n+upOrDown||emptyCell===n-upOrDown){
            if(emptyCell===colonIndexUpLeft && n===colonIndexUpRight||
               emptyCell===colonIndexUpRight && n===colonIndexUpLeft||
               emptyCell===colonIndexDownRight && n===colonIndexDownLeft||
               emptyCell===colonIndexDownLeft && n===colonIndexDownRight||
               emptyCell===colonIndexLowerRight && n===colonIndexLowerLeft||
               emptyCell===colonIndexLowerLeft && n===colonIndexLowerRight||
               emptyCell===colonindexLowerMostLeft && n===colonindexLowerMostRight||
               emptyCell===colonindexLowerMostRight && n===colonindexLowerMostLeft){
                    //do nothing
                }
            else{
            //console.log("boom")
            tmp = gameOn[n]
            gameOn[n] = gameOn[emptyCell]
            gameOn[emptyCell] = tmp
            
            let colonKeysButton =  document.querySelectorAll('.keys')
          for(let i = 0; i < getValue.length; i++){
           colonKeysButton[i].style.backgroundColor = "rgba(19, 78, 138, 0.3)"
          }
          getValue[n].style.backgroundColor = 'rgba(61, 127, 241, 0.3)'
    
          //console.log(getValue[n])

            amp = getValue[n].innerHTML
            getValue[n].innerHTML = getValue[emptyCell].innerHTML
            getValue[emptyCell].innerHTML = amp

           
            }
        }
        matrix
        matrixDemo
        //console.log(matrixDemo, matrix)
        let winCount = 0
        for (let x in matrixDemo){
            let matrixDemoCheqeue = matrixDemo[x]
            let matrixCheque = matrix[x]
           // console.log(matrixDemoCheqeue,matrixCheque)
                if(matrixCheque===matrixDemo[x] && matrixDemoCheqeue=== matrix[x]){
                    winCount++;
                    //console.log('yogs!!' , winCount)
                   //console.log(winCount)
                }if (winCount===matrixType - 1){
                    console.log('winner', winCount)
                    matrix[emptyCell] = matrixDemo[emptyCell]
                    getValue[emptyCell].innerHTML = matrixDemo[emptyCell]
                    console.log(matrix, matrixDemo)
                }
        }
    }
    
 
    add_ripple(event)
}

AutomatingPuzzleContent()

function add_ripple(event){
    const btn = event.currentTarget
    const circle = document.createElement('span')
    circle.classList.add('ripple')
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
   // console.log(btn.offsetLeft, btn.offsetTop)
    const radius = diameter / 2;
    const ripple = document.querySelector('.ripple');
    // styles
   circle.style.width = circle.style.height = `${diameter}px`
   circle.style.left = `${event.clientX - (btn.offsetleft - radius)}px`
   circle.style.top = `${event.clientY - (btn.offsetTop - radius)}px`
    
    // check for existing ripple
    if(ripple){
        ripple.remove()
    }
    btn.append(circle);
   // console.log(btn.offsetTop, event.target.offsetTop)
}
//const buttons = document.getElementsByClassName('button')
//for (const buton in buttons){
//    buton.addEventListener('click', add_ripple)
//}
