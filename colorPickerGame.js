var number=6
var colors=generateColor(number)
var currentColor=pickColor(number)

document.querySelector("#currentColor").textContent=currentColor
var squares=document.querySelectorAll(".square")
var status1=document.querySelector("#status")
var status1=document.querySelector("#status")
var newColors=document.querySelector("#reset")
var Easy=document.querySelector("#easy")
var Hard=document.querySelector("#hard")

eventOnEachBlock()
newColors.addEventListener('click',Reset)
Easy.addEventListener('click',function(){
    number=3
    Reset()
})
Hard.addEventListener('click',function(){
    number=6
    Reset()
})
function Reset(){
    colors=generateColor(number)
    currentColor=pickColor(number)
    // for(var i=0;i<number;i++){
    //     squares[i].style.backgroundColor=colors[i]
    // }
    eventOnEachBlock()
    status1.textContent="Game Begins"
    document.querySelector(".head1").style.background="aquamarine"
    newColors.textContent="New Colors"
}


function generateColor(n){
    var arr=[]
    for(var i=0;i<n;i++){
        var a=Math.floor(Math.random()*256) 
        var b=Math.floor(Math.random()*256) 
        var c=Math.floor(Math.random()*256) 
        var s="rgb("+a+", "+b+", "+c+")"
        arr.push(s)
    }
    return arr
}
function pickColor(n){
    var hold=Math.floor(Math.random()*n)
     return colors[hold]
}

function eventOnEachBlock(){
    for(var i=0;i<6;i++){
        squares[i].style.backgroundColor="rgb(128, 114, 114)"
    }
    for(var i=0;i<number;i++){
        squares[i].style.backgroundColor=colors[i]

        //event listner
        squares[i].addEventListener('click',function(){
        
            var clickedColor=this.style.backgroundColor
            if(clickedColor===currentColor){
                status1.textContent="Winner"
                for(var i=0;i<colors.length;i++){
                    squares[i].style.backgroundColor=currentColor
                }    
                document.querySelector(".head1").style.background=currentColor
                newColors.textContent="Play Again"
            }
            else{
                this.style.backgroundColor="rgb(128, 114, 114)"
                status1.textContent="Try Again"
            }
        })
    }
}