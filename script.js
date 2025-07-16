// — — — Fade‑in secciones — — —
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(sec => observer.observe(sec));

  // — — — Modal MENSAJE inicial — — —
  const openBtn   = document.getElementById("open-modal");
  const msgModal  = document.getElementById("message-modal");
  const closeMsg  = document.getElementById("close-modal");

  openBtn.addEventListener("click", () => {
    msgModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  const closeModal = () => {
    msgModal.style.display = "none";
    document.body.style.overflow = "auto";
  };
  closeMsg.addEventListener("click", closeModal);
  window.addEventListener("click", e => { if (e.target === msgModal) closeModal(); });

  // — — — Juego del orden secreto — — —
  const items         = document.querySelectorAll(".enamor-grid .item");
  const requiredOrder = [5, 2, 3, 4, 1];   // Índices correctos
  let   clickedOrder  = [];

  items.forEach(item => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.index);

      // Ignora si ya clicó este en la misma ronda o si ya ganó
      if (clickedOrder.includes(idx) || item.classList.contains("green")) return;

      // Marca en fucsia y guarda selección
      item.classList.add("fuchsia");
      clickedOrder.push(idx);

      // ¿Ya tocó 5?
      if (clickedOrder.length === requiredOrder.length) {
        const success = requiredOrder.every((val, i) => val === clickedOrder[i]);

        if (success) {
          // 🎉 CORRECTO: todo verde y modal secreto
          items.forEach(it => it.classList.replace("fuchsia", "green"));
          clickedOrder = [];                      // Limpia array
          setTimeout(showSecretModal, 2000);      // Pop‑up tras 2 s
        } else {
          // ❌ INCORRECTO: parpadea rojo y resetea
          items.forEach(it => {
            if (it.classList.contains("fuchsia")) {
              it.classList.remove("fuchsia");
              it.classList.add("red");
            }
          });
          clickedOrder = [];
          setTimeout(() => items.forEach(it => it.classList.remove("red")), 2000);
        }
      }
    });
  });

  // — — — Modal SECRETO — — —
  const secretModal  = document.getElementById("secret-modal");
  const secretClose  = document.getElementById("secret-close");

  function showSecretModal() {
    secretModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  const closeSecret = () => {
    secretModal.style.display = "none";
    document.body.style.overflow = "auto";
  };
  secretClose.addEventListener("click", closeSecret);
  window.addEventListener("click", e => { if (e.target === secretModal) closeSecret(); });
});
