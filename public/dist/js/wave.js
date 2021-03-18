let firstBtn = document.querySelector('[href="member"]');
let secondBtn = document.querySelector('[href="friend"]');
let thirdBtn = document.querySelector('[href="shrine"]');
let forthBtn = document.querySelector('[href="other"]');


var memberView = document.querySelector(".memberView");
var friendView = document.querySelector(".friendView");
var shrineView = document.querySelector(".shrineView");
var otherView = document.querySelector(".otherView");
var cordView = document.querySelector(".cordView");

firstBtn.addEventListener('click',function(e){
    e.preventDefault();
    memberView.style.display = "block";
    friendView.style.display = "none";
    shrineView.style.display = "none";
    otherView.style.display = "none";
    cordView.style.display = "none";
})

secondBtn.addEventListener('click',function(e){
    e.preventDefault();
    memberView.style.display = "none";
    friendView.style.display = "block";
    shrineView.style.display = "none";
    otherView.style.display = "none";
    cordView.style.display = "none";
})
thirdBtn.addEventListener('click',function(e){
    e.preventDefault();
    memberView.style.display = "none";
    friendView.style.display = "none";
    shrineView.style.display = "block";
    otherView.style.display = "none";
    cordView.style.display = "none";
})

forthBtn.addEventListener('click',function(e){
    e.preventDefault();
    memberView.style.display = "none";
    friendView.style.display = "none";
    shrineView.style.display = "none";
    otherView.style.display = "block";
    cordView.style.display = "none";
})