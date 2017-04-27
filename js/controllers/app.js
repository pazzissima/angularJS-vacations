function AppCtrl ($scope) {
  $scope.setActive = function (type) {
    $scope.destinationsActive = '';
    $scope.locationActive = '';
    $scope.planActive = '';

    $scope[type + 'Active'] = 'active';
  }

  $scope.vacations = {
    "Geneve": {
      "city": "Geneve",
      "location": "Western Europe",
      "currency": "Swiss franc",
      "country": "Switzerland",
      "languages": [
        "French",
        "German",
        "Romansh",
        "Italian"
      ]
    },
    "Buenos Aires": {
      "city": "Buenos Aires",
      "location": "Latin America",
      "currency": "Peso",
      "country": "Argentina",
      "languages": [
        "Spanish"
      ]
    },
    "Lankanfushi": {
      "city": "Lankanfushi",
      "location": "South Asia",
      "currency": "Maldivian rufiyaa",
      "country": "Maldives",
      "languages": [
        "Spanish"
      ]
    },
    "Berlin": {
      "city": "Berlin",
      "location": "Central Europe",
      "currency": "Euro",
      "country": "Germany",
      "languages": [
        "German"
      ]
    },
    "Mirihi Island": {
      "city": "Mirihi Island",
      "location": "South Asia",
      "currency": "Maldivian rufiyaa",
      "country": "Maldives",
      "languages": [
        "Dhivehi"
      ]
    },
    "Providenciales Island": {
      "city": "Providenciales Island",
      "location": "North Atlantic Ocean, northwest of Puerto Rico",
      "currency": "US dollar",
      "country": "Turks and Caicos Islands",
      "languages": [
        "English"
      ]
    }
  };
  $scope.sidebarURL = 'partials/destination.html'
  $scope.currentCity = null;

  $scope.setDestination = function(city) {
    $scope.currentCity = $scope.vacations[city];
  }
}