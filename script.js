/* ==========================================================================
   birds.cz — Fitness • Movement • Nutrition
   Coach: Євгенія Бурдовіцина
   Interactive JavaScript & I18n Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== I18N DICTIONARY ====================
  const translations = {
    ua: {
      nav_home: "Головна",
      nav_about: "Про мене",
      nav_services: "Напрямки",
      nav_locations: "Формати й ціни",
      nav_nutrition: "Харчування",
      nav_results: "Результати",
      nav_experience: "Досвід",
      nav_contacts: "Контакти",
      btn_book: "Записатися &rarr;",
      
      hero_coach_name: "Євгенія Бурдовіцина • Персональний тренер",
      hero_title_1: "Тренування, які",
      hero_title_2: "підходять саме тобі",
      hero_title_3: "без виснажливих дієт та шаблонів",
      hero_desc: "Індивідуальний підхід до сили, здорового руху, гнучкості та харчування. Ми не працюємо за шаблонами — кожне тренування адаптується під ваші цілі, можливості та самопочуття.",
      hero_tagline: "Ваше тіло. Ваші цілі. Ваш темп.",
      hero_btn_book: "Записатися на тренування &rarr;",
      hero_btn_nutrition: "Персональне меню (30 днів) &rarr;",
      hero_trust_label: "активної тренерської практики й результатів",
      hero_handwritten: "Краща версія тебе ♡",
      hero_feat_power: "Сила та форма фігури",
      hero_feat_health: "Здоровий рух і спина",
      hero_feat_stretch: "Розтяжка та шпагат",
      hero_feat_nutr: "Харчування без голоду",

      about_eyebrow: "ПРО МЕНЕ",
      about_title: "Я за індивідуальний підхід, а не тренування за шаблоном",
      about_bio_1: "Мене звати <strong>Євгенія Бурдовіцина</strong>. Я персональний тренер, і вже багато років спорт є важливою частиною мого життя. Останні чотири роки я особливо активно тренуюся, поглиблюю свої знання про м’язи, рух і харчування та застосовую отриманий досвід у роботі з клієнтами.",
      about_bio_2: "Найбільше мені подобається знаходити підхід до кожної людини. Адже за однаковим бажанням «бути у формі» стоять зовсім різні потреби: комусь хочеться схуднути, комусь — стати сильнішою та підтягнути тіло, а хтось прагне розвинути гнучкість або позбутися втоми в спині.",
      about_bio_3: "Я враховую ваш рівень підготовки, самопочуття, втому й можливості в конкретний день. Якщо сьогодні вам потрібне інше навантаження — ми адаптуємо заняття. Мені важливо, щоб ви краще розуміли своє тіло і почувалися впевнено.",
      about_pil_1: "Без перевантажень і травм",
      about_pil_2: "Адаптація під кожен день",
      about_pil_3: "Харчування під ваші звички",
      about_pil_4: "Підтримка та розуміння тіла",

      dir_eyebrow: "ПЕРСОНАЛЬНІ ТРЕНУВАННЯ",
      dir_title: "Одна людина — свої цілі — індивідуальний план",
      dir_desc: "Моя мета — не змусити вас працювати через силу, а допомогти знайти ефективний, безпечний і комфортний формат занять.",
      dir_1_name: "Силові тренування та фігура",
      dir_1_desc: "Для тих, хто хоче зміцнити м’язи, стати сильнішою, покращити пропорції тіла, зробити фігуру підтягнутою або знизити вагу.",
      dir_2_name: "Здоровий рух і постава",
      dir_2_desc: "Для тих, хто хоче зміцнити м'язи, покращити рухливість і приділити більше уваги спині, шиї та загальному самопочуттю.",
      dir_3_name: "Розтяжка та гнучкість",
      dir_3_desc: "Покращуємо амплітуду рухів або поступово вчимося сідати на шпагат — крок за кроком, без болю та примусу.",
      dir_4_name: "Для початківців та підлітків",
      dir_4_desc: "Освоюємо правильну техніку вправ, знайомимося з тренажерами та розвиваємо фізичні можливості з урахуванням віку.",
      tag_relief: "Рельєф і тонус",
      tag_slimming: "Схуднення",
      tag_back: "Здорова спина",
      tag_mobility: "Мобільність",
      tag_split: "Шпагат без болю",
      tag_starter: "Плавний старт",
      tag_safety: "Безпека",
      btn_details: "Записатися",

      loc_eyebrow: "ДЕ МИ МОЖЕМО ТРЕНУВАТИСЯ",
      loc_title: "Формати та вартість тренувань",
      loc_sub: "Обирайте комфортний формат: класичний тренажерний зал, повністю приватний зал без сторонніх очей або зручний онлайн-формат удома.",
      loc_gym_title: "Тренажерний зал",
      loc_gym_desc: "Співпраця з провідними тренажерними залами міст. Час і конкретний зал узгоджуємо індивідуально.",
      loc_gym_f1: "Постановка точної техніки вправ",
      loc_gym_f2: "Індивідуальний підбір навантаження",
      loc_gym_f3: "Організація всього тренувального процесу",
      loc_gym_f4: "Вхід до залу оплачується клієнтом окремо",
      btn_book_loc: "Записатися &rarr;",

      loc_chrudim_badge: "Ексклюзивний приватний формат",
      loc_chrudim_title: "Приватний зал у Хрудимі",
      loc_chrudim_desc: "<strong>90 хвилин без сторонніх людей!</strong> Доступ за персональним кодом. Тільки ви, тренер, музика, душ і вода/напої без доплати.",
      split_title: "💡 Спільне тренування з подругами (до 4 людей):",
      btn_book_private: "Забронювати приватний зал &rarr;",

      loc_online_title: "Онлайн-тренування",
      loc_online_desc: "Тренуйтеся вдома або в будь-якому місці у реальному часі через відеозв’язок у Telegram. Потрібен лише килимок та телефон.",
      loc_onl_f1: "Пояснення та відео-контроль техніки",
      loc_onl_f2: "Вправи з власною вагою та підручними речами",
      loc_onl_f3: "Економія часу на дорогу до залу",
      loc_onl_f4: "Максимально комфортна домашня атмосфера",
      btn_book_onl: "Записатися на онлайн &rarr;",

      nutr_eyebrow: "ПЕРСОНАЛЬНЕ ХАРЧУВАННЯ",
      nutr_title: "Меню, створене саме під ваші потреби",
      nutr_intro: "Харчування має відповідати вашому життю, а не перетворювати його на суцільні обмеження. Я допомагаю організувати раціон відповідно до ваших цілей, звичних продуктів і смакових уподобань.",
      nstep_1_title: "Тиждень спостереження",
      nstep_1_desc: "7 днів ви фіксуєте все, що їсте й п'єте: порції, перекуси, напої. Це дозволяє побачити реальні щоденні звички.",
      nstep_2_title: "Глибокий аналіз та КБЖВ",
      nstep_2_desc: "Аналізую інформацію, точно розраховую калорійність, білки, жири та вуглеводи для безпечного досягнення мети.",
      nstep_3_title: "Індивідуальне меню",
      nstep_3_desc: "Створюю раціон на основі ваших улюблених страв і продуктів, які можна легко купити в звичайному магазині.",
      nstep_4_title: "Готовий план на 30 днів",
      nstep_4_desc: "Оформлене меню з фотографіями страв. Ви можете вільно обирати зручний день меню під свій графік.",
      nutr_val_desc: "персональний план на 30 днів",
      btn_order_menu: "Замовити персональне меню &rarr;",
      nutr_quote: "Без жорстких обмежень і голодувань. Тільки смачна, проста і збалансована їжа.",

      results_eyebrow: "РЕЗУЛЬТАТИ КЛІЄНТІВ",
      results_title: "Маленькі кроки, які складаються у великі зміни",
      results_subtitle: "Для мене важливо бачити, як люди поступово наближаються до своїх цілей: реальне зниження ваги (-10 кг за 4 місяці), тонус м'язів, здорова постава та шпагат без болю.",
      results_quote_box: "Кожна людина має свій початковий рівень, темп і особливості. Я не змушую працювати через силу — ми разом знаходимо формат, у якому вам комфортно перемагати щодня.",
      filter_all: "Всі результати (6)",
      filter_weight: "🔥 Зниження ваги (-10 кг)",
      filter_teens: "✨ Постава та підлітки (-5 кг)",
      filter_split: "🧘‍♀️ Гнучкість та шпагат",
      autoplay_active: "Автоперемикання: УВІМКНЕНО (4с)",
      autoplay_paused: "Автоперемикання: ПАУЗА",
      res_tag_weight: "🔥 Схуднення & Рельєф",
      res_tag_teens: "✨ Постава та підлітки",
      res_tag_split: "🧘‍♀️ Гнучкість та розтяжка",
      res_s1_title: "-10 кг за 4 місяці (вид збоку)",
      res_s1_desc: "Індивідуальний підбір вправ та корекція харчування без суворих дієт. Помітне зменшення об'єму талії, плоский живіт і легкість рухів.",
      res_s2_title: "-10 кг за 4 місяці (вид спереду)",
      res_s2_desc: "Підтягнутий рельєф м'язів, помітне зменшення об'ємів у стегнах, гармонійні пропорції тіла та повернення впевненості у собі.",
      res_s3_title: "Постава та фігура підлітка (профіль)",
      res_s3_desc: "Розкриття плечового поясу, вирівнювання лінії постави, зміцнення м'язів спини та підтягнутий животик без перевантажень.",
      res_s4_title: "Тонус та техніка вправ (анфас)",
      res_s4_desc: "Освоєння базових вправ із гантелями, плавне зменшення об'ємів, зміцнення суглобів та здоровий розвиток молодого організму.",
      res_s5_title: "Поздовжній шпагат з йога-блоками",
      res_s5_desc: "Покрокове збільшення амплітуди рухів за допомогою блоків, без сліз та травм — виключно плавна та безпечна робота зі зв'язками.",
      res_s6_title: "Еволюція гнучкості: від нуля до шпагату",
      res_s6_desc: "Від скутості зв'язок на перших заняттях до впевненого глибокого розкриття тазостегнових суглобів у комфортному індивідуальному темпі.",
      btn_zoom_photo: "Збільшити фото &rarr;",
      compare_tag: "Інтерактивне порівняння",
      compare_title: "Потягніть повзунок, щоб побачити прогрес клієнтки",
      compare_auto_text: "Авто-показ",
      compare_auto_stop: "Зупинити",
      compare_tab_1: "🔥 -10 кг (Анфас: До / Після)",
      compare_tab_2: "🔥 -10 кг (Профіль: До / Після)",
      compare_tab_3: "✨ Підліток (Постава: До / Після)",
      compare_before_badge: "ДО",
      compare_after_badge: "ПІСЛЯ (-10 КГ)",
      compare_hint: "👈 Рухайте повзунок вліво або вправо, або запустіть авто-показ 👉",
      coach_role_quote: "Персональний тренер & нутриціолог",

      exp_eyebrow: "ДОСВІД ТА ЕКСПЕРТНІСТЬ",
      exp_title: "Спорт, спілкування та мотивація",
      exp_text1: "<strong>Робота з групами:</strong> У минулому я успішно проводила групові тренування. Це був безцінний досвід руху, командної енергії та взаємної підтримки. Сьогодні я фокусуюся на персональних заняттях, де можу приділити клієнту 100% уваги.",
      exp_text2: "<strong>Публічні виступи:</strong> Виступала як спікер у <strong>Градець-Кралове</strong> на масштабному заході для жінок, які розвивають власні проєкти та бізнеси. Ділилася знаннями про спорт, баланс харчування та психологію мотивації для активного життя.",
      exp_b1: "Спікер конференцій",
      exp_b2: "Досвід групових програм",
      exp_b3: "4+ роки активної практики",
      exp_gallery_title: "📸 Фотографії з групових тренувань та залів:",

      ready_title: "Готові почати?",
      ready_desc: "Не потрібно чекати ідеального моменту, найкращої фізичної форми або понеділка. Почнімо з того, що важливо саме для вас: сили, гнучкості, зміни форми тіла чи організованого харчування.",
      ready_quote: "Ваш шлях — ваш темп. Я допоможу вам рухатися вперед.",
      btn_start_journey: "Почати свій шлях &rarr;",

      contacts_eyebrow: "КОНТАКТИ",
      contacts_title: "Локації для тренувань та зв'язок",
      contacts_lead: "Напишіть мені у зручний месенджер або залиште заявку — ми обговоримо ваші цілі та підберемо ідеальний формат занять.",
      map_label: "Локації в Чехії",
      footer_rights: "Всі права захищено.",

      modal_title_book: "Запис на тренування",
      modal_desc_book: "Заповніть форму, і я зв'яжуся з вами для узгодження залу та зручного часу.",
      form_name: "Ваше ім'я *",
      form_contact: "Телефон або Telegram / WhatsApp *",
      form_service: "Формат тренування",
      form_city: "Локація",
      form_note: "Ваші цілі (необов'язково)",
      btn_submit_book: "Підтвердити запис &rarr;",
      form_success_title: "Дякую за запис!",
      form_success_desc: "Я зв'яжуся з вами найближчим часом для узгодження зручного часу.",
      btn_close: "Закрити",

      nutr_modal_title: "Замовити персональне меню на 30 днів",
      nutr_modal_desc: "7 днів щоденника харчування + точний розрахунок КБЖВ + меню з фото улюблених страв. Вартість: 3 800 Kč.",
      nutr_modal_goal: "Головна мета",
      btn_order_menu_sub: "Замовити план (3 800 Kč) &rarr;",
      nutr_success_sub: "Я напишу вам у месенджер з інструкцією до 1-го етапу (щоденник спостереження)."
    },

    cz: {
      nav_home: "Domů",
      nav_about: "O mně",
      nav_services: "Zaměření",
      nav_locations: "Formáty a ceník",
      nav_nutrition: "Stravování",
      nav_results: "Výsledky",
      nav_experience: "Zkušenosti",
      nav_contacts: "Kontakty",
      btn_book: "Objednat se &rarr;",
      
      hero_coach_name: "Jevgenija Burdovicyna • Osobní trenérka",
      hero_title_1: "Tréninky, které",
      hero_title_2: "se přizpůsobí právě tobě",
      hero_title_3: "bez drastických diet a šablon",
      hero_desc: "Individuální přístup k síle, zdravému pohybu, flexibilitě a stravování. Nepracujeme podle šablon — každý trénink přizpůsobuji vašim cílům a aktuální kondici.",
      hero_tagline: "Vaše tělo. Vaše cíle. Vaše tempo.",
      hero_btn_book: "Objednat se na trénink &rarr;",
      hero_btn_nutrition: "Osobní jídelníček (30 dní) &rarr;",
      hero_trust_label: "aktivní trenérské praxe a výsledků",
      hero_handwritten: "Lepší verze tebe ♡",
      hero_feat_power: "Síla a tvarování postavy",
      hero_feat_health: "Zdravý pohyb a záda",
      hero_feat_stretch: "Stretching a provaz",
      hero_feat_nutr: "Strava bez hladovění",

      about_eyebrow: "O MNĚ",
      about_title: "Jsem pro individuální přístup, ne cvičení podle šablony",
      about_bio_1: "Jmenuji se <strong>Jevgenija Burdovicyna</strong>. Jsem osobní trenérka a sport je již mnoho let zásadní součástí mého života. Poslední čtyři roky intenzivně trénuji, prohlubuji své znalosti o svalech, biomechanice pohybu a výživě a aplikuji je v praxi s klienty.",
      about_bio_2: "Nejvíce mě baví hledat přístup ke každému člověku. Za stejným přáním «být fit» stojí různé potřeby: někdo chce zhubnout, někdo zpevnit postavu a někdo touží po flexibilitě nebo úlevě od bolesti zad.",
      about_bio_3: "Vždy beru v úvahu vaši kondici, únavu i to, jak se cítíte daný den. Zátěž přizpůsobujeme na míru, abyste lépe porozuměli svému tělu a cítili se sebevědomě.",
      about_pil_1: "Bez přetížení a zranění",
      about_pil_2: "Adaptace pro každý den",
      about_pil_3: "Jídelníček dle vašich zvyků",
      about_pil_4: "Podpora a porozumění tělu",

      dir_eyebrow: "OSOBNÍ TRÉNINKY",
      dir_title: "Jeden člověk — své cíle — individuální plán",
      dir_desc: "Mým cílem není nutit vás jít přes bolest, ale najít efektivní, bezpečný a příjemný způsob cvičení.",
      dir_1_name: "Silový trénink a formování postavy",
      dir_1_desc: "Pro ty, kteří chtějí zpevnit svaly, získat sílu, zlepšit tělesné proporce nebo bezpečně redukovat váhu.",
      dir_2_name: "Zdravý pohyb a držení těla",
      dir_2_desc: "Pro posílení středu těla, zlepšení mobility a péči o záda a šíji v každodenním životě.",
      dir_3_name: "Stretching a flexibilita",
      dir_3_desc: "Zlepšujeme rozsah pohybů a postupně směřujeme k provazu — krok za krokem, bezpečně a bez bolesti.",
      dir_4_name: "Pro začátečníky a dospívající",
      dir_4_desc: "Správná technika cviků, seznámení se stroji ve fitness a rozvoj kondice odpovídající věku.",
      tag_relief: "Zpevnění a tonus",
      tag_slimming: "Hubnutí",
      tag_back: "Zdravá záda",
      tag_mobility: "Mobilita",
      tag_split: "Provaz bez bolesti",
      tag_starter: "Pozvolný start",
      tag_safety: "Bezpečnost",
      btn_details: "Objednat se",

      loc_eyebrow: "KDE MŮŽEME CVIČIT",
      loc_title: "Formáty a ceník tréninků",
      loc_sub: "Vyberte si to, co vám vyhovuje: klasické fitness centrum, zcela privátní tělocvična bez cizích lidí nebo online z domova.",
      loc_gym_title: "Fitness centrum",
      loc_gym_desc: "Spolupráce s prověřenými posilovnami. Konkrétní místo a čas domlouváme individuálně.",
      loc_gym_f1: "Vedení a kontrola správné techniky",
      loc_gym_f2: "Přesné dávkování zátěže",
      loc_gym_f3: "Organizace celého tréninkového plánu",
      loc_gym_f4: "Vstup do fitness hradí klient samostatně",
      btn_book_loc: "Objednat se &rarr;",

      loc_chrudim_badge: "Exkluzivní privátní formát",
      loc_chrudim_title: "Privátní tělocvična v Chrudimi",
      loc_chrudim_desc: "<strong>90 minut bez cizích lidí!</strong> Přístup na kód. Pouze vy, trenérka, hudba, sprcha a voda/nápoje bez doplatku.",
      split_title: "💡 Společný trénink s kamarádkami (až 4 osoby):",
      btn_book_private: "Rezervovat privátní sál &rarr;",

      loc_online_title: "Online tréninky",
      loc_online_desc: "Cvičte z domova v reálném čase přes videohovor v Telegramu. Stačí vám podložka a telefon.",
      loc_onl_f1: "Vysvětlení a video-kontrola techniky",
      loc_onl_f2: "Cviky s vlastní vahou a pomůckami",
      loc_onl_f3: "Úspora času při dojíždění",
      loc_onl_f4: "Maximální komfort domácího prostředí",
      btn_book_onl: "Objednat se online &rarr;",

      nutr_eyebrow: "OSOBNÍ JÍDELNÍČEK",
      nutr_title: "Menu sestavené přesně dle vašich potřeb",
      nutr_intro: "Jídlo má odpovídat vašemu životu, nikoli z něj dělat neustálý stres a odříkání. Sestavuji plán z vašich oblíbených a dostupných surovin.",
      nstep_1_title: "Týden pozorování",
      nstep_1_desc: "7 dní posíláte vše, co jíte a pijete. Získáme přesný obraz o vašich reálných návycích.",
      nstep_2_title: "Hloubková analýza a makroživiny",
      nstep_2_desc: "Výpočet optimálního příjmu kalorií, bílkovin, tuků a sacharidů pro dosažení vašeho cíle.",
      nstep_3_title: "Individuální recepty",
      nstep_3_desc: "Jídla z běžných ingrediencí přizpůsobená vašim chutím bez nutnosti vyvařovat zvlášť.",
      nstep_4_title: "Hotový plán na 30 dní",
      nstep_4_desc: "Přehledné menu s fotografiemi porcí. Dny můžete volně přizpůsobovat svému diáři.",
      nutr_val_desc: "osobní plán na 30 dní",
      btn_order_menu: "Objednat jídelníček &rarr;",
      nutr_quote: "Bez drastických diet a hladovění. Pouze chutné, jednoduché a vyvážené jídlo.",

      results_eyebrow: "VÝSLEDKY KLIENTEK",
      results_title: "Malé krůčky, které tvoří velké změny",
      results_subtitle: "Důležité je pro mě sledovat postupný rozvoj: reálný úbytek váhy (-10 kg za 4 měsíce), formování postavy, zdravé držení těla a provaz bez bolesti.",
      results_quote_box: "Každý člověk má jiné výchozí možnosti a tempo. Cílem je najít formát, ve kterém se budete cítit dobře a dosáhnete výsledků s radostí.",
      filter_all: "Všechny výsledky (6)",
      filter_weight: "🔥 Úbytek váhy (-10 kg)",
      filter_teens: "✨ Postura a dospívající (-5 kg)",
      filter_split: "🧘‍♀️ Flexibilita a provaz",
      autoplay_active: "Autopřehrávání: ZAPNUTO (4s)",
      autoplay_paused: "Autopřehrávání: POZASTAVENO",
      res_tag_weight: "🔥 Hubnutí & Zpevnění",
      res_tag_teens: "✨ Postura a dospívající",
      res_tag_split: "🧘‍♀️ Flexibilita & strečink",
      res_s1_title: "-10 kg za 4 měsíce (profil)",
      res_s1_desc: "Individuální trénink a úprava jídelníčku bez drastických diet. Výrazný úbytek centimetrů v pase, ploché bříško a lehkost pohybu.",
      res_s2_title: "-10 kg za 4 měsíce (čelní pohled)",
      res_s2_desc: "Zpevnění svalů, štíhlejší stehna, vyvážené proporce a získání sebedůvěry bez hladovění.",
      res_s3_title: "Program pro dospívající: postura (profil)",
      res_s3_desc: "Otevření hrudníku, narovnání zad, posílení středu těla a přirozeně ploché bříško bez přetížení.",
      res_s4_title: "Program pro dospívající: technika (čelní)",
      res_s4_desc: "Osvojení bezpečných cviků s činkami, celkové zpevnění svalů a harmonický fyzický rozvoj.",
      res_s5_title: "Podélný provaz s jóga bloky",
      res_s5_desc: "Postupné jemné protahování pomocí jóga bloků bez slz a rizika zranění — respekt k možnostem těla.",
      res_s6_title: "Rozvoj mobility: od nuly k provazu",
      res_s6_desc: "Od počátečního napětí k jistému a hlubokému provazu v bezpečném tempu pod dohledem trenérky.",
      btn_zoom_photo: "Zvětšit fotografii &rarr;",
      compare_tag: "Interaktivní porovnání",
      compare_title: "Posuňte jezdec pro zobrazení proměny",
      compare_auto_text: "Ukázka proměny",
      compare_auto_stop: "Zastavit",
      compare_tab_1: "🔥 -10 kg (Čelní: Před / Po)",
      compare_tab_2: "🔥 -10 kg (Profil: Před / Po)",
      compare_tab_3: "✨ Dospívající (Postura: Před / Po)",
      compare_before_badge: "PŘED",
      compare_after_badge: "PO (-10 KG)",
      compare_hint: "👈 Posouvejte jezdec doleva či doprava, nebo spusťte automatickou ukázku 👉",
      coach_role_quote: "Osobní trenérka & nutriční poradkyně",

      exp_eyebrow: "ZKUŠENOSTI A EXPERTÍZA",
      exp_title: "Sport, komunikace a motivace",
      exp_text1: "<strong>Skupinové lekce:</strong> V minulosti jsem vedla skupinové tréninky. Byla to skvělá zkušenost plná energie a týmové souhry. Nyní se soustředím na individuální přístup pro maximální efekt.",
      exp_text2: "<strong>Přednášky a vystoupení:</strong> Vystupovala jsem jako řečnice v <strong>Hradci Králové</strong> na akci pro podnikatelky a aktivní ženy s přednáškou o návycích, sportu a udržitelné motivaci.",
      exp_b1: "Přednášející na konferencích",
      exp_b2: "Zkušenosti se skupinami",
      exp_b3: "4+ roky praxe",
      exp_gallery_title: "📸 Fotografie ze skupinových lekcí a posiloven:",

      ready_title: "Jste připraveni začít?",
      ready_desc: "Není třeba čekat na pondělí ani na ideální formu. Začněte tím, co je pro vás důležité: síla, flexibilita, proměna postavy či vyvážená strava.",
      ready_quote: "Vaše tělo. Vaše cíle. Vaše tempo. Pomohu vám jít kupředu.",
      btn_start_journey: "Začít svou cestu &rarr;",

      contacts_eyebrow: "KONTAKTY",
      contacts_title: "Místa tréninků a spojení",
      contacts_lead: "Napište mi do libovolného chatu nebo odešlete formulář — společně probereme vaše cíle a zvolíme nejvhodnější formát.",
      map_label: "Lokality v ČR",
      footer_rights: "Všechna práva vyhrazena.",

      modal_title_book: "Rezervace tréninku",
      modal_desc_book: "Vyplňte krátký formulář a já se vám ozvu pro domluvení termínu a fitness centra.",
      form_name: "Vaše jméno *",
      form_contact: "Telefon nebo Telegram / WhatsApp *",
      form_service: "Formát tréninku",
      form_city: "Město / Místo",
      form_note: "Vaše cíle (volitelné)",
      btn_submit_book: "Odeslat rezervaci &rarr;",
      form_success_title: "Děkuji za zprávu!",
      form_success_desc: "Ozvu se vám co nejdříve pro dohodnutí termínu.",
      btn_close: "Zavřít",

      nutr_modal_title: "Objednat osobní menu na 30 dní",
      nutr_modal_desc: "7denní stravovací deník + detailní výpočet makroživin + fotomenu na 30 dní. Cena: 3 800 Kč.",
      nutr_modal_goal: "Hlavní cíl",
      btn_order_menu_sub: "Objednat plán (3 800 Kč) &rarr;",
      nutr_success_sub: "Ozvu se vám do chatu s instrukcemi k 1. kroku (záznam jídelníčku)."
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

    // Update dynamic carousel & compare state buttons
    const autoPlayBtnText = document.getElementById('autoPlayBtnText');
    if (autoPlayBtnText && typeof isAutoPlay !== 'undefined') {
      autoPlayBtnText.textContent = isAutoPlay ? (translations[lang].autoplay_active || 'Автоперемикання: УВІМКНЕНО (4с)') : (translations[lang].autoplay_paused || 'Автоперемикання: ПАУЗА');
    }

    const compareAutoText = document.getElementById('compareAutoText');
    if (compareAutoText && typeof compareAutoAnimId !== 'undefined') {
      compareAutoText.textContent = compareAutoAnimId ? (translations[lang].compare_auto_stop || 'Зупинити') : (translations[lang].compare_auto_text || 'Авто-показ');
    }

    const afterFlag = document.querySelector('.compare-badge-flag.after-flag');
    if (afterFlag && typeof comparePresets !== 'undefined' && typeof activeCompareKey !== 'undefined') {
      const preset = comparePresets[activeCompareKey];
      if (preset) {
        afterFlag.textContent = (lang === 'cz') ? preset.badgeCZ : preset.badgeUA;
      }
    }
  }

  // Language switch
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) {
        applyLanguage(lang);
      }
    });
  }

  // ==================== RESULTS CAROUSEL LOGIC ====================
  const carouselViewport = document.getElementById('carouselViewport');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselCards = carouselTrack ? Array.from(carouselTrack.children) : [];
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const autoPlayBtn = document.getElementById('carouselAutoPlayBtn');
  const autoPlayIcon = document.getElementById('autoPlayIcon');
  const autoPlayBtnText = document.getElementById('autoPlayBtnText');
  const progressBar = document.getElementById('carouselProgressBar');
  const dots = document.querySelectorAll('.carousel-dot');
  const filterBtns = document.querySelectorAll('.res-filter-btn');

  let currentSlide = 0;
  let isAutoPlay = true;
  const SLIDE_DURATION = 4000;
  const PROGRESS_TICK = 40;
  let progressElapsed = 0;
  let isHovered = false;

  function getVisibleCardsCount() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  function getMaxSlideIndex() {
    const visible = getVisibleCardsCount();
    return Math.max(0, carouselCards.length - visible);
  }

  function updateCarousel() {
    if (!carouselTrack || carouselCards.length === 0) return;
    
    const maxIdx = getMaxSlideIndex();
    if (currentSlide > maxIdx) currentSlide = 0;
    if (currentSlide < 0) currentSlide = maxIdx;

    const card = carouselCards[0];
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 20;
    const offset = currentSlide * (cardWidth + gap);

    carouselTrack.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    progressElapsed = 0;
    if (progressBar) progressBar.style.width = '0%';
  }

  function nextSlide() {
    const maxIdx = getMaxSlideIndex();
    if (currentSlide >= maxIdx) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    updateCarousel();
  }

  function prevSlide() {
    const maxIdx = getMaxSlideIndex();
    if (currentSlide <= 0) {
      currentSlide = maxIdx;
    } else {
      currentSlide--;
    }
    updateCarousel();
  }

  function startAutoPlay() {
    isAutoPlay = true;
    if (autoPlayBtn) {
      autoPlayBtn.classList.add('is-playing');
      if (autoPlayIcon) {
        autoPlayIcon.className = 'fa-solid fa-pause';
      }
      if (autoPlayBtnText) {
        const lang = currentLang;
        autoPlayBtnText.textContent = translations[lang].autoplay_active || 'Автоперемикання: УВІМКНЕНО (4с)';
      }
    }
  }

  function stopAutoPlay() {
    isAutoPlay = false;
    if (autoPlayBtn) {
      autoPlayBtn.classList.remove('is-playing');
      if (autoPlayIcon) {
        autoPlayIcon.className = 'fa-solid fa-play';
      }
      if (autoPlayBtnText) {
        const lang = currentLang;
        autoPlayBtnText.textContent = translations[lang].autoplay_paused || 'Автоперемикання: ПАУЗА';
      }
    }
    if (progressBar) progressBar.style.width = '0%';
    progressElapsed = 0;
  }

  function toggleAutoPlay() {
    if (isAutoPlay) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  }

  // Progress and Auto-Play Loop
  setInterval(() => {
    if (!isAutoPlay || isHovered) return;
    progressElapsed += PROGRESS_TICK;
    const percent = Math.min(100, (progressElapsed / SLIDE_DURATION) * 100);
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
    if (progressElapsed >= SLIDE_DURATION) {
      nextSlide();
    }
  }, PROGRESS_TICK);

  if (autoPlayBtn) {
    autoPlayBtn.addEventListener('click', toggleAutoPlay);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      progressElapsed = 0;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      progressElapsed = 0;
    });
  }

  // Pause on hover
  if (carouselViewport) {
    carouselViewport.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    carouselViewport.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    carouselViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        progressElapsed = 0;
      }
    }, { passive: true });
  }

  // Dots click
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        currentSlide = idx;
        updateCarousel();
        progressElapsed = 0;
      }
    });
  });

  // Category filter tabs
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      if (filter === 'all' || filter === 'weight') {
        currentSlide = 0;
      } else if (filter === 'teens') {
        currentSlide = 2;
      } else if (filter === 'split') {
        currentSlide = 4;
      }
      updateCarousel();
      progressElapsed = 0;
    });
  });

  window.addEventListener('resize', () => {
    updateCarousel();
  });

  updateCarousel();

  // ==================== INTERACTIVE COMPARE SLIDER ====================
  const compareSlider = document.getElementById('compareSlider');
  const compareOverlay = document.getElementById('compareOverlay');
  const compareHandle = document.getElementById('compareHandle');
  const compareImgBefore = document.getElementById('compareImgBefore');
  const compareImgAfter = document.getElementById('compareImgAfter');
  const compareTabBtns = document.querySelectorAll('.compare-tab-btn');
  const compareAutoBtn = document.getElementById('compareAutoBtn');
  const compareAutoText = document.getElementById('compareAutoText');
  const compareAutoIcon = document.getElementById('compareAutoIcon');
  const afterFlag = document.querySelector('.compare-badge-flag.after-flag');

  const comparePresets = {
    front: {
      before: 'assets/images/compare_10kg_before.jpg',
      after: 'assets/images/compare_10kg_after.jpg',
      badgeUA: 'ПІСЛЯ (-10 КГ)',
      badgeCZ: 'PO (-10 KG)'
    },
    side: {
      before: 'assets/images/compare_side_before.jpg',
      after: 'assets/images/compare_side_after.jpg',
      badgeUA: 'ПІСЛЯ (-10 КГ)',
      badgeCZ: 'PO (-10 KG)'
    },
    teen: {
      before: 'assets/images/compare_teen_before.jpg',
      after: 'assets/images/compare_teen_after.jpg',
      badgeUA: 'ПІСЛЯ (-5 КГ)',
      badgeCZ: 'PO (-5 KG)'
    }
  };

  let activeCompareKey = 'front';
  let compareAutoAnimId = null;
  let autoAnimAngle = 0;

  function setSliderPosition(x) {
    if (!compareSlider || !compareOverlay || !compareHandle) return;
    const rect = compareSlider.getBoundingClientRect();
    let pos = (x - rect.left) / rect.width;
    if (pos < 0.05) pos = 0.05;
    if (pos > 0.95) pos = 0.95;
    const percent = pos * 100;
    compareOverlay.style.width = `${percent}%`;
    compareHandle.style.left = `${percent}%`;
  }

  function setSliderPercent(percent) {
    if (!compareOverlay || !compareHandle) return;
    compareOverlay.style.width = `${percent}%`;
    compareHandle.style.left = `${percent}%`;
  }

  function stopCompareAuto() {
    if (compareAutoAnimId) {
      cancelAnimationFrame(compareAutoAnimId);
      compareAutoAnimId = null;
    }
    if (compareAutoBtn) {
      compareAutoBtn.classList.remove('is-active');
      if (compareAutoIcon) compareAutoIcon.className = 'fa-solid fa-play';
      if (compareAutoText) {
        compareAutoText.textContent = translations[currentLang].compare_auto_text || 'Авто-показ';
      }
    }
  }

  function startCompareAuto() {
    if (compareAutoBtn) {
      compareAutoBtn.classList.add('is-active');
      if (compareAutoIcon) compareAutoIcon.className = 'fa-solid fa-pause';
      if (compareAutoText) {
        compareAutoText.textContent = translations[currentLang].compare_auto_stop || 'Зупинити';
      }
    }
    function animate() {
      autoAnimAngle += 0.025;
      const p = 50 + 32 * Math.sin(autoAnimAngle);
      setSliderPercent(p);
      compareAutoAnimId = requestAnimationFrame(animate);
    }
    compareAutoAnimId = requestAnimationFrame(animate);
  }

  if (compareAutoBtn) {
    compareAutoBtn.addEventListener('click', () => {
      if (compareAutoAnimId) {
        stopCompareAuto();
      } else {
        startCompareAuto();
      }
    });
  }

  // Switch comparison tabs
  compareTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stopCompareAuto();
      compareTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-compare');
      activeCompareKey = key;
      const preset = comparePresets[key];
      if (preset && compareImgBefore && compareImgAfter) {
        compareImgBefore.src = preset.before;
        compareImgAfter.src = preset.after;
        if (afterFlag) {
          afterFlag.textContent = currentLang === 'cz' ? preset.badgeCZ : preset.badgeUA;
        }
      }
      setSliderPercent(50);
    });
  });

  if (compareSlider && compareOverlay && compareHandle) {
    let isDragging = false;

    compareSlider.addEventListener('mousedown', (e) => {
      stopCompareAuto();
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

    compareSlider.addEventListener('touchstart', (e) => {
      stopCompareAuto();
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
    const openBtn = e.target.closest('.open-modal-btn');
    if (openBtn) {
      const targetId = openBtn.getAttribute('data-target');
      const service = openBtn.getAttribute('data-service');
      if (service) {
        const select = document.getElementById('bookService');
        if (select) {
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

    if (e.target.closest('.modal-close-btn') || e.target.classList.contains('modal-backdrop')) {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal);
    }
  });

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

  // Nutrition Form Submission
  const nutritionForm = document.getElementById('nutritionForm');
  const nutritionSuccess = document.getElementById('nutritionSuccess');
  if (nutritionForm && nutritionSuccess) {
    nutritionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      nutritionForm.style.display = 'none';
      nutritionSuccess.style.display = 'block';
    });
  }

  // ==================== IMAGE LIGHTBOX ====================
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.zoomable').forEach(card => {
    card.addEventListener('click', () => {
      const imgUrl = card.getAttribute('data-img');
      const caption = card.getAttribute('data-caption');
      if (lightbox && lightboxImg && imgUrl) {
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

  // ==================== NAVBAR SCROLL & MOBILE DRAWER ====================
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
