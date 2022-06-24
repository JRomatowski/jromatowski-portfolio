
// C/P'd this from Isabel Cortes's Website

//   $('.ui-button').on('click', function(){
//     $('body').css('background-color', 'white')
//   })

//   $('#box2').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#projects-info').fadeIn();});
//   });
//   $('#cv-info, #x').on('click', function(){
//     $('#cv-info').fadeOut(300, function(){$('#main-page').fadeIn();});
//   });

//   $('#box4').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#about-info').fadeIn();});
//   });
//   $('#box5').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#cv-info').fadeIn();})

// BUTTON VARIABLES

const key1 = document.querySelector('#key1')
const key2 = document.querySelector('#key2')
const key3 = document.querySelector('#key3')
const key4 = document.querySelector('#key4')
const key5 = document.querySelector('#key5')

const homeKey = document.querySelector('#title')
const bottomHomeKeyOne = document.querySelector('#return-home1')
const bottomHomeKeyTwo = document.querySelector('#return-home2')
const bottomHomeKeyThree = document.querySelector('#return-home3')
const bottomHomeKeyFour = document.querySelector('#return-home4')

const mainPage = document.querySelector('.main-page')
const portfolioPage = document.querySelector('.portfolio-page')
const resumePage = document.querySelector('.resume-page')
const iPage = document.querySelector('.i-page')
const usPage = document.querySelector('.us-page')

// BUTTON TESTS

// console.log(key1)
// console.log(key2)
// console.log(key3)
// console.log(key4)
// console.log(key5)

// console.log(homeKey)
// console.log(bottomHomeKeyOne)
// console.log(mainPage)
// console.log(portfolioPage)
// console.log(resumePage)
// console.log(iPage)
// console.log(usPage)

// BUTTON EVENT LISTENERS

// Write Blank Out Function

const colorTimeout = function () {
    
}

bottomHomeKeyOne.addEventListener('click', () => {
    console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyTwo.addEventListener('click', () => {
    console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyThree.addEventListener('click', () => {
    console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyFour.addEventListener('click', () => {
    console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

homeKey.addEventListener('click', () => {
    console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

// homeKey.addEventListener('mouseover', () => {
//     homeKey.style.textDecoration = 'underline';
// })

key1.addEventListener('click', () => {
    console.log("key1 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "block";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key2.addEventListener('click', () => {
    console.log("key2 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "block";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key3.addEventListener('click', () => {
    console.log("key3 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "block";
    usPage.style.display = "none";
})

key4.addEventListener('click', () => {
    console.log("key4 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "block";
})

key5.addEventListener('click', () => {
    console.log("key5 works")
    // Opens link to google search for "cat"
    window.open('https://www.google.com/search?q=cat&sxsrf=ALiCzsZrnpDQODBiu-y5uAONjny3YMItmA:1656038727296&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiymsyAicX4AhUrDEQIHQq8A2oQ_AUoAXoECAIQAw&biw=965&bih=802&dpr=2', '_blank');
})

key1.addEventListener("mouseover", function( event ) {
    
    event.target.style.borderColor = "#8000ff";
  
    
    setTimeout(function() {
      event.target.style.borderColor = "";
    }, 300);
  }, false);

  key2.addEventListener("mouseover", function( event ) {
    
    event.target.style.borderColor = "#8000ff";
  
    
    setTimeout(function() {
      event.target.style.borderColor = "";
    }, 300);
  }, false);

  key3.addEventListener("mouseover", function( event ) {
    
    event.target.style.borderColor = "#8000ff";
  
    
    setTimeout(function() {
      event.target.style.borderColor = "";
    }, 300);
  }, false);

  key4.addEventListener("mouseover", function( event ) {
    
    event.target.style.borderColor = "#8000ff";
  
    
    setTimeout(function() {
      event.target.style.borderColor = "";
    }, 300);
  }, false);

  key5.addEventListener("mouseover", function( event ) {
    
    event.target.style.borderColor = "#8000ff";
  
    
    setTimeout(function() {
      event.target.style.borderColor = "";
    }, 300);
  }, false);