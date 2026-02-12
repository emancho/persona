# persona-website

This project is a personal website built to showcase creative projects, share information, and host a radio show feature.

## Tech Stack

This project is a single-page application (SPA) built with:

*   **Frontend Framework:** React (v18.2.0)
*   **UI Library:** Material UI (v5) for components, icons, and styling.
*   **Routing:** React Router (v6) for client-side navigation.
*   **Animations:** Anime.js (v3.2.2) for dynamic visual effects.
*   **Build Tool:** Create React App (`react-scripts` v5.0.1)
*   **Language:** JavaScript (with JSX)
*   **Testing:** Jest and React Testing Library.

## Pages and Components

The website is structured into several main pages:

### 1. Home Page (`src/Pages/HomePage.js`)

*   **Description:** The main landing page, designed with a music player-like interface for navigation to other sections of the website.
*   **Key Components:**
    *   `WebpageTemplate`: Provides the overall page structure including a banner.
    *   `HomePageMainContent`: Displays the central content of the home page, including an image and navigation buttons.
    *   Material UI Icons (`PlayArrowIcon`, `SkipNextIcon`, `SkipPrevIcon`): Used for intuitive navigation buttons linking to About, Projects, and Contact pages respectively.
    *   `AnimatedBanner`: Provides dynamic visual effects for the top banner section.
    *   `NavBar`: Facilitates consistent navigation across the site.

### 2. About Page (`src/Pages/AboutPage.js`)

*   **Description:** Provides background information about the website owner, including a bio and a visually engaging "Behind the Artist" section.
*   **Key Components:**
    *   `WebpageTemplate`: Standard page layout.
    *   `MainContentComponent`: Structures the title, an image section, and a text bio section.
    *   `AnimatedText`: Used for the "Behind the Artist" title.
    *   `ArtistImage`: Displays the owner's image.
    *   `Typography` (Material UI): For displaying the bio text.

### 3. Contact Page (`src/Pages/ContactPage.js`)

*   **Description:** Contains links to social media profiles and a newsletter signup form.
*   **Key Components:**
    *   `WebpageTemplate`: Standard page layout.
    *   `MainContentComponent`: Structures the title, newsletter section, and social links section.
    *   `AnimatedText`: Used for the "Contact Me" title.
    *   `NewsletterSection` (internal component): Features a Material UI `Button` linking to an external Google Form for newsletter signup.
    *   `SocialLinksSection` (internal component): Displays social media links using `HoverableCardMedia` components arranged in a Material UI `Grid`. Data for links is sourced from `VINYL_LIST` in `Constants.js`.

### 4. Projects Page (`src/Pages/ProjectsPage.js`)

*   **Description:** A gallery showcasing various creative projects. Selecting a project can reveal author notes or redirect to more details.
*   **Key Components:**
    *   `WebpageTemplate`: Standard page layout.
    *   `MainContentComponent`: Structures the title, a caption, and the project grid.
    *   `AnimatedText`: Used for "The Gallery" title.
    *   `GridListComponent`: Displays projects in a grid format. Data for projects is sourced from `listOfProjects` in `ProjectList.js`.
    *   `Typography` (Material UI): For the introductory caption.

### 5. Radio Page (`src/Pages/RadioPage.js`)

*   **Description:** Hosts "EDD-Perience Radio," allowing users to listen to radio episodes. It includes playback controls, an episode image, a progress bar, and a tracklist for each episode.
*   **Key Components:**
    *   `WebpageTemplate`: Standard page layout.
    *   `MainContentComponent`: Structures the title, track controls, and the radio episode tracklist.
    *   `AnimatedText`: Used for the "EDD-Perience Radio" title.
    *   `TrackControlComponent`: Manages and displays audio playback controls (play/pause, next/prev), progress bar, and current episode information.
    *   `RadioList` (from `RadioListComponent.js`): Displays the list of songs/segments for the current radio episode, allowing users to click to jump to specific timestamps.
*   **Functionality:**
    *   Audio playback for radio episodes.
    *   Navigation between different episodes.
    *   Timestamp navigation within an episode via the tracklist.
*   **Data Source:** Episode information (`RADIO_EP_INFO`) and tracklists (`RADIO_EPS`) are sourced from `Constants.js`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

