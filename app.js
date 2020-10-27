const d1 = document.getElementById('dragon1');
const d2 = document.getElementById('dragon2');
const bg = document.getElementById('gamecont');
let score = 0;
let cross = true;
d2.classList.add('animd2');
document.onkeydown = function(e)
{
    console.log("keyPressed",e.keyCode);
if(e.keyCode==38)
{
    // console.log("up");
    d1.classList.add('animd1');
    setTimeout(()=>{
        d1.classList.remove('animd1');
    },700)
}
if(e.keyCode==39)
{ 
    let dx = parseInt(window.getComputedStyle(d1,null).getPropertyValue('left'));
    // console.log(d1x);
    d1.style.left = dx + 200 + "px";
    // console.log(d1x);

}
if(e.keyCode==37)
{ 
    let dx = parseInt(window.getComputedStyle(d1,null).getPropertyValue('left'));
    // console.log(d1x);
    d1.style.left = dx - 200 + "px";
    // console.log(d1x);

}
}
setInterval(() => {
   let d1x = parseInt(window.getComputedStyle(d1,null).getPropertyValue('left'));
   let d2x = parseInt(window.getComputedStyle(d2,null).getPropertyValue('left'));
   
   let d1y = parseInt(window.getComputedStyle(d1,null).getPropertyValue('right'));
   let d2y = parseInt(window.getComputedStyle(d2,null).getPropertyValue('right'));
   //console.log(d1x,d2x)
   offsetX = Math.abs(d1x-d2x);
   offsetY = Math.abs(d1y-d2y);
   if(offsetX<70&&offsetY<70)
   {
       bg.style.display = "none";
       localStorage.setItem('score', score);
       window.open('gameover.html', "_self");

    console.log("collapse");
    }
    else{
        if(offsetX<200 && cross==true)
        {
        score = score+100;
        updatescore(score);
        console.log(score);
        // cross = false;
        // setTimeout(() => {
        //     cross = true;
        // }, 100);
        }
    }
}, 800);
function updatescore()
{
    document.getElementById('scoreboard').innerHTML = `Your Score ${score}`;
}