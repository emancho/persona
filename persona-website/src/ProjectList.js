// Location of Project Details for Gallery Page
// img,
// projTitle,
// projDesc,
// projAction,
// projResponse 

//===== Radio Show Dets
export const listOfProjects = [
    {
        id:1,
        img:  `${process.env.PUBLIC_URL}/images/radio_cover.png`,
        projTitle:'EDDPerience Radio',
        projDesc: 'Tune in to your friendly neighborhood radio host, DJ Eddperience. This project is where I share songs I listen to in the form of a radio show. This project will be a series, so expect updated episodes in the future!',
        projAction:'REDIRECT',
        projResponse: '/radioPage' 
    },
    {
        id:2,
        img: `${process.env.PUBLIC_URL}/images/proj1.png`,
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'This project is a music album of tracks that women wanna dance to. The album is planned to have 6 or more songs and will be inspired by multiple genres (Funk, Disco, R&B, House, Etc). Album cover is based on a true story and is one of my inspirations behind making this album.',
        projAction:'POPUP',
        projResponse: `Author notes: I don't have a release date, so please be patient. I have a vision of what I want the album to be like and am working on making it a reality!! Just wait on it :D`
    },
    {
        id:3,
        img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
        projTitle:'Tech Bro Dracula',
        projDesc: `This project is a script I'm working on using Dracula's public domain usage. The premise is that Dracula is struggling to survive in a world filled with modern-day technology so he attempts to adapt and not die from stravation.`,
        projAction:'POPUP',
        projResponse:`Author notes: Currently working on the rough draft pilot script. Will post when completed...15 pages done so far!`
    },
];

