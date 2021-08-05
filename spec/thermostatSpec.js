describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();

  });


  describe('test_method', () => {
    it('should return true', () => {
      a = true;
      expect(thermostat.test_method(a)).toEqual(true);
    });
  });

  
    it('should default to 20 degrees', () => {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  describe('.increase', () => {
    it('should increase number', () => {
      thermostat.increase(2);
      expect(thermostat.getCurrentTemperature()).toEqual(22);
    });
    
    it('if PSM on max temp is 25', () => {
      thermostat.increase(6);
    expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('if PSM off max temp is 32', () => {
      thermostat.isPowerSavingModeOff()
      thermostat.increase(13);
    expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('.decrease', () => {
    it('should decrease number', () => {
      thermostat.decrease(2);
      expect(thermostat.getCurrentTemperature()).toEqual(18);
    });
  });

  it('has a min of 10', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decrease(1);
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

  describe('.isPowerSavingModeOn', () => {
    it('tells you if PowerMode is on', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('has PSM on by default', () => {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    
  });



  describe('.isPowerSavingModeOff', () => {
    it('tells you if PowerMode is off', () => {
    expect(thermostat.isPowerSavingModeOff()).toBe(false);
    });
  })  ;

  describe('.switchPowerSavingModeOff', () => {
    it('can switch PSM off', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
  
    });
  });
});