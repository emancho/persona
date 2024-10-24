// Radio Playback Buttons
export const PLAYBACK_BUTTON_SIZE = 45;

// Radio Playback Buttons
export const VOLUME_BUTTON_SIZE = 18;

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
];

// The list of Social Vinyl
export const VINYL_LIST = [
    {
        id: 1,
        name: 'Tik Tok', 
        path: process.env.PUBLIC_URL + '/images/tok_vinyl_case_only.png',
        altPath: process.env.PUBLIC_URL + '/images/tok_vinyl.png',
        descipt: 'Tik Tok Vinyl connecting to social media',
        webref: 'https://www.tiktok.com/@edollarsigns'
    }
    ,{
        id:2,
        name: 'Instagram', 
        path: process.env.PUBLIC_URL + '/images/insta_vinyl_case_only.png',
        altPath: process.env.PUBLIC_URL + '/images/insta_vinyl.png',
        descipt: 'Instagram Vinyl connecting to social media',
        webref: 'https://www.instagram.com/ededd_or_eddy'
    }
]

// The banner text for the HomePage
export const bannerTexts = [
  'The Third Episode of EddPerience Radio is out NOW!!!',
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

