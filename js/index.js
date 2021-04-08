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
let str1 = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let str2 = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let str3 = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let str4 = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at mperdiet metus scelerisque quis.'

let str5 = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at mperdiet metus scelerisque quis.'

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let nav = document.querySelector('nav')
//console.log(nav)

let firstSectionText = document.querySelector('.cta-text h1')
//console.log (firstSection)

let button = document.querySelector('.cta-text button')
console.log(button)

let firstSectionImg = document.querySelector('#cta-img')
//console.log(firstSectionImg)

let topContent = document.querySelector('.top-content')
//console.log(topContent)

let topContentTitles = document.querySelectorAll('.top-content .text-content h4')
console.log(topContentTitles)

let topContentDesc = document.querySelectorAll('.top-content .text-content p')
console.log(topContentDesc)

let middleImg = document.getElementById('middle-img')
//console.log(middleImg)

let bottomContent = document.querySelector('.bottom-content')
//console.log(bottomContent)

let bCTitles = document.querySelectorAll('.bottom-content .text-content h4')
//console.log(bCTitles)

let bCDesc = document.querySelectorAll('.bottom-content .text-content p')

let contact = document.querySelector('.contact h4')
//console.log(contact)

let contactInfo = document.querySelectorAll('.contact p')



let navItems = nav.querySelectorAll('a')

navItems[0].textContent = 'Services'
navItems[1].textContent = 'Products'
navItems[2].textContent = 'Vision'
navItems[3].textContent = 'Features'
navItems[4].textContent = 'About'
navItems[5].textContent = 'Contact'

firstSectionImg.src = 'img/header-img.png'

firstSectionText.textContent = 'DOM\nIs\nAwesome!'
button.textContent = 'Get Started'

topContentTitles[0].textContent = 'Features'
topContentDesc[0].textContent = str1

topContentTitles[1].textContent = 'About'
topContentDesc[1].textContent = str2

middleImg.src = 'img/mid-page-accent.jpg'

bCTitles[0].textContent = 'Services'
bCDesc[0].textContent = str3


bCTitles[1].textContent = 'Product'
bCDesc[1].textContent = str4

bCTitles[2].textContent = 'Vision'
bCDesc[2].textContent = str5

contact.textContent = 'Contact'

contactInfo[0].textContent = '123 Way 456 Street \ Somewhere, USA'
contactInfo[1].textContent = '1 (888) 888-8888'
contactInfo[2].textContent = 'sales@greatidea.io'

