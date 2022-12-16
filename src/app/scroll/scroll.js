import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const wrapper = document.getElementById("sectionTwo");

const background = document.getElementById("background");
const desktop = document.getElementById("desktop");
const laptop = document.getElementById("laptop");
const cup = document.getElementById("cup");
const character = document.getElementById("character");

export function scroll() {

gsap.registerPlugin(ScrollTrigger);
gsap.set([background, desktop, laptop, cup, character], {
autoAlpha: 0,
});
gsap.fromTo(
background,
{},
{
  autoAlpha: 1,
  duration: 1,
  scrollTrigger: {
    trigger: wrapper,
    start: '20% 30%',
  },
},
);
gsap.fromTo(
desktop,
{ y: '-=100' },
{
  y: 0,
  autoAlpha: 1,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: wrapper,
    start: '20% 30%',
  },
},
);
gsap.fromTo(
laptop,
{ y: '-=100' },
{
  y: 0,
  autoAlpha: 1,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: wrapper,
    start: '20% 30%',
  },
},
);
gsap.fromTo(
cup,
{ x: '+=100' },
{
  x: 0,
  autoAlpha: 1,
  duration: 1,
  delay: 1.5,
  scrollTrigger: {
    trigger: wrapper,
    start: '20% 30%',
  },
},
);
gsap.fromTo(
character,
{},
{
  autoAlpha: 1,
  duration: 1,
  delay: 2,
  scrollTrigger: {
    trigger: wrapper,
    start: '20% 30%',
  },
},
);
}