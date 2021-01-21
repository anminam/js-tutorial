import Component from "../core/Component.js";

export default class ItemAppender extends Component {
  templete() {
    return `<input placeholder="입력" type="text" id="item-appender" />`;
  }

  setEvent() {
    const { addItem } = this.$props;

    this.addEvent("keyup", "#item-appender", (event) => {
      const {
        key,
        target: { value },
      } = event;
      if (key !== "Enter") return;

      addItem(value);
    });
  }
}
