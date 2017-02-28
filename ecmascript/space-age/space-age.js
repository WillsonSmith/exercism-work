const earthYearInSeconds = 31557600;
const orbitPeriod = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

function calculateAge(earthYears, planet) {
  return parseFloat((earthYears / orbitPeriod[planet]).toFixed(2));
}

class SpaceAge {
  constructor(age) {
    this.age = age;
    this.earthYears = age/earthYearInSeconds;
  }

  get seconds() {
    return this.age;
  }

  onEarth() {
    return calculateAge(this.earthYears, 'earth');
  }
  onMercury() {
    return calculateAge(this.earthYears, 'mercury');
  }
  onVenus() {
    return calculateAge(this.earthYears, 'venus');
  }
  onMars() {
    return calculateAge(this.earthYears, 'mars');
  }
  onJupiter() {
    return calculateAge(this.earthYears, 'jupiter');
  }
  onSaturn() {
    return calculateAge(this.earthYears, 'saturn');
  }
  onUranus() {
    return calculateAge(this.earthYears, 'uranus');
  }
  onNeptune() {
    return calculateAge(this.earthYears, 'neptune');
  }

}

export default SpaceAge;