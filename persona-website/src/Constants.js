// Radio Playback Buttons
export const PLAYBACK_BUTTON_SIZE = 45;

// Radio Playback Buttons
export const VOLUME_BUTTON_SIZE = 18;

if (!process.env.REACT_APP_CDN_DOMAIN) {
    throw new Error("CDN_DOMAIN environment variable is not set.");
}
const DOMAIN = process.env.REACT_APP_CDN_DOMAIN;
export const RADIO_EP_INFO = [
    {
      id: 1,
      title:'Episode 1:',
      src: DOMAIN + 'RadioEp1.mp3',
      epTitle: 'Trusting the process',
      thumbnail: DOMAIN + 'radio_ep1.png',
      alt:'A sideway containing pink hue color flowers on green grass. Displays artist watermark and the title: Ep.1'
    },  
    {
      id: 2,
      title:'Episode 2:',
      src: DOMAIN + 'RadioEp2.mp3',
      epTitle: 'All About Love',
      thumbnail: DOMAIN + 'radio_ep2.png',
      alt:'A display of white petaled flowers with bee landed on one of them. Displays artist watermark and the title: Ep.2'
    },
    {
      id: 3,
      title:'Episode 3:',
      src: DOMAIN + 'RadioEp3.mp3',
      epTitle: 'Can I Get An Amen',
      thumbnail: DOMAIN + 'radio_ep3.png',
      alt:'A display of church with a blue sky filled with white clouds. There is a sun in the sky with sunshades and the prayer hand emoji, surrounded by a halo crown. Displays artist watermark and the title: Ep.3'
    }, 
    {
      id: 4,
      title:'Episode 4:',
      src: DOMAIN + 'RadioEp4.mp3',
      epTitle: 'Things Gon Be Aight',
      thumbnail: DOMAIN + 'radio_ep4.png',
      alt:'A display of pink hued flowers after a rainy day. Displays artist watermark and the font "Episode" with a pink hued flame with the number 4 representing the fourth episode.'
    },
    {
      id: 5,
      title:'Episode 5:',
      src: DOMAIN + 'RadioEp5.mp3',
      epTitle: 'Blue Eyed Soul White Dragon',
      thumbnail: DOMAIN + 'radio_ep5.png',
      alt:'Modified version of the Blue Eyes White Dragon from YuGiOh. Displays Card of the Dragon with black shades and a bass guitar.'
    },
    {
      id: 6,
      title:'Episode 6:',
      src: DOMAIN + 'RadioEp6.mp3',
      epTitle: 'High School of Rock',
      thumbnail: DOMAIN + 'radio_ep6.png',
      alt:'Edited a highschool photo of myself. Has me with green flame hair, red shades and red scarf with white stars and an easter egg with Rawr XD on the paper'
    },
    {
      id: 7,
      title:'Episode 7:',
      src: DOMAIN + 'RadioEp7.mp3',
      epTitle: 'For All The Lovers',
      thumbnail: DOMAIN + 'radio_ep7.png',
      alt:'An edited picture of Arthur holding a vinyl with a heart shaped labeling with heart shaped glasses and flame hair.'
    },
    {
      id: 8,
      title:'Episode 8:',
      src: DOMAIN + 'RadioEp8.mp3',
      epTitle: 'Jazz Hands',
      thumbnail: DOMAIN + 'radio_ep8.png',
      alt:'An edited picture of Jazz players playing instruments. They all have music notes for heads except one that has flame hair and sleek shades.'
    }
  ];


// Radio Show Dets
export const RADIO_EPS = [
    {
        // Episode 1
        id: 1,
        radioTrackList: [
            { id: 'ep_1_song_1', songTitle: 'Boogie Oogie Oogie', artistCredit: 'A Taste of Honey' },
            { id: 'ep_1_song_2', songTitle: 'Freefall', artistCredit: 'KAYTRANADA (ft. Durand Bernarr)' },
            { id: 'ep_1_song_3', songTitle: 'The Highs & The Lows', artistCredit: 'Chance the Rapper (ft. Joey Bada$$)' }, 
            { id: 'ep_1_song_4', songTitle: 'KAYTRANADA_WAITIN_115 BPM', artistCredit: 'Kelela & KAYTRANADA' },
            { id: 'ep_1_song_5', songTitle: 'The Boss', artistCredit: 'Diana Ross' },
            { id: 'ep_1_song_6', songTitle: 'Somtimes', artistCredit: 'DMX'}
        ]
    },
    {
        // Episode 2
        id: 2,
        radioTrackList: [
            { id: 'ep_2_song_1', songTitle: 'A Little Bit of Love', artistCredit: 'Brenda Russell'},
            { id: 'ep_2_song_2', songTitle: 'Born to Love', artistCredit: 'Peabo Bryson & Roberta Flack'},
            { id: 'ep_2_song_3', songTitle: 'I Love Me Some Him', artistCredit: 'Toni Braxton'}, 
            { id: 'ep_2_song_4', songTitle: 'Luv U Better', artistCredit: 'LL Cool J'},
            { id: 'ep_2_song_5', songTitle: 'Ribbon In the Sky', artistCredit: 'Stevie Wonder' },
            { id: 'ep_2_song_6', songTitle: 'Share Your Love ', artistCredit: 'Angela Bofill' }
        ]
    },
    {
        // Episode 3
        id: 3,
        radioTrackList: [
            { id: 'ep_3_song_1', songTitle: 'Full Moon', artistCredit: 'Brandy'},
            { id: 'ep_3_song_2', songTitle: 'Love Will Save the Day', artistCredit: 'Whitney Houston'},
            { id: 'ep_3_song_3', songTitle: 'Just Like', artistCredit: 'Marvin Gaye'}, 
            { id: 'ep_3_song_4', songTitle: 'One Step Ahead', artistCredit: 'Aretha Franklin'},
            { id: 'ep_3_song_5', songTitle: 'Nothing Can Stop Me', artistCredit: 'Cissy Houston' },
            { id: 'ep_3_song_6', songTitle: 'Never Knew Love Like This Before', artistCredit: 'Stephanie Mills' }
        ]
    },
    {
        // Episode 4
        id: 4,
        radioTrackList: [
            { id: 'ep_4_song_1', songTitle: 'You Gotta Be', artistCredit: `Des’ree`},
            { id: 'ep_4_song_2', songTitle: 'Cranes in the Sky', artistCredit: 'Solange'},
            { id: 'ep_4_song_3', songTitle: 'Alright', artistCredit: 'Kendrick Lamar'}, 
            { id: 'ep_4_song_4', songTitle: 'Golden', artistCredit: 'Jill Scott'},
            { id: 'ep_4_song_5', songTitle: 'It Gets Better (With Time)', artistCredit: 'The Internet' },
            { id: 'ep_4_song_6', songTitle: `Someday We’ll All Be Free`, artistCredit: 'Donny Hathaway' }
        ]
    },
    {
        // Episode 5
        id: 5,
        radioTrackList: [
            { id: 'ep_5_song_1', songTitle: 'Nakamarra', artistCredit: `Hiatus Kaiyote (ft Q-Tip)`},
            { id: 'ep_5_song_2', songTitle: 'The List', artistCredit: 'Moonchild'},
            { id: 'ep_5_song_3', songTitle: "Leavin'", artistCredit: 'Jesse McCartney'}, 
            { id: 'ep_5_song_4', songTitle: 'Take It From Here', artistCredit: 'Justin Timberlake'},
            { id: 'ep_5_song_5', songTitle: 'Wake Up Alone', artistCredit: 'Amy Winehouse' },
            { id: 'ep_5_song_6', songTitle: 'Open Your Eyes', artistCredit: 'Bobby Caldwell' }
        ]
    },
    {
        // Episode 6
        id: 6,
        radioTrackList: [
            { id: 'ep_6_song_1', songTitle: 'When You Were Young', artistCredit: 'The Killers'},
            { id: 'ep_6_song_2', songTitle: 'Thnks fr th Mmrs', artistCredit: 'Fall Out Boy'},
            { id: 'ep_6_song_3', songTitle: 'An Honest Mistake', artistCredit: 'The Bravery'}, 
            { id: 'ep_6_song_4', songTitle: 'Sun Red Sky Blue', artistCredit: 'Kenna'},
            { id: 'ep_6_song_5', songTitle: 'Laser Life', artistCredit: 'The Blood Brothers'},
            { id: 'ep_6_song_6', songTitle: 'Wolf Like Me', artistCredit: 'TV On The Radio'}
        ]
    },
    {
        // Episode 7
        id: 7,
        radioTrackList: [
            { id: 'ep_7_song_1', songTitle: 'If You Love Me', artistCredit: 'Brownstone'},
            { id: 'ep_7_song_2', songTitle: 'All That I Can Say', artistCredit: 'Mary J Blige'},
            { id: 'ep_7_song_3', songTitle: 'Closer (Ode to You)', artistCredit: 'Ravyn Lenae'}, 
            { id: 'ep_7_song_4', songTitle: 'Be Your Girl (Kaytranada Mix)', artistCredit: 'Teedra Moses (ft Kaytranada)'},
            { id: 'ep_7_song_5', songTitle: 'I Knew That Love', artistCredit: 'Eighties Ladies'},
            { id: 'ep_7_song_6', songTitle: 'Love Can Be', artistCredit: 'Vince Staples'},
            { id: 'ep_7_song_7', songTitle: 'Cameo Lover', artistCredit: 'Kimbra'},
            { id: 'ep_7_song_8', songTitle: 'Rock With You', artistCredit: 'Michael Jackson'},
            { id: 'ep_7_song_9', songTitle: "Why Don't We Fall in Love", artistCredit: 'Amerie'}, 
            { id: 'ep_7_song_10', songTitle: 'Nite and Day', artistCredit: 'Al B. Sure!'},
            { id: 'ep_7_song_11', songTitle: 'All I Do', artistCredit: 'Stevie Wonder'},
            { id: 'ep_7_song_12', songTitle: 'You Don’t Know My Name', artistCredit: 'Alicia Keys'},
            { id: 'ep_7_song_13', songTitle: 'Make It Last Forever', artistCredit: 'Keith Sweat'},
            { id: 'ep_7_song_14', songTitle: 'A Song About Love', artistCredit: 'Lonnie Liston Smith & the Cosmic Echoes'},
            { id: 'ep_7_song_15', songTitle: 'Love, Love, Love', artistCredit: 'Donny Hathaway'},
            { id: 'ep_7_song_16', songTitle: 'Tender Kisses', artistCredit: 'Tracie Spencer'},
            { id: 'ep_7_song_17', songTitle: 'Whenever, Whatever, Wherever', artistCredit: 'Maxwell'},
        ]
    },
    {
        // Episode 8
        id: 8,
        radioTrackList: [
            { id: 'ep_8_song_1', songTitle: 'Seven Steps to Heaven', artistCredit: 'Miles Davis'},
            { id: 'ep_8_song_2', songTitle: 'Wave', artistCredit: 'Ahmad Jamal Trio'},
            { id: 'ep_8_song_3', songTitle: 'Nardis', artistCredit: 'Bill Evans Trio'}, 
            { id: 'ep_8_song_4', songTitle: 'Nothing Serious', artistCredit: 'Roy Hargrove'},
            { id: 'ep_8_song_5', songTitle: 'Rush', artistCredit: 'Seatbelts'},
            { id: 'ep_8_song_6', songTitle: 'My Favorite Things', artistCredit: 'John Coltrane'}
        ]
    },
];

// The list of Social Vinyl
export const VINYL_LIST = [
    {
        id: 1,
        name: 'Tik Tok', 
        path: process.env.REACT_APP_CDN_DOMAIN + 'tok_vinyl_case_only.png',
        altPath: process.env.REACT_APP_CDN_DOMAIN + 'tok_vinyl.png',
        descipt: 'Tik Tok Vinyl connecting to social media',
        webref: 'https://www.tiktok.com/@edollarsigns'
    }
    ,{
        id:2,
        name: 'Instagram', 
        path: process.env.REACT_APP_CDN_DOMAIN + 'insta_vinyl_case_only.png',
        altPath: process.env.REACT_APP_CDN_DOMAIN + 'insta_vinyl.png',
        descipt: 'Instagram Vinyl connecting to social media',
        webref: 'https://www.instagram.com/ededd_or_eddy'
    }
]

// The banner text for the HomePage
export const bannerTexts = [
  'The Eighth Episode of EddPerience Radio is out NOW!!!',
  'Turning My Thoughts Into Reality',
  "A Creative Mind Is Useless Under Capitalism When It Doesn't Make Money",
  'Did You Drink Water Yet?',
  'Do Something For Yourself Today',
  'Music Making - In Progress',
  'Tech Bro Dracula - In Progress',
  'Have You Signed Up for the Newsletter?',
  "Don't Be Selfish With Your Art. SHARE IT!!!",
  "Believe In The Me That Believes In You"
];

