// modules
import bodyLoaded from './modules/body-loaded.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import LettersAnimation from './modules/letters-animation';

// init modules
bodyLoaded();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const sloganAnimation = new LettersAnimation(`.intro__title`, {
  duration: 200,
  classForActivate: `active`,
  property: `transform`,
  delay: 0
});

const dateAnimation = new LettersAnimation(`.intro__date`, {
  duration: 200,
  classForActivate: `active`,
  property: `transform`,
  delay: 500
});

setTimeout(() => {
  sloganAnimation.runAnimation();
  dateAnimation.runAnimation();
}, 500);
