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
              .map((item, key) => {
                return `
                  <li>
                    ${item}
                    <button class="remove-item" data-index="${key}">삭제</button>
                  </li>
                `;
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

    this.$target.querySelectorAll(".remove-item").forEach(($button) => {
      $button.addEventListener("click", (event) => {
        const { items } = this.$state;
        const { target } = event;

        items.splice(target.dataset.index, 1);
        this.setState({ items });
      });
    });
  }
}
