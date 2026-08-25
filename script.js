/* =========================================================
   MUKESH DUBEY PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     LOADING SCREEN
     ======================================================= */

  const loadingScreen = document.querySelector(".loading-screen");

  function hideLoadingScreen() {
    if (!loadingScreen) return;

    loadingScreen.classList.add("is-hidden");

    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 700);
  }

  window.addEventListener("load", hideLoadingScreen);

  setTimeout(hideLoadingScreen, 1800);


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      siteNav.classList.toggle(
        "is-open",
        !isOpen
      );

      document.body.classList.toggle(
        "nav-open",
        !isOpen
      );

    });


    siteNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        siteNav.classList.remove("is-open");

        document.body.classList.remove("nav-open");

      });

    });

  }


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header = document.querySelector("#site-header");

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

      header.classList.add("is-scrolled");

    } else {

      header.classList.remove("is-scrolled");

    }

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        let target;

        try {

          target =
            document.querySelector(targetId);

        } catch (error) {

          return;

        }

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =======================================================
     PROJECT DATA
     ======================================================= */

  const projects = {

    blog: {

      number: "01",

      type: "CONTENT EXPERIENCE",

      code: "CASE / 01",

      visual: "blog-visual",

      overline:
        "React.js · REST API · React Router",

      title:
        "Blog Application",

      description:
        "A responsive blog application that renders REST API content through reusable React components and gives readers a clear, simple way to explore posts.",

      tags: [
        "React.js",
        "REST API",
        "Responsive UI"
      ],

      live:
        "https://blog-lyart-alpha-17.vercel.app/",

      github:
        "https://github.com/DubeyMukesh-Official"

    },


    shoe: {

      number: "02",

      type: "E-COMMERCE EXPERIENCE",

      code: "CASE / 02",

      visual: "shoe-visual",

      overline:
        "React.js · JavaScript · CSS",

      title:
        "Shoe Mart",

      description:
        "A responsive shoe shopping interface focused on product presentation, clean navigation and a practical e-commerce user experience.",

      tags: [
        "React.js",
        "JavaScript",
        "Responsive UI"
      ],

      live:
        "https://shoe-mart-khaki.vercel.app/",

      github:
        "https://github.com/DubeyMukesh-Official"

    },


    hotel: {

      number: "03",

      type: "BOOKING EXPERIENCE",

      code: "CASE / 03",

      visual: "hotel-visual",

      overline:
        "React.js · REST API · MySQL",

      title:
        "Hotel Booking",

      description:
        "A hotel booking application designed to provide a simple reservation experience with structured data, responsive screens and practical application flow.",

      tags: [
        "React.js",
        "REST API",
        "MySQL"
      ],

      live:
        "",

      github:
        "https://github.com/DubeyMukesh-Official"

    },


    ridex: {

      number: "04",

      type: "MOBILITY APPLICATION",

      code: "CASE / 04",

      visual: "ridex-visual",

      overline:
        "Java · Spring Boot · REST API",

      title:
        "RideX",

      description:
        "A practical ride-booking application concept focused on backend API development, structured data and a clean user experience.",

      tags: [
        "Java",
        "Spring Boot",
        "REST API"
      ],

      live:
        "https://ride-x-rouge.vercel.app/",

      github:
        "https://github.com/DubeyMukesh-Official"

    },


    safety: {

      number: "05",

      type: "SAFETY APPLICATION",

      code: "CASE / 05",

      visual: "safety-visual",

      overline:
        "Java · Spring Boot · React.js",

      title:
        "Women Safety",

      description:
        "A safety-focused application designed around quick access to important actions and practical technology solutions.",

      tags: [
        "Java",
        "Spring Boot",
        "React.js"
      ],

      live:
        "https://dubeymukesh-official.github.io/svgRescue/",

      github:
        "https://github.com/DubeyMukesh-Official"

    },


    userManagement: {

      number: "06",

      type: "USER MANAGEMENT APPLICATION",

      code: "CASE / 06",

      visual: "user-table-visual",

      overline:
        "React.js · JavaScript · REST API",

      title:
        "User Management Table",

      description:
        "A responsive React application for displaying and managing user data through a structured table interface. The project focuses on reusable React components, data rendering, user interactions and a clean responsive UI.",

      tags: [
        "React.js",
        "JavaScript",
        "REST API"
      ],

      live:
        "https://react-user-management-dashboard-cnad349y1.vercel.app/",

      github:
        "https://github.com/DubeyMukesh-Official"

    }

  };


  /* =======================================================
     PROJECT ELEMENTS
     ======================================================= */

  const projectTabs =
    document.querySelectorAll(".project-tab");

  const displayType =
    document.querySelector(".display-type");

  const displayCode =
    document.querySelector(".display-code");

  const projectVisual =
    document.querySelector(".project-visual");

  const projectOverline =
    document.querySelector(".project-overline");

  const projectTitle =
    document.querySelector(".project-copy h3");

  const projectDescription =
    document.querySelector(".project-description");

  const projectTags =
    document.querySelector(".project-tags");

  const liveLink =
    document.querySelector("[data-live-link]");

  const sourceLink =
    document.querySelector(".source-link");

  const currentProject =
    document.querySelector("[data-current-project]");


  /* =======================================================
     UPDATE PROJECT
     ======================================================= */

  function updateProject(projectKey) {

    const project =
      projects[projectKey];

    if (!project) {

      console.warn(
        "Project not found:",
        projectKey
      );

      return;

    }


    /* Active tab */

    projectTabs.forEach((tab) => {

      const isActive =
        tab.dataset.project === projectKey;

      tab.classList.toggle(
        "is-active",
        isActive
      );

      tab.setAttribute(
        "aria-selected",
        String(isActive)
      );

    });


    /* Type */

    if (displayType) {

      displayType.textContent =
        project.type;

    }


    /* Code */

    if (displayCode) {

      displayCode.textContent =
        project.code;

    }


    /* Visual */

    if (projectVisual) {

      projectVisual.className =
        "project-visual " +
        project.visual;

    }


    /* Overline */

    if (projectOverline) {

      projectOverline.textContent =
        project.overline;

    }


    /* Title */

    if (projectTitle) {

      projectTitle.textContent =
        project.title;

    }


    /* Description */

    if (projectDescription) {

      projectDescription.textContent =
        project.description;

    }


    /* Tags */

    if (projectTags) {

      projectTags.innerHTML = "";

      project.tags.forEach((tag) => {

        const li =
          document.createElement("li");

        li.textContent = tag;

        projectTags.appendChild(li);

      });

    }


    /* Live link */

    if (liveLink) {

      if (project.live) {

        liveLink.href =
          project.live;

        liveLink.style.display =
          "inline-flex";

        liveLink.removeAttribute(
          "aria-disabled"
        );

      } else {

        liveLink.removeAttribute(
          "href"
        );

        liveLink.style.display =
          "none";

      }

    }


    /* GitHub */

    if (sourceLink) {

      sourceLink.href =
        project.github;

    }


    /* Counter */

    if (currentProject) {

      currentProject.textContent =
        project.number;

    }

  }


  /* =======================================================
     PROJECT TAB EVENTS
     ======================================================= */

  projectTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const projectKey =
        tab.dataset.project;

      updateProject(projectKey);

    });

  });


  /* =======================================================
     INITIAL PROJECT
     ======================================================= */

  const activeProject =
    document.querySelector(
      ".project-tab.is-active"
    );

  if (activeProject) {

    updateProject(
      activeProject.dataset.project
    );

  } else if (projectTabs.length > 0) {

    updateProject(
      projectTabs[0].dataset.project
    );

  }


  /* =======================================================
     CERTIFICATE MODAL
     ======================================================= */

  const modal =
    document.querySelector(
      ".certificate-modal"
    );

  const modalClose =
    document.querySelector(
      ".modal-close"
    );

  const modalTitle =
    document.querySelector(
      "#certificate-title"
    );

  const modalImage =
    document.querySelector(
      ".modal-image"
    );

  const modalPdfViewer =
    document.querySelector(
      ".modal-pdf-viewer"
    );

  const modalPlaceholder =
    document.querySelector(
      ".modal-placeholder"
    );

  const modalPdf =
    document.querySelector(
      ".modal-pdf"
    );


  /* =======================================================
     RESET CERTIFICATE MODAL
     ======================================================= */

  function resetCertificateModal() {

    if (modalImage) {

      modalImage.style.display =
        "none";

      modalImage.removeAttribute(
        "src"
      );

    }


    if (modalPdfViewer) {

      modalPdfViewer.style.display =
        "none";

      modalPdfViewer.removeAttribute(
        "src"
      );

    }


    if (modalPdf) {

      modalPdf.style.display =
        "none";

      modalPdf.removeAttribute(
        "href"
      );

    }


    if (modalPlaceholder) {

      modalPlaceholder.style.display =
        "none";

    }

  }


  /* =======================================================
     RESOLVE CERTIFICATE PATH
     ======================================================= */

  function resolveCertificatePath(path) {

    if (!path) {
      return "";
    }

    /*
      This is important.

      Your certificate path is:

      ./assets/certificates/
      itvedant-java-full-stack-web-development.pdf

      We resolve it relative to the actual portfolio page.
    */

    try {

      return new URL(
        path,
        window.location.href
      ).href;

    } catch (error) {

      console.error(
        "Invalid certificate path:",
        path
      );

      return path;

    }

  }


  /* =======================================================
     SHOW PLACEHOLDER
     ======================================================= */

  function showPlaceholder(
    message = "Credential preview unavailable"
  ) {

    if (!modalPlaceholder) {
      return;
    }

    const text =
      modalPlaceholder.querySelector("b");

    if (text) {

      text.textContent =
        message;

    }

    modalPlaceholder.style.display =
      "flex";

  }


  /* =======================================================
     SHOW PDF
     ======================================================= */

  function showPDF(pdfPath) {

    if (!pdfPath) {

      showPlaceholder(
        "Certificate PDF path is missing."
      );

      return;

    }


    const pdfUrl =
      resolveCertificatePath(
        pdfPath
      );


    console.log(
      "Opening certificate:",
      pdfUrl
    );


    /* -------------------------------------------------------
       PDF IFRAME
       ------------------------------------------------------- */

    if (modalPdfViewer) {

      modalPdfViewer.style.display =
        "block";

      modalPdfViewer.src =
        pdfUrl;

    }


    /* -------------------------------------------------------
       OPEN PDF BUTTON
       ------------------------------------------------------- */

    if (modalPdf) {

      modalPdf.style.display =
        "inline-flex";

      modalPdf.href =
        pdfUrl;

      modalPdf.target =
        "_blank";

      modalPdf.rel =
        "noopener noreferrer";

    }

  }


  /* =======================================================
     SHOW IMAGE
     ======================================================= */

  function showImage(
    imagePath,
    title
  ) {

    if (
      !modalImage ||
      !imagePath
    ) {

      showPlaceholder();

      return;

    }


    modalImage.src =
      imagePath;

    modalImage.alt =
      title;

    modalImage.style.display =
      "block";


    modalImage.onerror = () => {

      modalImage.style.display =
        "none";

      showPlaceholder(
        "Certificate image could not be loaded."
      );

    };

  }


  /* =======================================================
     OPEN CERTIFICATE
     ======================================================= */

  function openCertificate(card) {

    if (
      !modal ||
      !card
    ) {
      return;
    }


    resetCertificateModal();


    const title =
      card.dataset.title ||
      "Certificate";


    const image =
      card.dataset.image;


    const pdf =
      card.dataset.pdf;


    if (modalTitle) {

      modalTitle.textContent =
        title;

    }


    /* Image certificate */

    if (image) {

      showImage(
        image,
        title
      );

    }


    /* PDF certificate */

    else if (pdf) {

      showPDF(pdf);

    }


    /* No certificate */

    else {

      showPlaceholder();

    }


    /* Open modal */

    if (
      typeof modal.showModal ===
      "function"
    ) {

      modal.showModal();

    } else {

      modal.setAttribute(
        "open",
        ""
      );

    }


    document.body.classList.add(
      "modal-open"
    );

  }


  /* =======================================================
     CERTIFICATE CARDS
     ======================================================= */

  const credentialCards =
    document.querySelectorAll(
      ".credential-card, .credential-open"
    );


  credentialCards.forEach((card) => {

    card.addEventListener(
      "click",
      () => {

        openCertificate(card);

      }
    );

  });


  /* =======================================================
     CLOSE CERTIFICATE MODAL
     ======================================================= */

  function closeCertificateModal() {

    if (!modal) {
      return;
    }


    if (
      typeof modal.close ===
      "function"
    ) {

      if (modal.open) {

        modal.close();

      }

    } else {

      modal.removeAttribute(
        "open"
      );

    }


    resetCertificateModal();


    document.body.classList.remove(
      "modal-open"
    );

  }


  /* =======================================================
     CLOSE BUTTON
     ======================================================= */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeCertificateModal
    );

  }


  /* =======================================================
     CLOSE WHEN CLICKING OUTSIDE
     ======================================================= */

  if (modal) {

    modal.addEventListener(
      "click",
      (event) => {

        const modalInner =
          modal.querySelector(
            ".modal-inner"
          );

        if (!modalInner) {
          return;
        }


        const rect =
          modalInner.getBoundingClientRect();


        const outside =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom;


        if (outside) {

          closeCertificateModal();

        }

      }
    );

  }


  /* =======================================================
     MODAL CLOSE EVENT
     ======================================================= */

  if (modal) {

    modal.addEventListener(
      "close",
      () => {

        resetCertificateModal();

        document.body.classList.remove(
          "modal-open"
        );

      }
    );

  }


  /* =======================================================
     ESC KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal &&
        modal.open
      ) {

        closeCertificateModal();

      }

    }
  );


  /* =======================================================
     THEME SWITCH
     ======================================================= */

  const themeSwitch =
    document.querySelector(
      ".theme-switch"
    );


  let savedTheme = null;

  try {

    savedTheme =
      localStorage.getItem(
        "portfolio-theme"
      );

  } catch (error) {

    savedTheme = null;

  }


  if (
    savedTheme ===
    "light"
  ) {

    document.body.classList.add(
      "light-theme"
    );

  }


  if (themeSwitch) {

    themeSwitch.addEventListener(
      "click",
      () => {

        document.body.classList.toggle(
          "light-theme"
        );


        const lightMode =
          document.body.classList.contains(
            "light-theme"
          );


        try {

          localStorage.setItem(
            "portfolio-theme",
            lightMode
              ? "light"
              : "dark"
          );

        } catch (error) {

          console.warn(
            "Unable to save theme preference."
          );

        }

      }
    );

  }


  /* =======================================================
     REVEAL ANIMATIONS
     ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

  }


  /* =======================================================
     CURSOR GLOW
     ======================================================= */

  const cursorGlow =
    document.querySelector(
      ".cursor-glow"
    );


  if (
    cursorGlow &&
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    document.addEventListener(
      "mousemove",
      (event) => {

        cursorGlow.style.transform =
          `translate3d(
            ${event.clientX}px,
            ${event.clientY}px,
            0
          )`;

      },
      {
        passive: true
      }
    );

  }


  /* =======================================================
     IMAGE ERROR HANDLING
     ======================================================= */

  document
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "image-error"
          );

        }
      );

    });


  /* =======================================================
     PREVENT EMPTY LINKS
     ======================================================= */

  document
    .querySelectorAll(
      'a[href="#"]'
    )
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

        }
      );

    });


  /* =======================================================
     DEBUG
     ======================================================= */

  console.log(
    "Mukesh Dubey Portfolio loaded successfully."
  );

  console.log(
    "Projects:",
    Object.keys(projects).length
  );

  console.log(
    "Credential cards:",
    credentialCards.length
  );

  console.log(
    "Certificate PDF support: enabled"
  );

});