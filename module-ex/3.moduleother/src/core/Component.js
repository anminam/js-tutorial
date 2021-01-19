export default class Component {
  $target;
  $state;

  constructor($target) {
    this.$target = $target;

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  setEvent() {}

  render() {
    this.$target.innerHTML = this.getTemplete();
  }
  getTemplete() {
    return "";
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...document.querySelectorAll(selector)];

    const isTarget = (target) => {
      return children.includes(target) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
