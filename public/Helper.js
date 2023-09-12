//variable for hamburger toggle, x and sidenav
const toggle = document.querySelector('.toggle-anchor');
const sidenav = document.querySelector('.sidenav');
const hamburger = document.querySelector('.toggle-anchor');
//variables for opt in form
const eJS_email = document.getElementById('form-input-control-email');
const eJS_sendForm = document.getElementById('send-form');
const alertComment = document.getElementById('alert-comment');
//variables for contact us form
const eJS_email2 = document.getElementById('form-input-control-email-address-2');
const eJS_sendForm2 = document.getElementById('send-form-2');
const alertComment2 = document.getElementById('alert-comment-2');
const alertComment3 = document.getElementById('alert-comment-3');
const alertComment4 = document.getElementById('alert-comment-4');
const eJS_message = document.getElementById('form-textarea-control-opinion');
const eJS_name = document.getElementById('form-input-control-last-name');


let canSubmit = false;
let reaction = null;

function eJS_set_event_listeners() {
   eJS_email.addEventListener('keyup', eJS_can_submit);
}

eJS_set_event_listeners();

function eJS_set_event_listenersContact() {
   eJS_email2.addEventListener('keyup', eJS_can_submit2);
   eJS_message.addEventListener('keyup', eJS_can_submit2);
   eJS_name.addEventListener('keyup', eJS_can_submit2);
}
eJS_set_event_listenersContact();


// eJS_set_event_listeners();

// validate Email Address

function eJS_validateEmail(email) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

function eJS_validateEmail2(email2) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email2).toLowerCase());
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

function eJS_can_submit2() {
   //check the required field

   let email2 = eJS_email2.value.trim();
   let message = eJS_message.value.trim();
   let name = eJS_name.value.trim();
   if (eJS_validateEmail2(email2)) {
      alertComment2.style.visibility = "hidden";
      //maybe remove this email length condition
      if (message.length > 4 && email2.length > 4 && name.length > 1) {
         if (eJS_validateEmail2(email2)) {
            eJS_sendForm2.classList.add('activated');
            eJS_sendForm2.disabled = false;
            canSubmit = true;

         } else {
            eJS_disabled_submit2();
         }
      }
   } else {
      alertComment2.style.visibility = "visible";
      eJS_disabled_submit2();
   }
};


function eJS_disabled_submit() {
   eJS_sendForm.classList.remove('activated');
   eJS_sendForm.disabled = true;
   canSubmit = false;
   alertComment.style.visibility = "visible";
};

function eJS_disabled_submit2() {
   eJS_sendForm2.classList.remove('activated');
   eJS_sendForm2.disabled = true;
   canSubmit = false;
   alertComment2.style.visibility = "visible";
};

const hideError = () => {
   alertComment.style.visibility = "hidden";
   alertComment2.style.visibility = "hidden";
   alertComment3.style.visibility = "hidden";
   alertComment4.style.visibility = "hidden";

}

document.addEventListener('click', hideError);
eJS_email.addEventListener('blur', hideError);
eJS_email2.addEventListener('blur', hideError);


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
      console.log('enter key was pressed')
      toggleMenu()
      hamburger.classList.toggle('change')
   }

}

const toggleHamburgerClick = () => {
   hamburger.classList.toggle('change')
   console.log('clicked')
}

//Event Listeners

document.addEventListener('keydown', evt => {
   if (evt.key === 'Escape' && sidenav.classList.contains('active')) {
      sidenav.classList.remove('active');
      hamburger.classList.toggle('change')
   }
});
hamburger.addEventListener('keydown', toggleHamburgerEnter, false)
hamburger.addEventListener('click', toggleHamburgerClick, false)
toggle.addEventListener('click', toggleMenu, false);


//when user scrolls page, this function executes

window.onscroll = function () {
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