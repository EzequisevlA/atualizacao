const typedtextspan = document.querySelector(".typedtext")
const textarray=["Frontend", "Developer"]
const tipyngDelay = 200
const erasingDelay = 100
const newtextDelay = 2000
let  textarrayindex = 0
let charindex = 0


function type(){
    if(charindex< textarray[textarrayindex].length){
        typedtextspan.textContent += textarray[textarrayindex].charAt(charindex)
        charindex++
        setTimeout(type, tipyngDelay)
    }else{
        setTimeout(erase, newtextDelay)
    }
}
function erase(){
    if(charindex >0){
        typedtextspan.textContent = textarray[textarrayindex].substring(0, charindex-1)
        charindex--
        setTimeout(erase, erasingDelay)
    }else{
        textarrayindex++
        if(textarrayindex>=textarray.length) textarrayindex=0
        setTimeout(type, tipyngDelay + 1100)
    }
}
document.addEventListener("DOMContentLoaded", function(){
 setTimeout(type, newtextDelay +250)
})

function clickmenu(){
    if(menu.style.display =='block'){
        menu.style.display ='none'
        document.getElementById("hbg").innerHTML="menu"
    }else{
        menu.style.display = 'block'
       document.getElementById("hbg").innerHTML="close"
       document.getElementById("itens").style.borderStyle="hidden"
       document.getElementById("itens2").style.borderStyle="hidden"
       document.getElementById("itens3").style.borderStyle="hidden"
       document.getElementById("cv").style.borderStyle="hidden"
      
    }
     
    
}
