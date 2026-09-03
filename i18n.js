(() => {
  const STORAGE_KEY = "site-language";
  const DEFAULT_LANG = "pt";
  const SUPPORTED_LANGS = ["pt", "en"];

  const translations = {
    pt: {
      currentLabel: "Português",
      currentFlag: "",
      toggleAria: "Abrir seleção de idioma",
      pageTitles: {
        index: "Sabores do Oriente - Culinária Árabe",
        form: "Login - Sabores do Oriente",
        reserva: "Reserva - Sabores do Oriente",
      },
      index: {
        heroTitle: "Sabores da Terra",
        heroDesc: "Descubra a rica e aromática culinária árabe, uma jornada de sabores que atravessa séculos de tradição.",
        nav: ["Pratos Principais", "Entradas Tradicionais", "Sobremesas", "Bebidas", "História"],
        reserve: "Reserva",
        sectionTitles: ["Pratos Principais", "Entradas Tradicionais", "Doces e Sobremesas", "Bebidas Tradicionais", "História da Culinária Árabe"],
        drinksIntro: "Conheça as bebidas que acompanham a culinária árabe:",
        dishNames: ["Kebab", "Shawarma", "Homus", "Tabule", "Baklava", "Kunafa"],
        dishDescriptions: [
          "O kebab é um dos pratos mais icônicos da culinária árabe, feito com carne (geralmente cordeiro ou frango) marinada e grelhada em espetos. Servido com pão árabe, vegetais frescos e molhos característicos.",
          "O shawarma consiste em fatias de carne empilhadas em um espeto vertical e assadas lentamente. Tradicionalmente servido em pão sírio com tahine, homus e picles.",
          "Pasta cremosa feita de grão-de-bico, tahine (pasta de gergelim), suco de limão e alho. Um dos acompanhamentos mais populares no mundo árabe.",
          "Salada refrescante feita com trigo bulgur, tomate, pepino, salsa, hortelã e temperada com limão e azeite de oliva.",
          "Doce folhado feito com camadas de massa filo, recheado com nozes ou pistache e banhado em calda de mel ou açúcar.",
          "Sobremesa feita com fios de massa kataifi, recheada com queijo ou creme, assada até ficar crocante e depois banhada em calda doce.",
        ],
        drinkNames: ["Café Árabe", "Chá de Menta", "Jallab", "Ayran", "Laban", "Karak chai"],
        drinkDescriptions: [
          "Preparado com grãos levemente torcidos e cardamomo, servido em pequenas xícaras.",
          "Chá verde com folhas frescas de hortelã, muito popular no Magrebe.",
          "Bebida refrescante feita com xarope de tâmaras, uvas e água de rosas.",
          "Bebida de iogurte salgado e fresco, perfeita para acompanhar pratos condimentados.",
          "Bebida láctea fermentada, feita de leite de vaca, cabra ou camelo.",
          "Mistura de chá preto forte com especiarias, como cardamomo, canela, gengibre e cravo.",
        ],
        history: [
          "A culinária árabe tem suas raízes na antiga cultura beduína, desenvolvida ao longo de séculos de trocas comerciais e culturais ao longo da Rota da Seda. Influenciada pelas cozinhas persa, turca, indiana e mediterrânea, a gastronomia árabe se caracteriza pelo uso de especiarias aromáticas, grãos, carnes (especialmente cordeiro) e vegetais frescos.",
          "Cada região do mundo árabe desenvolveu suas próprias variações de pratos, mas mantendo uma base comum de sabores e técnicas de preparo que unem esses povos através da comida.",
        ],
        footer: "© 2025 Sabores da Terra",
      },
      form: {
        header: "Sabores da Terra",
        login: "Entrar",
        signup: "Cadastrar",
        labels: ["E-mail", "Senha", "Nome Completo", "E-mail", "Senha"],
        placeholders: ["seu@email.com", "••••••••", "Seu nome", "seu@email.com", "Mínimo 8 caracteres"],
        buttons: ["Entrar", "Cadastrar"],
        divider: "ou",
        footer: "© 2025 Sabores da Terra",
      },
      reserva: {
        header: "Sabores da Terra",
        title: "Faça sua Reserva",
        labels: ["Nome Completo:", "E-mail:", "Telefone:", "Data da Reserva:", "Horário:", "Quantidade de Pessoas:", "Escolha sua Mesa:", "Iluminação Ambiente:", "Preferências Alimentares:", "Código Promocional:"],
        optionsMesa: ["Área Externa", "Mesa VIP", "Mesa Tradicional"],
        range: ["Escuro", "Intermediário", "Brilhante"],
        optionsPref: ["Nenhuma", "Vegetariana", "Vegana", "Sem Glúten", "Sem Lactose", "Halal"],
        small: "Use um código válido de 6 caracteres (Ex: ARAB10).",
        smallError: "Código inválido! Exemplo correto: ARAB10.",
        submit: "Reservar",
        footer: "© 2025 Sabores da Terra",
        phonePlaceholder: "(XX) XXXXX-XXXX",
      },
      alerts: {
        invalidCode: "Código promocional inválido! Use 4 letras seguidas de 2 números (Ex: ARAB10).",
      },
    },
    en: {
      currentLabel: "English",
      currentFlag: "",
      toggleAria: "Open language selection",
      pageTitles: {
        index: "Flavors of the East - Arabic Cuisine",
        form: "Login - Flavors of the East",
        reserva: "Reservation - Flavors of the East",
      },
      index: {
        heroTitle: "Flavors of the Land",
        heroDesc: "Discover rich and aromatic Arabic cuisine, a journey of flavors across centuries of tradition.",
        nav: ["Main Dishes", "Traditional Starters", "Desserts", "Drinks", "History"],
        reserve: "Reservation",
        sectionTitles: ["Main Dishes", "Traditional Starters", "Sweets and Desserts", "Traditional Drinks", "History of Arabic Cuisine"],
        drinksIntro: "Learn about the drinks that accompany Arabic cuisine:",
        dishNames: ["Kebab", "Shawarma", "Hummus", "Tabbouleh", "Baklava", "Kunafa"],
        dishDescriptions: [
          "Kebab is one of the most iconic dishes in Arabic cuisine, made with marinated meat (usually lamb or chicken) grilled on skewers. It is served with pita bread, fresh vegetables, and signature sauces.",
          "Shawarma consists of slices of meat stacked on a vertical spit and slowly roasted. Traditionally served in pita bread with tahini, hummus, and pickles.",
          "Creamy paste made from chickpeas, tahini (sesame paste), lemon juice and garlic. One of the most popular side dishes in the Arab world.",
          "Refreshing salad made with bulgur wheat, tomato, cucumber, parsley, mint, and seasoned with lemon and olive oil.",
          "Layered pastry dessert made with filo dough, filled with walnuts or pistachios and soaked in honey or sugar syrup.",
          "Dessert made with kataifi pastry strands, filled with cheese or cream, baked until crispy and then soaked in sweet syrup.",
        ],
        drinkNames: ["Arabic Coffee", "Mint Tea", "Jallab", "Ayran", "Laban", "Karak chai"],
        drinkDescriptions: [
          "Prepared with lightly roasted beans and cardamom, served in small cups.",
          "Green tea with fresh mint leaves, very popular in the Maghreb.",
          "Refreshing drink made with date syrup, grapes, and rose water.",
          "Fresh salty yogurt drink, perfect to accompany spiced dishes.",
          "Fermented dairy drink made from cow, goat or camel milk.",
          "Blend of strong black tea with spices such as cardamom, cinnamon, ginger, and cloves.",
        ],
        history: [
          "Arabic cuisine has its roots in ancient Bedouin culture, developed over centuries of trade and cultural exchange along the Silk Road. Influenced by Persian, Turkish, Indian and Mediterranean cuisines, Arabic gastronomy is characterized by aromatic spices, grains, meat (especially lamb), and fresh vegetables.",
          "Each region of the Arab world developed its own dish variations while maintaining a common base of flavors and cooking techniques that unite these peoples through food.",
        ],
        footer: "© 2025 Flavors of the Land",
      },
      form: {
        header: "Flavors of the Land",
        login: "Sign In",
        signup: "Sign Up",
        labels: ["Email", "Password", "Full Name", "Email", "Password"],
        placeholders: ["your@email.com", "••••••••", "Your name", "your@email.com", "Minimum 8 characters"],
        buttons: ["Sign In", "Sign Up"],
        divider: "or",
        footer: "© 2025 Flavors of the Land",
      },
      reserva: {
        header: "Flavors of the Land",
        title: "Make Your Reservation",
        labels: ["Full Name:", "Email:", "Phone:", "Reservation Date:", "Time:", "Number of People:", "Choose Your Table:", "Ambient Lighting:", "Dietary Preferences:", "Promotional Code:"],
        optionsMesa: ["Outdoor Area", "VIP Table", "Traditional Table"],
        range: ["Dark", "Intermediate", "Bright"],
        optionsPref: ["None", "Vegetarian", "Vegan", "Gluten-Free", "Lactose-Free", "Halal"],
        small: "Use a valid 6-character code (e.g. ARAB10).",
        smallError: "Invalid code! Correct example: ARAB10.",
        submit: "Reserve",
        footer: "© 2025 Flavors of the Land",
        phonePlaceholder: "(XX) XXXXX-XXXX",
      },
      alerts: {
        invalidCode: "Invalid promotional code! Use 4 letters followed by 2 numbers (e.g. ARAB10).",
      },
    },
  };

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && typeof value === "string") el.textContent = value;
  }

  function setTexts(selector, values) {
    const els = document.querySelectorAll(selector);
    els.forEach((el, i) => {
      if (typeof values[i] === "string") el.textContent = values[i];
    });
  }

  function pageKey() {
    const p = window.location.pathname.toLowerCase();
    if (p.includes("formul")) return "form";
    if (p.includes("reserva")) return "reserva";
    return "index";
  }

  function applyIndex(t) {
    setText("header h1", t.heroTitle);
    setText("header p", t.heroDesc);
    setTexts("nav ul li a", t.nav);
    setText(".reserve-icon a span", t.reserve);
    setTexts("section h2", t.sectionTitles);
    setText("#bebidas > p", t.drinksIntro);
    setTexts(".prato-desc > h3:first-child", t.dishNames);
    setTexts(".prato-desc > p", t.dishDescriptions);
    setTexts(".bebida > h3:first-of-type", t.drinkNames);
    setTexts(".bebida > p", t.drinkDescriptions);
    setTexts("#historia p", t.history);
    setText("footer p:first-child", t.footer);
  }

  function applyForm(t) {
    setText("header h1", t.header);
    setTexts(".auth-card h2 span", [t.login, t.signup]);
    setTexts(".form-group label", t.labels);
    setTexts(".btn-auth", t.buttons);
    setText(".divider span", t.divider);
    setText("footer p:first-child", t.footer);

    const inputs = document.querySelectorAll(".form-group input");
    inputs.forEach((input, i) => {
      if (t.placeholders[i]) input.placeholder = t.placeholders[i];
    });
  }

  function applyReserva(t) {
    setText("header h1", t.header);
    setText(".form-reserva h2", t.title);
    setTexts(".form-group label", t.labels);
    setTexts("#mesa option", t.optionsMesa);
    setTexts(".range-labels span", t.range);
    setTexts("#preferencias option", t.optionsPref);
    setText(".form-group small:not(.error-message)", t.small);
    setText(".error-message", t.smallError);
    setText(".btn-reservar", t.submit);
    setText("footer p:first-child", t.footer);
    const tel = document.getElementById("telefone");
    if (tel) tel.placeholder = t.phonePlaceholder;
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations[DEFAULT_LANG];
    const key = pageKey();
    document.documentElement.lang = lang === "pt" ? "pt-br" : "en";
    document.title = t.pageTitles[key];

    if (key === "index") applyIndex(t.index);
    if (key === "form") applyForm(t.form);
    if (key === "reserva") applyReserva(t.reserva);

    setText("#language-current-flag", t.currentFlag);
    setText("#language-current-label", t.currentLabel);
    window.__appI18n = t;
  }

  function getInitialLanguage() {
    const persisted = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGS.includes(persisted) ? persisted : DEFAULT_LANG;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".language-switcher");
    const menuToggle = document.getElementById("language-menu-toggle");
    const altOption = document.getElementById("language-alt-option");
    const altFlag = document.getElementById("language-alt-flag");
    const altLabel = document.getElementById("language-alt-label");
    if (!switcher || !menuToggle || !altOption || !altFlag || !altLabel) return;

    function closeMenu() {
      switcher.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    function updateMenu(lang) {
      const altLang = lang === "pt" ? "en" : "pt";
      const current = translations[lang];
      const alt = translations[altLang];
      menuToggle.setAttribute("aria-label", current.toggleAria);
      altFlag.textContent = alt.currentFlag;
      altLabel.textContent = alt.currentLabel;
      altOption.dataset.lang = altLang;
    }

    const initial = getInitialLanguage();
    applyLanguage(initial);
    updateMenu(initial);

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = switcher.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Make the entire pill clickable (not just the small caret button)
    const pill = document.querySelector('.language-pill');
    if (pill) {
      pill.addEventListener('click', (e) => {
        // If click originated on the caret button itself, let its handler run
        if (e.target && e.target.closest && e.target.closest('#language-menu-toggle')) return;
        // Delegate to the existing toggle which handles aria and propagation
        menuToggle.click();
      });
    }

    altOption.addEventListener("click", () => {
      const selected = altOption.dataset.lang;
      if (!SUPPORTED_LANGS.includes(selected)) return;
      localStorage.setItem(STORAGE_KEY, selected);
      applyLanguage(selected);
      updateMenu(selected);
      closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });
  });
})();
