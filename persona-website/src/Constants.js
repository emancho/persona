// Here lays the constants file where I'll be listing things that shouldn't change...IN THEORY

// Radio Playback Buttons
export const PLAYBACK_BUTTON_SIZE = 45;

// Radio Playback Buttons
export const VOLUME_BUTTON_SIZE = 18;

// Radio Show Dets
export const RADIO_EPS = [
    {
        id: 1,
        radioTrackList: [
            { id: 'ep_1_song_1', songTitle: 'Boogie Oogie Oogie', artistCredit: 'A Taste of Honey' },
            { id: 'ep_1_song_2', songTitle: 'Freefall', artistCredit: 'KAYTRANADA (ft. Durand Bernarr)' },
            { id: 'ep_1_song_3', songTitle: 'The Highs & The Lows', artistCredit: 'Chance the Rapper (ft. Joey Bada$$)' }, 
            { id: 'ep_1_song_4', songTitle: 'KAYTRANADA_WAITIN_115 BPM', artistCredit: 'Kelela & KAYTRANADA' },
            { id: 'ep_1_song_5', songTitle: 'The Boss', artistCredit: 'Diana Ross' },
            { id: 'ep_1_song6', songTitle: 'Somtimes', artistCredit: 'DMX'}
        ]
    },
    {
        id: 2,
        radioTrackList: [
            { id: 'ep_2_song_1', songTitle: 'Test 1', artistCredit: 'Doo Doo'},
            { id: 'ep_2_song_2', songTitle: 'Test 2', artistCredit: 'Boo Boo'},
            { id: 'ep_2_song_3', songTitle: 'Test 3', artistCredit: 'Pee Pee' } 
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
  'Turning My Thoughts Into Reality',
  "A Creative Mind Is Useless Under Capitalism When It Doesn't Make Money",
  'Did You Drink Water Yet?',
  'Do Something For Yourself Today',
  'Music Making - In Progress',
  'Tech Bro Dracula - In Progress',
  'The First Episode of Edd Radio is Out!!!',
  'Have You Signed Up for the Newsletter?',
  "Don't Be Selfish With Your Art. SHARE IT!!!",
  "Believe In The Me That Believes In You"
];

