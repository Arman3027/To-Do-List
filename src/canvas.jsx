import { useEffect } from "react";

const Canvas = () => {

  let c;
    let balls = [];

  useEffect(() => {
    let can = document.querySelector("canvas");
    can.width = window.innerWidth;
    can.height = window.innerHeight;
      c = can.getContext("2d");
      balll()
  animate();
  }, []);

  return (
    <>
      <canvas></canvas>
    </>
  );

  function balll(params) {
    class Ball {
      constructor() {
        this.r = randomm(150, 170);
        this.x = randomm(0 + this.r, window.innerWidth - this.r);
        this.y = randomm(0 + this.r, window.innerHeight - 40 - this.r);
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
      }
      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fillStyle = "	rgb(0,240,255,0.2)";
        c.fill();
      }
      update() {
        if (this.x - this.r < 0 || this.x + this.r > window.innerWidth) {
          this.vx = -this.vx;
        }
        if (this.y - this.r < 0 || this.y + this.r > window.innerHeight - 40) {
          this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }
    for (let i = 0; i < 9; i++) {
      balls.push(new Ball());
    }
  }
  function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight - 40);
    balls.forEach((ball) => {
      ball.update();
    });
    requestAnimationFrame(animate);
  }


  function randomm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

export default Canvas;
