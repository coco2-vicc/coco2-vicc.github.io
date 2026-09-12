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
          description: "COCO2 team members",
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
            window.location.href = "/data";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news";
          },
        },];
