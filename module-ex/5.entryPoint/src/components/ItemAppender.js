import Component from "../core/Component.js";

export default class ItemAppender extends Component {
  template() {
    return `
        <input type="text" class="appender" placeholder="입력" />
      `;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", ".appender", (event) => {
      const { key, target } = event;
      if (key !== "Enter") return;

      addItem(target.value);
    });
  }
}
