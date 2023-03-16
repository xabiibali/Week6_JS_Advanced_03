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
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])



  const navigations =  document.querySelectorAll("nav a");
  navigations.forEach((navs, index ) => {
    navs.textContent = siteContent.nav[`nav-item-${index}`]
  });

 const ctaText = document.querySelector(".cta-text h1");
  ctaText.textContent = siteContent.cta['h1'];

  
 const btn =document.querySelector('.cta-text button')
 btn.textContent = siteContent.cta['button']

  const ctaimg = document.querySelector('.cta #cta-img')
   ctaimg.setAttribute('src', siteContent.cta['img-src']);

   const doc = document.querySelector('.top-content')
   const doctop = doc.querySelectorAll('.text-content') 

  doctop.forEach((top, index) => {
    const heads = top.querySelector('h4')
    const para =  top.querySelector('p')

  if(index === 0){
    heads.textContent = siteContent["main-content"]['features-h4']
    para.textContent = siteContent["main-content"]['features-content']
  } else if(index === 1) {
    heads.textContent = siteContent["main-content"]['about-h4']
    para.textContent = siteContent["main-content"]['about-content']
  }

  })

const midIMG = document.querySelector('.main-content .middle-img')
midIMG.setAttribute('src', siteContent["main-content"]['middle-img-src'])

const botomdoc = document.querySelector('.bottom-content')
const docBotom = botomdoc.querySelectorAll('.text-content') 

docBotom.forEach((top, index) => {
 const heads = top.querySelector('h4')
 const para =  top.querySelector('p')

if(index === 0){
 heads.textContent = siteContent["main-content"]['services-h4']
 para.textContent = siteContent["main-content"]['services-content']
} else if(index === 1) {
 heads.textContent = siteContent["main-content"]['product-h4']
 para.textContent = siteContent["main-content"]['product-content']
}  else if(index === 2) {
  heads.textContent = siteContent["main-content"]['vision-h4']
  para.textContent = siteContent["main-content"]['vision-content']
 }

})

const contact = document.querySelector('.contact')
const cont = document.querySelector('.contact');
const header = cont.querySelector('h4');
const addres = cont.querySelectorAll('p')[0];
const phon = cont.querySelectorAll('p')[1];
const email = cont.querySelectorAll('p')[2];

header.textContent = siteContent.contact['contact-h4']
addres.textContent = siteContent.contact['address']
phon.textContent = siteContent.contact['phone']
email.textContent = siteContent.contact['email']

const end = document.querySelector('footer p')
end.textContent = siteContent.footer['copyright']

































































