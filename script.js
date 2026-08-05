/* ==========================================
REVIEW SECTION
========================================== */

.review-top{

margin-bottom:30px;

}

.review-top h2{

font-size:34px;

font-weight:700;

margin-top:15px;

}

.review-top p{

opacity:.9;

margin-top:10px;

font-size:17px;

}

.success-icon{

width:90px;

height:90px;

margin:auto;

border-radius:50%;

background:linear-gradient(135deg,#2563eb,#3b82f6);

display:flex;

align-items:center;

justify-content:center;

font-size:38px;

color:#fff;

box-shadow:0 20px 40px rgba(37,99,235,.35);

}

/* ==========================================
REVIEW OPTIONS
========================================== */

.review-list{

margin-top:25px;

display:flex;

flex-direction:column;

gap:18px;

}

.review-option{

display:flex;

align-items:center;

gap:18px;

padding:20px;

background:rgba(255,255,255,.08);

border:2px solid rgba(255,255,255,.15);

border-radius:18px;

cursor:pointer;

transition:.3s;

}

.review-option:hover{

background:rgba(255,255,255,.15);

border-color:#60a5fa;

transform:translateY(-3px);

}

.review-option input{

width:22px;

height:22px;

accent-color:#2563eb;

cursor:pointer;

}

.review-option h4{

font-size:20px;

margin-bottom:5px;

}

.review-option p{

font-size:14px;

opacity:.85;

}

/* ==========================================
BUTTON
========================================== */

.primary-btn{

margin-top:30px;

width:100%;

padding:18px;

border:none;

border-radius:14px;

font-size:18px;

font-weight:600;

cursor:pointer;

color:#fff;

background:linear-gradient(135deg,#2563eb,#1d4ed8);

transition:.35s;

box-shadow:0 15px 35px rgba(37,99,235,.35);

}

.primary-btn:hover{

transform:translateY(-4px);

box-shadow:0 20px 45px rgba(37,99,235,.45);

}

/* ==========================================
FEEDBACK FORM
========================================== */

.feedback-card h2{

font-size:34px;

margin-bottom:12px;

}

.feedback-card p{

opacity:.9;

margin-bottom:25px;

}

.feedback-icon{

width:90px;

height:90px;

margin:auto;

margin-bottom:20px;

border-radius:50%;

background:#ef4444;

display:flex;

align-items:center;

justify-content:center;

font-size:36px;

color:white;

}

.feedback-card input,

.feedback-card textarea{

width:100%;

padding:16px;

margin-bottom:18px;

border-radius:12px;

border:2px solid rgba(255,255,255,.2);

background:rgba(255,255,255,.08);

color:#fff;

font-size:16px;

outline:none;

transition:.3s;

}

.feedback-card input::placeholder,

.feedback-card textarea::placeholder{

color:rgba(255,255,255,.7);

}

.feedback-card input:focus,

.feedback-card textarea:focus{

border-color:#60a5fa;

background:rgba(255,255,255,.15);

}

/* ==========================================
THANK YOU
========================================== */

.thankyou-card{

text-align:center;

}

.thankyou-card i{

font-size:70px;

color:#22c55e;

margin-bottom:20px;

animation:pop .6s;

}

.thankyou-card h2{

font-size:38px;

margin-bottom:12px;

}

.thankyou-card p{

font-size:18px;

opacity:.9;

}

@keyframes pop{

0%{

transform:scale(.2);

opacity:0;

}

100%{

transform:scale(1);

opacity:1;

}

}

/* ==========================================
TOAST
========================================== */

.toast{

position:fixed;

bottom:30px;

left:50%;

transform:translateX(-50%);

background:#16a34a;

color:white;

padding:16px 28px;

border-radius:50px;

font-weight:600;

box-shadow:0 15px 35px rgba(0,0,0,.25);

opacity:0;

visibility:hidden;

transition:.35s;

z-index:9999;

}

.toast.show{

opacity:1;

visibility:visible;

}

/* ==========================================
FOOTER
========================================== */

footer{

text-align:center;

padding:40px 20px;

font-size:15px;

opacity:.8;

}

/* ==========================================
RESPONSIVE
========================================== */

@media(max-width:768px){

header{

padding:20px;

}

.logo{

flex-direction:column;

text-align:center;

}

.logo h2{

font-size:26px;

}

.card,

.review-card,

.feedback-card,

.thankyou-card{

padding:28px;

}

.card h1{

font-size:34px;

}

.star{

width:58px;

height:58px;

font-size:26px;

}

.review-option{

padding:16px;

}

.review-option h4{

font-size:17px;

}

.primary-btn{

font-size:16px;

padding:16px;

}

}

@media(max-width:480px){

.card h1{

font-size:28px;

}

.card p{

font-size:15px;

}

.review-top h2,

.feedback-card h2,

.thankyou-card h2{

font-size:28px;

}

.star{

width:52px;

height:52px;

font-size:22px;

}

.logo-icon{

width:58px;

height:58px;

font-size:24px;

}

}
window.open(GOOGLE_REVIEW, "_blank");
