import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }

  templete() {
    const { items } = this.$state;
    return `
        <button>추가</button>  
        <ul>
            ${items
              .map((item) => {
                return `<li>${item}</li>`;
              })
              .join("")}
        </ul>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item` + (items.length + 1)] });
    });
  }
}
