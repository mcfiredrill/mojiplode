
console.log('hey');
const HOTDOG_URL = "wss://hotdog-lounge.herokuapp.com/socket";

const urlPrefix = "https://datafruits.fm/assets/images/emojis/";

let socket = new Socket(HOTDOG_URL, {

  logger: function logger(/*kind, msg, data*/) {
    //console.log(kind + ": " + msg, data);
  }
});

socket.connect();

socket.onError(e => {
  console.error('ERROR', e);
});
socket.onClose(e => {
  console.log('CLOSE', e);
})
let nick = "mysterious_not_a_bot";
let channel;

channel = socket.channel("rooms:lobby", {});

channel.join().receive("ignore", function () {
  console.log("auth error");
}).receive("ok", function () {
  console.log("join ok");
  channel.push("authorize", { user: nick, timestamp: Date.now() });
}).receive("timeout", function () {
  console.log("Connection interruption");
});

channel.on("authorized", msg => {
  console.log('HI ' + msg.user + ' you are now authorized');
});

channel.on("new:msg", msg => {
  console.log(msg.body);
  const regex = /:(.*?):/g;
  let emojis = msg.body.match(regex).map((s) => s.slice(1, -1));
  console.log(emojis);
});