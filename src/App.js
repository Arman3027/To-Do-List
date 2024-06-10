import { useEffect, useRef , useState } from "react";

function App() {

  let add_input_ref = useRef(null)
  let ul_ref = useRef(null);
  let c;
  let balls = [];

  useEffect(() => {
    let can = document.querySelector("canvas");
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    c = can.getContext("2d");
    balll();
    animate();
  },[])

const [empty , setempty] = useState(false)

  return (
    <>
      <div className="body">
      <canvas></canvas>
        <div className="container-fluid vh-100 p-1">
          <div className="d-flex justify-content-center align-items-center flex-column h-100">
            <div className=" text-center to-do-list">
              ToDo List
            </div>
            <div className="container-md p-1">
              <div className="main-cart rounded-2 p-1 m-auto">
                <div className="input-group my-1 p-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="add task"
                    aria-label="Recipient's"
                    aria-describedby="button-addon2"
                    ref={add_input_ref}
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                    onClick={() => {
                      handlebtn(add_input_ref.current);
                    }}
                  >
                    Add
                  </button>
                </div>
                <div className="p-1 flex-list">
                  <ul className="ul-list" ref={ul_ref}>
                    <li className="li-list">
                      <span className="span-list">
                        <input
                          className="checkbox-list"
                          type="checkbox"
                          onChange={(e) => {
                            handlecheck(e.currentTarget);
                          }}
                        />
                        <p className="text-list">lets start it</p>
                      </span>
                      <button
                        className="button-list"
                        onClick={(e) => {
                          handledlt(e.currentTarget);
                        }}
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
                    </li>
                    <li className="li-list">
                      <span className="span-list">
                        <input
                          className="checkbox-list"
                          type="checkbox"
                          onChange={(e) => {
                            handlecheck(e.currentTarget);
                          }}
                        />
                        <p className="text-list">lets start it</p>
                      </span>
                      <button
                        className="button-list"
                        onClick={(e) => {
                          handledlt(e.currentTarget);
                        }}
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
                    </li>
                  </ul>
                  {empty ? (
                    <p className="empty-list text-light">
                      your list is empty
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function handlebtn(input_ref) {

    if (input_ref.value === "" || input_ref.value === null) {
      return
    }

    let ul = document.querySelector('.ul-list')
    let p = document.createElement("p")
    let checkbox = document.createElement('input')
    let span = document.createElement('span')
    let i = document.createElement('i')
    let btn = document.createElement('button')
    let li = document.createElement('li')

    p.className = 'text-list'
    checkbox.className = 'checkbox-list'
    checkbox.type = 'checkbox'
    checkbox.onclick = (e) => {handlecheck(e.currentTarget)}
    span.className = 'span-list'
    i.className = 'bi'
    i.className = 'bi-trash3'
    btn.className = 'button-list'
    btn.onclick = (e) => {handledlt(e.currentTarget)}
    li.className= 'li-list'

    p.innerText = input_ref.value
    span.appendChild(checkbox)
    span.appendChild(p);
    btn.appendChild(i)
    li.appendChild(span)
    li.appendChild(btn);
    ul.appendChild(li)

    input_ref.value = ""

    
    if (ul.children.length > 0) {
      setempty(false)
    }
  }

  function handledlt(event) {
    event.parentNode.style.animation = 'hide 0.4s'
    setTimeout(() => { 
    event.parentNode.remove();
    let ul = document.querySelector(".ul-list");
    if (ul.children.length === 0) {
      setempty(true);
    }
    },330)
  }

  function handlecheck(e) {
    if (e.checked === true) {
      let text = e.parentNode.children[1];
      let li = e.parentNode.parentNode
      text.style.textDecoration = "line-through";
      li.style.opacity = '0.8'
      li.style.height = "40px"
      li.style.width = "98%";
    }

    if (e.checked === false) {
      let text = e.parentNode.children[1];
      let li = e.parentNode.parentNode;
      text.style.textDecoration = "none";
      li.style.opacity = "1";
      li.style.height = "45px";
      li.style.width = "100%";
    }
  }

  // ..........................................canvas
  
  function balll() {
    class Ball {
      constructor() {
        this.r = randomm(220,240);
        this.x = randomm(0 + this.r, window.innerWidth - this.r);
        this.y = randomm(0 + this.r, window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
      }
      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fillStyle = "rgb(30, 160, 255 , 0.3)";
        c.fill();
      }
      update() {
        if (this.x - this.r < 0 || this.x + this.r > window.innerWidth) {
          this.vx = -this.vx;
        }
        if (this.y - this.r < 0 || this.y + this.r > window.innerHeight) {
          this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }
    for (let i = 0; i < 80; i++) {
      balls.push(new Ball());
    }
  }
  function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight );
    balls.forEach((ball) => {
      ball.update();
    });
    requestAnimationFrame(animate);
  }

  function randomm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default App;
