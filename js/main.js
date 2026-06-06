const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  nav?.classList.toggle("shadow-cardHover", window.scrollY > 10);
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

menuToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
  iconOpen?.classList.toggle("hidden");
  iconClose?.classList.toggle("hidden");
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("bg-brand-greenMuted", "text-brand-green", "font-semibold");
  }
});

const filterBtns = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll("[data-category]");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((button) => {
      button.classList.remove("active-filter", "bg-brand-green", "text-white");
    });

    btn.classList.add("active-filter");

    productCards.forEach((card) => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 })
  : null;

document.querySelectorAll(".reveal").forEach((el) => {
  el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
  if (observer) {
    observer.observe(el);
  } else {
    el.classList.add("opacity-100", "translate-y-0");
    el.classList.remove("opacity-0", "translate-y-6");
  }
});

document.querySelectorAll("form[data-mailto]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const entries = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
    const subject = encodeURIComponent(form.dataset.subject || "Bulk Export Inquiry - Kerala Spice & Coffee Exports");
    const body = encodeURIComponent(entries);
    window.location.href = `mailto:info@keralaspiceexports.com?subject=${subject}&body=${body}`;
  });
});
