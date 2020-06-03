export default class LettersAnimation {
  constructor(selector, { duration, classForActivate, property, delay }) {
    this.element = document.querySelector(selector);
    this.duration = duration;
    this.classForActivate = classForActivate;
    this.property = property;
    this.delay = delay;

    this.prepareText();
  }

  prepareText() {
    if (!this.element) {
      return;
    }

    const words = this.element.textContent.trim().split(` `);
    let index = 0;

    const content = words.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter, index));
        index += 1;
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }

  createElement(letter, index) {
    const timeOffset = this.getTimeOffset(index);
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this.property} ${this.duration}ms ease ${timeOffset}ms`;
    return span;
  }

  runAnimation() {
    if (!this.element) {
      return;
    }
    this.element.classList.add(this.classForActivate);
  }

  destroyAnimation() {
    this.element.classList.remove(this.classForActivate);
  }

  getTimeOffset(index) {
    const blockOrder = Math.floor(index / 3);
    const mod = index % 3;
    const orderInBlock = mod ? (3 - mod) : mod; // 0 -> 0; 1 -> 2; 2 -> 1
    return this.delay + ((blockOrder * 3) + orderInBlock) * 20;
  }
}
