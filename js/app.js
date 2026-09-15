/* =========================================================================
   TODO CON PAPEL — app.js
   Renderizado, interacciones, carrito y armado de mensajes de WhatsApp.
   No hace falta editar este archivo para cambiar contenido: eso se hace
   en js/data.js
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     HELPERS
  --------------------------------------------------------------------- */
  function fillText(text) {
    return String(text)
      .replace(/__ZONA__/g, CONFIG.ZONA)
      .replace(/__ENVIOS__/g, CONFIG.ENVIOS);
  }

  function waLink(message) {
    return "https://wa.me/" + CONFIG.WHATSAPP + "?text=" + encodeURIComponent(message);
  }

  function formatPrice(product) {
    if (product.priceType === "consultar") return "Consultar";
    return "Desde $" + Number(product.price).toLocaleString("es-AR");
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((key) => {
        if (key === "class") node.className = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach((child) => child && node.appendChild(child));
    return node;
  }

  function formatDate(value) {
    if (!value) return "";
    const parts = value.split("-");
    if (parts.length !== 3) return value;
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  /* ---------------------------------------------------------------------
     ICONOS: pintar todos los <span id="icon-*"> con su SVG
  --------------------------------------------------------------------- */
  function mountStaticIcons() {
    const map = {
      "icon-cart": "cart",
      "icon-whatsapp-header": "whatsapp",
      "icon-whatsapp-footer": "whatsapp",
      "icon-whatsapp-float": "whatsapp",
      "icon-instagram-footer": "instagram",
      "icon-location-footer": "location",
      "icon-close-cart": "close",
      "icon-close-modal": "close"
    };
    Object.keys(map).forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.innerHTML = getIcon(map[id]);
    });
  }

  /* ---------------------------------------------------------------------
     WHATSAPP LINKS GLOBALES
  --------------------------------------------------------------------- */
  function mountWhatsappLinks() {
    const genericMsg = "¡Hola! Vi la web de " + CONFIG.BRAND.name + " y quería consultar por sus productos ♡";
    const link = waLink(genericMsg);

    ["header-whatsapp", "footer-whatsapp", "floating-whatsapp"].forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.href = link;
    });
  }

  /* ---------------------------------------------------------------------
     NAV
  --------------------------------------------------------------------- */
  function renderNav() {
    const list = document.getElementById("nav-list");
    CONFIG.NAV.forEach((item) => {
      const li = el("li", {}, [el("a", { href: item.href, text: item.label })]);
      list.appendChild(li);
    });

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------------------
     HERO
  --------------------------------------------------------------------- */
  function renderHero() {
    document.getElementById("hero-badge").textContent = "✨ " + CONFIG.BRAND.aniversario;
    document.getElementById("hero-title").textContent = CONFIG.HERO.title;
    document.getElementById("hero-subtitle").textContent = CONFIG.HERO.subtitle;

    const ctaP = document.getElementById("hero-cta-primary");
    ctaP.textContent = CONFIG.HERO.ctaPrimary.label;
    ctaP.href = CONFIG.HERO.ctaPrimary.href;

    const ctaS = document.getElementById("hero-cta-secondary");
    ctaS.textContent = CONFIG.HERO.ctaSecondary.label;
    ctaS.href = CONFIG.HERO.ctaSecondary.href;
  }

  /* ---------------------------------------------------------------------
     CATEGORÍAS
  --------------------------------------------------------------------- */
  function renderCategories() {
    const grid = document.getElementById("categories-grid");
    CONFIG.CATEGORIES.forEach((cat) => {
      const card = el("button", { class: "category-card reveal", type: "button" }, [
        el("span", { class: "category-icon bg-" + cat.color, html: getIcon(cat.icon) }),
        el("h3", { text: cat.name }),
        el("p", { text: cat.desc })
      ]);
      card.addEventListener("click", () => {
        setActiveFilter(cat.id);
        document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
      });
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------------
     CATÁLOGO + FILTROS
  --------------------------------------------------------------------- */
  let activeFilter = "todos";

  function setActiveFilter(id) {
    activeFilter = id;
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === id);
      btn.setAttribute("aria-selected", String(btn.dataset.filter === id));
    });
    renderCatalog();
  }

  function renderFilters() {
    const wrap = document.getElementById("catalog-filters");
    const allBtn = el("button", {
      class: "filter-btn active",
      type: "button",
      "data-filter": "todos",
      role: "tab",
      "aria-selected": "true"
    }, []);
    allBtn.textContent = "Todos";
    allBtn.addEventListener("click", () => setActiveFilter("todos"));
    wrap.appendChild(allBtn);

    CONFIG.CATEGORIES.forEach((cat) => {
      const btn = el("button", {
        class: "filter-btn",
        type: "button",
        "data-filter": cat.id,
        role: "tab",
        "aria-selected": "false"
      }, []);
      btn.textContent = cat.name;
      btn.addEventListener("click", () => setActiveFilter(cat.id));
      wrap.appendChild(btn);
    });
  }

  function renderCatalog() {
    const grid = document.getElementById("catalog-grid");
    grid.innerHTML = "";
    const items = CONFIG.PRODUCTS.filter((p) => activeFilter === "todos" || p.categoryId === activeFilter);
    const catColor = {};
    CONFIG.CATEGORIES.forEach((c) => { catColor[c.id] = c.color; });

    items.forEach((product) => {
      const color = catColor[product.categoryId] || "naranja";
      const card = el("article", { class: "product-card reveal" }, [
        el("div", { class: "product-media gradient-" + color, html: getIcon(product.icon) }),
        el("div", { class: "product-body" }, [
          el("h3", { text: product.name }),
          el("p", { class: "product-desc", text: product.desc }),
          el("div", { class: "product-meta" }, [
            el("span", { class: "product-price", text: formatPrice(product) }),
            product.minQty ? el("span", { class: "product-minqty", text: product.minQty }) : null
          ]),
          el("button", { class: "product-add", type: "button", text: "Personalizar y agregar" })
        ])
      ]);
      card.querySelector(".product-add").addEventListener("click", () => openProductModal(product));
      grid.appendChild(card);
    });

    observeReveals();
  }

  /* ---------------------------------------------------------------------
     CARRITO
  --------------------------------------------------------------------- */
  const cart = [];

  function addToCart(item) {
    cart.push(item);
    renderCart();
    openCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }

  function renderCart() {
    const list = document.getElementById("cart-items");
    const empty = document.getElementById("cart-empty");
    const count = document.getElementById("cart-count");
    list.innerHTML = "";

    count.textContent = String(cart.length);
    empty.hidden = cart.length > 0;

    cart.forEach((item, index) => {
      const details = [];
      if (item.nombre) details.push("Nombre: " + item.nombre);
      if (item.tematica) details.push("Temática/colores: " + item.tematica);
      if (item.fecha) details.push("Fecha del evento: " + formatDate(item.fecha));
      details.push("Cantidad: " + item.cantidad);
      if (item.aclaraciones) details.push("Aclaraciones: " + item.aclaraciones);

      const li = el("li", { class: "cart-item" }, [
        el("div", { class: "cart-item-head" }, [
          el("h4", { text: item.name }),
          el("button", { class: "cart-item-remove", type: "button", "aria-label": "Quitar " + item.name, html: getIcon("close") })
        ]),
        el("div", { class: "cart-item-details" }, details.map((d) => el("span", { text: d })))
      ]);
      li.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(index));
      list.appendChild(li);
    });
  }

  function openCart() {
    document.getElementById("cart-drawer").hidden = false;
    document.getElementById("drawer-overlay").hidden = false;
    requestAnimationFrame(() => document.getElementById("cart-drawer").classList.add("open"));
    document.getElementById("cart-toggle").setAttribute("aria-expanded", "true");
  }

  function closeCart() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-toggle").setAttribute("aria-expanded", "false");
    setTimeout(() => {
      document.getElementById("cart-drawer").hidden = true;
      document.getElementById("drawer-overlay").hidden = true;
    }, 250);
  }

  function buildCartMessage() {
    let msg = "¡Hola! Quiero hacer este pedido en " + CONFIG.BRAND.name + ":\n\n";
    cart.forEach((item, i) => {
      msg += (i + 1) + ". " + item.name + "\n";
      if (item.nombre) msg += "   - Nombre a poner: " + item.nombre + "\n";
      if (item.tematica) msg += "   - Temática/colores: " + item.tematica + "\n";
      if (item.fecha) msg += "   - Fecha del evento: " + formatDate(item.fecha) + "\n";
      msg += "   - Cantidad: " + item.cantidad + "\n";
      if (item.aclaraciones) msg += "   - Aclaraciones: " + item.aclaraciones + "\n";
      msg += "\n";
    });
    msg += "¡Gracias!";
    return msg;
  }

  function mountCart() {
    document.getElementById("cart-toggle").addEventListener("click", openCart);
    document.getElementById("cart-close").addEventListener("click", closeCart);
    document.getElementById("drawer-overlay").addEventListener("click", () => {
      closeCart();
      closeModal();
    });
    document.getElementById("cart-send-whatsapp").addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Todavía no agregaste productos a tu pedido.");
        return;
      }
      window.open(waLink(buildCartMessage()), "_blank", "noopener");
    });
  }

  /* ---------------------------------------------------------------------
     MODAL DE PERSONALIZACIÓN DE PRODUCTO
  --------------------------------------------------------------------- */
  let currentProduct = null;

  function openProductModal(product) {
    currentProduct = product;
    document.getElementById("modal-title").textContent = "Personalizar: " + product.name;
    document.getElementById("modal-form").reset();
    document.getElementById("modal-cantidad").value = 1;
    document.getElementById("product-modal").hidden = false;
    document.getElementById("modal-overlay").hidden = false;
    document.getElementById("modal-nombre").focus();
  }

  function closeModal() {
    document.getElementById("product-modal").hidden = true;
    document.getElementById("modal-overlay").hidden = true;
    currentProduct = null;
  }

  function mountModal() {
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-overlay").addEventListener("click", closeModal);

    document.getElementById("modal-form").addEventListener("submit", (e) => {
      e.preventDefault();
      if (!currentProduct) return;
      addToCart({
        name: currentProduct.name,
        nombre: document.getElementById("modal-nombre").value.trim(),
        tematica: document.getElementById("modal-tematica").value.trim(),
        fecha: document.getElementById("modal-fecha").value,
        cantidad: document.getElementById("modal-cantidad").value || 1,
        aclaraciones: document.getElementById("modal-aclaraciones").value.trim()
      });
      closeModal();
    });
  }

  /* ---------------------------------------------------------------------
     KIT DE CUMPLE
  --------------------------------------------------------------------- */
  function renderKitSteps() {
    const wrap = document.getElementById("kit-steps");
    ["1. Temática", "2. Datos del festejo", "3. Ítems", "4. Resumen"].forEach((s) => {
      wrap.appendChild(el("span", { text: s }));
    });
  }

  function renderKitItems() {
    const wrap = document.getElementById("kit-items");
    CONFIG.KIT_ITEMS.forEach((item) => {
      const label = el("label", { class: "kit-item-chip" }, [
        el("input", { type: "checkbox", name: "items", value: item.id }),
        el("span", { html: getIcon(item.icon) }),
        el("span", { text: item.label })
      ]);
      wrap.appendChild(label);
    });
  }

  function mountKitForm() {
    document.getElementById("kit-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const tematica = document.getElementById("kit-tematica").value.trim();
      const nombre = document.getElementById("kit-nombre").value.trim();
      const edad = document.getElementById("kit-edad").value;
      const fecha = document.getElementById("kit-fecha").value;
      const invitados = document.getElementById("kit-invitados").value;
      const aclaraciones = document.getElementById("kit-aclaraciones").value.trim();
      const items = Array.from(document.querySelectorAll('#kit-items input[type="checkbox"]:checked'))
        .map((cb) => CONFIG.KIT_ITEMS.find((it) => it.id === cb.value).label);

      const summaryData = [
        ["Temática", tematica || "-"],
        ["Cumpleañero/a", nombre || "-"],
        ["Edad", edad || "-"],
        ["Fecha del evento", fecha ? formatDate(fecha) : "-"],
        ["Invitados", invitados || "-"],
        ["Ítems elegidos", items.length ? items.join(", ") : "-"],
        ["Aclaraciones", aclaraciones || "-"]
      ];

      const summaryEl = document.getElementById("kit-summary");
      summaryEl.innerHTML = "";
      summaryEl.appendChild(el("h3", { text: "Resumen de tu kit de cumple" }));
      const dl = el("dl", {}, []);
      summaryData.forEach(([k, v]) => {
        dl.appendChild(el("dt", { text: k }));
        dl.appendChild(el("dd", { text: v }));
      });
      summaryEl.appendChild(dl);

      let msg = "¡Hola! Quiero armar un kit de cumple en " + CONFIG.BRAND.name + ":\n\n";
      summaryData.forEach(([k, v]) => { msg += "- " + k + ": " + v + "\n"; });
      msg += "\n¡Espero su respuesta, gracias!";

      const waBtn = el("a", { class: "btn btn-whatsapp btn-block", href: waLink(msg), target: "_blank", rel: "noopener", text: "Enviar por WhatsApp" });
      summaryEl.appendChild(waBtn);

      summaryEl.hidden = false;
      summaryEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------------------------------------------------------------------
     COTIZADOR DE ANILLADOS
  --------------------------------------------------------------------- */
  function renderCotizadorOptions() {
    const tamanioSel = document.getElementById("cot-tamanio");
    CONFIG.COTIZADOR.tamanios.forEach((t) => {
      tamanioSel.appendChild(el("option", { value: t, text: t }));
    });
    const tapaSel = document.getElementById("cot-tapa");
    CONFIG.COTIZADOR.tapas.forEach((t) => {
      tapaSel.appendChild(el("option", { value: t, text: t }));
    });
  }

  function mountCotizadorForm() {
    document.getElementById("cotizador-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const tamanio = document.getElementById("cot-tamanio").value;
      const hojas = document.getElementById("cot-hojas").value;
      const tapa = document.getElementById("cot-tapa").value;
      const copias = document.getElementById("cot-copias").value;

      const msg = "¡Hola! Quiero cotizar un anillado en " + CONFIG.BRAND.name + ":\n\n" +
        "- Tamaño: " + tamanio + "\n" +
        "- Cantidad de hojas: " + hojas + "\n" +
        "- Tipo de tapa: " + tapa + "\n" +
        "- Cantidad de copias: " + copias + "\n\n" +
        "¿Me pasan el precio? ¡Gracias!";

      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---------------------------------------------------------------------
     CÓMO TRABAJAMOS
  --------------------------------------------------------------------- */
  function renderSteps() {
    const grid = document.getElementById("steps-grid");
    CONFIG.STEPS.forEach((step, i) => {
      grid.appendChild(el("div", { class: "step-card reveal" }, [
        el("div", { class: "step-number", text: String(i + 1) }),
        el("h3", { text: step.title }),
        el("p", { text: fillText(step.desc) })
      ]));
    });
    document.getElementById("steps-note").textContent = CONFIG.STEPS_NOTE;
  }

  /* ---------------------------------------------------------------------
     GALERÍA
  --------------------------------------------------------------------- */
  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    CONFIG.GALLERY.forEach((item) => {
      const a = el("a", {
        class: "gallery-item gradient-" + item.color + " reveal",
        href: CONFIG.INSTAGRAM,
        target: "_blank",
        rel: "noopener"
      }, [
        el("span", { html: getIcon(item.icon) }),
        el("span", { text: item.caption })
      ]);
      grid.appendChild(a);
    });

    const igLink = document.getElementById("gallery-ig-link");
    igLink.href = CONFIG.INSTAGRAM;
    igLink.textContent = CONFIG.INSTAGRAM_USER;
  }

  /* ---------------------------------------------------------------------
     FAQ
  --------------------------------------------------------------------- */
  function renderFaq() {
    const list = document.getElementById("faq-list");
    CONFIG.FAQ.forEach((item) => {
      const wrapper = el("div", { class: "faq-item reveal" }, [
        el("button", { class: "faq-question", type: "button", "aria-expanded": "false" }, [
          el("span", { text: item.q }),
          el("span", { class: "chevron", html: getIcon("plus") })
        ]),
        el("div", { class: "faq-answer" }, [el("p", { text: fillText(item.a) })])
      ]);
      const btn = wrapper.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        const open = wrapper.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
        const answer = wrapper.querySelector(".faq-answer");
        answer.style.maxHeight = open ? answer.scrollHeight + "px" : null;
      });
      list.appendChild(wrapper);
    });
  }

  /* ---------------------------------------------------------------------
     FOOTER
  --------------------------------------------------------------------- */
  function renderFooter() {
    document.getElementById("footer-text").textContent = fillText(CONFIG.FOOTER.text);
    document.getElementById("footer-instagram").href = CONFIG.INSTAGRAM;
    document.getElementById("footer-instagram-label").textContent = CONFIG.INSTAGRAM_USER;
    document.getElementById("footer-zona").textContent = CONFIG.ZONA;
    document.getElementById("footer-year").textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------------------------
     META TAGS / SEO (sincroniza con CONFIG en tiempo de carga)
  --------------------------------------------------------------------- */
  function syncMeta() {
    document.title = CONFIG.SEO.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", CONFIG.SEO.description);
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute("content", CONFIG.SEO.keywords);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", CONFIG.SEO.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", CONFIG.SEO.description);
  }

  /* ---------------------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------------------- */
  let observer;
  function observeReveals() {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".reveal:not(.visible)").forEach((node) => observer.observe(node));
  }

  /* ---------------------------------------------------------------------
     INIT
  --------------------------------------------------------------------- */
  function init() {
    document.getElementById("brand-logo").alt = CONFIG.BRAND.name;
    document.getElementById("brand-logo").src = CONFIG.BRAND.logo;
    document.querySelector(".footer-logo").src = CONFIG.BRAND.logo;

    mountStaticIcons();
    mountWhatsappLinks();
    renderNav();
    renderHero();
    renderCategories();
    renderFilters();
    renderCatalog();
    renderKitSteps();
    renderKitItems();
    mountKitForm();
    renderCotizadorOptions();
    mountCotizadorForm();
    renderSteps();
    renderGallery();
    renderFaq();
    renderFooter();
    syncMeta();
    mountCart();
    mountModal();

    observeReveals();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCart();
        closeModal();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
