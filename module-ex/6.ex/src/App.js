import ItemAppender from "./components/ItemAppender.js";
import ItemFilters from "./components/ItemFilters.js";
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
          active: false,
        },
      ],
    };
  }

  templete() {
    return `
      <header template-name="appender"></header>
      <main template-name="items"></main>
      <footer template-name="itemFilter"></footer>
    `;
  }

  mount() {
    const {
      addItem,
      filteredItems,
      toggleActive,
      deleteItem,
      setFilter,
    } = this;

    const $appender = this.$target.querySelector('[template-name="appender"]');
    new ItemAppender($appender, { addItem: addItem.bind(this) });

    const $items = this.$target.querySelector('[template-name="items"]');
    new Items($items, {
      filteredItems,
      toggleActive: toggleActive.bind(this),
      deleteItem: deleteItem.bind(this),
    });

    const $filters = this.$target.querySelector('[template-name="itemFilter"]');
    new ItemFilters($filters, { setFilter: setFilter.bind(this) });
  }

  setFilter(filterId) {
    this.setState({ filterId });
  }
  addItem(contents) {
    const { items } = this.$state;
    const active = false;
    const seq = Number(Math.max(0, ...items.map((i) => i.seq))) + 1;
    this.setState({ items: [...items, { seq, contents, active }] });
  }

  toggleActive(seq) {
    const items = [...this.$state.items];

    const index = items.findIndex((i) => i.seq === seq);
    items[index].active = !items[index].active;
    this.setState({ items });
  }
  deleteItem(seq) {
    const items = [...this.$state.items];

    const index = items.findIndex((i) => i.seq === seq);
    items.splice(index, 1);
    this.setState({ items });
  }

  get filteredItems() {
    const { items, filterId } = this.$state;
    return [
      ...items.filter(
        (i) =>
          (i.active && filterId === 1) ||
          (!i.active && filterId === 2) ||
          filterId === 0
      ),
    ];
  }
}
