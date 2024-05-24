console.log("hey");
const HOTDOG_URL = "wss://hotdog-lounge.herokuapp.com/socket";

const urlPrefix = "https://datafruits.fm/assets/images/emojis/";

const emojiSprites = [];

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type);

//Create a Pixi Application
let app = new PIXI.Application({
  backgroundAlpha: 0,
  resizeTo: window,
  backgroundColor: 0x00ff00
});

app.stop();

//Add the canvas that Pixi automatically created for you to the HTML document
window.addEventListener("load", () => {
  document.body.appendChild(app.view);
  app.start();
});

let socket = new Socket(HOTDOG_URL, {
  logger: function logger(/*kind, msg, data*/) {
    //console.log(kind + ": " + msg, data);
  },
});

socket.connect();

socket.onError((e) => {
  console.error("ERROR", e);
});
socket.onClose((e) => {
  console.log("CLOSE", e);
});
let nick = "mysterious_not_a_bot";
let channel;

channel = socket.channel("rooms:lobby", {});

channel
  .join()
  .receive("ignore", function () {
    console.log("auth error");
  })
  .receive("ok", function () {
    console.log("join ok");
    channel.push("authorize", { user: nick, timestamp: Date.now() });
  })
  .receive("timeout", function () {
    console.log("Connection interruption");
  });

channel.on("authorized", (msg) => {
  console.log("HI " + msg.user + " you are now authorized");
});

channel.on("new:msg", (msg) => {
  console.log(msg.body);
  const regex = /:(.*?):/g;
  let emojis = msg.body.match(regex).map((s) => s.slice(1, -1));
  console.log(emojis);
  emojis.forEach((emoji) => {
    let url = `${urlPrefix}${emoji}.png`;
    let emojiSprite = PIXI.Sprite.from(url);
    //let emojiSprite = new Image();
    //emojiSprite.src = url;
    //document.body.appendChild(emojiSprite);
    emojiSprites.push(emojiSprite);
    emojiSprite.x = Math.random() * app.screen.width;
    emojiSprite.y = Math.random() * app.screen.height;

    app.stage.addChild(emojiSprite);
    setTimeout(() => {
      for(let i = 0; i < emojiSprites.length; i++){ 
        if(emojiSprites[i] === emojiSprite) {
          emojiSprites.splice(i, 1)
          app.stage.removeChild(emojiSprite);
        }
      };
    }, 8000);
  });
});

// do the animations
let count = 0.0;
app.ticker.add((delta) => {
  emojiSprites.forEach((sprite) => {
    sprite.x += Math.sin(count);
    sprite.y += Math.cos(count);
    sprite.scale.x += Math.sin(count) * 0.01;
    sprite.scale.y += Math.sin(count) * 0.01;
    sprite.rotation += Math.sin(count) * 0.01;
  });
  count += 0.02 * delta;
});
