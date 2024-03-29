import Component from "../core/Component.js";

export default class Items extends Component {
  template() {
    const { filteredItems } = this.$props;
    return `
      <ul>
        ${filteredItems
          .map(
            ({ contents, active, seq }) => `
          <li data-seq="${seq}">
            ${contents}
            <button class="toggleBtn" style="color: ${
              active ? "#F09" : "#09F"
            }">${active ? "활성" : "비활성"}</button>
            <button class="deleteBtn">삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.$props;

    this.addEvent("click", ".deleteBtn", (event) => {
      const seq = Number(event.target.closest("[data-seq]").dataset.seq);
      deleteItem(seq);
    });

    this.addEvent("click", ".toggleBtn", (event) => {
      const seq = Number(event.target.closest("[data-seq]").dataset.seq);
      toggleItem(seq);
    });
  }
}
