const $app = document.querySelector("#app");

let state = {
  age: 30,
  items: ["asdf"],
};

const render = () => {
  const { items } = state;
  // debugger;
  $app.innerHTML = `
    <button type='button' id='add-button'>추가</button>
    <ul>
        ${items
          .map((item) => {
            return `<li>${item}</li>`;
          })
          .join("")}
    </ul>
  `;

  const $addButton = document.querySelector("#add-button");
  $addButton.addEventListener("click", (event) => {
    setState({ items: [...items, `item-${items.length + 1}`] });
    render();
  });
};

const setState = (newState) => {
  state = { ...state, ...newState };
};

const addEvent = (event) => {
  // const =

  render();
};

render();
