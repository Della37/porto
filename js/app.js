/**
 * app.js - Logika Interaktif & Renderer Portofolio Web
 * Menangani render dinamis dari data.js, galeri proyek, filter keahlian,
 * modal sertifikat, aksi unduh CV, dan salin kontak.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Pastikan data portofolio tersedia
  if (typeof portfolioData === "undefined") {
    console.error("Data portofolio (data.js) tidak ditemukan.");
    return;
  }

  // Inisialisasi Seluruh Komponen Portofolio
  initProfileData();
  initStats();
  initProjects();
  initExperience();
  initTrainings();
  initSkills();
  initEducationAndLanguages();
  initFooterAndSocial();
  initCertificateModal();
  initDownloadCvAndCopyActions();
  initScrollSpy();
});

/* ==========================================================================
   1. Render Data Diri & Profil (Hero)
   ========================================================================== */
function initProfileData() {
  const { profile } = portfolioData;

  setText("profile-name", profile.fullName);
  setText("profile-title", profile.title);
  setText("profile-bio", profile.bio);
  setText("profile-status", profile.statusBadge);
  setText("profile-location", profile.location);

  const avatarImg = document.getElementById("profile-avatar");
  if (avatarImg && profile.avatar) {
    avatarImg.src = profile.avatar;
    avatarImg.alt = `Foto Profil ${profile.fullName}`;
  }

  const btnWhatsapp = document.getElementById("btn-whatsapp");
  if (btnWhatsapp && profile.whatsappUrl) {
    btnWhatsapp.href = profile.whatsappUrl;
  }
}

/* ==========================================================================
   2. Render Quick Stats
   ========================================================================== */
function initStats() {
  const container = document.getElementById("stats-container");
  if (!container || !portfolioData.stats) return;

  container.innerHTML = portfolioData.stats.map(item => `
    <div class="glass-panel glass-panel-subtle stat-item">
      <div class="stat-icon">${item.icon}</div>
      <div class="stat-value">${item.value}</div>
      <div class="stat-label">${item.label}</div>
    </div>
  `).join("");
}

/* ==========================================================================
   3. Render Galeri Proyek Unggulan (Portfolio Showcase)
   ========================================================================== */
function initProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !portfolioData.projects) return;

  container.innerHTML = portfolioData.projects.map(project => `
    <div class="glass-panel glass-interactive project-card">
      <div class="project-thumb-frame">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-category-badge">${project.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech-tags">
          ${project.tags.map(tag => `<span class="project-tech-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-action-bar">
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary project-btn">
            <span>🚀</span> Pratinjau Demo
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary project-btn">
            <span>🐙</span> Kode Sumber
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   4. Render Pengalaman Kerja (Interactive Timeline)
   ========================================================================== */
function initExperience() {
  const { experiences } = portfolioData;
  if (!experiences) return;

  const timelineList = document.getElementById("experience-timeline-list");
  if (timelineList) {
    timelineList.innerHTML = experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="glass-panel timeline-content-card">
          <div class="timeline-header">
            <div>
              <h3 class="role-title">${exp.role}</h3>
              <div class="role-company">${exp.company}</div>
            </div>
            <div class="period-badge">📅 ${exp.period}</div>
          </div>
          <div class="role-location">📍 ${exp.location} • <em>${exp.type}</em></div>
          <p class="role-summary">${exp.summary}</p>
          <ul class="achievements-list">
            ${exp.achievements.map(ach => `<li>${ach}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   5. Render Pelatihan & Sertifikasi
   ========================================================================== */
function initTrainings() {
  const { trainings } = portfolioData;
  if (!trainings) return;

  const trainingsGrid = document.getElementById("trainings-container");
  if (trainingsGrid) {
    trainingsGrid.innerHTML = trainings.map((cert, index) => `
      <div class="glass-panel glass-interactive training-card" data-cert-index="${index}">
        <div class="training-top">
          <div class="training-meta-bar">
            <span class="training-badge">${cert.badge}</span>
            <span class="training-year">Tahun ${cert.year}</span>
          </div>
          <h3 class="training-title">${cert.title}</h3>
          <div class="training-issuer">🏛️ ${cert.issuer}</div>
          <p class="training-summary">${cert.summary}</p>
          <div class="training-tags">
            ${cert.skillsAcquired.map(skill => `<span class="training-tag">${skill}</span>`).join("")}
          </div>
        </div>
        <div class="training-action">
          <button class="btn btn-secondary btn-view-cert" data-cert-index="${index}">
            <span>📜</span> Lihat Detail Sertifikat
          </button>
        </div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   6. Render & Filter Keahlian (Skills)
   ========================================================================== */
let currentCategory = "all";

function initSkills() {
  const { skills, skillCategories } = portfolioData;
  if (!skills) return;

  // Render Tab Kategori
  const tabsNav = document.getElementById("skill-category-tabs");
  if (tabsNav && skillCategories) {
    tabsNav.innerHTML = skillCategories.map(cat => `
      <button class="skill-tab-btn ${cat.key === currentCategory ? 'active' : ''}" data-category="${cat.key}">
        ${cat.label}
      </button>
    `).join("");

    tabsNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".skill-tab-btn");
      if (!btn) return;
      currentCategory = btn.dataset.category;
      tabsNav.querySelectorAll(".skill-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkillsGrid();
    });
  }

  renderSkillsGrid();
}

function renderSkillsGrid() {
  const grid = document.getElementById("skills-grid-container");
  if (!grid) return;

  const filtered = currentCategory === "all"
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === currentCategory);

  grid.innerHTML = filtered.map(skill => `
    <div class="glass-panel glass-panel-subtle skill-item-card">
      <div class="skill-card-top">
        <div class="skill-identity">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-level-pill">${skill.levelLabel}</span>
      </div>
      <div class="skill-progress-track">
        <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
      </div>
      <div style="display: flex; justify-content: flex-end; font-size: 0.8rem; font-weight: 700; color: var(--text-light);">
        ${skill.level}%
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   7. Render Pendidikan & Bahasa
   ========================================================================== */
function initEducationAndLanguages() {
  const { education, languages } = portfolioData;

  const eduContainer = document.getElementById("education-container");
  if (eduContainer && education) {
    eduContainer.innerHTML = education.map(edu => `
      <div style="margin-bottom: 1rem;">
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-period-gpa">
          <span>📅 ${edu.period}</span>
          <span>🏆 ${edu.gpa}</span>
        </div>
        <p class="edu-highlights">${edu.highlights}</p>
      </div>
    `).join("");
  }

  const langContainer = document.getElementById("languages-container");
  if (langContainer && languages) {
    langContainer.innerHTML = languages.map(lang => `
      <div class="lang-item">
        <span class="lang-name">🗣️ ${lang.name}</span>
        <span class="lang-level">${lang.level}</span>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   8. Render Footer & Tautan Sosial
   ========================================================================== */
function initFooterAndSocial() {
  const { profile } = portfolioData;

  const ctaWaLink = document.getElementById("cta-whatsapp-link");
  if (ctaWaLink && profile.whatsappUrl) {
    ctaWaLink.href = profile.whatsappUrl;
  }

  const footerSocial = document.getElementById("footer-social-links");
  if (footerSocial) {
    footerSocial.innerHTML = `
      <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
      <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
      <a href="${profile.dribbble}" target="_blank" rel="noopener noreferrer" class="social-link">Dribbble</a>
      <a href="mailto:${profile.email}" class="social-link">Email</a>
    `;
  }
}

/* ==========================================================================
   9. Certificate Modal Lightbox (Native HTML5 <dialog>)
   ========================================================================== */
function initCertificateModal() {
  const modal = document.getElementById("certificate-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const closeActionBtn = document.getElementById("modal-close-action");

  if (!modal) return;

  function openModal(certIndex) {
    const cert = portfolioData.trainings[certIndex];
    if (!cert) return;

    setText("modal-cert-title", cert.title);
    setText("modal-cert-issuer", cert.issuer);
    setText("modal-cert-badge", cert.badge);
    setText("modal-cert-id", cert.credentialId);
    setText("modal-cert-year", cert.year);
    setText("modal-cert-desc", cert.summary);

    const skillsContainer = document.getElementById("modal-cert-skills");
    if (skillsContainer) {
      skillsContainer.innerHTML = cert.skillsAcquired.map(skill => `
        <span class="training-tag" style="background: var(--pink-blush); border-color: var(--pink-soft); color: var(--pink-deep); font-weight: 700;">
          ✓ ${skill}
        </span>
      `).join("");
    }

    const certLink = document.getElementById("modal-cert-link");
    if (certLink) {
      certLink.href = cert.credentialUrl;
    }

    modal.showModal();
  }

  function closeModal() {
    modal.close();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeActionBtn) closeActionBtn.addEventListener("click", closeModal);

  // Tutup jika klik pada backdrop di luar kartu modal
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });

  // Delegasi event klik pada kartu sertifikat dan tombolnya
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-index]");
    if (trigger && !e.target.closest("dialog")) {
      const idx = trigger.dataset.certIndex;
      openModal(parseInt(idx, 10));
    }
  });
}

/* ==========================================================================
   10. Action Handlers (Unduh File CV & Salin Email)
   ========================================================================== */
function initDownloadCvAndCopyActions() {
  const cvButtons = [
    document.getElementById("btn-download-cv-nav"),
    document.getElementById("btn-download-cv-hero"),
    document.getElementById("btn-download-cv-footer")
  ];

  const cvUrl = (portfolioData.profile && portfolioData.profile.cvUrl) || "cv.pdf";

  cvButtons.forEach(btn => {
    if (btn) {
      btn.setAttribute("href", cvUrl);
      btn.setAttribute("download", "");
      btn.addEventListener("click", (e) => {
        showToast("📄 Membuka / mengunduh file CV Anda...");
      });
    }
  });

  // Tombol Salin Email
  const copyEmailBtns = [
    document.getElementById("btn-copy-email"),
    document.getElementById("cta-copy-email-btn")
  ];

  copyEmailBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        const email = portfolioData.profile.email;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email)
            .then(() => showToast(`📋 Email "${email}" berhasil disalin ke clipboard!`))
            .catch(() => fallbackCopy(email));
        } else {
          fallbackCopy(email);
        }
      });
    }
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(`📋 Email "${text}" berhasil disalin!`);
  }
}

/* ==========================================================================
   11. ScrollSpy Navigasi Aktif
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("main#showcase-view section[id], footer[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  }, { passive: true });
}

/* ==========================================================================
   Helper Utilities
   ========================================================================== */
function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

function showToast(message, duration = 3200) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duration);
}
