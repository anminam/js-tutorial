import ItemAppender from "./components/ItemAppender.js";
import ItemFilter from "./components/ItemFilter.js";
import Items from "./components/Items.js";
import Component from "./core/Component.js";
export default class App extends Component {
  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: "item1",
          active: false,
        },
        {
          seq: 2,
          contents: "item2",
          active: true,
        },
      ],
    };
  }

  template() {
    return `
        <header data-component='item-appender'></header>
        <main data-component='items'></main>
        <footer data-component='item-filter'></footer>
      `;
  }

  mounted() {
    const { addItem, filteredItems, deleteItem, toggleItem, filterItem } = this;

    const $itemApeender = this.$target.querySelector(
      '[data-component="item-appender"]'
    );
    const $items = this.$target.querySelector('[data-component="items"]');
    const $itemFilter = this.$target.querySelector(
      '[data-component="item-filter"]'
    );

    new ItemAppender($itemApeender, {
      addItem: addItem.bind(this),
    });

    new Items($items, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this),
    });

    new ItemFilter($itemFilter, {
      filterItem: filterItem.bind(this),
    });
  }

  get filteredItems() {
    const { isFilter, items } = this.$state;
    return items.filter((item) => {
      const { active } = item;
      return (
        (active === true && isFilter === 1) ||
        (active === false && isFilter === 2) ||
        isFilter === 0
      );
    });
  }

  addItem(contents) {
    const { items } = this.$state;
    const seq = Math.max(0, ...items.map((i) => i.seq)) + 1;
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

  filterItem(isFilter) {
    this.setState({ isFilter });
  }
}
