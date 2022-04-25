//================mathMatrix project================
console.log('MMXs')
//======= introducing variables =============
const startBtn = document.getElementById('start')
const colonKeys = document.getElementById('colonKeys')
const textBoard = document.getElementById('textBoard')
const diceNumber = document.getElementById('diceNumber')
let colonContent = ''
const meter = document.getElementById('meter')
const timer = document.getElementById('timer')
const special = document.getElementById('special')
const timelist = document.getElementById('timeList')
let set = false

//========= setting up colonkeys content ===========
const numKeys = ['1','2','3','4','5','6','7','8','9',]
for(let i of numKeys){
    colonContent += `<button class="keys" data-set="${i}">${i}</button>`
}
colonKeys.innerHTML = colonContent;
let timeLimit = 15;
let counts = timeLimit
function timeDuration(n){ //=== function for the timer time-duration  ===== 
    timer.textContent = n
    timeLimit = n
    counts = timeLimit
}
//======= eventListener for timer and displaying timeList =========
let timerTracker = true //>>>>>>> keep track for displaying and hiding timeList
    timer.addEventListener('click',e=>{
        if(timerTracker===true && ignition===false){

       document.getElementById('timeList').style.height = '130px';
       timerTracker = false
        }else{
            document.getElementById('timeList').style.height = '0px'
            timerTracker = true
        }
    
    })
//============ eventListener for level and displaying levelList
let levelTracker = true //>>>>> keep track for displaying and hiding levelList
diceNumber.addEventListener('click',e=>{
    if(ignition===false && levelTracker===true){
            document.getElementById('levellist').style.height = '250px'
            levelTracker = false
        }else{
            document.getElementById('levellist').style.height = '0px'
            levelTracker = true
        }
})

let levelStatus = 100 //>>>> determinant for level difficulty >>>> matrix 1 by default.
//========= function that ensures checking one only checkbox at a time 
function setLevel(value){
    levelStatus = 10**value
    console.log(levelStatus)
    for(let i = 1; i <= 8; i++){
        document.getElementById(i).checked = false
    }
    document.getElementById(value).checked = true
}
let ignition = false //>>>>>> keep track if the start button is clicked,
//============= eventListener for start button ========================
startBtn.addEventListener('click',e=>{

        if(startBtn.textContent==="start"){
            if(meter.value === 0 && diceNumber.textContent==="00"){
            let randomDiceNUmber = Math.floor(Math.random()*levelStatus)+1 //>>>>> random number determinant
            let diceCounter = 0;
            ignition = true
    
    //=== reset values to default for a fresh game >>>>>>
            textBoard.value = ""
            special.textContent = "00"
            value.textContent = "00"
            firstValue = ""
            nValue = ""
            operatorIndicator = false
            operatorcounter = 0
            operatorSign = ''

                startBtn.textContent = "stop"
                meter.setAttribute('max',timeLimit*100)
                meter.setAttribute('low',timeLimit*80)
                meter.setAttribute('high',timeLimit*60)
                diceNumber.textContent = randomDiceNUmber
                let count = 0
//   =============== function that start the game engine, start the timer, >>>> set main functions
                 function  startGameEngine () {
                      const timeSet = setInterval(function(){ //>>>>first interval that update the meter
                        count++
                        // timer.textContent = count  
                        meter.value = count
                        if(count === timeLimit*100){
                            clearInterval(timeSet)
                            count = 0;
                            meter.value = 0
                            diceNumber.textContent = "00"
                        }
                    },10)
                    
                    const timeSet2 = setInterval(e=>{ //>>>> 2nd interval that update the timer
                        counts--; 
                        timer.textContent = counts
                        if(counts === 0){
                            clearInterval(timeSet2)
                            setTimeout(e=>{
                                meter.value = 0;
                                startBtn.textContent = "start"
                                counts = timeLimit
                                timer.textContent = 15;
                                ignition = false
                            },2000)
                            //counts = 0;
                            }},1000)
                            
                }
                //====this 'if' statement uses a 'diceCounter' variable to count down 
                //to the value of randomDiceNumber, randomDiceNumber outcome will be <= 1000.
        if(randomDiceNUmber <= 1000){ 
        let randonmer = setInterval(e=>{
            diceCounter++; diceNumber.textContent = diceCounter;
            if(diceCounter === randomDiceNUmber){
                    clearInterval(randonmer)
                    startGameEngine()
                }},10)
            }else{  //>>>>>else, if randomDiceNumber is > 1000 will not use the 'diceCounter' variable to countdown
                startGameEngine();
            }
    
// if(meter.value > 0){
//     console.log('time to stop')
//     }

}
        }else if(startBtn.textContent==="stop"){
    
        }

})
//======= using eventListener on the window for alternative events for elements in line 29&42 
window.addEventListener('click',e=>{
    //>>>>> alt window event for timerList in line 29
     if (e.target.matches('#timer') || e.target.matches("#timeList a")){
            //>>> do nothing <<<
   }else{
       document.getElementById('timeList').style.height = '0px'
        timerTracker = true
    }
    //>>>>> alt window event for levelList in line 49
    if (e.target.matches('#diceNumber') || e.target.matches("#levellist label")){
            //>>> do nothing <<<<
    }else{
    document.getElementById('levellist').style.height = '0px'
    levelTracker = true
    }
    //============= window event handling the colonkeys ====================
    if(e.target.matches('.keys')){
        const key = e.target
        const set = key.dataset.set 
         if(set){
                textBoard.value += set
                 if(operatorIndicator===false){
                     if(value.textContent==='00'){
                          value.textContent = set
                        }else{
                            value.textContent += set
                         }
                 }else if(operatorIndicator===true){
                     if(value.textContent==='00'){
                         value.textContent = set 
                         nValue = value.textContent
                        
                         if(operatorSign==='+'){
                             special.textContent = 
                             parseFloat(firstValue)+parseFloat(nValue)
                            }else if(operatorSign==='-'){
                            special.textContent = 
                            parseFloat(firstValue)-parseFloat(nValue)
                        }else if(operatorSign==='/'){
                            special.textContent = 
                            parseFloat(firstValue)/parseFloat(nValue)
                        }else if(operatorSign==='x'){
                            special.textContent = 
                            parseFloat(firstValue)*parseFloat(nValue)
                        }
                    }else{
                        value.textContent += set
                        nValue = value.textContent
                           if(operatorSign==='+'){
                            special.textContent = 
                            parseFloat(firstValue)+parseFloat(nValue)
                        }else if(operatorSign==='-'){
                             special.textContent = 
                             parseFloat(firstValue)-parseFloat(nValue)
                        }else if(operatorSign==='/'){
                            special.textContent = 
                            parseFloat(firstValue)/parseFloat(nValue)
                        }else if(operatorSign==='x'){
                             special.textContent = 
                             parseFloat(firstValue)*parseFloat(nValue)
                            }
                        }
                }
             }
        }
//  ============ eventlistener for operator buttons beneath colonkeys
        if(e.target.matches('#operatorButton button')){
            const key = e.target
            const operator = key.dataset.operator
            operatorIndicator = true
            if(operator){
                if(textBoard.value===''||value.textContent==='00'){}
                else{ 
                    textBoard.value += operator
                    operatorSign = operator
                    operatorcounter++;
                   console.log(operatorcounter)
                   if(operatorcounter===1){
                   firstValue = value.textContent
                   value.textContent = '00'
                   }else if(operatorcounter >=2){
                       firstValue =  special.textContent
                       value.textContent = '00'
                   }
                }
               
            }
        }
})
//======= listing values used in window eventlistener for key events ======
let value = document.getElementById("value")
let value2 = document.getElementById("value2")
let firstValue = ""
let nValue = ""
let operatorIndicator = false
let operatorcounter = 0
let operatorSign = ''
window.addEventListener('keydown', e=>{//>>>>>>> eventlistener for keyboard 
   
    for (let i in numKeys){
        if(e.key=== numKeys[i]){
            textBoard.value += numKeys[i]
            let focus = colonKeys.children.item(i)
            focus.focus() 
           if(operatorIndicator===false){
           if(value.textContent==='00'){
               value.textContent = numKeys[i]
            
           }else{
            value.textContent += numKeys[i]}
           }
           else if(operatorIndicator === true){
               if(value.textContent==='00'){
                   value.textContent = numKeys[i]
               nValue = value.textContent
               if(operatorSign==='+'){
                special.textContent = 
                parseFloat(firstValue)+parseFloat(nValue)
            }else if(operatorSign==='-'){
                special.textContent = 
                parseFloat(firstValue)-parseFloat(nValue)
            }else if(operatorSign==='/'){
                special.textContent = 
                parseFloat(firstValue)/parseFloat(nValue)
            }else if(operatorSign==='x'){
                special.textContent = 
                parseFloat(firstValue)*parseFloat(nValue)
            }
               }else{
                value.textContent += numKeys[i]
                   nValue = value.textContent
                   if(operatorSign==='+'){
                    special.textContent = 
                    parseFloat(firstValue)+parseFloat(nValue)
                }else if(operatorSign==='-'){
                     special.textContent = 
                    parseFloat(firstValue)-parseFloat(nValue)
                }else if(operatorSign==='/'){
                     special.textContent = 
                    parseFloat(firstValue)/parseFloat(nValue)
                }else if(operatorSign==='x'){
                     special.textContent = 
                    parseFloat(firstValue)*parseFloat(nValue)
                    }
                }
            
             }
           
        }
    }
    if(e.key==="a"||e.key==="A"||e.key==="s"||e.key==="S"
        ||e.key==="d"||e.key==="D"||e.key==="x"||e.key==="X"){
            //console.log(e.key)
            operatorIndicator = true
            const v1= document.getElementById('v1')
            const v2= document.getElementById('v2')
            const v3= document.getElementById('v3')
            const v4= document.getElementById('v4')
    
            if(value.textContent==='00'||textBoard.value===''){}
            else{
            if(e.key==='a'||e.key==='A'){  textBoard.value += '+'; operatorSign = '+'; v1.focus()}
            if(e.key==='s'||e.key==='S'){  textBoard.value += '-'; operatorSign = '-'; v2.focus()}
            if(e.key==='x'||e.key==='X'){  textBoard.value += 'x'; operatorSign = 'x'; v3.focus()}
            if(e.key==='d'||e.key==='D'){  textBoard.value += '/'; operatorSign = '/'; v4.focus()}
           
            operatorcounter++;
            console.log(operatorcounter)
            if(operatorcounter===1){
            firstValue = value.textContent
            value.textContent = '00'
            }else if(operatorcounter >=2){
                firstValue =  special.textContent
                value.textContent = '00'
            }
          }
            
    }
        
})

