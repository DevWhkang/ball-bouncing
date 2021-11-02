export default class Ball {
  protected radius: number;
  protected x: number;
  protected y: number;
  protected xPos: number;
  protected yPos: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.radius = this.random(10, 50);
    this.xPos = this.random(-20, 20);
    this.yPos = this.random(-20, 20);

    this.x = Math.floor(canvasWidth / 2);
    this.y = Math.floor(canvasHeight / 2);
  }

  public draw(
    context: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ): void {
    this.x += this.xPos;
    this.y += this.yPos;

    this.bounce(canvasWidth, canvasHeight);

    context.fillStyle = '#fff';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fill();
  }

  protected random(min: number, max: number) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  protected bounce(canvasWidth: number, canvasHeight: number): void {
    const minX = this.radius;
    const maxX = canvasWidth - minX;
    const minY = this.radius;
    const maxY = canvasHeight - minY;

    if (this.x <= minX || this.x >= maxX) {
      this.xPos *= -1;
      this.x += this.xPos;
    } else if (this.y <= minY || this.y >= maxY) {
      this.yPos *= -1;
      this.y += this.yPos;
    }
  }
}
