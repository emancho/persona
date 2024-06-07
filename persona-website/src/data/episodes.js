// audio files used for Radio eps
import world from './We_Are_The_World.mp3';
import test from './test.wav'

// audio thumbnails used for Radio eps
import jackson from './jackson.jpeg';
import ep1 from './radio_ep1.png'

// The list of objects where each entry is representing the info for each radio episode
export const episodes = [
  {
    id: 1,
    title:'Episode 1:',
    src: test,
    epTitle: 'Trusting the process',
    thumbnail: ep1,
    alt:'A sideway containing pink hue color flowers on green grass'
  },  
  {
    id: 2,
    title: 'Michael Jackson – We Are The World',
    src: world,
    epTitle: 'Michael Jackson',
    thumbnail: jackson,
    alt:'test image'
  }
];