// audio files used for Radio eps
import ep1Audio from './RadioEp1.mp3';
import ep2Audio from './RadioEp2.mp3';
import ep3Audio from './RadioEp3.mp3';

// image thumbnails used for Radio eps
import ep1_cover from './radio_ep1.png';
import ep2_cover from './radio_ep2.png';
import ep3_cover from './radio_ep3.png';
import ep4_cover from './radio_ep4.png';

// The list of objects where each entry is representing the info for each radio episode
export const episodes = [
  {
    id: 1,
    title:'Episode 1:',
    src: ep1Audio,
    epTitle: 'Trusting the process',
    thumbnail: ep1_cover,
    alt:'A sideway containing pink hue color flowers on green grass. Displays artist watermark and the title: Ep.1'
  },  
  {
    id: 2,
    title:'Episode 2:',
    src: ep2Audio,
    epTitle: 'All About Love',
    thumbnail: ep2_cover,
    alt:'A display of white petaled flowers with bee landed on one of them. Displays artist watermark and the title: Ep.2'
  },
  {
    id: 3,
    title:'Episode 3:',
    src: ep3Audio,
    epTitle: 'Can I Get An Amen',
    thumbnail: ep3_cover,
    alt:'A display of church with a blue sky filled with white clouds. There is a sun in the sky with sunshades and the prayer hand emoji, surrounded by a halo crown. Displays artist watermark and the title: Ep.3'
  }, 
  {
    id: 4,
    title:'Episode 4:',
    src: ep3Audio,
    epTitle: 'Things Gon Be Aight',
    thumbnail: ep4_cover,
    alt:'A display of pink hued flowers after a rainy day. Displays artist watermark and the font "Episode" with a pink hued flame with the number 4 representing the fourth episode.'
  },    
];