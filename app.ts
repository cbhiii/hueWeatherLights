let condition = Weather.currentWeatherAtTime.TodaysCondition.toLowerCase();

switch (true) {

  // thunderstorm or storm
  case (condition.indexOf('thunder') !=-1):
    // purple
    Hue.setColorAllHue.setColor('FF00FF');
    break;

  // mixed
  case (condition.indexOf('mixed') !=-1):
  case (condition.indexOf('rain') !=-1) && (condition.indexOf('snow') !=-1):
    // blue-green (teal)
    Hue.setColorAllHue.setColor('00FFCC');
    break;

  // rain
  case (condition.indexOf('rain') !=-1):
  case (condition.indexOf('drizzle') !=-1):
  case (condition.indexOf('mist') !=-1):
  case (condition.indexOf('showers') !=-1) && (condition.indexOf('snow') === -1):
    // green
    Hue.setColorAllHue.setColor('00FF00');
    break;

  // snow
  case (condition.indexOf('snow') !=-1):
  case (condition.indexOf('showers') !=-1) && (condition.indexOf('snow') !=-1):
  case (condition.indexOf('blizzard') !=-1):
  case (condition.indexOf('mist') !=-1):
    // blue
    Hue.setColorAllHue.setColor('0000FF');
    break;

  // hot
  case (condition.indexOf('hot') !=-1):
    // orange
    Hue.setColorAllHue.setColor('FF9900');
    break;

  // sunny
  case (condition.indexOf('sun') !=-1):
  case (condition.indexOf('clear') !=-1):
    // yellow
    Hue.setColorAllHue.setColor('FFDD00');
    break;

  // cloudy
    case (condition.indexOf('cloud') !=-1):
    case (condition.indexOf('fog') !=-1):
      // white
      Hue.setColorAllHue.setColor('FFFFFF');
      break;

  // default color if no match
  default:
    // pink
    Hue.setColorAllHue.setColor('FF9999');
    break;
}
