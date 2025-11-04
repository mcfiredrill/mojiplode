import { parseGIF, decompressFrames } from 'gifuct-js';

console.log("hey");
  const customEmojis = {
    ':bgs:': {
      custom: true,
      uc_base: 'bgs',
      uc_output: '',
      shortnames: [':bgs:'],
      keywords: ['bgs'],
    },
    ':bgs_pog:': {
      custom: true,
      uc_base: 'bgs_pog',
      uc_output: '',
      shortnames: [':bgs_pog:'],
      keywords: ['bgs_pog'],
    },
    ':mcfiredrill:': {
      custom: true,
      uc_base: 'mcfiredrill',
      uc_output: '',
      shortnames: [':mcfiredrill:'],
      keywords: ['mcfiredrill'],
    },
    ':ovenrake:': {
      custom: true,
      uc_base: 'ovenrake',
      uc_output: '',
      shortnames: [':ovenrake:'],
      keywords: ['ovenrake'],
    },
    ':snailzone:': {
      custom: true,
      uc_base: 'snailzone',
      uc_output: '',
      shortnames: [':snailzone:'],
      keywords: ['snail', 'slimethru'],
    },
    ':trekkie:': {
      custom: true,
      uc_base: 'trekkie',
      uc_output: '',
      shortnames: [':trekkie:', ':trekkietrax:'],
      keywords: ['trekkie', 'trekkietrax'],
    },
    ':datafruits:': {
      custom: true,
      animated: true,
      uc_base: 'datafruits',
      uc_output: '',
      shortnames: [':datafruits:', ':datacoin:'],
      keywords: ['datafruits', 'datacoin'],
      extension: 'gif',
    },
    ':salad_dressing:': {
      custom: true,
      uc_base: 'salad_dressing',
      uc_output: '',
      shortnames: [':salad_dressing:', ':onion_salad_dressing:', ':saladdressing:', ':onionsaladdressing:'],
      keywords: ['salad', 'dressing'],
    },
    ':trash:': {
      custom: true,
      animated: true,
      uc_base: 'cooltrash',
      uc_output: '',
      shortnames: [':trash:', ':cooltrash:'],
      keywords: ['trash', 'cooltrash'],
    },
    ':pizza_spin:': {
      custom: true,
      animated: true,
      uc_base: 'pizza_spin',
      uc_output: '',
      shortnames: [':pizza_spin:'],
      keywords: ['pizza_spin'],
    },
    ':jambox:': {
      custom: true,
      animated: true,
      uc_base: 'jambox',
      uc_output: '',
      shortnames: [':jambox:'],
      keywords: ['jambox'],
    },
    ':gorge:': {
      custom: true,
      uc_base: 'gorge',
      uc_output: '',
      shortnames: [':gorge:', ':gorui:'],
      keywords: ['gorge'],
    },
    ':garf:': {
      custom: true,
      animated: true,
      uc_base: 'garf',
      uc_output: '',
      shortnames: [':garf:', ':garfield:'],
      keywords: ['garf'],
    },
    ':grumby:': {
      custom: true,
      animated: true,
      uc_base: 'grumby',
      uc_output: '',
      shortnames: [':grumby:'],
      keywords: ['grumby'],
    },
    ':strawbur:': {
      custom: true,
      animated: true,
      uc_base: 'strawbur',
      uc_output: '',
      shortnames: [':strawbur:'],
      keywords: ['strawbur'],
    },
    ':orangey:': {
      custom: true,
      animated: true,
      uc_base: 'orangey',
      uc_output: '',
      shortnames: [':orangey:'],
      keywords: ['orangey'],
    },
    ':lemoner:': {
      custom: true,
      animated: true,
      uc_base: 'lemoner',
      uc_output: '',
      shortnames: [':lemoner:'],
      keywords: ['lemoner'],
    },
    ':lemoner_real:': {
      custom: true,
      uc_base: 'lemoner_real',
      uc_output: '',
      shortnames: [':lemoner_real:'],
      keywords: ['lemoner_real'],
    },
    ':cabbage:': {
      custom: true,
      animated: true,
      uc_base: 'cabbage',
      uc_output: '',
      shortnames: [':cabbage:'],
      keywords: ['cabbage'],
    },
    ':banaynay:': {
      custom: true,
      animated: true,
      uc_base: 'banaynay',
      uc_output: '',
      shortnames: [':banaynay:'],
      keywords: ['banaynay'],
    },
    ':watermel:': {
      custom: true,
      animated: true,
      uc_base: 'watermel',
      uc_output: '',
      shortnames: [':watermel:'],
      keywords: ['watermel'],
    },
    ':pineapplee:': {
      custom: true,
      animated: true,
      uc_base: 'pineapplee',
      uc_output: '',
      shortnames: [':pineapplee:'],
      keywords: ['pineapplee'],
    },
    ':limer:': {
      custom: true,
      animated: true,
      uc_base: 'limer',
      uc_output: '',
      shortnames: [':limer:'],
      keywords: ['limer'],
    },
    ':dragion-fruit:': {
      custom: true,
      animated: true,
      uc_base: 'dragion-fruit',
      uc_output: '',
      shortnames: [':dragion-fruit:'],
      keywords: ['dragion-fruit'],
    },
    ':blueberrinies:': {
      custom: true,
      animated: true,
      uc_base: 'blueberrinies',
      uc_output: '',
      shortnames: [':blueberrinies:'],
      keywords: ['blueberrinies'],
    },
    ':miniburger:': {
      custom: true,
      uc_base: 'miniburger',
      uc_output: '',
      shortnames: [':miniburger:', ':miniburgertime:'],
      keywords: ['miniburger'],
    },
    ':happytrash:': {
      custom: true,
      uc_base: 'happytrash',
      uc_output: '',
      shortnames: [':happytrash:'],
      keywords: ['happytrash'],
    },
    ':pizzap:': {
      custom: true,
      uc_base: 'pizzap',
      uc_output: '',
      shortnames: [':pizzap:'],
      keywords: ['pizzap'],
    },
    ':shrimpshake:': {
      custom: true,
      uc_base: 'shrimpshake',
      uc_output: '',
      shortnames: [':shrimpshake:'],
      keywords: ['shrimpshake'],
    },
    ':shrimpshake_spicy:': {
      custom: true,
      uc_base: 'shrimpshake_spicy',
      uc_output: '',
      shortnames: [':shrimpshake_spicy:'],
      keywords: ['shrimpshake_spicy'],
    },
    ':duckle:': {
      custom: true,
      uc_base: 'duckle',
      uc_output: '',
      shortnames: [':duckle:'],
      keywords: ['duckle'],
    },
    ':deeyex:': {
      custom: true,
      uc_base: 'deeyex',
      uc_output: '',
      shortnames: [':deeyex:'],
      keywords: ['deeyex'],
    },
    ':deeyef:': {
      custom: true,
      uc_base: 'deeyef',
      uc_output: '',
      shortnames: [':deeyef:'],
      keywords: ['deeyef'],
    },
    ':deeyex_hmm:': {
      custom: true,
      uc_base: 'deeyex_hmm',
      uc_output: '',
      shortnames: [':deeyex_hmm:'],
      keywords: ['deeyex_hmm'],
    },
    ':deeyef_hmm:': {
      custom: true,
      uc_base: 'deeyef_hmm',
      uc_output: '',
      shortnames: [':deeyef_hmm:'],
      keywords: ['deeyef_hmm'],
    },
    ':dxdf:': {
      custom: true,
      uc_base: 'dxdf',
      uc_output: '',
      shortnames: [':dxdf:'],
      keywords: ['dxdf'],
    },
    ':thanks:': {
      custom: true,
      uc_base: 'thanks',
      uc_output: '',
      shortnames: [':thanks:'],
      keywords: ['thanks'],
      animated: true,
    },
    ':anysong:': {
      custom: true,
      uc_base: 'anysong',
      uc_output: '',
      shortnames: [':anysong:'],
      keywords: ['anysong'],
      animated: true,
    },
    ':acid:': {
      custom: true,
      uc_base: 'acid',
      uc_output: '',
      shortnames: [':acid:'],
      keywords: ['acid'],
      animated: true,
    },
    ':good_beverage:': {
      custom: true,
      uc_base: 'good_beverage',
      uc_output: '',
      shortnames: [':good_beverage:'],
      keywords: ['good_beverage'],
    },
    ':sshrimp:': {
      custom: true,
      uc_base: 'sshrimp',
      uc_output: '',
      shortnames: [':sshrimp:'],
      keywords: ['sshrimp'],
    },
    ':sshrimp_clear:': {
      custom: true,
      uc_base: 'sshrimp_clear',
      uc_output: '',
      shortnames: [':sshrimp_clear:'],
      keywords: ['sshrimp_clear'],
    },
    ':thisisamazing:': {
      custom: true,
      animated: true,
      uc_base: 'thisisamazing',
      uc_output: '',
      shortnames: [':thisisamazing:'],
      keywords: ['thisisamazing'],
    },
    ':sorrymustabeentheonionsaladdressing:': {
      custom: true,
      animated: true,
      uc_base: 'sorrymustabeentheonionsaladdressing',
      uc_output: '',
      shortnames: [':sorrymustabeentheonionsaladdressing:'],
      keywords: ['sorrymustabeentheonionsaladdressing'],
    },
    ':greasyhotdogs:': {
      custom: true,
      animated: true,
      uc_base: 'greasyhotdogs',
      uc_output: '',
      shortnames: [':greasyhotdogs:', ':greasyfries:', ':greasyonionrings:'],
      keywords: ['greasyhotdogs'],
    },
    ':iphone_girl:': {
      custom: true,
      uc_base: 'iphone_girl',
      uc_output: '',
      shortnames: [':iphone_girl:'],
      keywords: ['iphone_girl'],
    },
    ':bomboclart_bart:': {
      custom: true,
      uc_base: 'bomboclart_bart',
      uc_output: '',
      shortnames: [':bomboclart_bart:'],
      keywords: ['bomboclart_bart'],
    },
    ':mango_hd:': {
      custom: true,
      uc_base: 'mango_hd',
      uc_output: '',
      shortnames: [':mango_hd:'],
      keywords: ['mango_hd'],
    },
    ':viz:': {
      custom: true,
      animated: true,
      uc_base: 'viz',
      uc_output: '',
      shortnames: [':viz:'],
      keywords: ['viz'],
    },
    ':blend:': {
      custom: true,
      uc_base: 'blend',
      uc_output: '',
      shortnames: [':blend:'],
      keywords: ['blend'],
    },
    ':fire2:': {
      custom: true,
      uc_base: 'fire2',
      uc_output: '',
      shortnames: [':fire2:'],
      keywords: ['fire2'],
    },
    ':cheese_teen:': {
      custom: true,
      uc_base: 'cheese_teen',
      uc_output: '',
      shortnames: [':cheese_teen:'],
      keywords: ['cheese_teen'],
    },
    ':metal_guitar:': {
      custom: true,
      uc_base: 'metal_guitar',
      uc_output: '',
      shortnames: [':metal_guitar:'],
      keywords: ['metal_guitar'],
    },
    ':pensive_booty:': {
      custom: true,
      uc_base: 'pensive_booty',
      uc_output: '',
      shortnames: [':pensive_booty:'],
      keywords: ['pensive_booty'],
    },
    ':pricemaster:': {
      custom: true,
      uc_base: 'pricemaster',
      uc_output: '',
      shortnames: [':pricemaster:'],
      keywords: ['pricemaster'],
    },
    ':glop:': {
      custom: true,
      uc_base: 'glop',
      uc_output: '',
      shortnames: [':glop:'],
      keywords: ['glop'],
    },
    ':glorp:': {
      custom: true,
      uc_base: 'glorp',
      uc_output: '',
      shortnames: [':glorp:'],
      keywords: ['glorp'],
    },
    ':futsu:': {
      custom: true,
      uc_base: 'futsu',
      uc_output: '',
      shortnames: [':futsu:'],
      keywords: ['futsu'],
    },
    ':beamsprout:': {
      custom: true,
      uc_base: 'beamsprout',
      uc_output: '',
      shortnames: [':beamsprout:'],
      keywords: ['beamsprout'],
    },
    ':lain_dad:': {
      custom: true,
      uc_base: 'lain_dad',
      uc_output: '',
      shortnames: [':lain_dad:'],
      keywords: ['lain_dad'],
    },
    ':php_ceo:': {
      custom: true,
      uc_base: 'php_ceo',
      uc_output: '',
      shortnames: [':php_ceo:'],
      keywords: ['php_ceo'],
    },
    ':airhorn:': {
      custom: true,
      uc_base: 'airhorn',
      uc_output: '',
      shortnames: [':airhorn:'],
      keywords: ['airhorn'],
    },
    ':krango:': {
      custom: true,
      uc_base: 'krango',
      uc_output: '',
      shortnames: [':krango:'],
      keywords: ['krango'],
    },
    ':thanksbill:': {
      custom: true,
      uc_base: 'thanksbill',
      uc_output: '',
      shortnames: [':thanksbill:'],
      keywords: ['thanksbill'],
    },
    ':smiling_shrimp:': {
      custom: true,
      uc_base: 'smiling_shrimp',
      uc_output: '',
      shortnames: [':smiling_shrimp:'],
      keywords: ['smiling_shrimp'],
    },
    ':alligottadoisfindthemustard:': {
      custom: true,
      uc_base: 'alligottadoisfindthemustard',
      uc_output: '',
      animated: true,
      shortnames: [':alligottadoisfindthemustard:'],
      keywords: ['alligottadoisfindthemustard'],
    },
    ':tune:': {
      custom: true,
      animated: true,
      uc_base: 'tune',
      uc_output: '',
      shortnames: [':tune:'],
      keywords: ['tune'],
    },
    ':grumby_spin:': {
      custom: true,
      animated: true,
      uc_base: 'grumby_spin',
      uc_output: '',
      shortnames: [':grumby_spin:'],
      keywords: ['grumby_spin'],
    },
    ':watermel_spin:': {
      custom: true,
      animated: true,
      uc_base: 'watermel_spin',
      uc_output: '',
      shortnames: [':watermel_spin:'],
      keywords: ['watermel_spin'],
    },
    ':freaky_green_spin:': {
      custom: true,
      animated: true,
      uc_base: 'freaky_green_spin',
      uc_output: '',
      shortnames: [':freaky_green_spin:'],
      keywords: ['freaky_green_spin'],
    },
    ':lemoner_spin:': {
      custom: true,
      animated: true,
      uc_base: 'lemoner_spin',
      uc_output: '',
      shortnames: [':lemoner_spin:'],
      keywords: ['lemoner_spin'],
    },
    ':banaynay_spin:': {
      custom: true,
      animated: true,
      uc_base: 'banaynay_spin',
      uc_output: '',
      shortnames: [':banaynay_spin:'],
      keywords: ['banaynay_spin'],
    },
    ':ksd_spin:': {
      custom: true,
      animated: true,
      uc_base: 'ksd_spin',
      uc_output: '',
      shortnames: [':ksd_spin:'],
      keywords: ['ksd_spin'],
    },
    ':lol_grandpa:': {
      custom: true,
      uc_base: 'lol_grandpa',
      uc_output: '',
      shortnames: [':lol_grandpa:'],
      keywords: ['lol_grandpa'],
    },
    ':typing:': {
      custom: true,
      uc_base: 'typing',
      uc_output: '',
      shortnames: [':typing:'],
      keywords: ['typing'],
    },
    ':hacker:': {
      custom: true,
      uc_base: 'hacker',
      uc_output: '',
      shortnames: [':hacker:'],
      keywords: ['hacker'],
    },
    ':datafruits_bag:': {
      custom: true,
      uc_base: 'datafruits_bag',
      uc_output: '',
      shortnames: [':datafruits_bag:'],
      keywords: ['datafruits_bag'],
    },
    ':the_ravers:': {
      custom: true,
      uc_base: 'the_ravers',
      uc_output: '',
      shortnames: [':the_ravers:'],
      keywords: ['the_ravers'],
    },
    ':mega_beamsprout:': {
      custom: true,
      animated: true,
      uc_base: 'mega_beamsprout',
      uc_output: '',
      shortnames: [':mega_beamsprout:'],
      keywords: ['mega_beamsprout'],
    },
  };

const HOTDOG_URL = "wss://hotdog-lounge.herokuapp.com/socket";

const urlPrefix = "https://datafruits.fm/assets/images/emojis/";

const emojiSprites = [];

async function loadGifEmoji(name) {
  const response = await fetch(`${urlPrefix}${name}.gif`);
  console.log('fetch');
  const buffer = await response.arrayBuffer();

  const gif = parseGIF(buffer);
  const frames = decompressFrames(gif, true);
  console.log('parse frames');

  const textures = frames.map((frame) => {
    const canvas = document.createElement('canvas');
    canvas.width = frame.dims.width;
    canvas.height = frame.dims.height;
    const ctx = canvas.getContext('2d');

    const imageData = new ImageData(
      new Uint8ClampedArray(frame.patch),
      frame.dims.width,
      frame.dims.height
    );
    ctx.putImageData(imageData, 0, 0);

    const baseTexture = PIXI.BaseTexture.from(canvas);
    return new PIXI.Texture(baseTexture);
  });

  const anim = new PIXI.AnimatedSprite(textures);
  anim.animationSpeed = 1 / 6;
  anim.loop = true;
  anim.play();

  return anim;
}


let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type);

//Create a Pixi Application
let app = new PIXI.Application({
  backgroundAlpha: 0,
  resizeTo: window,
  backgroundColor: 0x00ff00,
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


function addSpriteToStage(sprite) {
  emojiSprites.push(sprite);
  sprite.x = Math.random() * app.screen.width;
  sprite.y = Math.random() * app.screen.height;
  sprite.rotation = Math.random() * 360;
  sprite.rotationSpeed = Math.random() * (0.08 - 0.01) + 0.01;

  app.stage.addChild(sprite);
  setTimeout(() => {
    for (let i = 0; i < emojiSprites.length; i++) {
      if (emojiSprites[i] === sprite) {
        emojiSprites.splice(i, 1);
        app.stage.removeChild(sprite);
      }
    }
  }, 8000);
}

channel.on("new:msg", async (msg) => {
  console.log(msg.body);
  const regex = /:(.*?):/g;
  let emojis = msg.body.match(regex)?.map((s) => s.slice(1, -1));
  if(emojis) {
    console.log(emojis);
    for (const emoji of emojis) {
      let emojiSprite;
      if(customEmojis[`:${emoji}:`]) {
        if(customEmojis[`:${emoji}:`].animated) {
          console.log('this is a gif emoji');
          emojiSprite = await loadGifEmoji(emoji);
          console.log('loaded gif emoji');
        } else {
          let url = `${urlPrefix}${emoji}.png`;
          emojiSprite = PIXI.Sprite.from(url);
          console.log("sprite: ", emojiSprite);
        }
        addSpriteToStage(emojiSprite);
      }
    }
  }
});

// do the animations
let count = 0.0;
app.ticker.add((delta) => {
  emojiSprites.forEach((sprite) => {
    sprite.x += Math.sin(count);
    sprite.y += Math.cos(count);
    sprite.scale.x += Math.sin(count) * 0.01;
    sprite.scale.y += Math.sin(count) * 0.01;
    sprite.rotation += Math.sin(count) * sprite.rotationSpeed;
  });
  count += 0.02 * delta;
});
