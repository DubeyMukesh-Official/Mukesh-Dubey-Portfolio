/* =========================================================
   MUKESH PORTFOLIO — UPDATED SCRIPT.JS
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PROJECT DATA
     ======================================================= */

  const projects = {

    blog: {
      number: "01",
      type: "CONTENT EXPERIENCE",
      overline: "React.js · REST API · React Router",
      title: "Blog Application",
      description:
        "A responsive blog application that renders REST API content through reusable React components and gives readers a clear, simple way to explore posts.",
      tags: [
        "React.js",
        "REST API",
        "Responsive UI"
      ],
      link:
        "https://blog-lyart-alpha-17.vercel.app/",
      visual: "blog-visual",
      sourceOnly: false
    },


    shoe: {
      number: "02",
      type: "FRONTEND EXPERIENCE",
      overline:
        "React.js · Responsive UI · Product cards",
      title: "Shoe Mart",
      description:
        "A responsive shoe-shopping interface with reusable product cards and adaptable layouts designed for easy browsing on desktop and mobile screens.",
      tags: [
        "React.js",
        "Responsive Design",
        "Component UI"
      ],
      link:
        "https://shoe-mart-q6gvl1xda-dubeymukesh-officials-projects.vercel.app/",
      visual: "shoe-visual",
      sourceOnly: false
    },


    hotel: {
      number: "03",
      type: "JAVA CONSOLE APPLICATION",
      overline:
        "Core Java · JDBC · MySQL",
      title: "Hotel Booking System",
      description:
        "A console-based hotel reservation system with customer management, room availability, booking workflows, and CRUD operations using OOP principles.",
      tags: [
        "Core Java",
        "JDBC",
        "MySQL"
      ],
      link:
        "https://github.com/DubeyMukesh-Official",
      visual: "hotel-visual",
      sourceOnly: true
    },


    ridex: {
      number: "04",
      type: "FULL STACK APPLICATION",
      overline:
        "Spring Boot · React.js · MySQL · Razorpay",
      title: "RideX",
      description:
        "A bike showroom management application with separate user and admin modules, product inventory, cart, wishlist, coupons, REST APIs, JWT authentication, and Razorpay payments.",
      tags: [
        "Spring Boot",
        "React.js",
        "JWT",
        "MySQL",
        "Razorpay"
      ],
      link:
        "https://ride-x-rouge.vercel.app/",
      visual: "ridex-visual",
      sourceOnly: false
    },


    safety: {
      number: "05",
      type: "COLLEGE PROJECT",
      overline:
        "Python · Django · HTML · CSS",
      title:
        "Women Safety & Emergency Rescue",
      description:
        "A college academic project designed around emergency assistance. Users can trigger an emergency alert so selected friends or relatives can receive notifications through email or WhatsApp.",
      tags: [
        "Python",
        "Django",
        "HTML/CSS",
        "Emergency Alerts"
      ],
      link:
        "https://github.com/DubeyMukesh-Official",
      visual: "safety-visual",
      sourceOnly: true
    }

  };


  /* =======================================================
     PROJECT ELEMENTS
     ======================================================= */

  const tabButtons =
    document.querySelectorAll(".project-tab");

  const display =
    document.querySelector(".project-display");

  const projectCopy =
    display?.querySelector(".project-copy");

  const projectVisual =
    display?.querySelector(".project-visual");

  const projectType =
    display?.querySelector(".display-type");

  const projectCode =
    display?.querySelector(".display-code");

  const projectCounter =
    display?.querySelector(
      "[data-current-project]"
    );


  /* =======================================================
     PROJECT VISUAL ART
     ======================================================= */

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


  /* =======================================================
     SET PROJECT
     ======================================================= */

  let projectChangeTimer = null;


  function setProject(key) {

    const project = projects[key];

    if (!project || !display) {
      return;
    }


    /* -----------------------------------------------------
       Active project tab
       ----------------------------------------------------- */

    tabButtons.forEach((button) => {

      const isActive =
        button.dataset.project === key;

      button.classList.toggle(
        "is-active",
        isActive
      );

      button.setAttribute(
        "aria-selected",
        String(isActive)
      );

    });


    /* -----------------------------------------------------
       Animation
       ----------------------------------------------------- */

    display.classList.add("is-changing");


    if (projectChangeTimer) {
      clearTimeout(projectChangeTimer);
    }


    projectChangeTimer = setTimeout(() => {


      /* ---------------------------------------------------
         Project information
         --------------------------------------------------- */

      if (projectCode) {

        projectCode.textContent =
          `CASE / ${project.number}`;

      }


      if (projectType) {

        projectType.textContent =
          project.type;

      }


      /* ---------------------------------------------------
         Project visual
         --------------------------------------------------- */

      if (projectVisual) {

        projectVisual.className =
          `project-visual ${project.visual}`;

        projectVisual.innerHTML =
          projectArt(project.visual);

      }


      /* ---------------------------------------------------
         Project content
         --------------------------------------------------- */

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
              .map(
                (tag) =>
                  `<li>${tag}</li>`
              )
              .join("")}

          </ul>


          <div class="project-actions">

            <a
              class="live-link"
              data-live-link
              href="${project.link}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${
                project.sourceOnly
                  ? `View ${project.title} on GitHub`
                  : `Open ${project.title} live project`
              }"
            >

              ${
                project.sourceOnly
                  ? "View on GitHub"
                  : "Open live project"
              }

              <span aria-hidden="true">
                ↗
              </span>

            </a>


            <a
              class="source-link"
              href="https://github.com/DubeyMukesh-Official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Mukesh GitHub profile"
            >
              GitHub profile
            </a>

          </div>

        `;

      }


      /* ---------------------------------------------------
         Project counter
         --------------------------------------------------- */

      if (projectCounter) {

        projectCounter.textContent =
          project.number;

      }


      /* ---------------------------------------------------
         Remove animation
         --------------------------------------------------- */

      display.classList.remove(
        "is-changing"
      );

    }, 120);

  }


  /* =======================================================
     PROJECT TAB EVENTS
     ======================================================= */

  tabButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const projectKey =
          button.dataset.project;

        if (!projectKey) {
          return;
        }

        setProject(projectKey);

      }
    );

  });


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuButton =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector(".site-nav");


  function closeMobileMenu() {

    if (!nav || !menuButton) {
      return;
    }

    nav.classList.remove(
      "is-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  function toggleMobileMenu() {

    if (!nav || !menuButton) {
      return;
    }

    const isOpen =
      nav.classList.toggle(
        "is-open"
      );

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  }


  if (menuButton && nav) {

    menuButton.addEventListener(
      "click",
      toggleMobileMenu
    );


    /* Close menu when clicking links */

    nav
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      });


    /* Close menu when clicking outside */

    document.addEventListener(
      "click",
      (event) => {

        if (
          !nav.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {

          closeMobileMenu();

        }

      }
    );


    /* Close menu with Escape */

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          nav.classList.contains("is-open")
        ) {

          closeMobileMenu();

          menuButton.focus();

        }

      }
    );

  }


  /* =======================================================
     THEME SWITCH
     ======================================================= */

  const themeButton =
    document.querySelector(".theme-switch");


  function applyTheme(theme) {

    const isLight =
      theme === "light";

    document.body.classList.toggle(
      "light-theme",
      isLight
    );


    if (themeButton) {

      themeButton.setAttribute(
        "aria-pressed",
        String(isLight)
      );


      themeButton.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark theme"
          : "Switch to light theme"
      );

    }


    localStorage.setItem(
      "portfolio-theme",
      theme
    );

  }


  /* Load saved theme */

  const savedTheme =
    localStorage.getItem(
      "portfolio-theme"
    );


  if (savedTheme === "light") {

    applyTheme("light");

  } else {

    applyTheme("dark");

  }


  /* Theme button */

  if (themeButton) {

    themeButton.addEventListener(
      "click",
      () => {

        const isLight =
          document.body.classList.contains(
            "light-theme"
          );

        applyTheme(
          isLight
            ? "dark"
            : "light"
        );

      }
    );

  }


  /* =======================================================
     CERTIFICATE MODAL
     ======================================================= */

  const modal =
    document.querySelector(
      ".certificate-modal"
    );

  const modalTitle =
    document.querySelector(
      "#certificate-title"
    );

  const modalImage =
    document.querySelector(
      ".modal-image"
    );

  const modalPlaceholder =
    document.querySelector(
      ".modal-placeholder"
    );

  const modalPdf =
    document.querySelector(
      ".modal-pdf"
    );

  const closeModal =
    document.querySelector(
      ".modal-close"
    );


  /* =======================================================
     OPEN CERTIFICATE
     ======================================================= */

  function openCredential(button) {

    if (!modal || !button) {
      return;
    }


    /* -----------------------------------------------------
       Certificate title
       ----------------------------------------------------- */

    const title =
      button.dataset.title ||
      "Certificate";


    if (modalTitle) {

      modalTitle.textContent =
        title;

    }


    /* -----------------------------------------------------
       Certificate image
       ----------------------------------------------------- */

    const image =
      button.dataset.image;


    if (
      modalImage &&
      modalPlaceholder
    ) {

      if (image) {

        modalImage.src =
          image;

        modalImage.alt =
          `${title} certificate preview`;

        modalImage.style.display =
          "block";

        modalPlaceholder.style.display =
          "none";

      } else {

        modalImage.removeAttribute(
          "src"
        );

        modalImage.alt = "";

        modalImage.style.display =
          "none";

        modalPlaceholder.style.display =
          "flex";

      }

    }


    /* -----------------------------------------------------
       Certificate PDF
       ----------------------------------------------------- */

    const pdf =
      button.dataset.pdf;


    if (modalPdf) {

      if (pdf) {

        modalPdf.href =
          pdf;

        modalPdf.target =
          "_blank";

        modalPdf.rel =
          "noopener noreferrer";

        modalPdf.style.display =
          "inline-block";

      } else {

        modalPdf.removeAttribute(
          "href"
        );

        modalPdf.style.display =
          "none";

      }

    }


    /* -----------------------------------------------------
       Open dialog
       ----------------------------------------------------- */

    if (
      typeof modal.showModal ===
      "function"
    ) {

      if (!modal.open) {
        modal.showModal();
      }

    } else {

      /* Fallback */

      modal.setAttribute(
        "open",
        ""
      );

    }

  }


  /* =======================================================
     CERTIFICATE EVENTS
     ======================================================= */

  document
    .querySelectorAll(
      ".credential-card"
    )
    .forEach((card) => {

      card.addEventListener(
        "click",
        () => {

          openCredential(card);

        }
      );

    });


  /* -------------------------------------------------------
     Featured certificate button
     ------------------------------------------------------- */

  const credentialOpen =
    document.querySelector(
      ".credential-open"
    );


  if (credentialOpen) {

    credentialOpen.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        openCredential(
          credentialOpen
        );

      }
    );

  }


  /* =======================================================
     CLOSE CERTIFICATE MODAL
     ======================================================= */

  if (
    closeModal &&
    modal
  ) {

    closeModal.addEventListener(
      "click",
      () => {

        if (
          typeof modal.close ===
          "function"
        ) {

          modal.close();

        } else {

          modal.removeAttribute(
            "open"
          );

        }

      }
    );


    /* Close by clicking backdrop */

    modal.addEventListener(
      "click",
      (event) => {

        if (
          event.target === modal
        ) {

          if (
            typeof modal.close ===
            "function"
          ) {

            modal.close();

          }

        }

      }
    );

  }


  /* =======================================================
     ESCAPE KEY — MODAL
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal?.open
      ) {

        modal.close();

      }

    }
  );


  /* =======================================================
     REVEAL ANIMATION
     ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -40px 0px"
        }
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =======================================================
     CURSOR GLOW
     ======================================================= */

  const glow =
    document.querySelector(
      ".cursor-glow"
    );


  const finePointer =
    window.matchMedia(
      "(pointer: fine)"
    );


  if (
    glow &&
    finePointer.matches
  ) {

    let glowX = 0;
    let glowY = 0;
    let glowFrame = null;


    window.addEventListener(
      "pointermove",
      (event) => {

        glowX =
          event.clientX;

        glowY =
          event.clientY;


        if (glowFrame) {
          return;
        }


        glowFrame =
          requestAnimationFrame(
            () => {

              glow.style.left =
                `${glowX}px`;

              glow.style.top =
                `${glowY}px`;

              glowFrame = null;

            }
          );

      },
      {
        passive: true
      }
    );

  }


  /* =======================================================
     LOADING SCREEN
     ======================================================= */

  const loadingScreen =
    document.querySelector(
      ".loading-screen"
    );


  if (loadingScreen) {

    window.addEventListener(
      "load",
      () => {

        window.setTimeout(
          () => {

            loadingScreen.classList.add(
              "is-loaded"
            );

          },
          300
        );

      }
    );

  }


  /* =======================================================
     SCROLL PROGRESS
     ======================================================= */

  const scrollMeter =
    document.querySelector(
      ".scroll-meter i"
    );


  function updateScrollProgress() {

    if (!scrollMeter) {
      return;
    }


    const documentHeight =
      document.documentElement
        .scrollHeight;


    const viewportHeight =
      window.innerHeight;


    const scrollable =
      documentHeight -
      viewportHeight;


    const currentScroll =
      window.scrollY;


    const progress =
      scrollable > 0
        ? currentScroll / scrollable
        : 0;


    const safeProgress =
      Math.min(
        Math.max(
          progress,
          0
        ),
        1
      );


    scrollMeter.style.transform =
      `scaleX(${safeProgress})`;

  }


  window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    updateScrollProgress
  );


  /* =======================================================
     INITIAL PROJECT
     ======================================================= */

  const activeButton =
    document.querySelector(
      ".project-tab.is-active"
    );


  if (activeButton) {

    const projectKey =
      activeButton.dataset.project;


    if (projectKey) {

      /*
       * Initialize project without
       * waiting for a user click.
       */

      setProject(
        projectKey
      );

    }

  } else {

    /*
     * If no tab is marked active,
     * automatically use the first tab.
     */

    const firstButton =
      tabButtons[0];


    if (firstButton) {

      const firstProject =
        firstButton.dataset.project;


      if (firstProject) {

        setProject(
          firstProject
        );

      }

    }

  }


  /* =======================================================
     INITIAL SCROLL POSITION
     ======================================================= */

  updateScrollProgress();


  /* =======================================================
     RESIZE HANDLING
     ======================================================= */

  let resizeTimer;


  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          () => {

            updateScrollProgress();

          },
          100
        );

    }
  );


  /* =======================================================
     PAGE READY
     ======================================================= */

  document.body.classList.add(
    "page-ready"
  );

});


/* =========================================================
   WINDOW LOAD
   ========================================================= */

window.addEventListener(
  "load",
  () => {

    const loadingScreen =
      document.querySelector(
        ".loading-screen"
      );


    if (!loadingScreen) {
      return;
    }


    setTimeout(
      () => {

        loadingScreen.classList.add(
          "is-loaded"
        );

      },
      300
    );

  }
);