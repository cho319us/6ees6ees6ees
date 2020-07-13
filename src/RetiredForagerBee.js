class RetiredForagerBee extends ForagerBee { // the ForagerBee superclass
  constructor() {
    /* a food property that is inherited from grub
     * an eat method that is inherited from grub
     * a treasureChest property inherited from ForagerBee that is set to an empty array [] */
    super();
    // an age property that is set to 40
    this.age = 40;
    // a job property that is set to gamble
    this.job = 'gamble';
    // a canFly property that is set to false
    this.canFly = false;
    // a color property that is set to grey
    this.color = 'grey';
  }
  // a forage method that returns I am too old, let me play cards instead
  forage() {
    return 'I am too old, let me play cards instead';
  }
  // an always winning gamble method that allows the bee to add a treasure to the treasureChest
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
