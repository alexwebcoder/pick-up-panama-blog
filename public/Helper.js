//variable for hamburger toggle, x and sidenav
const toggle = document.querySelector('.toggle-anchor');
const sidenav = document.querySelector('.sidenav');
const hamburger = document.querySelector('.toggle-anchor');
//variables for opt in form
const eJS_email = document.getElementById('form-input-control-email');
const eJS_sendForm = document.getElementById('send-form');
const alertComment = document.getElementById('alert-comment');


let canSubmit = false;
let reaction = null;

function eJS_set_event_listeners() {
    eJS_email.addEventListener('keyup', eJS_can_submit);
}

eJS_set_event_listeners();

// validate Email Address

function eJS_validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function eJS_can_submit() {
    //check the required field

    let email = eJS_email.value.trim();
    if (email.length > 4) {
        if (eJS_validateEmail(email)) {
            eJS_sendForm.classList.add('activated');
            eJS_sendForm.disabled = false;
            canSubmit = true;
            alertComment.style.visibility = "hidden";

        } else {
            eJS_disabled_submit();
        }
    } else {
        alertComment.style.visibility = "visible";
        eJS_disabled_submit();
    }
};

function eJS_disabled_submit() {
    eJS_sendForm.classList.remove('activated');
    eJS_sendForm.disabled = true;
    canSubmit = false;
    alertComment.style.visibility = "visible";
};

const hideError = () => {
    alertComment.style.visibility = "hidden";

}

document.addEventListener('click', hideError);
eJS_email.addEventListener('blur', hideError);


//opens the sidenav
function toggleMenu() {
    if (sidenav.classList.contains('active')) {
        sidenav.classList.remove('active');

    } else {
        sidenav.classList.add(`active`);
    }

}

// changes menu into an x
const toggleHamburgerEnter = (event) => {
    if (event.keycode === 13 || event.key === 'Enter' || event.keycode === 32 || event.code === 'Space') {
        toggleMenu()
        hamburger.classList.toggle('change')
    }

}

const toggleHamburgerClick = () => {
    hamburger.classList.toggle('change')
}

//Event Listeners

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && sidenav.classList.contains('active')) {
        sidenav.classList.remove('active');
        hamburger.classList.toggle('change')
    }
});
hamburger.addEventListener('keydown', toggleHamburgerEnter, false);
hamburger.addEventListener('click', toggleHamburgerClick, false);
toggle.addEventListener('click', toggleMenu, false);


//when user scrolls page, this function executes

window.onscroll = function() {
    progressBar();
}

const progressBar = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
}

const navLinks = document.querySelectorAll('.item');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.querySelector('.disabled')?.classList.remove('disabled');
        navLink.classList.add('disabled');
    })
})

const sideNavLinks = document.querySelectorAll('.sidenav li');

sideNavLinks.forEach(sideNavLink => {
    sideNavLink.addEventListener('click', () => {
        document.querySelector('.disabled')?.classList.remove('disabled');
        sideNavLink.classList.add('disabled');
    })
})

const footerNavLinks = document.querySelectorAll('.footer li');

footerNavLinks.forEach(footerNavLink => {
    footerNavLink.addEventListener('click', () => {
        document.querySelector('.disabled')?.classList.remove('disabled');
        footerNavLink.classList.add('disabled');
    })
})

// for the sticky header animation

const header = document.querySelector('.header');
const toggleClass = 'is-sticky';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }

});


let images = document.getElementsByClassName('no-right-click');

//prevents right click of image

for (const image of images) {

    image.addEventListener('contextmenu', (e) => {

        e.preventDefault();
        image.draggable = false;
    });

}

const pseudo = document.querySelector('.top-to-bottom');

const scrollUp = (event) => {
    if (event.keycode === 13 || event.key === 'Enter' || event.keycode === 32 || event.code === 'Space') {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }

}

pseudo.addEventListener('keydown', scrollUp, false);


window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
        pseudo.style.display = "block";
    } else {
        pseudo.style.display = "none";

    }
})



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }