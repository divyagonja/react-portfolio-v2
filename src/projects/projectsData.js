import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "NETFLIX CLONE",
    image: projectOne,
    description: (
      <>
        <p>
          <ul>
            <li>HTML/CSS: Structure and style.</li>
            <li>JavaScript: Interactivity.</li>
            <li>Frameworks: React/Vue/Angular.</li>
            <li>API Integration: Fetch data.</li>
            <li>Authentication: Secure logins.</li>
            <li>Deployment: Netlify.</li>
</ul>
        </p>
      </>
    ),
    github: "https://github.com/divyagonja/NetflixClone",
    demo: "https://netflix-clone-appp.netlify.app/",
  },
  2: {
    title: "WEATHER APP",
    image: projectTwo,
    description: (
      <>
        <p>
        <ul>
            <li>HTML/CSS: Structure and style.</li>
            <li>JavaScript: Dynamic content and interactions.</li>
            <li>API Integration: Fetch weather data from a weather API e.g., OpenWeatherMap.</li>
            <li>Geolocation: Utilize browser geolocation API for current location detection.</li>
</ul>
        </p>
      </>
    ),
    github: "https://github.com/divyagonja",
    demo: "https://weatherr-checkapp.netlify.app/",
  },
  3: {
    title: "MY OWN PORTFOLIO",
    image: projectThree,
    description: (
      <>
        <p>
        <ul>
            <li>UI Design: Create the layout using HTML/CSS.</li>
            <li>Interactivity: Add dynamic features with JavaScript.</li>
            <li>Framework Integration: Use React.js or Vue.js for efficient UI management.</li>
</ul>
        </p>
      </>
    ),
    github: "https://github.com/divyagonja",
    demo: "https://cryptoocurrency-app.netlify.app/",
  },
};

export default projects;
