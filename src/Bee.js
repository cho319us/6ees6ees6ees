class Bee extends Grub { // the Grub superclass
  constructor() {
    /* a food property that is inherited from grub
     * an eat method that is inherited from grub */
    super();
    // an age property that is set to 5
    this.age = 5;
    // a color property that is set to yellow
    this.color = 'yellow';
    // a job property that is set to Keep on growing
    this.job = 'Keep on growing';
  }
};
