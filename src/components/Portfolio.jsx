import React from "react";
import blog from "../assets/portfolio-img/blog.png";
import cartPage from "../assets/portfolio-img/cartPage.png";
import library from "../assets/portfolio-img/library.png";
import priceCard from "../assets/portfolio-img/priceCard.png";
import weather from "../assets/portfolio-img/weather.png";
import dictionary from "../assets/portfolio-img/dictionary.png";
import music from "../assets/portfolio-img/music.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      githubLink:
        "https://github.com/karthick2499/Guvi-b49-karthick/tree/1f24ebcd092c23d22bed7004aa046f2fce5e50e0/Task-React/React-Router-Dom-V2/my-app",
      livePreviewLink:
        "https://65003a04db4b094f7fa187c4--timely-cactus-f25cca.netlify.app/",
    },
    {
      id: 2,
      src: cartPage,
      githubLink:
        "https://github.com/karthick2499/Guvi-b49-karthick/tree/c433cee5fc41e2462121bb0ed020f79e63a3007b/Task-React/Context-Api/my-app",
      livePreviewLink:
        "https://65003de5064a104d5d4553ea--dashing-chimera-b6d491.netlify.app/",
    },
    {
      id: 3,
      src: library,
      githubLink:
        "https://github.com/karthick2499/Guvi-b49-karthick/tree/834931a45f6ca64902079dae5697ce7bd3101ae3/Task-React/Formik-Validation/my-app",
      livePreviewLink:
        "https://65004c07ece3556367c203ab--fancy-treacle-863597.netlify.app/",
    },
    {
      id: 4,
      src: priceCard,
      githubLink:
        "https://github.com/karthick2499/Guvi-b49-karthick/tree/d6811de52ab5ec0b781fcb11fa1ce79c639b1de5/Task-React/Price-Card/my-app",
      livePreviewLink:
        "https://64ecdc5d854d2d3d17531543--tubular-pixie-bcfb35.netlify.app/",
    },
    {
      id: 5,
      src: music,
      githubLink:
        "https://github.com/karthick2499/music-player-frontend",
      livePreviewLink:
        "https://artysium-edn.netlify.app/",
    },
    {
      id: 6,
      src: weather,
      githubLink:
        " https://github.com/karthick2499/Guvi-b49-karthick/tree/d6811de52ab5ec0b781fcb11fa1ce79c639b1de5/Api/Weather",
      livePreviewLink:
        " https://64ece12e854efe4c2e3a5bd6--loquacious-puffpuff-5de68b.netlify.app/",
    },
    {
      id: 7,
      src: dictionary,
      githubLink:
        ": https://github.com/karthick2499/Guvi-b49-karthick/tree/d6811de52ab5ec0b781fcb11fa1ce79c639b1de5/Api/PublicApi/Dictionary",
      livePreviewLink:
        "https://64ece291d6186f4a9aa144f5--deft-florentine-d083e3.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githubLink, livePreviewLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={livePreviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Live Preview
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
