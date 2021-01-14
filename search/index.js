(function () {
  const root = document.querySelector("#root");
  const input = document.querySelector("#search");
  const recommend = document.querySelector("#recommend");

  const viewContainer = (value) => {
    if (value) {
      recommend.classList.remove("none");
    } else {
      recommend.classList.add("none");
    }
  };

  // 초기화
  viewContainer();

  const getRecommends = () => {
    const list = ["헐", "바보", "컴퓨터"];
    const li = list.reduce(
      (pre, curr, i) => (pre += `<li index=${i}>${curr}</li>`),
      ""
    );
    recommend.querySelector("ul").innerHTML = li;
  };

  let nowIndex = -1;

  const updateRecommend = (add) => {
    nowIndex += add;
    const li = recommend.querySelector(`ul li[index='${nowIndex}']`);
    const lis = recommend.querySelectorAll("ul li");
    lis.forEach((i) => {
      i.classList.remove("selected");
    });
    li.classList.add("selected");
    input.value = li.innerText;
  };

  input.addEventListener("keyup", (event) => {
    if (event.key === "ArrowDown") {
      updateRecommend(1);
    } else if (event.key === "ArrowUp") {
      updateRecommend(-1);
    } else {
      nowIndex = -1;
      getRecommends();
      const { value } = event.target;
      viewContainer(value);
    }
  });
})();
