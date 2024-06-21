const div = document.querySelector(".text");
const text = div.textContent;

function typeWriterEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => {
    typeWriterEffect(element, text, i + 1);
  }, 50);
}
typeWriterEffect(div, text);
