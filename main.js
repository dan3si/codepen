const htmlEditor = document.querySelector('.html');
const cssEditor = document.querySelector('.css');
const jsEditor = document.querySelector('.js');
const applyCode = document.querySelector('.apply-code');
const viewport = document.querySelector('.viewport ');
const style = document.createElement('style');
style.type = 'text/css';
document.head.append(style)

applyCode.addEventListener('click', () => {
  viewport.innerHTML = htmlEditor.value;

  style.innerHTML = '';
  style.append(document.createTextNode(cssEditor.value));

  eval(jsEditor.value);
});

