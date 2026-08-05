const GOOGLE_REVIEW_URL =
"https://g.page/r/XXXXXXXXXXXX/review";

const WHATSAPP_NUMBER = "917400342769";

const stars = document.querySelectorAll(".star");

const hero = document.querySelector(".hero");

const feedback = document.getElementById("feedbackSection");

const thankyou = document.getElementById("thankyouSection");

stars.forEach(star=>{

star.addEventListener("click",()=>{

let rating=parseInt(star.dataset.rate);

if(rating===5){

hero.classList.add("hidden");

thankyou.classList.remove("hidden");

setTimeout(()=>{

window.location.href=GOOGLE_REVIEW_URL;

},2000);

}else{

hero.classList.add("hidden");

feedback.classList.remove("hidden");

}

});

});

document
.getElementById("feedbackForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let msg=document.getElementById("message").value;

let text=`Feedback%0A%0AName: ${name}%0APhone: ${phone}%0AFeedback: ${msg}`;

window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,"_blank");

alert("Thank You For Your Feedback ❤️");

});
