class HoneyMakerBee extends Bee { // the Bee superclass
  constructor() {
    /* a color property inherited from bee that is set to yellow
     * a food property that is inherited from grub
     * an eat method that is inherited from grub */
    super();
    // an age property that is set to 10
    this.age = 10;
    // a job property that is set to make honey
    this.job = 'make honey';
    // a honeyPot property that is set to 0
    this.honeyPot = 0;
  }
  // a makeHoney method that adds 1 to that honeyBee's honeyPot
  makeHoney() {
    this.honeyPot++;
  }
  // a giveHoney method that subtracts 1 from that honeyBee's honeyPot
  giveHoney() {
    this.honeyPot--;
  }
};
