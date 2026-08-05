// =========================
// RM Solution Smart Review
// Professional Version
// =========================

// Google Review Link
const GOOGLE_REVIEW =
"https://g.page/r/CdT-R2IpVtpnEBM/review";

// Elements
const stars = document.querySelectorAll(".star");

const hero = document.querySelector(".hero");

const feedback = document.getElementById("feedbackSection");

const review = document.getElementById("reviewSection");

const thankyou = document.getElementById("thankyouSection");

const feedbackForm =
document.getElementById("feedbackForm");

const copyBtn =
document.getElementById("copyReviewBtn");


// =========================
// Toast
// =========================

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}


// =========================
// Star Click
// =========================

stars.forEach(star=>{

star.addEventListener("click",()=>{

const rate=Number(star.dataset.rate);

hero.classList.add("hidden");

if(rate<5){

feedback.classList.remove("hidden");

window.scrollTo({

top:feedback.offsetTop,

behavior:"smooth"

});

}

else{

review.classList.remove("hidden");

window.scrollTo({

top:review.offsetTop,

behavior:"smooth"

});

}

});

});


// =========================
// Feedback Form
// =========================

feedbackForm.addEventListener("submit",(e)=>{

e.preventDefault();

feedback.classList.add("hidden");

thankyou.classList.remove("hidden");

showToast("✅ Feedback Submitted");

setTimeout(()=>{

window.location.href=GOOGLE_REVIEW;

},2000);

});


// =========================
// Copy Review
// =========================

copyBtn.addEventListener("click",async()=>{

const selected=document.querySelector(

'input[name="review"]:checked'

);

if(!selected){

showToast("⚠ Please choose one review.");

return;

}

try{

await navigator.clipboard.writeText(

selected.value

);

showToast("✅ Review copied!");

setTimeout(()=>{

window.open(

GOOGLE_REVIEW,

"_blank"

);

},900);

}

catch{

showToast("❌ Copy failed.");

}

});


// =========================
// Keyboard Hint
// =========================

window.addEventListener("focus",()=>{

setTimeout(()=>{

if(document.querySelector("#reviewSection:not(.hidden)")){

showToast("📋 Google Review उघडल्यानंतर Ctrl + V करून Post करा.");

}

},800);

});
window.open(GOOGLE_REVIEW, "_blank");
