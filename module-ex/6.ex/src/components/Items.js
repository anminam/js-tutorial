import Component from "../core/Component.js";

export default class Items extends Component {
  template() {
    const { filteredItems } = this.$props;

    return `
        <ul>
            ${filteredItems
              .map(
                (i) => `
              <li data-seq="${i.seq}">${i.contents}
                <button class="active-button">${
                  i.active ? "활성" : "비활성"
                }</button>
                <button class="delete-button">삭제</button>
              </li>
            `
              )
              .join("")}
        </ul>
      `;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.$props;
    this.addEvent("click", ".active-button", (event) => {
      const seq = event.target.closest("[data-seq]").dataset.seq;
      toggleItem(Number(seq));
    });
    this.addEvent("click", ".delete-button", (event) => {
      const seq = event.target.closest("[data-seq]").dataset.seq;
      deleteItem(Number(seq));
    });
  }
}
