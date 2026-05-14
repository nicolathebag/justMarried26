/* translations.js — shared i18n for all pages */
(function () {
  const T = {
    it: {
      /* ── index.html ── */
      'hero-pre':           'il matrimonio di',
      'hero-date':          '24 · Settembre · 2026',
      'hero-church':        'Basilica di San Nicola, Bari',
      'scroll-label':       '',

      'dream-link':         '✨ Partecipa a realizzare i nostri sogni',

      'card-sposi':         'I Novelli Sposi',
      'card-dettagli':      'Dettagli dell\'Evento',
      'card-rsvp':          'Conferma Presenza',

      'detail-data-lbl':    'Data',
      'detail-data-val':    '24 Settembre 2026',
      'detail-cerimonia-lbl': 'Cerimonia',
      'detail-cerimonia-sfx': ' — ore 10:30',
      'detail-ricevimento-lbl': 'Ricevimento',
      'detail-dresscode-lbl': 'Dress Code',
      'detail-dresscode-val': 'Elegante',
      'detail-residenza-lbl': 'Residenza Sposi',
      'detail-residenza-val': 'Via Bitritto 96/A, Bari',

      'form-intro':         'Compilate il modulo per confermare la vostra partecipazione',
      'label-nome':         'Nome & Cognome *',
      'placeholder-nome':   'Il tuo nome completo',
      'label-email':        'Email',
      'placeholder-email':  'La tua email',
      'label-presenza':     'Confermi la tua presenza? *',
      'option-default':     '— Seleziona —',
      'option-si':          '✓ Sì, confermo',
      'option-no':          '✗ No, purtroppo non posso',
      'label-ospiti':       'Numero ospiti (incluso te)',
      'label-note':         'Allergie / Note',
      'placeholder-note':   'Eventuali allergie o messaggi speciali...',
      'btn-rsvp':           '💌 Invia RSVP',

      /* ── Partecipa.html ── */
      'partecipa-pre':      'con amore',
      'partecipa-h1':       'Partecipa a realizzare i nostri sogni',
      'partecipa-p':        'Se desideri contribuire al nostro viaggio insieme, puoi farlo tramite un regalo libero.<br>Grazie di cuore per il tuo pensiero!',
      'iban-lbl-nicola':    'IBAN · Nicola Losacco',
      'iban-lbl-anastasia': 'IBAN · Anastasia Khalizova',
      'back-link':          '← Torna alla Home',

      /* ── grazie.html ── */
      'grazie-pre':         'grazie mille!',
      'grazie-h1':          'Grazie!',
      'grazie-msg':         'La tua conferma è stata ricevuta con successo.<br>Non vediamo l\'ora di festeggiare insieme a te!',
      'reminder-data-lbl':  'Ti aspettiamo il',
      'reminder-cerimonia-lbl': 'Cerimonia',
      'reminder-ricevimento-lbl': 'Ricevimento',
      'reminder-cerimonia-sfx': ' — ore 10:30',
      'couple-sign':        'Nicola & Anastasia',
      'grazie-back':        '← Torna alla Home',
    },
    ru: {
      /* ── index.html ── */
      'hero-pre':           'свадьба',
      'hero-date':          '24 · Сентября · 2026',
      'hero-church':        'Базилика Святого Николая, Бари',
      'scroll-label':       '',

      'dream-link':         '✨ Помогите воплотить наши мечты',

      'card-sposi':         'Молодожёны',
      'card-dettagli':      'Детали торжества',
      'card-rsvp':          'Подтверждение присутствия',

      'detail-data-lbl':    'Дата',
      'detail-data-val':    '24 Сентября 2026',
      'detail-cerimonia-lbl': 'Церемония',
      'detail-cerimonia-sfx': ' — в 10:30',
      'detail-ricevimento-lbl': 'Банкет',
      'detail-dresscode-lbl': 'Дресс-код',
      'detail-dresscode-val': 'Элегантно',
      'detail-residenza-lbl': 'Адрес молодожёнов',
      'detail-residenza-val': 'Via Bitritto 96/A, Bari',

      'form-intro':         'Заполните форму, чтобы подтвердить своё участие',
      'label-nome':         'Имя и фамилия *',
      'placeholder-nome':   'Ваше полное имя',
      'label-email':        'Email',
      'placeholder-email':  'Ваш email',
      'label-presenza':     'Вы подтверждаете своё участие? *',
      'option-default':     '— Выберите —',
      'option-si':          '✓ Да, подтверждаю',
      'option-no':          '✗ Нет, к сожалению не смогу',
      'label-ospiti':       'Количество гостей (включая вас)',
      'label-note':         'Аллергии / Примечания',
      'placeholder-note':   'Аллергии или особые пожелания...',
      'btn-rsvp':           '💌 Отправить',

      /* ── Partecipa.html ── */
      'partecipa-pre':      'с любовью',
      'partecipa-h1':       'Помогите воплотить наши мечты',
      'partecipa-p':        'Если вы хотите внести вклад в наше совместное путешествие, вы можете сделать это через свободный подарок.<br>Огромное спасибо за ваш жест!',
      'iban-lbl-nicola':    'IBAN · Nicola Losacco',
      'iban-lbl-anastasia': 'IBAN · Anastasia Khalizova',
      'back-link':          '← На главную',

      /* ── grazie.html ── */
      'grazie-pre':         'большое спасибо!',
      'grazie-h1':          'Спасибо!',
      'grazie-msg':         'Ваше подтверждение успешно получено.<br>Мы с нетерпением ждём встречи с вами!',
      'reminder-data-lbl':  'Ждём вас',
      'reminder-cerimonia-lbl': 'Церемония',
      'reminder-ricevimento-lbl': 'Банкет',
      'reminder-cerimonia-sfx': ' — в 10:30',
      'couple-sign':        'Nicola & Anastasia',
      'grazie-back':        '← На главную',
    }
  };

  /**
   * Apply lang to all [data-i18n] elements on the page.
   * Supports: textContent (default), innerHTML (data-i18n-html), placeholder (data-i18n-ph)
   */
  function applyLang(lang) {
    const dict = T[lang] || T['it'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (key in dict) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (key in dict) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-ph');
      if (key in dict) el.placeholder = dict[key];
    });
    /* keep <html lang=""> in sync */
    document.documentElement.lang = lang;
  }

  /* Auto-apply on load */
  var saved = localStorage.getItem('lang') || 'it';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyLang(saved); });
  } else {
    applyLang(saved);
  }

  /* Expose globally so the switcher button on index.html can call it */
  window.i18n = {
    apply: applyLang,
    setLang: function (lang) {
      localStorage.setItem('lang', lang);
      applyLang(lang);
    },
    current: function () { return localStorage.getItem('lang') || 'it'; }
  };
})();
