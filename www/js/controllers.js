
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


      $scope.maLists =[
        {cat:"img/berangerphotos/img1.jpg",id:1},
        {cat:"img/berangerphotos/img2.jpg",id:2},
        {cat:"img/berangerphotos/img3.jpg",id:3},
        {cat:"img/berangerphotos/img4.jpg",id:4},
        {cat:"img/berangerphotos/img5.jpg",id:5},
        {cat:"img/berangerphotos/img6.jpg",id:6},
        {cat:"img/berangerphotos/img7.jpg",id:7},
        {cat:"img/berangerphotos/img8.jpg",id:8},
        {cat:"img/berangerphotos/img9.jpg",id:9},
        {cat:"img/berangerphotos/img10.jpg",id:10},
      ] ;


      $scope.slideImg=[{img:"img/berangerphotos/img1.jpg"},
                       {img:"img/slide/MaxPNG.png"},
                       {img:"img/slide/thinkcentreaio.jpg"},
                       {img:"img/berangerphotos/img3.jpg"}
                      ];


      $scope.image = [{
        src: 'img/berangerphotos/img1.jpg',
      }];



      $scope.selectedItemDetail=function(){

      $scope.selectedDetail=[ {cat:"img/berangerphotos/img.jpg", id: 1}];
      }

    })

    .controller('ListVilleCtrl', function($scope,$http,$stateParams) {
      $scope.listville = [];
      $scope.load = function() {
        $http.get('http://127.0.0.1:8080/api/listvillesforcountry/'+ $stateParams.id).success(function(response){
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
           $http.get('http://127.0.0.1:8080/api/pays/findAll').success(function(response){
             $scope.listpays = response;
           }).error(function(reason){
             console.log(reason);
           })
         };
      $scope.loadAll();
    })
    .controller('CategoriesfarmingCtrl', function($scope) {

        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:8},
            {cat:"img/berangerphotos/img2.jpg",id:10},
            {cat:"img/berangerphotos/img3.jpg",id:9},
            {cat:"img/berangerphotos/img4.jpg",id:4},
            {cat:"img/berangerphotos/img5.jpg",id:3},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:6},
            {cat:"img/berangerphotos/img9.jpg",id:5},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;

  })
    .controller('CategoriesfashionCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:9},
            {cat:"img/berangerphotos/img2.jpg",id:2},
            {cat:"img/berangerphotos/img3.jpg",id:7},
            {cat:"img/berangerphotos/img4.jpg",id:10},
            {cat:"img/berangerphotos/img5.jpg",id:5},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:8},
            {cat:"img/berangerphotos/img9.jpg",id:3},
            {cat:"img/berangerphotos/img10.jpg",id:4},
        ] ;

  })
    .controller('CategoriesfurnitureCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:5},
            {cat:"img/berangerphotos/img2.jpg",id:6},
            {cat:"img/berangerphotos/img3.jpg",id:3},
            {cat:"img/berangerphotos/img4.jpg",id:8},
            {cat:"img/berangerphotos/img5.jpg",id:2},
            {cat:"img/berangerphotos/img6.jpg",id:3},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:1},
            {cat:"img/berangerphotos/img9.jpg",id:9},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;

  })
    .controller('CategorieshobbiesCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:1},
            {cat:"img/berangerphotos/img2.jpg",id:10},
            {cat:"img/berangerphotos/img3.jpg",id:3},
            {cat:"img/berangerphotos/img4.jpg",id:9},
            {cat:"img/berangerphotos/img5.jpg",id:2},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:5},
            {cat:"img/berangerphotos/img8.jpg",id:8},
            {cat:"img/berangerphotos/img9.jpg",id:9},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;

  })
    .controller('CategoriesrealCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:6},
            {cat:"img/berangerphotos/img2.jpg",id:2},
            {cat:"img/berangerphotos/img3.jpg",id:7},
            {cat:"img/berangerphotos/img4.jpg",id:4},
            {cat:"img/berangerphotos/img5.jpg",id:5},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:8},
            {cat:"img/berangerphotos/img9.jpg",id:5},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;

  })
    .controller('CategoriesservicesCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:1},
            {cat:"img/berangerphotos/img2.jpg",id:9},
            {cat:"img/berangerphotos/img3.jpg",id:3},
            {cat:"img/berangerphotos/img4.jpg",id:7},
            {cat:"img/berangerphotos/img5.jpg",id:5},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:2},
            {cat:"img/berangerphotos/img9.jpg",id:9},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;
  })
    .controller('CategoriesvehiculesCtrl', function($scope) {
        $scope.maLists =[
            {cat:"img/berangerphotos/img1.jpg",id:4},
            {cat:"img/berangerphotos/img2.jpg",id:2},
            {cat:"img/berangerphotos/img3.jpg",id:10},
            {cat:"img/berangerphotos/img4.jpg",id:4},
            {cat:"img/berangerphotos/img5.jpg",id:8},
            {cat:"img/berangerphotos/img6.jpg",id:6},
            {cat:"img/berangerphotos/img7.jpg",id:7},
            {cat:"img/berangerphotos/img8.jpg",id:8},
            {cat:"img/berangerphotos/img9.jpg",id:9},
            {cat:"img/berangerphotos/img10.jpg",id:10},
        ] ;
  })
    .controller('FavoriteCtrl', function($scope) {

  })
    .controller('MessageCtrl', function($scope) {

  })
    .controller('AboutCtrl', function($scope) {

  })/*
    .controller('SideCtrl', function($scope, $ionicSideMenuDelegate, ionicMaterialInk, ionicMaterialMotion, $timeout) {
        $scope.maList =[];
        $scope.selectedItemId="";
        $scope.openMenu = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
        $timeout(function(){
          ionicMaterialInk.displayEffect();
          ionicMaterialMotion.ripple();
        },0);
  })*/;
