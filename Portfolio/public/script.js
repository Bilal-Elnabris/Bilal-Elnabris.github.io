const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    rootMargin: "0px 0px 100px 0px",
    threshold: 0.7
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
});
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
});
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop through sectoins to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }

        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}

var typed = new Typed (".auto-type", {
    strings: ["Frontend Developer","UX Designer", "Graphic Designer"],
    typeSpeed: 75,
    backSpeed:60,
    loop: true
})
/*--=========================== Mobile Navigation Bar  ========================--*/
const primaryNav = document.querySelector(".nav__list");
const navToggle = document.querySelector(".mbl-nav-toggle");

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('close');
    const visibility = primaryNav.getAttribute('data-visibile');
   
    if (visibility === "false") {
        primaryNav.setAttribute('data-visibile', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visibile', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});


/*--===========================  AUDIO  ========================--*/


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function playAudio() {
    var audio2 = document.getElementById("audio2");
  audio2.play();
}

function pullAudio() {
    var element = document.getElementById("pull-audio");
  element.play();
}



// function myFunction5() {
//     var element = document.getElementById("change-bg-btn");
//     if (  element.hasAttribute( "playAudio();")) {
//         element.onclick(function() = pullAudio())}
//         else {
//             element.setAttribute( "onClick", "javascript: playAudio();")
//         }
//     };
    
    // element.onclick.removeAttribute("onClick", "javascript: playAudio();");
    // element.onclick.setAttribute("onClick", "javascript: pullAudio();");




/*--===========================  MIXITUP FILTER PORTFOLIO  ========================--*/

  let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*--===========================  Link Active Work ========================--*/

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*--=========================== Work Popup ========================--*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open")
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*--===========================  Contact Background color change ========================--*/

function myFunction() {
    var element = document.getElementById("dark-button");
    element.classList.toggle("dark__mode");
}

function myFunction2() {
    var element = document.getElementById("contact-section-bg");
    element.classList.toggle("background__drop");
}

function threeInOne() {
    myFunction();
    myFunction2();
    glowFilter();
}


/*--===========================  Contact change icon  ========================--*/

function changeIcon() {
    var icon = document.querySelector(".change-icon");
    icon.classList.toggle('uil-sun');
    icon.classList.toggle('uil-moon');
}