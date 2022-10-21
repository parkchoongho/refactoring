type Thermostat = {
  selectedTemperature: number;
  currentTemperature: number;
};

const thermostat: Thermostat = {
  selectedTemperature: 10,
  currentTemperature: 9,
};

class HeatingPlan {
  private _min: number;
  private _max: number;

  constructor(min: number, max: number) {
    this._min = min;
    this._max = max;
  }

  targetTemperature(selectedTemperature: number) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

const heatingPlan = new HeatingPlan(5, 20);

const setToHeat = () => {
  console.log('Heater On!!');
};

const setToCool = () => {
  console.log('AirConditioner On!!');
};

const setOff = () => {
  console.log('Off!!');
};

if (heatingPlan.targetTemperature(thermostat.currentTemperature) > thermostat.currentTemperature) setToHeat();
else if (heatingPlan.targetTemperature(thermostat.currentTemperature) > thermostat.currentTemperature) setToCool();
else setOff();
