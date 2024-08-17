// Location of Project Details for Gallery Page

//===== Radio Show Dets
export const listOfProjects = [
    {
        id:1,
        img:  `${process.env.PUBLIC_URL}/images/radio_cover.png`,
        imgTitle: 'Display of eddPerience Radio',
        projTitle:'EDDPerience Radio',
        projDesc: 'Tune in to your friendly neighbourhood radio host, DJ Eddperience, where I share some songs I listen to in the form of a radio show. This will be a series so check it out and get hip to some tracks!',
        projAction:'REDIRECT',
        projResponse: '/radioPage' 
    },
    {
        id:2,
        img: `${process.env.PUBLIC_URL}/images/proj1.png`,
        imgTitle: 'Display of The Gals Just Want to Dance',
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'Currently in the process of making an album consisting of music that women wanna dance to. The album is planned to have 6 songs and will be inspired by multiple genres (Funk, Disco, RnB, House, Etc). Album cover is based on a true story and is one of my inspirations behind making this album.',
        projAction:'POPUP',
        projResponse: `Author notes: I don't have a release date so please be patient. I have a vision of what I want the album to be like and working on making it a reality. First ablum hype!!`
    },
    {
        id:3,
        img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
        title: 'Display of Tech Bro Dracula',
        projTitle:'Tech Bro Dracula',
        projDesc: `This is a screenplay I'm working on. Taking advantage of Dracula's public domain usage, I will be writing my own version of Dracula where he tries to suck blood in a world filled with modern day technology and apps. Rough Draft will most likely be posted on this site when finished!!!`,
        projAction:'POPUP',
        projResponse:`Author notes: Currently working on the rough draft. I have thought about making it into a comic so there might be a storyboard/script combo being posted when the rough draft is completed.`
    },
];

