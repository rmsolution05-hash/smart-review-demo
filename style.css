const GOOGLE_REVIEW =
"https://g.page/r/CdT-R2IpVtpnEBM/review";

const stars = document.querySelectorAll(".star");

const hero = document.querySelector(".hero");
const feedback = document.getElementById("feedbackSection");
const review = document.getElementById("reviewSection");
const thankyou = document.getElementById("thankyouSection");

let selectedReview = "";

stars.forEach((star) => {

    star.addEventListener("click", () => {

        const rating = Number(star.dataset.rate);

        if (rating === 5) {

            hero.classList.add("hidden");
            review.classList.remove("hidden");

        } else {

            hero.classList.add("hidden");
            feedback.classList.remove("hidden");

        }

    });

});

const options = document.querySelectorAll(
'input[name="review"]'
);

options.forEach((option)=>{

    option.addEventListener("change",()=>{

        selectedReview = option.value;

    });

});

document
.getElementById("copyReviewBtn")
.addEventListener("click",()=>{

    if(selectedReview===""){

        alert("Please select a review.");

        return;

    }

    navigator.clipboard.writeText(selectedReview);

    alert("Review Copied ✔\nNow Paste it on Google.");

    review.classList.add("hidden");

    thankyou.classList.remove("hidden");

    setTimeout(()=>{

        window.location.href=GOOGLE_REVIEW;

    },1000);

});

document
.getElementById("feedbackForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for your feedback ❤️");

    feedback.classList.add("hidden");

    thankyou.classList.remove("hidden");

});
