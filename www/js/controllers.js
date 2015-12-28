angular.module('starter.controllers', [])

  .controller('starter', function($scope, ionicMaterialInk, ionicMaterialMotion, $ionicSideMenuDelegate, $timeout) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })
  .controller('mainhome', function($scope, $http,$timeout,$ionicPlatform,$rootScope,Weather,Geo) {
    var _this = this;

      $scope.swiper = {};

      $scope.onReadySwiper = function (swiper) {

        swiper.on('slideChangeStart', function () {
          console.log('slide start');
        });

        swiper.on('onSlideChangeEnd', function () {
          console.log('slide end');
        });
      };

    this.getCurrent = function(lat, lng, locString) {
      Weather.getAtLocation(lat, lng).then(function(resp) {
        $scope.current = resp.data;
        console.log('GOT CURRENT', $scope.current);
        $rootScope.$broadcast('scroll.refreshComplete');
      }, function(error) {
        alert('Unable to get current conditions');
        console.error(error);
      });
    };
    $scope.refreshData = function() {
      Geo.getLocation().then(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        Geo.reverseGeocode(lat, lng).then(function(locString) {
          $scope.currentLocationString = locString;
        });
        _this.getCurrent(lat, lng);
      }, function(error) {
        alert('Unable to get current location: ' + error);
      });
    };

    $scope.refreshData();

  })

  .controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
      $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
  })


    .controller('CategoriesCtrl', function($scope) {

      $scope.text = 'toto';

      $scope.image = [{
        src: 'img/berangerphotos/img1.jpg',
      }];

      $scope.maList =[
        {cat:"img/berangerphotos/img.jpg", id: 1},
        {cat:'Yaoude', id: 2},
        {cat:'Bafoussan', id: 3},
        {cat:'Bertoua', id: 4},
        {cat:'Garoua', id: 5},
      ]

    })

    .controller('ListCtrl', function($scope) {
      $scope.cities = [{name:"Ebolowa SUD"},{name:"Ambam SUD"},{name:"Yaounde CENTRE"},{name:"Douala LIT"},{name:"Maroua EXT"},{name:"Batouri EST"},]

    })
    .controller('AboutCtrl', function($scope) {

  });
