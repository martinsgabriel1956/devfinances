const body = document.querySelector('body')
const header = document.querySelector('header');
const cardTotal = document.querySelector('div.total');
const modalTitle = document.querySelector('#form h2');
const helpNotification = document.querySelector('.help')
const footer = document.querySelector('footer p');

const toggleBtn = document.querySelector('input[name=theme]');

const getStyle = (element, style) => getComputedStyle(element).getPropertyValue(style);

const initialPalletColors = {
  backgroundHeader: getStyle(header, "--background-header"),
  bg: getStyle(body, "--bg"),
  cardBg: getStyle(cardTotal, "--card-bg"),
  footerText: getStyle(footer, "--footer-text"),
  modalTitle: getStyle(modalTitle, "--modal-title"),
  helpText: getStyle(helpNotification, "--help-text"),
}

console.log(helpNotification);

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
    body.style.setProperty(transformKey(key), colors[key]);
  })
}

toggleBtn.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkModePallet) : changeColors(initialPalletColors);
})
