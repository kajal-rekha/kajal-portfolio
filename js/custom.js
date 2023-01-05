"use strict";

// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

///////////////////////////////////////////////
// Projects.........
/////////////////////////////////////////////////

const projects = [
  {
    title: "Tera Guard - An anti-virus website",
    description:
      "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
    image: "./images/tera-guard.jpg",
    tools: "html, css, js, parcel",
    liveLink: "https://kajal-rekha.github.io/Anti-virus-website/",
    githubLink: "https://github.com/kajal-rekha/Anti-virus-website.git",
  },

  {
    title: "React Todo App",
    description:
      "This is a todo application built with React.js and backend API server written in Node.js. It's a simple, intuitive, and elegant UI for managing your todo list. It comes with a number of great features such as creating, updating or deleting tasks from the list. ",
    image: "./images/todo-app.png",
    tools: "React.js, Tailwind CSS",
    liveLink: " https://kajal-todo-app.netlify.app/",
    githubLink: "https://github.com/kajal-rekha/react-todo-app.git",
  },
  {
    title: "Spectra Bank - An online bank application",
    description:
      "Spectra Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Spectra Bank!",
    image: "./images/Access-bank.png",
    tools: "html, css, js, parcel",
    liveLink: "https://kajal-rekha.github.io/Access-Bank/",
    githubLink: "https://github.com/kajal-rekha/Access-Bank.git",
  },
];
/////////////////////////////////////////////////
// Application architechture
/////////////////////////////////////////////////

class App {
  constructor() {
    this._stickyNavbar();
    this._activLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._renderProjects();
  }
  ////////////////////////////
  // sticky navbar
  ///////////////////////////

  _stickyNavbar() {
    const navHeight = nav.getBoundingClientRect().height;

    const navObs = new IntersectionObserver(this._stickOperation, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navObs.observe(header);
  }

  _stickOperation(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }

  ///////////////////////////////////////////
  // Link activate
  ////////////////////////////////////////////

  _activLinks() {
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");

        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      })
    );
  }
  /////////////////////////
  // Toggle mobile navbar
  ///////////////////////

  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }
  /////////////////////////////////////////
  // Tag cloud
  //////////////////////////////////////////

  _tagCloud() {
    const myTags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Git",
      "GitHub",
      "Netlify",
      "AJAX",
      "THREE.js",
      "GSAP",
      "Parcel",
      "Webpack",
      "React",
      "Angular",
      "Vue",
      "Svelt",
      "Redux",
      "Next",
      "Nuxt",
      "Gatsby",
      "Node",
      "GS8",
      "Marcas",
      "Mellow",
      "FiraQ",
      "HypeS",
      "Corsel",
      "Keptalor",
    ];

    TagCloud(".content", myTags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }

  /////////////////////////////////////////////////////////////
  // Typewriter effect
  /////////////////////////////////////////////////////////////
  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });

    typeWriter
      .pauseFor(2000)
      .typeString("I am a web developer.")
      .pauseFor(3000)
      .deleteChars(19)
      .typeString("build amazing things for the web.")
      .pauseFor(3000)
      .deleteChars(33)
      .typeString("can also design creative & unique websites.")
      .pauseFor(3000)
      .start();
  }
  ////////////////////////////////////////
  // Projects rendering
  ////////////////////////////////////////
  _renderProjects() {
    projects.forEach((project) => {
      const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a
            >
          </div>
        </div>
    `;

      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}
const myApp = new App();
