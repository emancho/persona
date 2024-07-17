// Location of Project Details for Gallery Page

//===== Radio Show Dets
export const listOfProjectsPage = [
    {
        id:1,
        img:  `${process.env.PUBLIC_URL}/images/radio_logo.png`,
        imgTitle: 'Display of eddPerience Radio',
        projTitle:'EDDPerience Radio',
        projDesc: 'Tune in to your friendly neighbourhood radio host, DJ [Blank Space], for some songs you can add to your playlist in the format of a radio show.  [Series]',
        projAction:'REDIRECT',
        projResponse: '/radioPage' 
    },
    {
        id:2,
        img: `${process.env.PUBLIC_URL}/images/proj1.png`,
        imgTitle: 'Display of The Gals Just Want to Dance',
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'Currently in the process of making an album consisting of music that women can dance to. The album is planned to have 6 songs and will be a blend of multiple genres (Funk, Disco, RnB, House, Etc). Album cover is based on a true story and is one of my inspirations behind making this album.',
        projAction:'POPUP',
        projResponse: 'Release Date: Aug' 
    },
    {
        id:3,
        img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
        title: 'Display of Tech Bro Dracula',
        projTitle:'Tech Bro Dracula',
        projDesc: `This is a screenplay I'm working on. Taking advantage of Dracula's public domain usage, I writing a version of Dracula where he is attempting to survive in a technologically advanced world. Rough Draft will most likely be posted on this site when finished!!!`,
        projAction:'POPUP',
        projResponse:'Release Date: TBD'
    },
];

