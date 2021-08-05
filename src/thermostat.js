class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINIMUM = 10;
    this.MAXIMUM_PSM_ON = 25;
    this.MAXIMUM_PSM_OFF = 32;
    this.powerSavingMode = true;
  }

  test_method(a) {
  a = true;
  return a;
  }

  getCurrentTemperature() {
    return this.temp;
  }

  increase(b) {
    if ((this.getCurrentTemperature() + b > this.MAXIMUM_PSM_ON && (this.powerSavingMode === true))) {
      this.temp = 25;
      console.log(this.temp)
    }

    else if ((this.getCurrentTemperature() + b > this.MAXIMUM_PSM_OFF && (this.powerSavingMode === false))) {
      this.temp = 32;
      console.log(this.temp)
    }

    else {this.temp += b;
    }
    
  }

  decrease(b) {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temp -=b;
  }

  isMinimumTemperature() {
    return this.temp === this.MINIMUM;

  }

  isPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }

  isPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = true;
  }
}