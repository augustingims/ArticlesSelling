
angular.module('starter.controllers', [])


  .controller('starter', function($scope, ionicMaterialInk, ionicMaterialMotion, $ionicSideMenuDelegate, $timeout) {
     $scope.maList =[];
     $scope.selectedItemId="";
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

    .controller('LoginCtrl', function($scope) {

    })

    .controller('SignUpCtrl', function($scope) {

    })

    .controller('CategoriesCtrl', function($scope) {

      $scope.text = 'asus  i3';

      $scope.maLists =[
        {cat:"../img/berangerphotos/img1.jpg",id:1},
        {cat:"../img/berangerphotos/img2.jpg",id:2},
        {cat:"../img/berangerphotos/img3.jpg",id:3},
        {cat:"../img/berangerphotos/img4.jpg",id:4},
        {cat:"../img/berangerphotos/img5.jpg",id:5},
        {cat:"../img/berangerphotos/img6.jpg",id:6},
        {cat:"../img/berangerphotos/img7.jpg",id:7},
        {cat:"../img/berangerphotos/img8.jpg",id:8},
        {cat:"../img/berangerphotos/img9.jpg",id:9},
        {cat:"../img/berangerphotos/img10.jpg",id:10},
      ] ;

      $scope.image = [{
        src: 'img/berangerphotos/img1.jpg',
      }];



      $scope.selectedItemDetail=function(){

      $scope.selectedDetail=[ {cat:"img/berangerphotos/img.jpg", id: 1}];
      }

    })


    .controller('AboutCtrl', function($scope) {

  });
