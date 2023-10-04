const gameTheme = {
  '--bg-color': '#EBCFB2',
  '--fg-color': '#424B54',
  '--font-color': '#333333',
  '--accent-bg-color': '#AD1C2A',
  '--accent-fg-color': '#EBCFB2'
};

const lightTheme = {
  '--bg-color': '#FCFCFC',
  '--fg-color': '#5D576B',
  '--font-color': '#333333',
  '--accent-bg-color': '#F7567C',
  '--accent-fg-color': '#FCFCFC'
};

const sepiaTheme = {
  '--bg-color': '#ffeedb',
  '--fg-color': '#4c3b4d',
  '--font-color': '#333333',
  '--accent-bg-color': '#a53850',
  '--accent-fg-color': '#ffeedb'
}

const darkTheme = {
  '--bg-color': '#4c3b4d',
  '--fg-color': '#FCFCFC',
  '--font-color': '#EEEEEE',
  '--accent-bg-color': '#F7567C',
  '--accent-fg-color': '#EEEEEE'
};

export const themes = {
  game: gameTheme,
  light: lightTheme,
  sepia: sepiaTheme,
  dark: darkTheme
};

export function applyTheme(theme) {
  Object.entries(themes[theme]).forEach(([prop, value]) => {
    document.documentElement.style.setProperty(prop, value);
  });
}

export const fonts = {
  System: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  'Fira Sans': '"Fira Sans", sans-serif',
  Lora: '"Lora", serif',
  Merriweather: '"Merriweather", serif',
  OpenDyslexic: '"OpenDyslexic", serif'
};

export function applyFont(font) {
  document.documentElement.style.setProperty('--font-game', fonts[font]);
}
