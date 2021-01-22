import Component from "../core/Component.js";

export default class Appender extends Component {
  template() {
    return `
        <input type="text" id="content-input" placeholder="입력" />
    `;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", "#content-input", (event) => {
      const { target, key } = event;
      if (key !== "Enter") return;

      const contents = target.value;
      addItem(contents);
      document.querySelector("#content-input").focus();
    });
  }
}
