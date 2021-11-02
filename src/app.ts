import Ball from './ball';

class App {
  protected canvas: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D;
  protected canvasWidth: number;
  protected canvasHeight: number;
  protected ball: Ball;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    document.body.appendChild(this.canvas);

    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.canvasWidth, this.canvasHeight);

    window.requestAnimationFrame(this.loop.bind(this));
  }

  protected resize() {
    this.canvas.width = this.canvasWidth * 2;
    this.canvas.height = this.canvasHeight * 2;
    this.context.scale(2, 2);
  }

  protected loop() {
    window.requestAnimationFrame(this.loop.bind(this));
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ball.draw(this.context, this.canvasWidth, this.canvasHeight);
  }
}

window.onload = () => {
  new App();
};
