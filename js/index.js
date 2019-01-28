const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const bigCircle=document.getElementById('cta-img');
bigCircle.setAttribute('src', siteContent['cta']['img-src']);

const banner=document.getElementById('middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src']);

// /Images


const navItems=document.querySelectorAll('nav a');
navItems[0].textContent=siteContent['nav']['nav-item-1'];
navItems[1].textContent=siteContent['nav']['nav-item-2'];
navItems[2].textContent=siteContent['nav']['nav-item-3'];
navItems[3].textContent=siteContent['nav']['nav-item-4'];
navItems[4].textContent=siteContent['nav']['nav-item-5'];
navItems[5].textContent=siteContent['nav']['nav-item-6'];
navItems[0].style.color="green";
navItems[1].style.color="green";
navItems[2].style.color="green";
navItems[3].style.color="green";
navItems[4].style.color="green";
navItems[5].style.color="green";

// 
const theTitle=document.querySelector('.cta .cta-text h1');
theTitle.textContent=siteContent['cta']['h1'];

const btnContent=document.querySelector('.cta .cta-text button');
btnContent.textContent=siteContent['cta']['button'];

// 


const topHead = document.querySelectorAll('.main-content .top-content h4');
topHead[0].textContent=siteContent['main-content']['features-h4'];
topHead[1].textContent=siteContent['main-content']['about-h4'];

const topP=document.querySelectorAll('.main-content .top-content p');
topP[0].textContent=siteContent['main-content']['features-content'];
topP[1].textContent=siteContent['main-content']['about-content'];

const botHead=document.querySelectorAll('.main-content .bottom-content h4');
botHead[0].textContent=siteContent['main-content']['services-h4'];
botHead[1].textContent=siteContent['main-content']['product-h4'];
botHead[2].textContent=siteContent['main-content']['vision-h4'];

const botP=document.querySelectorAll('.main-content .bottom-content p');
botP[0].textContent=siteContent['main-content']['services-content'];
botP[1].textContent=siteContent['main-content']['product-content'];
botP[2].textContent=siteContent['main-content']['vision-content'];

//

const contactHead=document.querySelector('.contact h4');
contactHead.textContent=siteContent['contact']['contact-h4'];

const contactP=document.querySelectorAll('.contact p');
contactP[0].textContent=siteContent['contact']['address'];
contactP[1].textContent=siteContent['contact']['phone'];
contactP[2].textContent=siteContent['contact']['email'];

// 

const thatFooter=document.querySelector('footer p');
thatFooter.textContent=siteContent['footer']['copyright'];


