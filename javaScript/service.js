let uplogoSection2=document.querySelector('.up-logo-section2')
let li0=document.querySelectorAll('.li')[0]
k=180;
let section2Interval=setInterval(section2,800)
function section2(){
    for(i=0;i<100;i++){
    if(k>=180){
    k=k-26
    uplogoSection2.style.left=k+'%';} 
}
}
li0.addEventListener('click',section2)
let subMenu=document.querySelector(".sup-menu")
console.log(subMenu)
let li2=document.querySelectorAll('.li')[2]
console.log(li2)
li2.addEventListener('mouseover',function(){
    subMenu.style.display="block"
})
