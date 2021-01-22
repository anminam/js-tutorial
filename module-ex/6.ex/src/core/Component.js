export default class Component {
  $state;
  $target;
  $props;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  setEvent() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  template() {
    return "";
  }

  mount() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) => {
      return children.includes(target) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return;

      callback(event);
    });
  }
}
