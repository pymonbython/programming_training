class NumberAdd {
  constructor(selector, startNumber = 1, stroke = 1, element = "div") {
    this.btn = document.querySelector(selector);
    this.number = startNumber;
    this.stroke = stroke;
    this.element = element;
    this.btn.addEventListener("click", this.addElement.bind(this));
  }

  addElement() {
    const div = document.createElement(this.element);
    div.textContent = this.number;
    this.number += this.stroke;
    document.body.appendChild(div);
  }
}

const numberAdd = new NumberAdd("button");
