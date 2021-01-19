export default class Component {
  $target;
  $state;

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
