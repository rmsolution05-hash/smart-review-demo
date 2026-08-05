/* ==========================================
   PART 3 : FEEDBACK SUBMIT + SUCCESS FLOW
========================================== */


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
