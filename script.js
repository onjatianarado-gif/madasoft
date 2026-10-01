const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Demande de démonstration - ${product}`);
  const body = encodeURIComponent(
`Bonjour MadaSoft,

Je souhaite obtenir des informations concernant : ${product}.

Nom / Responsable : ${name}
Entreprise : ${company || "Non renseignée"}
Téléphone : ${phone}

Besoin :
${message}

Merci.`
  );

  const whatsappMessage = encodeURIComponent(
`Bonjour MadaSoft,

Je souhaite obtenir des informations concernant : ${product}.

Nom : ${name}
Entreprise : ${company || "Non renseignée"}
Téléphone : ${phone}

Besoin :
${message}`
);

window.open(
`https://wa.me/261383838271?text=${whatsappMessage}`,
"_blank"
);

});
