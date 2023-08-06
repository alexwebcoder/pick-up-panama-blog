const toggle = document.querySelector('.toggle-anchor');
const sidenav = document.querySelector('.sidenav');
const hamburger = document.querySelector('.toggle-anchor');
const eJS_email = document.getElementById('form-input-control-email');
const eJS_sendForm = document.getElementById('send-form');


let canSubmit = false;
let reaction = null;

function eJS_set_event_listeners() {
  eJS_email.addEventListener('keyup', eJS_can_submit);
}
eJS_set_event_listeners();


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
      // alertComment.style.visibility = "hidden";
      if (eJS_validateEmail(email)) {
          eJS_sendForm.classList.add('activated');
          eJS_sendForm.disabled = false;
          canSubmit = true;

      }else {
          eJS_disabled_submit();
      }
  } else {
      // alertComment.style.visibility = "visible";
      eJS_disabled_submit();
  }
};


function eJS_disabled_submit() {
  eJS_sendForm.classList.remove('activated');
  eJS_sendForm.disabled = true;
  canSubmit = false;
};


//opens the sidenav
function toggleMenu() {
  if (sidenav.classList.contains('active')) {
    sidenav.classList.remove('active'); 
    
  } else {
    sidenav.classList.add(`active`);
  }
  
}

// changes menu into am x
const toggleHamburgerEnter = (event) => {
   if (event.keycode === 13 || event.key === 'Enter' || event.keycode === 32 || event.code === 'Space')  {
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

window.onscroll = function() {
  myFunction();
}

const myFunction = () => {
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

// for the sticky header animation

const header = document.querySelector('.header');
const toggleClass = 'is-sticky';

window.addEventListener('scroll', ()=> {
   const currentScroll = window.pageYOffset;
     if (currentScroll > 150) {
      header.classList.add(toggleClass);
     } else {
      header.classList.remove(toggleClass);
     }

});
