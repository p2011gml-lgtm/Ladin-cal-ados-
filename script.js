// CONFIGURAÇÃO: coloque o WhatsApp da loja com código do país + DDD + número.
 // Exemplo: "5574999999999". Não use espaços, parênteses ou traços.
const WHATSAPP_NUMBER = "5574999999999";

function whatsappLink(message) {
  const number = WHATSAPP_NUMBER.trim();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function configureWhatsApp() {
  const main = document.getElementById("whatsappMain");
  const floating = document.getElementById("whatsappFloat");
  const defaultMessage = "Olá! Vim pelo site da Landim Calçados e gostaria de conhecer os modelos disponíveis.";
  if (main) {
    main.href = whatsappLink(defaultMessage);
    main.target = "_blank";
    main.rel = "noopener noreferrer";
  }
  if (floating) {
    floating.href = whatsappLink(defaultMessage);
    floating.target = "_blank";
    floating.rel = "noopener noreferrer";
  }
}

function setupProductButtons() {
  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.dataset.product;
      const message = `Olá! Vi no site da Landim Calçados: ${product}. Pode me informar os modelos e valores disponíveis?`;
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    });
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  configureWhatsApp();
  setupProductButtons();
  setupMobileMenu();
});
