const elements = {
  body: document.querySelector('body'),
  header: document.querySelector('header'),
  cardTotal: document.querySelector('div.total'),
  modalTitle: document.querySelector('#form h2'),
  helpNotification: document.querySelector('.help'),
  footer: document.querySelector('footer p'),
  toggleBtn: document.querySelector('input[name=theme]'),
}

const getStyle = (element, style) => getComputedStyle(element).getPropertyValue(style);

const initialPalletColors = {
  backgroundHeader: getStyle(elements.header, "--background-header"),
  bg: getStyle(elements.body, "--bg"),
  cardBg: getStyle(elements.cardTotal, "--card-bg"),
  footerText: getStyle(elements.footer, "--footer-text"),
  modalTitle: getStyle(elements.modalTitle, "--modal-title"),
  helpText: getStyle(elements.helpNotification, "--help-text"),
}

const darkModePallet = {
  backgroundHeader: "#D47E1C",
  bg: '#4e4e4e',
  cardBg: '#9466FF',
  footerText: '#E5E5E5',
  modalTitle:'#E5E5E5',
  helpText: '#FFF',
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = colors => {
  Object.keys(colors).map(key => {
    elements.body.style.setProperty(transformKey(key), colors[key]);
  })
}

elements.toggleBtn.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkModePallet) : changeColors(initialPalletColors);
})