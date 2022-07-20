
let slideIndex=1;
let slideIn=1;
let slideIn3=1

//اسلایدر
function setSlide(input,index){
    slideIndex=index;
    let item=document.querySelector(`#${input}`)
    let slides=[...document.querySelector('.slider').children ];
        slides.forEach((element)=>{
        element.classList.remove('active')
    } ),
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if (slideIndex==4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}`,slideIndex)
},5000)

//
document.querySelector("#img3").addEventListener("mouseenter", (e) => {
    document.querySelector("#img3").src="img/hed2.png"
})

document.querySelector("#img3").addEventListener("mouseleave", (e) => {
    document.querySelector("#img3").src="img/hed1.png"
})
//
document.querySelector("#img2").addEventListener("mouseenter", (e) => {
    document.querySelector("#img2").src="img/hed6.png"
})

document.querySelector("#img2").addEventListener("mouseleave", (e) => {
    document.querySelector("#img2").src="img/hed5.png"
})
//
document.querySelector("#img1").addEventListener("mouseenter", (e) => {
    document.querySelector("#img1").src="img/hed4.jpg"
})

document.querySelector("#img1").addEventListener("mouseleave", (e) => {
    document.querySelector("#img1").src="img/hed3.jpg"
})
//

// table
$('.gallery-item').click(function(){

    let value = $(this).attr('data-filter');
    $(this).addClass('btn-active').siblings().removeClass('btn-active')
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})

//زمان بخش ویژه
let remainingTime=70000;
function setTime(){
    if (remainingTime==0) return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s =(remainingTime%3600)%60;
    // console.log(s)
    document.querySelector('#hors').innerHTML=h
    document.querySelector('#min').innerHTML=m
    document.querySelector('#sec').innerHTML=s
}
setInterval(()=>{
    remainingTime-=1;
    setTime()
},1000)

//اسلایدر 2
function setSlide2(input,index){
    slideIn=index;
    let item=document.querySelector(`#${input}`)
    let slides=[...document.querySelector('.slider2').children ];
        slides.forEach((element)=>{
        element.classList.remove('active')
        element.classList.remove('active2')
    } ),
    item.classList.add('active');
    item.classList.add('active2');
}

setInterval(()=>{
    slideIn +=1;
    if (slideIn==4){
        slideIn=1;
        
    }
    setSlide2(`slid${slideIn}`,slideIn)
},5000)


//اسلایدر 3
function setSlide3(input,index){
    slideIn3=index;
    let item=document.querySelector(`#${input}`)
    let slides=[...document.querySelector('.sec-slide').children ];
        slides.forEach((element)=>{
        element.classList.remove('item')
    } ),
    item.classList.add('item');
}

setInterval(()=>{
    slideIn3 +=1;
    if (slideIn3==4){
        slideIn3=1;
        
    }
    setSlide2(`slid${slideIn3}`,slideIn3)
},2000)


// scrooll
$(Window).scroll(function(){
    let p = $(this).scrollTop();
    
    // console.log(p)
    if(p >= 4000){
        $('.d1').addClass('anim6')
        $('.d2').addClass('anim2')
        $('.d2').addClass('anim5')
    }else{
        
    }
})

// scrooll
$(Window).scroll(function(){
    let p = $(this).scrollTop();
    
    // console.log(p)
    if(p >= 2000){
        $('.sec-shop-t').addClass('anim6')
        $('.sec-shop-img').addClass('anim7')
    }else{
        
    }
})


// console.log(b.clientHeight)
// let c = window.scrollY
// console.log(c)

// $(Window).scroll(function(){
//     let p = $(this).scrollTop();
    
//     let b =document.querySelector(".sec-bg").clientHeight
   
//     if(p > b){
//         let z =document.querySelector("#btn-t1")
//         let a =z.innerText=1


//     }else{
        
//     }

// })



let a =document.querySelector("#btn-t1").innerText=1;
function setTime(){
    if (a==100){
        // console.log("a")
    }else{
        
        a += 1
        // console.log(a)
        document.querySelector("#btn-t1").innerText=a;
    }
}
setInterval(()=>{
    remainingTime-=1;
    setTime()
},.5)



//time
// let sec =document.querySelector(".sec-super-shop")
// let sec1 = sec.offsetTop;
// console.log(sec1)
// let sec3 = sec1 - window.innerHeight / 2;
// window.addEventListener("scroll", () => {

//     if (document.body.scrollTop > sec3 ||document.documentElement.scrollTop > sec3){
//         document.querySelector("#shop-bg").c
//     }

// });

// document.querySelector(".sec-super-shop").addEventListener("scroll", (e) => {

//     console.log(e)

// });


