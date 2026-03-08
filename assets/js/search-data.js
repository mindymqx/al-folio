// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my curriculum vitae (PDF).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/al-folio/books/the_godfather/";
            },},{id: "news-two-papers-were-conditionally-accepted-by-chi-2026-a-big-thank-you-and-congrats-to-my-collaboraters",
          title: 'Two papers were conditionally accepted by CHI 2026. A big thank you and...',
          description: "",
          section: "News",},{id: "projects-childhood-time",
          title: 'Childhood Time',
          description: "VR Relaxation Experience Design",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/1_project/";
            },},{id: "projects-pinwheel-nebuliser",
          title: 'Pinwheel Nebuliser',
          description: "product design, industrial design",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/3_project/";
            },},{id: "projects-loop-animation",
          title: 'Loop Animation',
          description: "procedual content generation, animation",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/4_project/";
            },},{id: "projects-mind-resonator",
          title: 'Mind Resonator',
          description: "interactive installation, EEG sensor",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/5_project/";
            },},{id: "projects-little-virus",
          title: 'Little Virus',
          description: "generative art, creative coding",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/6_project/";
            },},{id: "projects-posprojector",
          title: 'PosProjector',
          description: "camera-projector system",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/7_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
