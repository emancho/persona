// audio files used for Radio eps
import ep1Audio from './RadioEp1.mp3'
// import ep2Audio from './RadioEp2.mp3'

// image thumbnails used for Radio eps
import ep1_cover from './radio_ep1.png'
import ep2_cover from './radio_ep2.png'

// The list of objects where each entry is representing the info for each radio episode
export const episodes = [
  {
    id: 1,
    title:'Episode 1:',
    src: ep1Audio,
    epTitle: 'Trusting the process',
    thumbnail: ep1_cover,
    alt:'A sideway containing pink hue color flowers on green grass. Displays artist watermark and the title Ep.1'
  },  
  {
    id: 2,
    title:'Episode 2:',
    src: ep1Audio,
    epTitle: 'All About Love',
    thumbnail: ep2_cover,
    alt:'A display of white petaled flowers with bee landed on one of them. Displays artist watermark and the title Ep.2'
  },  
];