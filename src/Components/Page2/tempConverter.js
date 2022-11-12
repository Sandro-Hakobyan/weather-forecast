export function toFahrenheit(kelvin) {
  return Math.round((kelvin - 273) * 1.8 + 32);
}

export function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
