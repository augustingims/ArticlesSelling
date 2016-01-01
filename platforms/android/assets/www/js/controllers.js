
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
  .controller('mainhome', function($scope, $http,$timeout,$ionicPlatform,$rootScope,Weather,Geo,$stateParams) {
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

      window.localStorage.setItem("city", $stateParams.id);
      console.log(localStorage.getItem("city"));

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

    .controller('AddCtrl', function($scope) {

    })
    .controller('myAdsCtrl', function($scope) {

    })

    .controller('LoginCtrl', function($scope) {

    })
    .controller('SettingCtrl', function($scope) {

    })
    .controller('LocationCtrl', function($scope) {

    })

    .controller('SignUpCtrl', function($scope) {

    })

    .controller('filterCtrl', function($scope) {

    })

    .controller('CategoriesCtrl', function($scope) {

      $scope.text = 'asus  i3';

      $scope.slideImg=[{img:"img/berangerphotos/img1.jpg"},
                       {img:"img/slide/MaxPNG.png"},
                       {img:"img/slide/thinkcentreaio.jpg"},
                       {img:"img/berangerphotos/img3.jpg"}
                      ];

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

      $scope.selectedItemDetail=function(){

      $scope.selectedDetail=[ {cat:"img/berangerphotos/img.jpg", id: 1}];
      }

    })

    .controller('ListVilleCtrl', function($scope,$http,$stateParams) {
      $scope.listville = [];
      window.localStorage.setItem("country", $stateParams.id);

      $scope.load = function() {
        console.log(localStorage.getItem("country"));
        $http.get('http://10.0.2.2:8080/api/listvillesforcountry/'+ $stateParams.id).success(function(response){
          $scope.listville = response;
        }).error(function(reason){
          console.log(reason);
        });
      };
      $scope.load();

    })
    .controller('ListPaysCtrl', function($scope,$http) {
         $scope.listpays = [];
         $scope.loadAll = function(){
           $http.get('http://10.0.2.2:8080/api/pays/findAll').success(function(response){
             $scope.listpays = response;
           }).error(function(reason){
             console.log(reason);
           })
         };
      $scope.loadAll();
    })
    .controller('CategoriesfarmingCtrl', function($scope) {

  })
    .controller('CategoriesfashionCtrl', function($scope) {

  })
    .controller('CategoriesfurnitureCtrl', function($scope) {

  })
    .controller('CategorieshobbiesCtrl', function($scope) {

  })
    .controller('CategoriesrealCtrl', function($scope) {

  })
    .controller('CategoriesservicesCtrl', function($scope) {

  })
    .controller('CategoriesvehiculesCtrl', function($scope) {

  })
    .controller('FavoriteCtrl', function($scope) {

  })
    .controller('MessageCtrl', function($scope) {

  })
    .controller('AboutCtrl', function($scope) {

  });
