/* =========================================================================
   TODO CON PAPEL — data.js
   -------------------------------------------------------------------------
   ÚNICO archivo que hay que editar para cambiar textos, precios, productos,
   WhatsApp, redes sociales, ubicación, etc. No hace falta tocar HTML/CSS/JS.

   Buscá los comentarios "EDITAR" para encontrar rápido lo más importante.
   ========================================================================= */

const CONFIG = {

  /* ---------------------------------------------------------------------
     MARCA — EDITAR
  --------------------------------------------------------------------- */
  BRAND: {
    name: "Todo con Papel",
    shortName: "Todo con Papel",
    bio: "Todo lo que quieras hecho en papel ♡",
    logo: "assets/logo.svg", // reemplazar por assets/logo.png cuando esté la versión final
    aniversario: "Cumplimos 1 año haciendo papelería con cariño ♡"
  },

  /* ---------------------------------------------------------------------
     CONTACTO Y REDES — EDITAR
  --------------------------------------------------------------------- */
  WHATSAPP: "5491127776473",              // solo números, con código de país, sin +
  WHATSAPP_VISIBLE: "+54 9 11 2777-6473", // como se muestra en pantalla
  INSTAGRAM: "https://instagram.com/todo.conpapel",
  INSTAGRAM_USER: "@todo.conpapel",
  ZONA: "Longchamps, Buenos Aires",
  ENVIOS: "Coordinamos la entrega por WhatsApp (a confirmar zonas y costos).",

  /* ---------------------------------------------------------------------
     SEO / META TAGS — EDITAR
  --------------------------------------------------------------------- */
  SEO: {
    title: "Todo con Papel — Papelería creativa en Longchamps",
    description: "Papelería personalizada, souvenirs, sublimación, anillados y globos para cumpleaños y eventos en Longchamps, Buenos Aires. Pedí tu kit personalizado por WhatsApp.",
    keywords: "papelería creativa Longchamps, souvenirs personalizados Longchamps, anillados Longchamps, papelería personalizada Buenos Aires, cotillón personalizado",
    image: "assets/logo.svg"
  },

  /* ---------------------------------------------------------------------
     MENÚ DE NAVEGACIÓN
  --------------------------------------------------------------------- */
  NAV: [
    { label: "Categorías",  href: "#categorias" },
    { label: "Catálogo",    href: "#catalogo" },
    { label: "Kit de cumple", href: "#kit-cumple" },
    { label: "Anillados",   href: "#cotizador" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Galería",     href: "#galeria" },
    { label: "Preguntas",   href: "#faq" }
  ],

  /* ---------------------------------------------------------------------
     HERO — EDITAR
  --------------------------------------------------------------------- */
  HERO: {
    title: "Todo lo que quieras, hecho en papel ♡",
    subtitle: "Personalizamos cumpleaños, jardín, egresados y regalos con muchísimo cariño. Papelería, souvenirs y sublimación a tu gusto.",
    ctaPrimary: { label: "Ver productos", href: "#catalogo" },
    ctaSecondary: { label: "Armá tu kit de cumple", href: "#kit-cumple" }
  },

  /* ---------------------------------------------------------------------
     CATEGORÍAS — EDITAR (id se usa para filtrar el catálogo)
  --------------------------------------------------------------------- */
  CATEGORIES: [
    {
      id: "cumpleanos",
      name: "Cumpleaños",
      desc: "Bolsitas, vasos, cajitas, toppers, centros de mesa y candy bar personalizados.",
      icon: "gift",
      color: "naranja"
    },
    {
      id: "souvenirs",
      name: "Souvenirs y recuerdos",
      desc: "Yerberas, tazas y mates personalizados con foto para regalar.",
      icon: "mate",
      color: "verde"
    },
    {
      id: "sublimacion",
      name: "Sublimación",
      desc: "Tazas, vasos, bolsas y textiles con tu diseño propio.",
      icon: "mug",
      color: "celeste"
    },
    {
      id: "jardin",
      name: "Set jardín",
      desc: "Bolsa, toalla y taza con nombre y sala para los más chicos.",
      icon: "backpack",
      color: "amarillo"
    },
    {
      id: "agendas",
      name: "Agendas y anillados",
      desc: "Agendas 2026, cuadernos, planners y servicio de anillado.",
      icon: "notebook",
      color: "lila"
    },
    {
      id: "globos",
      name: "Globos personalizados",
      desc: "Globo burbuja con nombre y frase para sorprender.",
      icon: "balloon",
      color: "azul"
    },
    {
      id: "eventos15",
      name: "15 años y eventos",
      desc: "Vasos con vinilo y recuerdos temáticos para tu fiesta.",
      icon: "star",
      color: "naranja"
    }
  ],

  /* ---------------------------------------------------------------------
     CATÁLOGO DE PRODUCTOS — EDITAR
     priceType: "desde" | "consultar"
     minQty: texto opcional, ej. "Mínimo x10"
  --------------------------------------------------------------------- */
  PRODUCTS: [
    // -------- Cumpleaños --------
    {
      id: "bolsitas-tela",
      categoryId: "cumpleanos",
      name: "Bolsitas de tela personalizadas",
      desc: "Bolsitas de tela con nombre y diseño a tu elección, ideales para souvenirs de cumple.",
      priceType: "desde",
      price: 2500,
      minQty: "Mínimo x10",
      icon: "bag"
    },
    {
      id: "bolsitas-friselina",
      categoryId: "cumpleanos",
      name: "Bolsitas de friselina personalizadas",
      desc: "Bolsitas de friselina resistentes, personalizadas con la temática elegida.",
      priceType: "desde",
      price: 1800,
      minQty: "Mínimo x10",
      icon: "bag"
    },
    {
      id: "vasos-cumple",
      categoryId: "cumpleanos",
      name: "Vasos personalizados de cumple",
      desc: "Vasos con nombre, edad y temática libre para la mesa dulce.",
      priceType: "desde",
      price: 900,
      minQty: "Mínimo x10",
      icon: "cup"
    },
    {
      id: "cajitas",
      categoryId: "cumpleanos",
      name: "Cajitas personalizadas",
      desc: "Cajitas para golosinas o regalitos, a juego con la temática del evento.",
      priceType: "desde",
      price: 1200,
      minQty: "Mínimo x10",
      icon: "box"
    },
    {
      id: "toppers",
      categoryId: "cumpleanos",
      name: "Toppers para torta y cupcakes",
      desc: "Set de toppers con nombre, edad o frase para coronar la mesa dulce.",
      priceType: "desde",
      price: 1500,
      minQty: "Set x10",
      icon: "topper"
    },
    {
      id: "centros-mesa",
      categoryId: "cumpleanos",
      name: "Centros de mesa temáticos",
      desc: "Centros de mesa a medida según la temática que elijas.",
      priceType: "consultar",
      icon: "table"
    },
    {
      id: "candy-bar",
      categoryId: "cumpleanos",
      name: "Candy bar personalizado",
      desc: "Ambientación completa de mesa dulce con cartelería y detalles a juego.",
      priceType: "consultar",
      icon: "candy"
    },

    // -------- Souvenirs y recuerdos --------
    {
      id: "yerberas",
      categoryId: "souvenirs",
      name: "Yerberas personalizadas",
      desc: "Bolsitas de yerba personalizadas con nombre y diseño, ideales como souvenir.",
      priceType: "desde",
      price: 2200,
      minQty: "Mínimo x10",
      icon: "herb"
    },
    {
      id: "tazas-foto",
      categoryId: "souvenirs",
      name: "Tazas con foto",
      desc: "Tazas personalizadas con la foto que nos mandes, perfectas para regalar.",
      priceType: "desde",
      price: 3500,
      icon: "photomug"
    },
    {
      id: "mates-foto",
      categoryId: "souvenirs",
      name: "Mates personalizados con foto",
      desc: "Mates con foto y nombre, un recuerdo único para cada ocasión.",
      priceType: "desde",
      price: 4000,
      icon: "mate"
    },

    // -------- Sublimación --------
    {
      id: "tazas-sublimadas",
      categoryId: "sublimacion",
      name: "Tazas sublimadas a diseño propio",
      desc: "Tazas sublimadas con el diseño que nos envíes o que armamos juntos.",
      priceType: "desde",
      price: 3200,
      icon: "mug"
    },
    {
      id: "vasos-termicos",
      categoryId: "sublimacion",
      name: "Vasos térmicos sublimados",
      desc: "Vasos térmicos con diseño personalizado, ideales para regalo o uso diario.",
      priceType: "desde",
      price: 5500,
      icon: "thermo"
    },
    {
      id: "bolsas-sublimadas",
      categoryId: "sublimacion",
      name: "Bolsas de tela sublimadas",
      desc: "Bolsas de tela sublimadas con diseño propio, resistentes y reutilizables.",
      priceType: "desde",
      price: 3800,
      icon: "bag"
    },
    {
      id: "textiles-sublimados",
      categoryId: "sublimacion",
      name: "Textiles sublimados",
      desc: "Remeras, buzos y otros textiles con tu diseño sublimado.",
      priceType: "consultar",
      icon: "shirt"
    },

    // -------- Set jardín --------
    {
      id: "set-jardin",
      categoryId: "jardin",
      name: "Set jardín: bolsa + toalla + taza",
      desc: "Set completo con nombre y sala, ideal para el jardín o preescolar.",
      priceType: "desde",
      price: 6500,
      icon: "backpack"
    },

    // -------- Agendas y anillados --------
    {
      id: "agenda-2026",
      categoryId: "agendas",
      name: "Agenda 2026 personalizada",
      desc: "Agenda anual personalizada con tapa a tu gusto.",
      priceType: "desde",
      price: 8500,
      icon: "notebook"
    },
    {
      id: "cuaderno-anillado",
      categoryId: "agendas",
      name: "Cuaderno anillado personalizado",
      desc: "Cuaderno anillado con tapa personalizada, hojas a elección.",
      priceType: "desde",
      price: 4200,
      icon: "ring"
    },
    {
      id: "planner",
      categoryId: "agendas",
      name: "Planner mensual",
      desc: "Planner mensual para organizar tus días, personalizado con tu nombre.",
      priceType: "desde",
      price: 5000,
      icon: "planner"
    },
    {
      id: "servicio-anillado",
      categoryId: "agendas",
      name: "Servicio de anillado (traé tus hojas)",
      desc: "Anillamos tus propias hojas o apuntes con tapa transparente o personalizada.",
      priceType: "consultar",
      icon: "ring"
    },

    // -------- Globos --------
    {
      id: "globo-burbuja",
      categoryId: "globos",
      name: "Globo burbuja personalizado",
      desc: "Globo burbuja transparente con nombre y frase adentro, efecto sorpresa garantizado.",
      priceType: "desde",
      price: 6000,
      icon: "balloon"
    },

    // -------- 15 años y eventos --------
    {
      id: "vasos-vinilo-15",
      categoryId: "eventos15",
      name: "Vasos con vinilo temático",
      desc: "Vasos personalizados con vinilo para 15 años, casamientos y eventos.",
      priceType: "desde",
      price: 950,
      minQty: "Mínimo x10",
      icon: "cup"
    },
    {
      id: "recuerdos-eventos",
      categoryId: "eventos15",
      name: "Recuerdos temáticos para eventos",
      desc: "Recuerdos a medida según la temática y paleta de colores de tu evento.",
      priceType: "consultar",
      icon: "star"
    }
  ],

  /* ---------------------------------------------------------------------
     KIT DE CUMPLE — ítems que el cliente puede elegir
  --------------------------------------------------------------------- */
  KIT_ITEMS: [
    { id: "bolsitas", label: "Bolsitas personalizadas", icon: "bag" },
    { id: "vasos", label: "Vasos personalizados", icon: "cup" },
    { id: "cajitas", label: "Cajitas", icon: "box" },
    { id: "toppers", label: "Toppers", icon: "topper" },
    { id: "globo", label: "Globo con nombre", icon: "balloon" }
  ],

  /* ---------------------------------------------------------------------
     COTIZADOR DE ANILLADOS
  --------------------------------------------------------------------- */
  COTIZADOR: {
    tamanios: ["A4", "A5", "Oficio"],
    tapas: ["Transparente", "Personalizada"]
  },

  /* ---------------------------------------------------------------------
     CÓMO TRABAJAMOS
  --------------------------------------------------------------------- */
  STEPS: [
    {
      title: "Elegís y personalizás",
      desc: "Elegís tus productos y nos contás la temática, colores y nombres que querés incluir."
    },
    {
      title: "Te mandamos el diseño para aprobar",
      desc: "Te enviamos una vista previa por WhatsApp antes de producir, para que apruebes cada detalle."
    },
    {
      title: "Lo producimos",
      desc: "Una vez aprobado, empezamos a producir tu pedido con dedicación artesanal."
    },
    {
      title: "Retirás o coordinamos la entrega",
      desc: "Retirás en " + "__ZONA__" + " o coordinamos la entrega según disponibilidad."
    }
  ],
  STEPS_NOTE: "Trabajamos con seña para confirmar el pedido y pedimos anticipación según la cantidad y el tipo de producto.",

  /* ---------------------------------------------------------------------
     GALERÍA (placeholders — reemplazar por fotos reales)
  --------------------------------------------------------------------- */
  GALLERY: [
    { caption: "Bolsitas de cumple", color: "naranja", icon: "bag" },
    { caption: "Vasos personalizados", color: "celeste", icon: "cup" },
    { caption: "Mates con foto", color: "verde", icon: "mate" },
    { caption: "Agenda 2026", color: "lila", icon: "notebook" },
    { caption: "Globo burbuja", color: "azul", icon: "balloon" },
    { caption: "Candy bar", color: "amarillo", icon: "candy" },
    { caption: "Set jardín", color: "naranja", icon: "backpack" },
    { caption: "15 años", color: "celeste", icon: "star" }
  ],

  /* ---------------------------------------------------------------------
     PREGUNTAS FRECUENTES — EDITAR
  --------------------------------------------------------------------- */
  FAQ: [
    {
      q: "¿Con cuánta anticipación tengo que pedir?",
      a: "Recomendamos contactarnos con al menos 1 o 2 semanas de anticipación según la cantidad y el tipo de producto. Para pedidos grandes o fechas muy próximas, escribinos igual y vemos disponibilidad."
    },
    {
      q: "¿Hacen cualquier temática?",
      a: "Sí, trabajamos con la temática que nos indiques. Nos encanta adaptarnos a lo que imaginás para tu evento."
    },
    {
      q: "¿Cuáles son las formas de pago?",
      a: "Se trabaja con una seña para confirmar el pedido y el resto se abona al retirar o coordinar la entrega. Consultanos los medios de pago disponibles por WhatsApp."
    },
    {
      q: "¿Hacen envíos?",
      a: "__ENVIOS__"
    }
  ],

  /* ---------------------------------------------------------------------
     FOOTER
  --------------------------------------------------------------------- */
  FOOTER: {
    text: "Hecho a mano con mucho cariño en " + "__ZONA__" + "."
  }
};
