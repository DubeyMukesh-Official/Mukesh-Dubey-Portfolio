/* =========================================================
   MUKESH PORTFOLIO — SCRIPT.JS
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {
  blog: {
    number: "01",
    type: "CONTENT EXPERIENCE",
    overline: "React.js · REST API · React Router",
    title: "Blog Application",
    description:
      "A responsive blog application that renders REST API content through reusable React components and gives readers a clear, simple way to explore posts.",
    tags: ["React.js", "REST API", "Responsive UI"],
    link: "https://blog-lyart-alpha-17.vercel.app/",
    visual: "blog-visual",
  },

  shoe: {
    number: "02",
    type: "FRONTEND EXPERIENCE",
    overline: "React.js · Responsive UI · Product cards",
    title: "Shoe Mart",
    description:
      "A responsive shoe-shopping interface with reusable product cards and adaptable layouts designed for easy browsing on desktop and mobile screens.",
    tags: ["React.js", "Responsive design", "Component UI"],
    link: "https://shoe-mart-q6gvl1xda-dubeymukesh-officials-projects.vercel.app/",
    visual: "shoe-visual",
  },

  hotel: {
    number: "03",
    type: "JAVA CONSOLE APPLICATION",
    overline: "Core Java · JDBC · MySQL",
    title: "Hotel Booking System",
    description:
      "A console-based hotel reservation system with customer management, room availability, booking workflows, and CRUD operations using OOP principles.",
    tags: ["Core Java", "JDBC", "MySQL"],
    link: "https://github.com/DubeyMukesh-Official",
    visual: "hotel-visual",
    sourceOnly: true,
  },

  ridex: {
    number: "04",
    type: "FULL STACK APPLICATION",
    overline: "Spring Boot · React.js · MySQL · Razorpay",
    title: "RideX",
    description:
      "A bike showroom management application with separate user and admin modules, product inventory, cart, wishlist, coupons, REST APIs, JWT authentication, and Razorpay payments.",
    tags: ["Spring Boot", "JWT", "MySQL", "Razorpay"],
    link: "https://ride-x-rouge.vercel.app/",
    visual: "ridex-visual",
  },

  safety: {
    number: "05",
    type: "COLLEGE PROJECT",
    overline: "Python · Django · HTML · CSS",
    title: "Women Safety & Emergency Rescue",
    description:
      "A college academic project designed around emergency assistance. Users can trigger an emergency alert so selected friends or relatives can receive notifications through email or WhatsApp.",
    tags: ["Python", "Django", "HTML/CSS", "Emergency alerts"],
    link: "https://github.com/DubeyMukesh-Official",
    visual: "safety-visual",
    sourceOnly: true,
  },
};


/* =========================================================
   PROJECT ELEMENTS
   ========================================================= */

const tabButtons = document.querySelectorAll(".project-tab");
const display = document.querySelector(".project-display");

const projectCopy = display?.querySelector(".project-copy");
const projectVisual = display?.querySelector(".project-visual");
const projectType = display?.querySelector(".display-type");
const projectCode = display?.querySelector(".display-code");
const projectCounter = display?.querySelector("[data-current-project]");
const liveLink = display?.querySelector("[data-live-link]");


/* =========================================================
   PROJECT VISUALS
   ========================================================= */

function projectArt(type) {
  switch (type) {
    case "blog-visual":
      return `
        <b>READ</b>
        <i></i>
        <i></i>
        <i></i>
      `;

    case "hotel-visual":
      return `
        <b>CHECK-IN</b>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      `;

    case "ridex-visual":
      return `
        <b>RX</b>
        <i></i>
        <i></i>
        <i></i>
      `;

    case "safety-visual":
      return `
        <b>EMERGENCY</b>
        <i></i>
        <i></i>
        <i></i>
      `;

    case "shoe-visual":
    default:
      return `
        <i></i>
        <i></i>
        <i></i>
        <b>SM</b>
      `;
  }
}


/* =========================================================
   SET PROJECT
   ========================================================= */

function setProject(key) {
  const project = projects[key];

  if (!project || !display) {
    return;
  }

  /* Active tab */

  tabButtons.forEach((button) => {
    const active = button.dataset.project === key;

    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });


  /* Animation */

  display.classList.add("is-changing");


  window.setTimeout(() => {

    /* Top information */

    if (projectCode) {
      projectCode.textContent = `CASE / ${project.number}`;
    }

    if (projectType) {
      projectType.textContent = project.type;
    }


    /* Visual */

    if (projectVisual) {
      projectVisual.className = `project-visual ${project.visual}`;
      projectVisual.innerHTML = projectArt(project.visual);
    }


    /* Project content */

    if (projectCopy) {
      projectCopy.innerHTML = `
        <p class="project-overline">
          ${project.overline}
        </p>

        <h3>
          ${project.title}
        </h3>

        <p class="project-description">
          ${project.description}
        </p>

        <ul class="project-tags">
          ${project.tags
            .map((tag) => `<li>${tag}</li>`)
            .join("")}
        </ul>

        <div class="project-actions">

          <a
            class="live-link"
            data-live-link
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${
              project.sourceOnly
                ? "View on GitHub"
                : "Open live project"
            }

            <span>↗</span>
          </a>

          <a
            class="source-link"
            href="https://github.com/DubeyMukesh-Official"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>

        </div>
      `;
    }


    /* Counter */

    if (projectCounter) {
      projectCounter.textContent = project.number;
    }


    /* Remove animation */

    display.classList.remove("is-changing");

  }, 120);
}


/* =========================================================
   PROJECT TAB EVENTS
   ========================================================= */

tabButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const projectKey = button.dataset.project;

    if (projectKey) {
      setProject(projectKey);
    }

  });

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  /* Close menu after clicking a navigation link */

  document
    .querySelectorAll(".site-nav a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("is-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =========================================================
   CERTIFICATE MODAL
   ========================================================= */

const modal = document.querySelector(".certificate-modal");

const modalTitle = document.querySelector("#certificate-title");
const modalImage = document.querySelector(".modal-image");
const modalPlaceholder = document.querySelector(".modal-placeholder");
const modalPdf = document.querySelector(".modal-pdf");
const closeModal = document.querySelector(".modal-close");


/* =========================================================
   OPEN CREDENTIAL
   ========================================================= */

function openCredential(button) {

  if (!modal || !button) {
    return;
  }


  /* Title */

  if (modalTitle) {
    modalTitle.textContent =
      button.dataset.title || "Certificate";
  }


  /* Image */

  const image = button.dataset.image;

  if (modalImage && modalPlaceholder) {

    if (image) {

      modalImage.src = image;

      modalImage.alt =
        `${button.dataset.title || "Certificate"} certificate preview`;

      modalImage.style.display = "block";

      modalPlaceholder.style.display = "none";

    } else {

      modalImage.removeAttribute("src");

      modalImage.style.display = "none";

      modalPlaceholder.style.display = "flex";

    }

  }


  /* PDF */

  const pdf = button.dataset.pdf;

  if (modalPdf) {

    if (pdf) {

      modalPdf.href = pdf;

      modalPdf.style.display = "inline-block";

    } else {

      modalPdf.removeAttribute("href");

      modalPdf.style.display = "none";

    }

  }


  /* Open dialog */

  if (typeof modal.showModal === "function") {
    modal.showModal();
  }

}


/* =========================================================
   CERTIFICATE BUTTON EVENTS
   ========================================================= */

document
  .querySelectorAll(".credential-card, .credential-open")
  .forEach((button) => {

    button.addEventListener("click", () => {
      openCredential(button);
    });

  });


/* =========================================================
   CLOSE MODAL
   ========================================================= */

if (closeModal && modal) {

  closeModal.addEventListener("click", () => {
    modal.close();
  });


  /* Close when clicking outside modal */

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {
      modal.close();
    }

  });

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    modal?.open
  ) {
    modal.close();
  }

});


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const reveal = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
    }
  );


  revealElements.forEach((element) => {
    reveal.observe(element);
  });

} else {

  /* Fallback for older browsers */

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const glow = document.querySelector(".cursor-glow");

if (glow && window.matchMedia("(pointer: fine)").matches) {

  window.addEventListener(
    "pointermove",
    (event) => {

      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;

    },
    {
      passive: true,
    }
  );

}


/* =========================================================
   LOADING SCREEN
   ========================================================= */

window.addEventListener("load", () => {

  const loadingScreen =
    document.querySelector(".loading-screen");

  if (!loadingScreen) {
    return;
  }


  window.setTimeout(() => {

    loadingScreen.classList.add("is-loaded");

  }, 300);

});


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollMeter =
  document.querySelector(".scroll-meter i");


function updateScrollProgress() {

  if (!scrollMeter) {
    return;
  }


  const scrollable =
    document.documentElement.scrollHeight -
    window.innerHeight;


  const progress =
    scrollable > 0
      ? window.scrollY / scrollable
      : 0;


  scrollMeter.style.transform =
    `scaleX(${Math.min(Math.max(progress, 0), 1)})`;

}


window.addEventListener(
  "scroll",
  updateScrollProgress,
  {
    passive: true,
  }
);


/* =========================================================
   INITIAL PROJECT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const activeButton =
    document.querySelector(".project-tab.is-active");

  if (activeButton) {

    const projectKey =
      activeButton.dataset.project;

    if (projectKey) {
      setProject(projectKey);
    }

  }

  updateScrollProgress();

});