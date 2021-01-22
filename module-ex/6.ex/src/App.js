import Appender from "./components/Appender.js";
import ItemFilter from "./components/ItemFilter.js";
import Items from "./components/Items.js";
import Component from "./core/Component.js";
export default class App extends Component {
  setup() {
    this.$state = {
      filterId: 0,
      items: [
        {
          seq: 1,
          contents: "item1",
          active: true,
        },
        {
          seq: 2,
          contents: "item2",
          active: true,
        },
        {
          seq: 3,
          contents: "item3",
          active: false,
        },
        {
          seq: 4,
          contents: "item4",
          active: false,
        },
      ],
    };
  }
  template() {
    return `
        <header template-name="appender"></header>
        <main template-name="items"></main>
        <footer template-name="itemFilter"></footer>
    `;
  }

  mount() {
    const { addItem, filteredItems, deleteItem, toggleItem, setFilter } = this;
    const $appender = this.$target.querySelector('[template-name="appender"]');
    new Appender($appender, { addItem: addItem.bind(this) });

    const $items = this.$target.querySelector('[template-name="items"]');
    new Items($items, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this),
    });

    const $itemFilter = this.$target.querySelector(
      '[template-name="itemFilter"]'
    );

    new ItemFilter($itemFilter, { setFilter: setFilter.bind(this) });
  }

  setFilter(filterId) {
    this.setState({ filterId });
  }

  get filteredItems() {
    const { items, filterId } = this.$state;
    return items.filter(
      (i) =>
        (i.active && filterId === 1) ||
        (!i.active && filterId === 2) ||
        filterId === 0
    );
  }

  setEvent() {}

  addItem(contents) {
    const { items } = this.$state;
    const seq = Math.max(0, ...items.map((i) => Number(i.seq))) + 1;
    const active = false;
    this.setState({ items: [...items, { seq, contents, active }] });
  }

  deleteItem(seq) {
    const items = [...this.$state.items];
    const index = items.findIndex((i) => i.seq === seq);
    items.splice(index, 1);
    this.setState({ items });
  }

  toggleItem(seq) {
    const items = [...this.$state.items];
    const index = items.findIndex((i) => i.seq === seq);
    items[index].active = !items[index].active;
    this.setState({ items });
  }
}
