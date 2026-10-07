/* ==========================================================================
   birds.cz — Fitness • Pilates • Nutrition
   Interactive JavaScript & I18n Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== I18N DICTIONARY ====================
  const translations = {
    ua: {
      nav_home: "Головна",
      nav_services: "Послуги",
      nav_results: "Результати",
      nav_about: "Про мене",
      nav_prices: "Ціни",
      nav_reviews: "Відгуки",
      nav_contacts: "Контакти",
      btn_book: "Записатися &rarr;",
      hero_title_1: "Похудіння",
      hero_title_2: "і форма тіла",
      hero_title_3: "без виснажливих дієт",
      hero_desc: "Тренування, Pilates, індивідуальне харчування та підтримка для твого здоров'я, енергії і впевненості в собі.",
      hero_btn_trial: "Пробне тренування &rarr;",
      hero_btn_consult: "Безкоштовна консультація з харчуванням &rarr;",
      hero_clients_count: "задоволених клієнток",
      hero_handwritten: "Краща версія тебе ♡",
      hero_feat_body: "Струнке тіло",
      hero_feat_energy: "Більше енергії",
      hero_feat_health: "Сильніше здоров'я",
      hero_feat_custom: "Індивідуальний підхід",
      hero_trainer_tag: "Індивідуальний супровід",
      services_eyebrow: "ПОСЛУГИ",
      services_title: "Тренування та підтримка, які працюють",
      services_desc: "Індивідуальний підхід, сучасні методики та атмосфера, в якій хочеться розвиватися. Обирай свій формат і почни вже сьогодні.",
      srv_1_name: "Персональні тренування",
      srv_1_desc: "Індивідуальна програма під твої цілі та рівень підготовки.",
      srv_2_name: "Fullbody Pilates",
      srv_2_desc: "Сильне тіло, гнучкість і гарне самопочуття.",
      srv_3_name: "Онлайн-ведення",
      srv_3_desc: "Тренування, харчування та підтримка онлайн.",
      srv_4_name: "Індивідуальні плани харчування",
      srv_4_desc: "Збалансований раціон без жорстких обмежень.",
      srv_5_name: "Стретчинг",
      srv_5_desc: "Більша рухливість, красива постава та розслаблене тіло.",
      tag_offline: "Офлайн",
      tag_group_ind: "Групові / Індивідуальні",
      tag_online: "Онлайн",
      tag_custom_plan: "Індивідуальний план",
      tag_custom: "Індивідуально",
      tag_goals: "Під твої цілі",
      btn_details: "Детальніше",
      about_eyebrow: "ПРО МЕНЕ",
      about_title: "Твій тренер і партнер у досягненні цілей",
      about_desc: "Я допомагаю жінкам ставати сильнішими, здоровішими та впевненішими в собі через тренування, Pilates та збалансоване харчування. Мій підхід — індивідуальність, підтримка і реальні результати без крайнощів.",
      about_coach_label: "Сертифікований тренер",
      about_pil_cert: "Сертифікований тренер",
      about_pil_exp: "Досвід роботи",
      about_pil_methods: "Сучасні методики",
      about_pil_growth: "Постійний розвиток",
      about_btn_more: "Дізнатися більше &rarr;",
      results_eyebrow: "РЕЗУЛЬТАТИ",
      results_title: "Реальні історії — реальні зміни",
      results_quote: "Я не просто допомагаю схуднути — я допомагаю змінити стиль життя і відчути себе краще в кожному дні.",
      compare_tag: "Інтерактивне порівняння",
      compare_title: "Потягни повзунок, щоб побачити прогрес клієнтки",
      pricing_eyebrow: "ЦІНИ",
      pricing_title: "Обери свій формат",
      tab_personal: "Персональні тренування",
      tab_pilates: "Pilates",
      tab_online: "Онлайн-ведення",
      tab_nutrition: "Харчування",
      tab_stretching: "Стретчинг",
      pricing_note: "Тренування проходять у професійних залах міст Hradec Králové, Pardubice та Praha. Також доступний повністю дистанційний онлайн-формат.",
      reviews_eyebrow: "ВІДГУКИ",
      reviews_title: "Що кажуть мої клієнтки",
      rev_1_text: "Дуже подобається підхід! Тренування ефективні, атмосфера неймовірна. З'явилось більше енергії і впевненість у собі. Рекомендую від щирого серця! ❤️",
      rev_1_name: "Олена",
      rev_1_city: "Градець-Кралове",
      rev_2_text: "За 4 місяці скинула 10 кг без голодування і зривів! Тренер навчила розуміти своє тіло і харчуватися збалансовано. Спина перестала боліти вже на другий тиждень.",
      rev_2_name: "Катерина",
      rev_2_city: "Пардубице",
      rev_3_text: "Пілатес і стретчинг просто змінили моє самопочуття! Кожне тренування проходить на одному диханні, увага до кожної вправи максимальна.",
      rev_3_name: "Анна",
      rev_3_city: "Прага",
      contacts_eyebrow: "КОНТАКТИ",
      contacts_title: "Три міста — більше можливостей для тебе",
      city_prague: "Прага",
      map_label: "Локації в Чехії",
      footer_tagline: "Краса, здоров'я та впевненість у твоєму тілі.",
      footer_rights: "Всі права захищено.",
      modal_eyebrow: "birds.cz Fitness",
      modal_title_book: "Запис на тренування",
      modal_desc_book: "Заповніть коротку форму, і тренер зв'яжеться з вами протягом кількох годин.",
      form_name: "Ваше ім'я *",
      form_contact: "Телефон або Telegram / WhatsApp *",
      form_service: "Послуга",
      form_city: "Місто / Формат",
      form_note: "Ваші побажання / цілі (необов'язково)",
      btn_submit_book: "Підтвердити запис &rarr;",
      form_success_title: "Дякуємо за запис!",
      form_success_desc: "Тренер зв'яжеться з вами найближчим часом для узгодження зручного часу.",
      btn_close: "Закрити",
      modal_title_consult: "Безкоштовна консультація з харчування",
      modal_desc_consult: "Розберемо ваш поточний раціон, помилки та побудуємо план досягнення результату без стресу.",
      btn_submit_consult: "Отримати консультацію &rarr;",
      form_success_consult_desc: "Тренер напише вам у месенджер для проведення консультації."
    },
    cz: {
      nav_home: "Domů",
      nav_services: "Služby",
      nav_results: "Výsledky",
      nav_about: "O mně",
      nav_prices: "Ceník",
      nav_reviews: "Recenze",
      nav_contacts: "Kontakty",
      btn_book: "Objednat se &rarr;",
      hero_title_1: "Hubnutí",
      hero_title_2: "a tvarování těla",
      hero_title_3: "bez vyčerpávajících diet",
      hero_desc: "Tréninky, Pilates, individuální jídelníček a podpora pro vaše zdraví, energii a sebevědomí.",
      hero_btn_trial: "Zkušební trénink &rarr;",
      hero_btn_consult: "Konzultace jídelníčku zdarma &rarr;",
      hero_clients_count: "spokojených klientek",
      hero_handwritten: "Lepší verze tebe ♡",
      hero_feat_body: "Štíhlé tělo",
      hero_feat_energy: "Více energie",
      hero_feat_health: "Pevnější zdraví",
      hero_feat_custom: "Individuální přístup",
      hero_trainer_tag: "Osobní doprovod",
      services_eyebrow: "SLUŽBY",
      services_title: "Tréninky a podpora, které fungují",
      services_desc: "Individuální přístup, moderní metodiky a atmosféra, ve které se budete rádi posouvat dál. Vyberte si svůj formát ještě dnes.",
      srv_1_name: "Osobní tréninky",
      srv_1_desc: "Individuální plán na míru vašim cílům a kondici.",
      srv_2_name: "Fullbody Pilates",
      srv_2_desc: "Silné tělo, flexibilita a skvělý pocit zdraví.",
      srv_3_name: "Online vedení",
      srv_3_desc: "Tréninky, strava a podpora plně online.",
      srv_4_name: "Individuální jídelníčky",
      srv_4_desc: "Vyvážený jídelníček bez drastických omezení.",
      srv_5_name: "Stretching",
      srv_5_desc: "Větší pohyblivost, krásné držení těla a uvolnění svalů.",
      tag_offline: "Offline",
      tag_group_ind: "Skupinové / Individuální",
      tag_online: "Online",
      tag_custom_plan: "Individuální plán",
      tag_custom: "Na míru",
      tag_goals: "Dle vašich cílů",
      btn_details: "Podrobnosti",
      about_eyebrow: "O MNĚ",
      about_title: "Váš trenér a partner na cestě k cílům",
      about_desc: "Pomáhám ženám získat sílu, zdraví a sebevědomí prostřednictvím fitness, Pilates a vyvážené stravy. Můj přístup je postaven na individuální péči, podpoře a reálných výsledcích.",
      about_coach_label: "Certifikovaná trenérka",
      about_pil_cert: "Certifikovaná trenérka",
      about_pil_exp: "Dlouholetá praxe",
      about_pil_methods: "Moderní metodiky",
      about_pil_growth: "Neustálý rozvoj",
      about_btn_more: "Zjistit více &rarr;",
      results_eyebrow: "VÝSLEDKY",
      results_title: "Skutečné příběhy — skutečné změny",
      results_quote: "Nepomáhám jen zhubnout — pomáhám změnit životní styl a cítit se lépe každý den.",
      compare_tag: "Interaktivní porovnání",
      compare_title: "Posuňte jezdec a prohlédněte si proměnu klientky",
      pricing_eyebrow: "CENÍK",
      pricing_title: "Vyberte si svůj formát",
      tab_personal: "Osobní tréninky",
      tab_pilates: "Pilates",
      tab_online: "Online vedení",
      tab_nutrition: "Výživa",
      tab_stretching: "Stretching",
      pricing_note: "Tréninky probíhají v moderních fitness centrech v Hradci Králové, Pardubicích a Praze. K dispozici je také plně distanční online forma.",
      reviews_eyebrow: "RECENZE",
      reviews_title: "Co říkají mé klientky",
      rev_1_text: "Moc se mi líbí přístup! Tréninky jsou efektivní a atmosféra úžasná. Mám více energie a sebevědomí. Doporučuji z celého srdce! ❤️",
      rev_1_name: "Alena",
      rev_1_city: "Hradec Králové",
      rev_2_text: "Za 4 měsíce jsem shodila 10 kg bez hladovění a stresu! Trenérka mě naučila rozumět svému tělu a jíst vyváženě. Záda mě přestala bolet hned po dvou týdnech.",
      rev_2_name: "Kateřina",
      rev_2_city: "Pardubice",
      rev_3_text: "Pilates a stretching kompletně proměnily můj pocit ze sebe samé. Na každý trénink se těším, maximální pozornost každému cviku.",
      rev_3_name: "Anna",
      rev_3_city: "Praha",
      contacts_eyebrow: "KONTAKTY",
      contacts_title: "Tři města — více možností pro vás",
      city_prague: "Praha",
      map_label: "Lokality v ČR",
      footer_tagline: "Krása, zdraví a sebevědomí ve vašem těle.",
      footer_rights: "Všechna práva vyhrazena.",
      modal_eyebrow: "birds.cz Fitness",
      modal_title_book: "Rezervace tréninku",
      modal_desc_book: "Vyplňte krátký formulář a trenérka vás bude kontaktovat během několika hodin.",
      form_name: "Vaše jméno *",
      form_contact: "Telefon nebo Telegram / WhatsApp *",
      form_service: "Služba",
      form_city: "Město / Formát",
      form_note: "Vaše cíle / poznámka (volitelné)",
      btn_submit_book: "Odeslat rezervaci &rarr;",
      form_success_title: "Děkujeme za rezervaci!",
      form_success_desc: "Trenérka se s vámi brzy spojí pro domluvení vhodného termínu.",
      btn_close: "Zavřít",
      modal_title_consult: "Konzultace jídelníčku zdarma",
      modal_desc_consult: "Probereme váš aktuální jídelníček, chyby a sestavíme plán k dosažení výsledků bez zbytečného stresu.",
      btn_submit_consult: "Získat konzultaci &rarr;",
      form_success_consult_desc: "Trenérka se vám ozve pro dohodnutí online konzultace."
    }
  };

  let currentLang = 'ua';

  function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderPricingCards();
  }

  // Language switch event
  document.getElementById('langSwitch').addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.getAttribute('data-lang');
    if (lang !== currentLang) {
      applyLanguage(lang);
    }
  });

  // ==================== PRICING PACKAGES DATA ====================
  const pricingData = {
    personal: [
      {
        title_ua: "Разове тренування",
        title_cz: "Jednorázový trénink",
        sub_ua: "60 хв",
        sub_cz: "60 min",
        price: "800 Kč",
        featured: false,
        features_ua: [
          "Індивідуальний розбір техніки",
          "Персональна програма на заняття",
          "Корисні рекомендації тренера"
        ],
        features_cz: [
          "Individuální náprava techniky",
          "Plán tréninku na míru",
          "Užitečná doporučení trenérky"
        ]
      },
      {
        title_ua: "Абонемент 4 тренування",
        title_cz: "Permanentka 4 tréninky",
        sub_ua: "(1 місяць)",
        sub_cz: "(1 měsíc)",
        price: "2 800 Kč",
        featured: false,
        features_ua: [
          "4 персональних заняття (700 Kč/зан.)",
          "Коригування техніки виконання",
          "Базовий аналіз раціону",
          "Гнучкий графік тренувань"
        ],
        features_cz: [
          "4 individuální lekce (700 Kč/lekce)",
          "Kontrola správné techniky",
          "Základní analýza stravy",
          "Flexibilní plánování termínů"
        ]
      },
      {
        title_ua: "Абонемент 8 тренувань",
        title_cz: "Permanentka 8 tréninků",
        sub_ua: "(2 місяці)",
        sub_cz: "(2 měsíce)",
        price: "5 200 Kč",
        featured: true,
        badge_ua: "Найпопулярніший",
        badge_cz: "Nejoblíbenější",
        features_ua: [
          "8 персональних занять (650 Kč/зан.)",
          "Повний план та коригування харчування",
          "Постійний контроль замірів та ваги",
          "Підтримка в месенджерах 24/7"
        ],
        features_cz: [
          "8 osobních tréninků (650 Kč/lekce)",
          "Kompletní jídelní plán a úpravy",
          "Pravidelná kontrola měr a váhy",
          "Podpora v chatu 24/7"
        ]
      }
    ],
    pilates: [
      {
        title_ua: "Разове Pilates",
        title_cz: "Jednorázové Pilates",
        sub_ua: "60 хв",
        sub_cz: "60 min",
        price: "550 Kč",
        featured: false,
        features_ua: [
          "Зміцнення глибоких м'язів кора",
          "Робота над поставою та диханням",
          "Безпечне навантаження на спину"
        ],
        features_cz: [
          "Zpevnění hlubokého stabilizačního systému",
          "Práce na držení těla a dechu",
          "Šetrné zatížení páteře"
        ]
      },
      {
        title_ua: "Абонемент 4 Pilates",
        title_cz: "Permanentka 4 Pilates",
        sub_ua: "(1 місяць)",
        sub_cz: "(1 měsíc)",
        price: "2 000 Kč",
        featured: false,
        features_ua: [
          "4 заняття (500 Kč/зан.)",
          "Формування підтягнутого пресу",
          "Зняття напруги в шиї та плечах"
        ],
        features_cz: [
          "4 lekce (500 Kč/lekce)",
          "Zpevnění bříška a nohou",
          "Úleva od napětí v šíji a zádech"
        ]
      },
      {
        title_ua: "Курс 8 Pilates",
        title_cz: "Balíček 8 Pilates",
        sub_ua: "(2 місяці)",
        sub_cz: "(2 měsíce)",
        price: "3 800 Kč",
        featured: true,
        badge_ua: "Кращий вибір",
        badge_cz: "Nejlepší volba",
        features_ua: [
          "8 занять (475 Kč/зан.)",
          "Помітний рельєф і гнучкість",
          "Індивідуальні домашні комплекси",
          "Постійна підтримка тренера"
        ],
        features_cz: [
          "8 lekcí (475 Kč/lekce)",
          "Viditelné zpevnění a flexibilita",
          "Domácí protahovací sestava",
          "Osobní vedení trenérky"
        ]
      }
    ],
    online: [
      {
        title_ua: "Онлайн-старт",
        title_cz: "Online Start",
        sub_ua: "2 тижні",
        sub_cz: "2 týdny",
        price: "1 500 Kč",
        featured: false,
        features_ua: [
          "Індивідуальна програма тренувань",
          "Аналіз техніки по відео",
          "Рекомендації по харчуванню"
        ],
        features_cz: [
          "Tréninkový plán na míru",
          "Kontrola techniky přes video",
          "Základní nutriční doporučení"
        ]
      },
      {
        title_ua: "Повний онлайн-супровід",
        title_cz: "Online vedení Premium",
        sub_ua: "1 місяць",
        sub_cz: "1 měsíc",
        price: "2 900 Kč",
        featured: true,
        badge_ua: "Максимум результату",
        badge_cz: "Maximální efekt",
        features_ua: [
          "Індивідуальний тренувальний план",
          "Повний щоденний контроль раціону",
          "Щотижневі онлайн-консультації",
          "Зв'язок у WhatsApp/Telegram щодня"
        ],
        features_cz: [
          "Individuální tréninkový rozpis",
          "Každodenní kontrola jídelníčku",
          "Týdenní online konzultace",
          "Podpora v chatu 7 dní v týdnu"
        ]
      },
      {
        title_ua: "Онлайн VIP (3 місяці)",
        title_cz: "Online VIP (3 měsíce)",
        sub_ua: "Повна трансформація",
        sub_cz: "Kompletní proměna",
        price: "7 500 Kč",
        featured: false,
        features_ua: [
          "Гарантована трансформація тіла",
          "Повне ведення харчування та сну",
          "Прямий пріоритетний зв'язок 24/7",
          "Знижки на очні зустрічі"
        ],
        features_cz: [
          "Garantovaná proměna postavy",
          "Komplexní vedení stravy a regenerace",
          "Prioritní podpora 24/7",
          "Slevy na osobní tréninky"
        ]
      }
    ],
    nutrition: [
      {
        title_ua: "Експрес-розбір раціону",
        title_cz: "Expresní analýza stravy",
        sub_ua: "Консультація 60 хв",
        sub_cz: "Konzultace 60 min",
        price: "900 Kč",
        featured: false,
        features_ua: [
          "Аналіз поточних харчових звичок",
          "Пошук прихованих калорій",
          "План простих перших кроків"
        ],
        features_cz: [
          "Rozbor současného stravování",
          "Odhalení skrytých kalorií",
          "Konkrétní kroky pro rychlý start"
        ]
      },
      {
        title_ua: "Індивідуальний раціон",
        title_cz: "Jídelníček na míru",
        sub_ua: "На 1 місяць",
        sub_cz: "Na 1 měsíc",
        price: "2 200 Kč",
        featured: true,
        badge_ua: "Топ вибір",
        badge_cz: "Top volba",
        features_ua: [
          "Розрахунок КБЖВ під ваші цілі",
          "Прості рецепти зі звичайних продуктів",
          "Без голодування та відмов від улюбленого",
          "Коригування через 2 тижні"
        ],
        features_cz: [
          "Přesný výpočet makroživin",
          "Snadné recepty z dostupných surovin",
          "Bez hladovění a zákazů",
          "Korekce po 2 týdnech"
        ]
      },
      {
        title_ua: "Супровід харчування",
        title_cz: "Nutriční mentoring",
        sub_ua: "2 місяці",
        sub_cz: "2 měsíce",
        price: "3 900 Kč",
        featured: false,
        features_ua: [
          "Щоденний розбір тарілок у чаті",
          "Психологія харчової поведінки",
          "Формування стійких звичок на все життя"
        ],
        features_cz: [
          "Každodenní kontrola talířů v chatu",
          "Práce s chutěmi a psychologií",
          "Trvalá změna návyků na celý život"
        ]
      }
    ],
    stretching: [
      {
        title_ua: "Разовий стретчинг",
        title_cz: "Jednorázový stretching",
        sub_ua: "60 хв",
        sub_cz: "60 min",
        price: "600 Kč",
        featured: false,
        features_ua: [
          "М'яка розтяжка всього тіла",
          "Поліпшення рухливості суглобів",
          "Зняття м'язових затисків"
        ],
        features_cz: [
          "Jemné protažení celého těla",
          "Zvýšení kloubní mobility",
          "Uvolnění svalových blokád"
        ]
      },
      {
        title_ua: "Абонемент 4 заняття",
        title_cz: "Permanentka 4 lekce",
        sub_ua: "(1 місяць)",
        sub_cz: "(1 měsíc)",
        price: "2 200 Kč",
        featured: false,
        features_ua: [
          "4 заняття (550 Kč/зан.)",
          "Красива грація та постава",
          "Підготовка до шпагату"
        ],
        features_cz: [
          "4 lekce (550 Kč/lekce)",
          "Ladné držení těla a chůze",
          "Příprava na provaz a rozštěp"
        ]
      },
      {
        title_ua: "Абонемент 8 занять",
        title_cz: "Permanentka 8 lekcí",
        sub_ua: "(2 місяці)",
        sub_cz: "(2 měsíce)",
        price: "4 000 Kč",
        featured: true,
        badge_ua: "Гнучкість та релакс",
        badge_cz: "Flexibilita a relax",
        features_ua: [
          "8 занять (500 Kč/зан.)",
          "Максимальна гнучкість без болю",
          "Легкість у кожному русі",
          "Індивідуальний супровід"
        ],
        features_cz: [
          "8 lekcí (500 Kč/lekce)",
          "Maximální rozsah pohybu bez bolesti",
          "Lehkost při každém kroku",
          "Individuální asistence"
        ]
      }
    ]
  };

  let currentCategory = 'personal';

  function renderPricingCards() {
    const container = document.getElementById('pricingCardsGrid');
    if (!container) return;
    const cards = pricingData[currentCategory] || pricingData.personal;

    container.innerHTML = cards.map(item => {
      const title = currentLang === 'cz' ? item.title_cz : item.title_ua;
      const sub = currentLang === 'cz' ? item.sub_cz : item.sub_ua;
      const features = currentLang === 'cz' ? item.features_cz : item.features_ua;
      const badge = item.featured ? (currentLang === 'cz' ? item.badge_cz : item.badge_ua) : '';
      const bookBtnText = currentLang === 'cz' ? 'Objednat se &rarr;' : 'Записатися &rarr;';

      return `
        <div class="price-card ${item.featured ? 'featured' : ''}">
          ${item.featured ? `<div class="price-featured-badge">${badge}</div>` : ''}
          <div class="price-card-title">${title}</div>
          <div class="price-card-sub">${sub}</div>
          <div class="price-amount-box">
            <span class="price-amount">${item.price}</span>
          </div>
          <ul class="price-features-list">
            ${features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
          </ul>
          <button class="btn ${item.featured ? 'btn-primary' : 'btn-outline-rose'} btn-block open-modal-btn" 
                  data-target="bookingModal" 
                  data-service="${title}">
            ${bookBtnText}
          </button>
        </div>
      `;
    }).join('');
  }

  // Pricing tabs click
  const pricingTabs = document.getElementById('pricingTabs');
  if (pricingTabs) {
    pricingTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.pricing-tab');
      if (!tab) return;
      document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderPricingCards();
    });
  }

  renderPricingCards();

  // ==================== INTERACTIVE COMPARE SLIDER ====================
  const compareSlider = document.getElementById('compareSlider');
  const compareOverlay = document.getElementById('compareOverlay');
  const compareHandle = document.getElementById('compareHandle');

  if (compareSlider && compareOverlay && compareHandle) {
    let isDragging = false;

    function setSliderPosition(x) {
      const rect = compareSlider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;
      const percent = pos * 100;
      compareOverlay.style.width = `${percent}%`;
      compareHandle.style.left = `${percent}%`;
    }

    compareSlider.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile
    compareSlider.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // ==================== SERVICES HORIZONTAL CAROUSEL ====================
  const srvContainer = document.getElementById('servicesScrollContainer');
  const srvPrev = document.getElementById('servicePrev');
  const srvNext = document.getElementById('serviceNext');

  if (srvContainer && srvPrev && srvNext) {
    srvPrev.addEventListener('click', () => {
      srvContainer.scrollBy({ left: -260, behavior: 'smooth' });
    });
    srvNext.addEventListener('click', () => {
      srvContainer.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // ==================== REVIEWS CAROUSEL ====================
  const revTrack = document.getElementById('reviewsTrack');
  const revPrev = document.getElementById('reviewPrev');
  const revNext = document.getElementById('reviewNext');

  if (revTrack && revPrev && revNext) {
    let revIndex = 0;
    const cards = revTrack.children;
    const total = cards.length;

    function updateReviews() {
      if (window.innerWidth <= 1024) return;
      const offset = -(revIndex * 33.333);
      revTrack.style.transform = `translateX(${offset}%)`;
    }

    revPrev.addEventListener('click', () => {
      if (revIndex > 0) {
        revIndex--;
        updateReviews();
      }
    });

    revNext.addEventListener('click', () => {
      if (revIndex < total - 3) {
        revIndex++;
        updateReviews();
      }
    });
  }

  // ==================== MODALS LOGIC ====================
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    // Open modal button
    const openBtn = e.target.closest('.open-modal-btn');
    if (openBtn) {
      const targetId = openBtn.getAttribute('data-target');
      const service = openBtn.getAttribute('data-service');
      if (service) {
        const select = document.getElementById('bookService');
        if (select) {
          // Attempt to match option
          for (let opt of select.options) {
            if (opt.value.includes(service) || service.includes(opt.value)) {
              opt.selected = true;
              break;
            }
          }
        }
      }
      openModal(targetId);
      return;
    }

    // Close button
    if (e.target.closest('.modal-close-btn') || e.target.classList.contains('modal-backdrop')) {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal);
    }
  });

  // ESC to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal);
      const activeLightbox = document.querySelector('.lightbox-backdrop.active');
      if (activeLightbox) activeLightbox.classList.remove('active');
    }
  });

  // Booking Form Submission
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  if (bookingForm && bookingSuccess) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingForm.style.display = 'none';
      bookingSuccess.style.display = 'block';
    });
  }

  // Consultation Form Submission
  const consultForm = document.getElementById('consultationForm');
  const consultSuccess = document.getElementById('consultationSuccess');
  if (consultForm && consultSuccess) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      consultForm.style.display = 'none';
      consultSuccess.style.display = 'block';
    });
  }

  // ==================== IMAGE LIGHTBOX ====================
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.result-card.zoomable').forEach(card => {
    card.addEventListener('click', () => {
      const imgUrl = card.getAttribute('data-img');
      const caption = card.getAttribute('data-caption');
      if (lightbox && lightboxImg) {
        lightboxImg.src = imgUrl;
        if (lightboxCaption) lightboxCaption.textContent = caption || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ==================== MOBILE DRAWER & NAVBAR SCROLL ====================
  const header = document.getElementById('header');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

});
