class Component {
  $state;
  $target;

  constructor($target) {
    this.$target = $target;
    this.setup();

    this.render();
  }

  setup() {}

  render() {
    this.$target.innerHTML = this.templete();
    this.setEvent();
  }

  templete() {
    return "";
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.$state = { items: ["minimi"] };
  }

  templete() {
    const { items } = this.$state;
    return `
      <button id="add-button">추가</button>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  setEvent() {
    document.querySelector("#add-button").addEventListener("click", () => {
      const { items } = this.$state;

      this.setState({ items: [...items, `new-${items.length}`] });
    });
  }
}

new App(document.querySelector("#app"));
