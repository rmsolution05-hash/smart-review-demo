/* ==========================================
   PART 3 : FEEDBACK SUBMIT + SUCCESS FLOW
========================================== */
const feedbackForm =
document.querySelector("#feedbackForm");

// Google Review Link
const googleReviewURL = "YOUR_GOOGLE_REVIEW_LINK_HERE";


// WhatsApp Hook
const whatsappNumber = "919999999999";


// Email Hook
const businessEmail = "hello@example.com";


// Elements

const feedbackForm = document.querySelector("#feedbackForm");

const successScreen = document.querySelector("#successScreen");

const countdownText = document.querySelector("#countdown");



// Submit Feedback

if(feedbackForm){

feedbackForm.addEventListener("submit",(e)=>{

e.preventDefault();



let feedbackMessage = document.querySelector("#feedbackMessage").value;

let selectedRating = localStorage.getItem("rating");



// Save Feedback

const feedbackData = {

rating:selectedRating,

message:feedbackMessage,

date:new Date().toLocaleString()

};



console.log("Feedback Saved:",feedbackData);



// Store Local

localStorage.setItem(
"customerFeedback",
JSON.stringify(feedbackData)
);



// Show Success

showSuccessScreen();


// Notification Hooks

sendWhatsAppNotification(feedbackData);

sendEmailNotification(feedbackData);


});


}




/* ==========================================
      SUCCESS SCREEN
========================================== */


function showSuccessScreen(){


if(successScreen){

successScreen.style.display="flex";

}


// Start Countdown

startCountdown();


}




/* ==========================================
      3 SECOND COUNTDOWN
========================================== */


function startCountdown(){


let count = 3;


let timer = setInterval(()=>{


if(countdownText){

countdownText.innerHTML = 
`Redirecting in ${count} seconds...`;

}



count--;



if(count < 0){


clearInterval(timer);


// Open Google Review

openGoogleReview();


}


},1000);



}




/* ==========================================
      GOOGLE REVIEW REDIRECT
========================================== */


function openGoogleReview(){


window.open(
googleReviewURL,
"_blank"
);


}




/* ==========================================
      WHATSAPP READY HOOK
========================================== */


function sendWhatsAppNotification(data){


let message = `

New Customer Feedback

⭐ Rating:
${data.rating}

Message:
${data.message}

Date:
${data.date}

`;



let whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



console.log(
"WhatsApp Ready:",
whatsappURL
);


// Enable Later

// window.open(whatsappURL,"_blank");


}




/* ==========================================
      EMAIL READY HOOK
========================================== */


function sendEmailNotification(data){


let subject =
"New Customer Feedback";


let body = `

Rating:
${data.rating}


Feedback:

${data.message}


Date:

${data.date}

`;



let mailURL =
`mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;



console.log(
"Email Ready:",
mailURL
);



// Enable Later

// window.location.href = mailURL;

}
/* ==========================================
   PART 4 : AI REVIEW GENERATOR SYSTEM
========================================== */


/* ==========================================
   AI REVIEW TEMPLATES
========================================== */


const reviewTemplates = [

"Excellent service! The team was professional, responsive and delivered amazing results. Highly recommended!",


"Really happy with the experience. Great quality, fast support and very smooth communication.",


"One of the best services I have used. The team understands customer needs and provides excellent solutions.",


"Amazing experience! Professional approach, quick response and outstanding support. Thank you!",


"Very satisfied with the service. Quality work, friendly team and great customer experience.",


"Highly recommended! They provide reliable service with great attention to detail."

];





/* ==========================================
      GENERATE AI REVIEW
========================================== */


const generateBtn =
document.querySelector("#generateReview");


const reviewBox =
document.querySelector("#aiReviewText");



if(generateBtn){


generateBtn.addEventListener(
"click",
()=>{


generateAIReview();


});


}





function generateAIReview(){



let randomIndex =
Math.floor(
Math.random()*reviewTemplates.length
);



let selectedReview =
reviewTemplates[randomIndex];



if(reviewBox){


reviewBox.innerHTML =
selectedReview;


}



// Show Toast

showToast(
"✨ AI Review Generated Successfully"
);



}





/* ==========================================
      COPY REVIEW SYSTEM
========================================== */


const copyBtn =
document.querySelector("#copyReview");



if(copyBtn){


copyBtn.addEventListener(
"click",
()=>{


copyReviewText();


});


}





function copyReviewText(){


let text =
reviewBox.innerText;



navigator.clipboard.writeText(text)

.then(()=>{


copyBtn.innerHTML =
"✅ Copied!";



showToast(
"📋 Review Copied"
);



setTimeout(()=>{


copyBtn.innerHTML =
"Copy Review";


},2000);



})

.catch(()=>{


showToast(
"❌ Copy Failed"
);


});


}





/* ==========================================
      PREMIUM TOAST SYSTEM
========================================== */


function showToast(message){


let toast =
document.querySelector("#toast");



if(!toast){


toast =
document.createElement("div");


toast.id="toast";


document.body.appendChild(toast);


}



toast.innerHTML =
message;



toast.classList.add(
"show"
);



setTimeout(()=>{


toast.classList.remove(
"show"
);


},3000);



}






/* ==========================================
      FEEDBACK ANALYTICS COUNTER
========================================== */



function updateFeedbackCounter(){



let feedbacks =
JSON.parse(
localStorage.getItem(
"customerFeedbacks"
)
)
||
[];




feedbacks.push({

date:
new Date().toLocaleDateString()

});



localStorage.setItem(

"customerFeedbacks",

JSON.stringify(feedbacks)

);



let counter =
document.querySelector(
"#feedbackCount"
);



if(counter){


counter.innerHTML =
feedbacks.length;


}



}




/* ==========================================
      SPAM PROTECTION
========================================== */


function spamProtection(){


let lastSubmit =
localStorage.getItem(
"lastFeedbackTime"
);



let currentTime =
Date.now();




if(lastSubmit){


let difference =
currentTime-lastSubmit;



// 30 Second Limit

if(difference < 30000){


showToast(
"⚠️ Please wait before submitting again"
);


return false;


}



}



localStorage.setItem(

"lastFeedbackTime",

currentTime

);



return true;


}





/* ==========================================
      ENABLE SPAM CHECK ON FORM
========================================== */


if(feedbackForm){


feedbackForm.addEventListener(
"submit",
(e)=>{


if(!spamProtection()){


e.preventDefault();


return;


}



updateFeedbackCounter();



});


}
