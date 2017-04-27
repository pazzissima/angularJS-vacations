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
      "image": "/img/geneve.jpg",
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
      "image": "/img/buenosaires.jpg",
      "languages": [
        "Spanish"
      ]
    },
    "Lankanfushi": {
      "city": "Lankanfushi",
      "location": "South Asia",
      "currency": "Maldivian rufiyaa",
      "country": "Maldives",
      "image": "/img/lankanfushi.jpg",
      "languages": [
        "Spanish"
      ]
    },
    "Berlin": {
      "city": "Berlin",
      "location": "Central Europe",
      "currency": "Euro",
      "country": "Germany",
      "image": "/img/berlin.jpg",
      "languages": [
        "German"
      ]
    },
    "Mirihi Island": {
      "city": "Mirihi Island",
      "location": "South Asia",
      "currency": "Maldivian rufiyaa",
      "country": "Maldives",
      "image": "/img/mihiri.jpg",
      "languages": [
        "Dhivehi"
      ]
    },
    "Providenciales": {
      "city": "Providenciales",
      "location": "North Atlantic Ocean",
      "currency": "US dollar",
      "country": "Turks and Caicos Islands",
      "image": "/img/providenciales.jpg",
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