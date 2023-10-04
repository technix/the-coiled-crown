import './markup.css'; // add markup styles

export default function processMarkup(text) {
  text = text.replace(/\[red\](.+?)\[\/red\]/g, '<span class="highlight">$1</span>');
  if (text.startsWith('>>+')) {
    text = text.replace('>>+', '');
    text = `<span class="take">${text}</span>`
  }
  if (text.startsWith('>>-')) {
    text = text.replace('>>-', '');
    text = `<span class="drop">${text}</span>`
  }
  if (text.startsWith('>>>')) {
    text = text.replace('>>>', ''); // info
    text = `<span class="drop">${text}</span>`
  }
  if (text.startsWith('>>!')) {
    text = text.replace('>>!', '');
    text = `<div class="endgame">${text}</div>`
  }
  if (text.startsWith('>>@')) {
    text = text.replace('>>@', '');
    text = `<div class="endgame victory">${text}</div>`
  }
  return text;
}
