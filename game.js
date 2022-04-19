import Phaser from "phaser";
import BoardPlugin from "phaser3-rex-plugins/plugins/board-plugin.js";
import MainScene from "./MainScene";

function preload() {
  console.log("preload!!");
  this.load.setBaseURL("http://labs.phaser.io");
  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  //   scene: {
  //     preload: preload,
  //     create: create,
  //     //update: update,
  //   },
  scene: MainScene,
  plugins: {
    scene: [
      {
        key: "rexBoard",
        plugin: BoardPlugin,
        mapping: "rexBoard",
      },
    ],
  },
};

const game = new Phaser.Game(config);
//var board = scene.rexBoard.add.board(config);
