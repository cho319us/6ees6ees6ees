class ForagerBee extends Bee { // the Bee superclass
  constructor() {
    /* a color property inherited from bee that is set to yellow
     * a food property that is inherited from grub
     * an eat method that is inherited from grub */
    super();
    // an age property that is set to 10
    this.age = 10;
    // a job property that is set to find pollen
    this.job = 'find pollen';
    // a canFly property that is set true
    this.canFly = true;
    // a treasureChest property that is set to an empty array []
    this.treasureChest = [];
  }
  // a forage method that allows the bee to add a treasure to the treasureChest
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
