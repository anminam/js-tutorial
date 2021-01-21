import Component from "../core/Component.js";

export default class Items extends Component {
  templete() {
    const { filteredItems } = this.$props;

    return `
        <ul>
        ${filteredItems
          .map((i) => {
            return `
            <li data-seq="${i.seq}">${i.contents}
              <button class="active-button" style="color:${
                i.active ? "#F09" : "#09F"
              }">${i.active ? "활성" : "비활성"}</button>
              <button class="delete-button">삭제</button>
            </li>
          `;
          })
          .join("")}
        </ul>
    `;
  }

  setEvent() {
    const { toggleActive, deleteItem } = this.$props;
    this.addEvent("click", ".active-button", (event) => {
      const seq = this.getSeq(event);
      toggleActive(seq);
    });

    this.addEvent("click", ".delete-button", (event) => {
      const seq = this.getSeq(event);
      deleteItem(seq);
    });
  }

  getSeq(event) {
    return Number(event.target.closest("li").dataset.seq);
  }
}
