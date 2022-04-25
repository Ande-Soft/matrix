//======== load mpages href links to other BMC =======
function loadMpages(){
    const animator = document.getElementById('animator')
    animator.style.display = 'flex'

    document.getElementById('fbox').style.animationName = 'fbox'
    document.getElementById('sbox').style.animationName = 'sbox'
    document.getElementById('tbox').style.animationName = 'tbox'
    document.getElementById('ftbox').style.animationName = 'ftbox'

    setTimeout(e=>{
        animator.style.display = 'none'
        document.getElementById('fbox').style.animationName = ''
        document.getElementById('sbox').style.animationName = ''
        document.getElementById('tbox').style.animationName = ''
        document.getElementById('ftbox').style.animationName =''
    },2000)
}
//========= matrix logo animation onload of page
let matrixxIndicator = true
const headerMatrix = document.querySelector('#matrixx')
headerMatrix.addEventListener('click',e=>{
    let mpages = document.getElementById('mpages')
    if(matrixxIndicator===true){
        mpages.style.display = 'flex'
        matrixxIndicator = false;
    }
    else{
        mpages.style.display = 'none'
        matrixxIndicator = true
    }
   
})

//screen.orientation.lock()