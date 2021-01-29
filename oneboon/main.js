const cm = {
  canvas: undefined,
  context: undefined,
  canvasWidth: 0,
  canvasHight: 0,
  colors: [
    "222, 35, 18",
    "238, 150, 63",
    "246, 228, 0",
    "110, 210, 70",
    "63, 145, 255",
    "185, 22, 226",
  ],
  colors2: [
    "255, 35, 18",
    "255, 150, 63",
    "255, 228, 0",
    "195, 210, 70",
    "200, 145, 255",
    "239, 173, 255",
  ],
  charactersSrc: {
    somun: "images/sprite-somun.png",
    ji: "images/sprite-ji.png",
  },
};

(function () {
  cm.canvas = document.querySelector("#the-canvas");
  cm.context = cm.canvas.getContext("2d");
  const canvasContainer = document.querySelector(".canvas-container");

  //   const dpr = window.devicePixelRatio > 1 ? 2 : 1;
  const dpr = 1;
  const mouse = { x: 0, y: 0 };
  const lights = [];
  const characters = [];
  let indexOfLight = 0;

  function setSize() {
    cm.canvasWidth = canvasContainer.clientWidth;
    cm.canvasHight = canvasContainer.clientHeight;
    cm.canvas.width = cm.canvasWidth * dpr;
    cm.canvas.height = cm.canvasHight * dpr;
    if (dpr > 1) cm.context.scale(dpr, dpr);
  }

  function setCharacters() {
    const somun = new Character(
      cm.charactersSrc.somun,
      "underAttack",
      cm.canvasWidth * 0.5 - 256 + 64,
      cm.canvasHight * 0.5 - 64
    );
    const ji = new Character(
      cm.charactersSrc.ji,
      "attack",
      cm.canvasWidth * 0.5 - 64,
      cm.canvasHight * 0.5 - 64
    );

    characters.push(somun);
    characters.push(ji);
  }

  function setup() {
    setSize();
    draw();
  }

  function draw() {
    cm.context.clearRect(0, 0, cm.canvasWidth, cm.canvasHight);

    let light;
    let scaleRatio;

    for (let i = 0; i < characters.length; i++) {
      characters = characters[i];
      characters.draw();
    }

    for (let i = 0; i < lights.length; i++) {
      light = lights[i];
      scaleRatio = light.y / cm.canvasHight + 1;
      // console.log(light.y, cm.canvasHight, scaleRatio);
      cm.context.save();
      cm.context.translate(light.x, light.y);
      cm.context.scale(scaleRatio, scaleRatio);
      cm.context.translate(-light.x, -light.y);
      light.draw();
      cm.context.restore();
    }
    requestAnimationFrame(draw);
  }

  cm.canvas.addEventListener("click", function (e) {
    // mouse.x = e.layerX;
    // mouse.y = e.layerY;
    if (indexOfLight >= cm.colors.length) return;

    mouse.x = e.clientX - cm.canvas.getBoundingClientRect().left;
    mouse.y = e.clientY - cm.canvas.getBoundingClientRect().top;

    const light = new Light(indexOfLight++, mouse.x, mouse.y);
    lights.push(light);
  });
  window.addEventListener("resize", setSize);
  window.addEventListener("load", setup);
})();
