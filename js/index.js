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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);


// //navbar
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);


// //section cta
// let ctaTitle = document.getElementsByTagName('h1');
// ctaTitle.textContent = 'DOM is Awesome!';

// let ctaButton = document.getElementsByTagName('button');
// ctaButton.textContent = 'Get Started';

// let ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// //main-content top-content
// let featuresTitle = document.getElementsByTagName('h4');
// featuresTitle.textContent = 'Features';

// let featuresContent = document.getElementsByTagName('p');
// featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// let aboutTitle = document.getElementsByTagName('h4');
// aboutTitle.textContent = 'About';

// let aboutContent = document.getElementsByTagName('p');
// aboutContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


// //main-content image
// let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// //main-content bottom-content
// let servicessTitle = document.getElementsByTagName('h4');
// servicesTitle.textContent = 'Services';

// let servicesContent = document.getElementsByTagName('p');
// servicesContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// let productTitle = document.getElementsByTagName('h4');
// productTitle.textContent = 'Product';

// let productContent = document.getElementsByTagName('p');
// productContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// let visionTitle = document.getElementsByTagName('h4');
// visionTitle.textContent = 'Vision';

// let visionContent = document.getElementsByTagName('p');
// visionContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


// //contact
// let contactTitle = document.getElementsByTagName('h4');
// contactTitle.textContent = 'Contact';

// let address = document.getElementsByTagName('p');
// address.textContent = '123 Way 456 Street Somewhere, USA';

// let phone = document.getElementsByTagName('p');
// phone.textContent = '1 (888) 888-8888';

// let email = document.getElementsByTagName('p');
// email.textContent = 'sales@greatidea.io';


// //footer
// let copyright = document.getElementsByTagName('p');
// copyright.textContent = 'Copyright Great Idea! 2018';


//nav
let navBar = document.querySelectorAll("nav a");
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];

//2 new items on the navBar
let newContent = document.createElement("a");
newContent.textContent = "Mission";
let parentElement = document.querySelector("nav");
parentElement.append(newContent);

let newContent2 = document.createElement("a");
newContent2.textContent = "Join";
let parentElement2 = document.querySelector("nav");
parentElement2.append(newContent2);

//coloring the navBar items green
navBar.forEach(navItem => {
  navItem.style.color = "green";
});

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//cta
let ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent.cta["h1"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content h tags/titles
let mainContentTitles = document.querySelectorAll(".main-content h4");
mainContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainContentTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainContentTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainContentTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainContentTitles[4].textContent = siteContent["main-content"]["vision-h4"];

//main-content image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//main-content p tags/info
let mainContentInfo = document.querySelectorAll(".main-content p");
mainContentInfo[0].textContent = siteContent["main-content"]["features-content"];
mainContentInfo[1].textContent = siteContent["main-content"]["about-content"];
mainContentInfo[2].textContent = siteContent["main-content"]["services-content"];
mainContentInfo[3].textContent = siteContent["main-content"]["product-content"];
mainContentInfo[4].textContent = siteContent["main-content"]["vision-content"];

//contact
let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact["contact-h4"];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact["address"];
contactInfo[1].textContent = siteContent.contact["phone"];
contactInfo[2].textContent = siteContent.contact["email"];

//footer
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer["copyright"];

//stretch changes in the DOM
newContent.style.color = "blue";
newContent2.style.color = "red";
ctaButton.style.backgroundColor = "red";