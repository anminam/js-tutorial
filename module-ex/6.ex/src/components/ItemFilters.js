import Component from "../core/Component.js";

export default class ItemFilters extends Component {
  templete() {
    return `    
        <ul>
        <li>
            <button data-filter-id="1">활성 보기</button>
        </li>
        <li>
            <button data-filter-id="2">비활성 보기</button>
        </li>
        <li>
            <button data-filter-id="0">모두보기</button>
        </li>
        </ul>
    `;
  }

  setEvent() {
    const { setFilter } = this.$props;
    this.addEvent("click", "button", (event) => {
      const id = Number(event.target.dataset.filterId);
      setFilter(id);
    });
  }
}
