function AppCtrl ($scope) {
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
    "Mirihi Island": {
      "city": "Mirihi Island",
      "location": "South Asia",
      "currency": "Maldivian rufiyaa",
      "country": "Maldives",
      "languages": [
        "Dhivehi"
      ]
    }
  };
  $scope.sidebarURL = 'partials/destination.html'
  $scope.currentCity = null;

  $scope.setDestination = function(city) {
    $scope.currentCity = $scope.vacations[city];
  }
}