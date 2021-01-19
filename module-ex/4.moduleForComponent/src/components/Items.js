import Component from "../core/Component.js";

export default class Items extends Component {
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

  get filteredItems() {
    const { isFilter, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0
    );
  }

  getTemplete() {
    return `
      <header>
        <input type="text" class="add-input" placeholder="입력"/>
      </header>
      <main>
        <ul>
          ${this.filteredItems
            .map((item) => {
              const { seq, contents, active } = item;
              return `
                <li data-seq="${seq}">
                  ${contents}
                  <button class="toggle-btn" style="color:${
                    active ? "#09F" : "#F09"
                  }">${active ? "활성" : "비활성"}</button>
                  <button class="remove-btn">삭제</button>
                </li>
              `;
            })
            .join("")}
        </ul>
      </main>
      <footer>
        <button class="filter-button" data-is-filter="0">전체</button>
        <button class="filter-button" data-is-filter="1">활성</button>
        <button class="filter-button" data-is-filter="2">비활성</button>
      </footer>
    `;
  }

  setEvent() {
    this.addEvent("keyup", ".add-input", (event) => {
      const { key, target } = event;
      if (key !== "Enter") return;

      const { items } = this.$state;
      const seq = Math.max(0, ...items.map((i) => i.seq)) + 1;
      const contents = target.value;
      const active = false;
      this.setState({ items: [...items, { seq, contents, active }] });
    });

    this.addEvent("click", ".toggle-btn", (event) => {
      const { target } = event;
      const items = [...this.$state.items];

      const seq = Number(target.closest("[data-seq]").dataset.seq);
      const index = items.findIndex((item) => item.seq === seq);
      items[index].active = !items[index].active;
      this.setState({ items });
    });

    this.addEvent("click", ".add-item", (event) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.addEvent("click", ".remove-btn", (event) => {
      const { target } = event;
      const { items } = this.$state;

      const seq = Number(target.closest("[data-seq]").dataset.seq);
      const index = items.findIndex((i) => i.seq === seq);
      items.splice(index, 1);
      this.setState({ items });
    });

    this.addEvent("click", ".filter-button", (event) => {
      this.setState({ isFilter: Number(event.target.dataset.isFilter) });
    });
  }
}
