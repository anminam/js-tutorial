export default class Component {
  $target;
  $state;
  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  render() {
    this.$target.innerHTML = this.templete();
    this.mount();
  }
  mount() {}

  templete() {
    return "";
  }

  setEvent() {}
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return;

      callback(event);
    });
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
