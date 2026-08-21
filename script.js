/* =========================================================
   MUKESH DUBEY PORTFOLIO
   MAIN JAVASCRIPT
   FINAL UPDATED / FIXED VERSION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     LOADING SCREEN
     ======================================================= */

  const loadingScreen = document.querySelector(".loading-screen");

  const hideLoadingScreen = () => {

    if (!loadingScreen) return;

    loadingScreen.classList.add("is-hidden");

    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 700);

  };

  window.addEventListener("load", hideLoadingScreen);

  /* Safety fallback */
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


    /* Close navigation after clicking a link */

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

  if (header) {

    const updateHeader = () => {

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 30
      );

    };

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();

  }


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

        const target =
          document.querySelector(targetId);

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

      live: "#",

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

      live: "#",

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

      live: "#",

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
        "A safety-focused application concept designed around quick access to important actions and practical technology solutions.",

      tags: [
        "Java",
        "Spring Boot",
        "React.js"
      ],

      live: "#",

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

  const updateProject = (projectKey) => {

    const project = projects[projectKey];

    if (!project) return;


    /* Update tabs */

    projectTabs.forEach((tab) => {

      const active =
        tab.dataset.project === projectKey;

      tab.classList.toggle(
        "is-active",
        active
      );

      tab.setAttribute(
        "aria-selected",
        String(active)
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


    /* Visual */

    if (projectVisual) {

      projectVisual.className =
        "project-visual " +
        project.visual;

    }


    /* Live project */

    if (liveLink) {

      if (
        project.live &&
        project.live !== "#"
      ) {

        liveLink.href =
          project.live;

        liveLink.style.display =
          "inline-flex";

      } else {

        liveLink.removeAttribute("href");

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

  };


  /* =======================================================
     PROJECT TAB EVENTS
     ======================================================= */

  projectTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      updateProject(
        tab.dataset.project
      );

    });

  });


  /* First project */

  updateProject("blog");


  /* =======================================================
     CERTIFICATE MODAL
     ======================================================= */

  const modal =
    document.querySelector(".certificate-modal");

  const modalTitle =
    document.querySelector("#certificate-title");

  const modalImage =
    document.querySelector(".modal-image");

  const modalPdfViewer =
    document.querySelector(".modal-pdf-viewer");

  const modalPlaceholder =
    document.querySelector(".modal-placeholder");

  const modalPdf =
    document.querySelector(".modal-pdf");

  const modalClose =
    document.querySelector(".modal-close");


  /* =======================================================
     CERTIFICATE FILE ALIAS FIX
     =======================================================

     IMPORTANT:

     Your HTML currently contains some filenames that
     don't exactly match the files visible in your VS Code
     assets/certificates folder.

     This mapping automatically corrects them.

     Actual files visible in your project:

       ibm-microservices-ai.pdf
       ibm-sql-databases.pdf

     ======================================================= */

  const certificateFileAliases = {

    "refactoring-microservices-ai.pdf":
      "./assets/certificates/ibm-microservices-ai.pdf",

    "sql-relational-databases-101.pdf":
      "./assets/certificates/ibm-sql-databases.pdf"

  };


  /* =======================================================
     RESOLVE CERTIFICATE PATH
     ======================================================= */

  const resolveCertificatePath = (path) => {

    if (!path) return "";

    const cleanPath =
      path.split("?")[0];

    const filename =
      cleanPath.substring(
        cleanPath.lastIndexOf("/") + 1
      );

    if (
      certificateFileAliases[filename]
    ) {

      return certificateFileAliases[filename];

    }

    return path;

  };


  /* =======================================================
     RESET MODAL
     ======================================================= */

  const resetModal = () => {

    /* Reset image */

    if (modalImage) {

      modalImage.removeAttribute("src");

      modalImage.removeAttribute("alt");

      modalImage.style.display =
        "none";

    }


    /* Reset PDF */

    if (modalPdfViewer) {

      modalPdfViewer.removeAttribute("src");

      modalPdfViewer.style.display =
        "none";

    }


    /* Reset PDF button */

    if (modalPdf) {

      modalPdf.removeAttribute("href");

      modalPdf.style.display =
        "none";

    }


    /* Reset placeholder */

    if (modalPlaceholder) {

      modalPlaceholder.style.display =
        "none";

    }

  };


  /* =======================================================
     SHOW PLACEHOLDER
     ======================================================= */

  const showPlaceholder = (
    message = "Credential preview unavailable"
  ) => {

    if (!modalPlaceholder) return;

    const placeholderText =
      modalPlaceholder.querySelector("b");

    if (placeholderText) {

      placeholderText.textContent =
        message;

    }

    modalPlaceholder.style.display =
      "flex";

  };


  /* =======================================================
     SHOW PDF
     ======================================================= */

  const showPDF = (
    pdfPath,
    title
  ) => {

    if (!pdfPath) {

      showPlaceholder();

      return;

    }


    const resolvedPath =
      resolveCertificatePath(pdfPath);


    console.log(
      "Opening certificate PDF:",
      resolvedPath
    );


    /* PDF iframe */

    if (modalPdfViewer) {

      modalPdfViewer.src =
        resolvedPath;

      modalPdfViewer.style.display =
        "block";


      /*
       * If the browser cannot render the PDF,
       * the Open PDF button still works.
       */

      modalPdfViewer.addEventListener(
        "error",
        () => {

          console.warn(
            "PDF iframe could not display:",
            resolvedPath
          );

        },
        {
          once: true
        }
      );

    }


    /* Open PDF button */

    if (modalPdf) {

      modalPdf.href =
        resolvedPath;

      modalPdf.target =
        "_blank";

      modalPdf.rel =
        "noopener noreferrer";

      modalPdf.style.display =
        "inline-flex";

    }

  };


  /* =======================================================
     SHOW IMAGE
     ======================================================= */

  const showImage = (
    imagePath,
    title
  ) => {

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


    modalImage.onload = () => {

      modalImage.style.display =
        "block";

    };


    modalImage.onerror = () => {

      console.error(
        "Certificate image not found:",
        imagePath
      );

      modalImage.style.display =
        "none";

      showPlaceholder(
        "Certificate image could not be loaded"
      );

    };

  };


  /* =======================================================
     OPEN CREDENTIAL
     ======================================================= */

  const openCredential = (card) => {

    if (!modal || !card) return;


    resetModal();


    /* Title */

    const title =
      card.dataset.title ||
      "Certificate";


    if (modalTitle) {

      modalTitle.textContent =
        title;

    }


    /* Get certificate data */

    const image =
      card.dataset.image;

    const pdf =
      card.dataset.pdf;


    console.log(
      "Credential opened:",
      title
    );


    /* =====================================================
       IMAGE CERTIFICATE
       ===================================================== */

    if (image) {

      showImage(
        image,
        title
      );

    }


    /* =====================================================
       PDF CERTIFICATE
       ===================================================== */

    else if (pdf) {

      showPDF(
        pdf,
        title
      );

    }


    /* =====================================================
       NO FILE
       ===================================================== */

    else {

      showPlaceholder();

    }


    /* =====================================================
       OPEN MODAL
       ===================================================== */

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

  };


  /* =======================================================
     CREDENTIAL CARDS
     ======================================================= */

  const credentialCards =
    document.querySelectorAll(
      ".credential-card, .credential-open"
    );


  credentialCards.forEach((card) => {

    card.addEventListener(
      "click",
      () => {

        openCredential(card);

      }
    );

  });


  /* =======================================================
     CLOSE MODAL
     ======================================================= */

  const closeModal = () => {

    if (!modal) return;


    if (
      typeof modal.close ===
      "function"
    ) {

      if (modal.open) {

        modal.close();

      }

    } else {

      modal.removeAttribute("open");

    }


    resetModal();


    document.body.classList.remove(
      "modal-open"
    );

  };


  /* Close button */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }


  /* =======================================================
     CLICK OUTSIDE MODAL
     ======================================================= */

  if (modal) {

    modal.addEventListener(
      "click",
      (event) => {

        const modalInner =
          modal.querySelector(
            ".modal-inner"
          );

        if (!modalInner) return;


        const rect =
          modalInner.getBoundingClientRect();


        const clickedOutside =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom;


        if (clickedOutside) {

          closeModal();

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

        resetModal();

        document.body.classList.remove(
          "modal-open"
        );

      }
    );

  }


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal &&
        modal.open
      ) {

        closeModal();

      }

    }
  );


  /* =======================================================
     THEME SWITCH
     ======================================================= */

  const themeSwitch =
    document.querySelector(".theme-switch");


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
    savedTheme === "light"
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


        const isLight =
          document.body.classList.contains(
            "light-theme"
          );


        try {

          localStorage.setItem(
            "portfolio-theme",
            isLight
              ? "light"
              : "dark"
          );

        } catch (error) {

          /* Ignore localStorage errors */

        }

      }
    );

  }


  /* =======================================================
     REVEAL ANIMATIONS
     ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


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


    revealElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add(
        "is-visible"
      );

    });

  }


  /* =======================================================
     CURSOR GLOW
     ======================================================= */

  const cursorGlow =
    document.querySelector(".cursor-glow");


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
     PREVENT DEAD LIVE LINKS
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
     DEBUG INFORMATION
     ======================================================= */

  console.log(
    "--------------------------------------"
  );

  console.log(
    "Mukesh Dubey Portfolio loaded."
  );

  console.log(
    "Credential cards found:",
    credentialCards.length
  );

  console.log(
    "Certificate filename aliases:",
    certificateFileAliases
  );

  console.log(
    "--------------------------------------"
  );

});