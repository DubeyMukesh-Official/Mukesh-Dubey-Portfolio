/* =========================================================
   MUKESH PORTFOLIO — SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PROJECT DATA
  ========================= */

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
      visual: "blog-visual"
    },

    shoe: {
      number: "02",
      type: "FRONTEND EXPERIENCE",
      overline: "React.js · Responsive UI · Product Cards",
      title: "Shoe Mart",
      description:
        "A responsive shopping interface with reusable product cards and adaptable layouts for desktop and mobile.",
      tags: ["React.js", "Responsive UI", "Components"],
      link: "https://shoe-mart-q6gvl1xda-dubeymukesh-officials-projects.vercel.app/",
      visual: "shoe-visual"
    },

    hotel: {
      number: "03",
      type: "JAVA CONSOLE APPLICATION",
      overline: "Core Java · JDBC · MySQL",
      title: "Hotel Booking System",
      description:
        "A console-based hotel reservation system with customer management, room availability and CRUD operations.",
      tags: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/DubeyMukesh-Official",
      visual: "hotel-visual",
      sourceOnly: true
    },

    ridex: {
      number: "04",
      type: "FULL STACK APPLICATION",
      overline: "Spring Boot · React.js · MySQL",
      title: "RideX",
      description:
        "A bike showroom management system with JWT authentication, cart, wishlist, coupons and Razorpay payments.",
      tags: ["Spring Boot", "React", "JWT", "MySQL"],
      link: "https://ride-x-rouge.vercel.app/",
      visual: "ridex-visual"
    },

    safety: {
      number: "05",
      type: "COLLEGE PROJECT",
      overline: "Python · Django · HTML/CSS",
      title: "Women Safety & Emergency Rescue",
      description:
        "Emergency assistance platform with WhatsApp and email alerts for trusted contacts.",
      tags: ["Python", "Django", "Emergency Alerts"],
      link: "https://github.com/DubeyMukesh-Official",
      visual: "safety-visual",
      sourceOnly: true
    }
  };

  /* =========================
     PROJECT SWITCHER
  ========================= */

  const tabs = document.querySelectorAll(".project-tab");
  const display = document.querySelector(".project-display");

  const copy = display?.querySelector(".project-copy");
  const visual = display?.querySelector(".project-visual");
  const type = display?.querySelector(".display-type");
  const code = display?.querySelector(".display-code");
  const counter = display?.querySelector("[data-current-project]");

  function artwork(name) {
    const map = {
      "blog-visual": `<b>READ</b><i></i><i></i><i></i>`,
      "shoe-visual": `<i></i><i></i><i></i><b>SM</b>`,
      "hotel-visual": `<b>CHECK-IN</b><i></i><i></i><i></i><i></i>`,
      "ridex-visual": `<b>RX</b><i></i><i></i><i></i>`,
      "safety-visual": `<b>EMERGENCY</b><i></i><i></i><i></i>`
    };
    return map[name];
  }

  function setProject(key) {
    const project = projects[key];
    if (!project) return;

    tabs.forEach(btn => {
      const active = btn.dataset.project === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active);
    });

    display.classList.add("is-changing");

    setTimeout(() => {
      type.textContent = project.type;
      code.textContent = `CASE / ${project.number}`;
      counter.textContent = project.number;

      visual.className = `project-visual ${project.visual}`;
      visual.innerHTML = artwork(project.visual);

      copy.innerHTML = `
        <p class="project-overline">${project.overline}</p>

        <h3>${project.title}</h3>

        <p class="project-description">${project.description}</p>

        <ul class="project-tags">
          ${project.tags.map(t => `<li>${t}</li>`).join("")}
        </ul>

        <div class="project-actions">
          <a class="live-link"
             href="${project.link}"
             target="_blank">
             ${project.sourceOnly ? "View on GitHub" : "Open live project"} ↗
          </a>

          <a class="source-link"
             href="https://github.com/DubeyMukesh-Official"
             target="_blank">
             GitHub Profile
          </a>
        </div>
      `;

      display.classList.remove("is-changing");
    }, 120);
  }

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      setProject(btn.dataset.project);
    });
  });

  const first = document.querySelector(".project-tab.is-active");
  if (first) setProject(first.dataset.project);

  /* =========================
     MOBILE MENU
  ========================= */

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", open);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menu.setAttribute("aria-expanded", false);
      });
    });
  }

  /* =========================
     THEME SWITCH
  ========================= */

  const theme = document.querySelector(".theme-switch");

  function applyTheme(mode) {
    document.body.classList.toggle("light-theme", mode === "light");
    localStorage.setItem("theme", mode);
  }

  applyTheme(localStorage.getItem("theme") || "dark");

  theme?.addEventListener("click", () => {
    applyTheme(
      document.body.classList.contains("light-theme")
        ? "dark"
        : "light"
    );
  });

  /* =========================
     CERTIFICATE MODAL
  ========================= */

  const modal = document.querySelector(".certificate-modal");
  const title = document.querySelector("#certificate-title");
  const image = document.querySelector(".modal-image");
  const placeholder = document.querySelector(".modal-placeholder");
  const pdf = document.querySelector(".modal-pdf");

  function openCertificate(btn) {
    title.textContent = btn.dataset.title || "Certificate";

    if (btn.dataset.image) {
      image.src = btn.dataset.image;
      image.style.display = "block";
      placeholder.style.display = "none";
    } else {
      image.style.display = "none";
      placeholder.style.display = "flex";
    }

    if (btn.dataset.pdf) {
      pdf.href = btn.dataset.pdf;
      pdf.style.display = "inline-flex";
    } else {
      pdf.style.display = "none";
    }

    modal.showModal();
  }

  document.querySelectorAll(".credential-card,.credential-open")
    .forEach(card => {
      card.addEventListener("click", () => openCertificate(card));
    });

  document.querySelector(".modal-close")?.addEventListener("click", () => {
    modal.close();
  });

  modal?.addEventListener("click", e => {
    if (e.target === modal) modal.close();
  });

  /* =========================
     REVEAL ANIMATION
  ========================= */

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("visible"));
  }

  /* =========================
     CURSOR GLOW
  ========================= */

  const glow = document.querySelector(".cursor-glow");

  if (glow && matchMedia("(pointer:fine)").matches) {
    window.addEventListener("pointermove", e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }

  /* =========================
     LOADING SCREEN
  ========================= */

  const loader = document.querySelector(".loading-screen");

  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("is-loaded"), 300);
  });

  /* =========================
     SCROLL PROGRESS
  ========================= */

  const meter = document.querySelector(".scroll-meter i");

  function progress() {
    if (!meter) return;

    const max =
      document.documentElement.scrollHeight - innerHeight;

    meter.style.transform = `scaleX(${scrollY / max || 0})`;
  }

  progress();

  addEventListener("scroll", progress, { passive: true });
  addEventListener("resize", progress);

});