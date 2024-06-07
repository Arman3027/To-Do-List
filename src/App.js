import { useRef , useState } from "react";

function App() {
  let add_input_ref = useRef(null)
  let ul_ref = useRef(null);

const [empty , setempty] = useState(false)

  return (
    <>
      <div className="body">
        <div className="container-fluid vh-100 p-1 bg-primary ">
          <div className="d-flex justify-content-center align-items-center flex-column h-100">
            <div className="display-1 text-center text-light to-do-list">
              To Do List
            </div>
            <div className="container-md p-1">
              <div className="main-cart bg-light rounded-2 p-1 m-auto">
                <div class="input-group my-1">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="task to do "
                    aria-label="Recipient's"
                    aria-describedby="button-addon2"
                    ref={add_input_ref}
                  />
                  <button
                    class="btn btn-outline-primary"
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
                    <p className="empty-list text-secondary">
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
    event.parentNode.remove()
    let ul = document.querySelector('.ul-list')
    if (ul.children.length === 0) {
      setempty(true)
    }
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
}

export default App;
