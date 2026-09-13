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
          description: "This collaboration is led by Adrienne Sutton (NOAA Pacific Marine Environmental Laboratory) and Galen McKinley (Columbia University) with an international team from CSIR, CSIRO, Stellenbosch University, and University of Washington. This project is supported by Schmidt Sciences, LLC and is part of the Virtual Institute for the Carbon Cycle [(VICC)](https://www.schmidtsciences.org/vicc/). NOAA and CSIRO via the Australian Antarctic Partnership Program also contribute in-kind salary supporting the project.",
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
        },];
