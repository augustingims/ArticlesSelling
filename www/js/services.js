
var forecastioWeather = ['$q', '$resource', '$http', function($q, $resource, $http) {

  var FORECASTIO_KEY = "4cd3c5673825a361eb5ce108103ee84a";

  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback: 'JSON_CALLBACK',
  }, {
    get: {
      method: 'JSONP'
    }
  });

  return {
    getAtLocation: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    },
    getForecast: function(locationString) {
    },
    getHourly: function(locationString) {
    }
  }
}];


angular.module('services', ['ngResource'])

.factory('Geo', function($q) {
  return {
    reverseGeocode: function(lat, lng) {
      var q = $q.defer();

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'latLng': new google.maps.LatLng(lat, lng)
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log('Reverse', results);
          if(results.length > 1) {
            var r = results[1];
            var a, types;
            var parts = [];
            var city = "";
            var countri = "";
            var foundLocality = false;
            var foundState = false;
            for(var i = 0; i < r.address_components.length; i++) {
              a = r.address_components[i];
              types = a.types;
              for(var j = 0; j < types.length; j++) {
                if(!foundLocality && types[j] == 'locality') {
                  foundLocality = true;
                  city = a.long_name;
                  console.log('city', city);
                  parts.push(a.long_name);
                } else if(!foundState && types[j] == 'country') {
                  foundState = true;
                  countri = a.long_name;
                  console.log('country', countri);
                  parts.push(a.long_name);
                }
              }
            }
            console.log('Reverse', parts);
            q.resolve(parts.join(', '));
          }
        } else {
          console.log('reverse fail', results, status);
          q.reject(results);
        }
      })

      return q.promise;
    },
    getLocation: function() {
      var q = $q.defer();

      navigator.geolocation.getCurrentPosition(function(position) {
        q.resolve(position);
      }, function(error) {
        q.reject(error);
      });

      return q.promise;
    }
  };
})

.factory('Weather', forecastioWeather);
