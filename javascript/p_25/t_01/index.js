class DrawingApp {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.painting = false;
    this.#init();

    this.#initEvents();
  }

  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = "square";
  }

  #initEvents() {
    // Metody na myszkę
    this.canvas.addEventListener("mousedown", () => this.#startPosition());
    this.canvas.addEventListener("mouseup", this.#endPosition.bind(this));
    this.canvas.addEventListener("mousemove", (e) => this.#draw(e));
    // Metody na mobile
    this.canvas.addEventListener("touchstart", this.#startPosition.bind(this));
    this.canvas.addEventListener("touchend", this.#endPosition.bind(this));
    this.canvas.addEventListener("touchmove", (e) => this.#draw(e));
  }

  #startPosition() {
    this.painting = !this.painting;
    // this.#draw();
    this.ctx.beginPath();
  }

  #endPosition() {
    this.painting = !this.painting;
  }

  #draw(e) {
    if (!this.painting) return;
    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.moveTo(x, y);
  }

  changeColor(color) {
    this.ctx.strokeStyle = color;
  }
}

const app = new DrawingApp();
