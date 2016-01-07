
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
  .controller('mainhome', function($scope, $http,$timeout,$ionicPlatform,$rootScope,$ionicModal) {
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
        $ionicModal.fromTemplateUrl('templates/listville.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.city = modal;
        });
        $ionicModal.fromTemplateUrl('templates/listvillechange.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.closeville = modal;
        });
        $ionicModal.fromTemplateUrl('templates/listpayschange.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.closepays = modal;
        });
        $ionicModal.fromTemplateUrl('templates/location.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.change = modal;
        });

        $ionicModal.fromTemplateUrl('templates/listpays.html', function(modal) {
            $scope.modal = modal;
            console.log(window.localStorage.getItem('country'));
            if (window.localStorage.getItem("country")!= null && window.localStorage.getItem("city")!=null) {
                $scope.modal.hide();
                $scope.homecity= window.localStorage.getItem('city');
                $scope.homecountry= window.localStorage.getItem('country');
            } else {
                $scope.openModal();
            }
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up',
            backdropClickToClose: false
        });

        $scope.openModal = function() {
            console.log('Opening Country');
            $scope.modal.show();
        };
        $scope.openChange = function() {
            console.log('Opening Change location');
            $scope.change.show();
        };
        $scope.openChangeville = function() {
            console.log('Opening Change location');
            $scope.closeville.show();
        };
        $scope.openChangepays = function() {
            console.log('Opening Change location');
            $scope.closepays.show();
        };
        $scope.openCity = function() {
            console.log('Opening City');
            console.log(window.localStorage.getItem('city'));
            $scope.city.show();
        };
        $scope.country = function(country){
            window.localStorage.setItem("country", country);
            $scope.homecountry= window.localStorage.getItem('country');
            console.log($scope.homecountry);
            $scope.openCity();
        };
        $scope.countrychange = function(country){
            window.localStorage.setItem("country", country);
            $scope.homecountry= window.localStorage.getItem('country');
            console.log($scope.homecountry);
            $scope.closecountrychange();
        };
        $scope.citychange = function(ville){
            window.localStorage.setItem("city", ville);
            $scope.homecity= window.localStorage.getItem('city');
            console.log($scope.homecity);
            $scope.closecitychange();
        };
        $scope.selectcity = function(ville){
            window.localStorage.setItem("city", ville);
            $scope.homecity= window.localStorage.getItem('city');
            console.log($scope.homecity);
            $scope.closeModal();
        };
        $scope.closeModal = function() {
            $scope.city.hide();
            $scope.modal.hide();
        };
        $scope.closecountrychange = function() {
            $scope.closepays.hide();
        };
        $scope.closecitychange = function() {
            $scope.closeville.hide();
        };
        $scope.close = function() {
            $scope.city.hide();
        };
        $scope.closecity = function() {
            $scope.closeville.hide();
        };
        $scope.back = function() {
            $scope.closepays.hide();
        };
        $scope.closechange = function() {
            $scope.change.hide();
        };
        $scope.listpays = [{namePays:'Cameroun'},
            {namePays:'Algerie'},
            {namePays:'Nigeria'},
            {namePays:'Ghana'},
            {namePays:'Ethiopie'},
            {namePays:'Niger'},
            {namePays:'Mali'}];
        $scope.listville = [{nameVille:'Douala'},
            {nameVille:'Yaoundé'},
            {nameVille:'buea'},
            {nameVille:'mandjo'},
            {nameVille:'couba'},
            {nameVille:'conssamba'},
            {nameVille:'bertoua'}];

  })

    .controller('AddCtrl', function($scope,$ionicModal) {

        $scope.itemservice = ['Services','Classes courses','Offered Jobs'];
        $scope.itemreal = ['Lands','Houses - Apartments for sale','Houses - Apartments for rent','Office - Shops - Commercial'];
        $scope.itemhobbies = ['Musical instruments','Books - CDs - DVD','Sporting goods - Bicycles','Toys and games','Art - Collectibles'];
        $scope.itemvehicules = ['Cars','MotoCycles','Cars Accessories','Trucks-Commercial-Agricultural'];
        $scope.itemfarming = ['Live stock Animals','Agriculture - Food','Machinery -Tools'];
        $scope.itemfashion = ['Clothing and Shoes','Babies and Kids','Watches - Jewelry - Accessoires','Health - Beauty'];
        $scope.itemfurniture = ['Furniture - Decor - Garden','Home Appliances','Other Home - Furniture - Garden'];
        $scope.itemtechnology = ['Mobile Phones - Tablet - Accessories','Computers - Laptops','Tv - Audio - Video','Other Electronics','Video Games - Consoles','Camera and Accessories'];

        $ionicModal.fromTemplateUrl('templates/list_cat.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.listcat = modal;
        });
        $scope.openListcategorie = function() {
            $scope.listcat.show();
        };
        $scope.closeListcat = function() {
            $scope.listcat.hide();
        };
        //---------------------------------------------------------------
        $ionicModal.fromTemplateUrl('templates/modal/technology.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.moda = modal;
        });


        $ionicModal.fromTemplateUrl('templates/modal/furniture.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.furniture = modal;
        });

        $ionicModal.fromTemplateUrl('templates/modal/hobbies.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.hobbies = modal;
        });

        $ionicModal.fromTemplateUrl('templates/modal/farming.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.farming = modal;
        });

        $ionicModal.fromTemplateUrl('templates/modal/vehicules.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.vehicules = modal;
        });

        $ionicModal.fromTemplateUrl('templates/modal/real.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.real = modal;
        });

        $ionicModal.fromTemplateUrl('templates/modal/fashion.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.fashion = modal;
        });
        $ionicModal.fromTemplateUrl('templates/modal/services.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.services = modal;
        });


//---------------------------------------------------------
        $scope.openListtechnology = function() {
            $scope.moda.show();
        };
        $scope.openReal = function() {
            $scope.real.show();
        };

        $scope.openFarming = function() {
            $scope.farming.show();
        };
        $scope.openHobbies = function() {
            $scope.hobbies.show();
        };
        $scope.openFashion = function() {
            $scope.fashion.show();
        };
        $scope.openFurniture = function() {
            $scope.furniture.show();
        };
        $scope.openVehicules = function() {
            $scope.vehicules.show();
        };
        $scope.openServices = function() {
            $scope.services.show();
        };


//-------------------------------------------


        $scope.closefashion = function() {
            $scope.fashion.hide();

        };


        $scope.closeservices = function() {
            $scope.services.hide();

        };

        $scope.closefurniture = function() {
            $scope.furniture.hide();

        };

        $scope.closehobbies = function() {
            $scope.hobbies.hide();

        };

        $scope.closefarming = function() {
            $scope.farming.hide();

        };

        $scope.closereal = function() {
            $scope.real.hide();

        };


        $scope.closevehicules = function() {
            $scope.vehicules.hide();

        };

        $scope.closetechnology = function() {
            $scope.moda.hide();
        }

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

    /**.controller('ListVilleCtrl', function($scope,$http,$stateParams,$ionicLoading) {
      $scope.listville = [];
      window.localStorage.setItem("country", $stateParams.id);
      $scope.show = function() {
        $ionicLoading.show({
          template: '<ion-spinner ion="android"></ion-spinner>'
        });
      };
      $scope.hide = function(){
        $ionicLoading.hide();
      };

      $scope.load = function() {
        console.log(localStorage.getItem("country"));
        $scope.show($ionicLoading);
        $http.get('http://127.0.0.1:8080/api/listvillesforcountry/'+ $stateParams.id).success(function(response){
          $scope.listville = response;
          $scope.hide($ionicLoading);
        }).error(function(reason){
          console.log(reason);
        });
      };
      $scope.load();

    })
    .controller('ListPaysCtrl', function($scope,$http,$ionicLoading) {
      $scope.listpays = [];
      $scope.show = function() {
        $ionicLoading.show({
          template: '<ion-spinner ion="android"></ion-spinner>'
        });
      };
      $scope.hide = function(){
        $ionicLoading.hide();
      };
         $scope.loadAll = function(){
           $scope.show($ionicLoading);
           $http.get('http://127.0.0.1:8080/api/pays/findAll').success(function(response){
             $scope.hide($ionicLoading);
             $scope.listpays = response;
           }).error(function(reason){
             console.log(reason);
           })
         };
      $scope.loadAll();
    })*/
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

  })
    .controller('DescriptionCtrl', function($scope){

    })

    .controller('ContactCtrl', function($scope){

        $scope.submit = function(email) {

            alert("adresse pas correcte");

        }

    })
    /*
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
