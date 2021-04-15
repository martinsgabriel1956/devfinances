const toggleBtn = document.querySelector('#switch');

const initTheme = () => {
  let darkThemeSelected = (localStorage.getItem('#switch') !== null && localStorage.getItem('#switch') === 'darkmode');
  
  toggleBtn.checked = darkThemeSelected;
  
  darkThemeSelected ? document.body.classList.add('darkmode') : document.body.classList.remove('darkmode');
}

const resetTheme = () => {
  if(toggleBtn.checked) {
    document.body.classList.add('darkmode');
    localStorage.setItem('#switch', 'darkmode');
  } else {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('#switch', 'darkmode');
  }
}

if(toggleBtn) {
  initTheme();

  toggleBtn.addEventListener('change', () => {
    resetTheme();
  })
}
