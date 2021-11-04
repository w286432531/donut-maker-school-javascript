class Donut {
  init() {
    this.donutId;
    this.donutNums = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 10;
    this.donutsPerClick = 1;
  }
  getDonutsPerClick() {
    this.donutsPerClick = Math.pow(1.2, this.donutMultiplierCount);
  }
  addDonut() {
    this.getDonutsPerClick();
    this.donutNums += this.donutsPerClick;
  }
  roundDonutNums() {
  return Math.round(this.donutNums);
  }
  buyAutoclicker() {
    if (this.donutNums >= this.autoClickerCost) {
      this.donutNums -= this.autoClickerCost;
      this.autoClickerCount++;
      this.autoClickerCost *= 1.1;
    }
  }
  runAutoClicker() {
    setInterval(() => {
    if (this.autoClickerCount > 0) {
      for (let i = 0; i < this.autoClickerCount; i++) {
        this.addDonut();
      }
    }
    }, 1000);
  }
  buyDonutMultiplier() {
    if (this.donutNums >= this.donutMultiplierCost) {
      this.donutNums -= this.donutMultiplierCost;
      this.donutMultiplierCount++;
      this.donutMultiplierCost *= 1.1;
    }
  }
}