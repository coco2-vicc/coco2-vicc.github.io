// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-constraining-ocean-carbon-with-optimized-observing",
    title: "Constraining Ocean Carbon with Optimized Observing",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications";
          },
        },{id: "nav-capacity-sharing",
          title: "Capacity Sharing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/capacitysharing";
          },
        },{id: "nav-news-amp-updates",
          title: "news &amp; updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news";
          },
        },{id: "news-coco-representatives-at-vicc-launch-in-september-2025-seven-representatives-from-the-coco2-project-attended-the-schmidt-sciences-virtual-institute-for-the-carbon-cycle-convening-in-new-york",
          title: 'COCO₂ representatives at VICC launch In September 2025, seven representatives from the COCO2...',
          description: "",
          section: "News",},{id: "news-coco-project-meeting-in-november-2025-coco2-conducted-its-first-project-meeting-virtually",
          title: 'COCO₂ project meeting In November 2025, COCO2 conducted its first project meeting (virtually)....',
          description: "",
          section: "News",},];
