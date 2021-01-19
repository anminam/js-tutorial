import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }

  getTemplete() {
    const { items } = this.$state;
    return `
        <button class="add-item">추가</button>
        <ul>
            ${items
              .map((item, key) => {
                return `
                  <li>
                    ${item}
                    <button data-index="${key}" class="remove-item">삭제</button>
                  </li>`;
              })
              .join("")}
        </ul>
    `;
  }

  setEvent() {
    this.addEvent("click", ".add-item", (event) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".remove-item", (event) => {
      const { items } = this.$state;
      items.splice(event.target.dataset.index, 1);
      this.setState({ items });
    });
  }
}
