class Component {
  $target;
  $state;

  constructor($target) {
    this.$target = $target;

    this.setup();
    this.render();
  }

  setup() {}
  templete() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.templete();
    this.setEvent();
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.$state = { items: ["sample"] };
  }

  templete() {
    const { items } = this.$state;

    return `
      <button type="button" id="btn-add">추가</button>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  setEvent() {
    this.$target
      .querySelector("#btn-add")
      .addEventListener("click", (event) => {
        const { items } = this.$state;
        this.setState({ items: [...items, `items${items.length + 1}`] });
      });
  }
}

new App(document.querySelector("#app"));
