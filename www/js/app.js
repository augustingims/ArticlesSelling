// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'services','ksSwiper','ngStorage'])

  .run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.localStorage.getItem("country")!= null && window.localStorage.getItem("city")!=null){
       $state.go("app.home");
    }else{
      $state.go("app.listpays")
    }
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: "Internet Disconnected",
          content: "The internet is disconnected on your device."
        }).then(function(result) {
              if(!result) {
                ionic.Platform.exitApp();
              }
            });
      }
    }
  });
    })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('app.filter', {
      url: '/filter',
      /*abstract: true,*/
      views: {
          'menuContent': {
            templateUrl: 'templates/filter.html',
            controller: 'filterCtrl'
          }
      }
    })
    .state('app.home', {
      url: '/home/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'mainhome'
        }
      }
    })
      .state('app.add', {
      url: '/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/add.html',
          controller: 'AddCtrl'
        }
      }
    })
      .state('app.favorite', {
        url: '/favorite',
        views: {
          'menuContent': {
            templateUrl: 'templates/favorite.html',
            controller: 'FavoriteCtrl'
          }
        }
      })
    .state('app.myAds', {
      url: '/myAds',
      views: {
        'menuContent': {
          templateUrl: 'templates/myAds.html',
          controller: 'myAdsCtrl'
        }
      }
    })

    .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('app.location', {
        url: '/location',
        views: {
          'menuContent': {
            templateUrl: 'templates/location.html',
            controller: 'LocationCtrl'
          }
        }
      })

      .state('app.signUp', {
        url: '/login/:signUp',
        views: {
          'menuContent': {
            templateUrl: 'templates/signUp.html',
            controller: 'SignUpCtrl'
          }
        }
      })
      .state('app.technology', {
        url: '/technology',
        views: {
          'menuContent': {
            templateUrl: 'templates/technology.html'
          }
        }
      }) .state('app.fashion', {
        url: '/fashion',
        views: {
          'menuContent': {
            templateUrl: 'templates/fashion.html'
          }
        }
      }).state('app.listpays', {
        url: '/listpays',
        views: {
          'menuContent': {
            templateUrl: 'templates/listpays.html',
            controller: 'ListPaysCtrl'
          }
        }
      }).state('app.listville', {
        url: '/listville/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/listville.html',
            controller: 'ListVilleCtrl'
          }
        }
      }) .state('app.hobbies', {
        url: '/hobbies',
        views: {
          'menuContent': {
            templateUrl: 'templates/hobbies.html'
          }
        }
      }) .state('app.real', {
        url: '/real',
        views: {
          'menuContent': {
            templateUrl: 'templates/real.html'
          }
        }
      }) .state('app.furniture', {
        url: '/furniture',
        views: {
          'menuContent': {
            templateUrl: 'templates/furniture.html'
          }
        }
      }) .state('app.farming', {
        url: '/farming',
        views: {
          'menuContent': {
            templateUrl: 'templates/farming.html'
          }
        }
      }) .state('app.services', {
        url: '/services',
        views: {
          'menuContent': {
            templateUrl: 'templates/services.html'
          }
        }
      }) .state('app.vehicules', {
        url: '/vehicules',
        views: {
          'menuContent': {
            templateUrl: 'templates/vehicules.html'
          }
        }
      })

      .state('app.categories', {
        url: '/categories',
        views: {
          'menuContent': {
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesCtrl'
          }
        }
      })

        .state('app.categoriesfashion', {
        url: '/categoriesfashion',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfashion.html',
            controller: 'CategoriesfashionCtrl'
          }
        }
      }).state('app.categoriesfarming', {
        url: '/categoriesfarming',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfarming.html',
            controller: 'CategoriesfarmingCtrl'
          }
        }
      }).state('app.categoriesfurniture', {
        url: '/categoriesfurniture',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfurniture.html',
            controller: 'CategoriesfurnitureCtrl'
          }
        }
      }).state('app.categorieshobbies', {
        url: '/categorieshobbies',
        views: {
          'menuContent': {
            templateUrl: 'templates/categorieshobbies.html',
            controller: 'CategorieshobbiesCtrl'
          }
        }
      }).state('app.categoriesreal', {
        url: '/categoriesreal',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesreal.html',
            controller: 'CategoriesrealCtrl'
          }
        }
      }).state('app.categoriesservices', {
        url: '/categoriesservices',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesservices.html',
            controller: 'CategoriesservicesCtrl'
          }
        }
      }).state('app.categoriesvehicules', {
        url: '/categoriesvehicules',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesvehicules.html',
            controller: 'CategoriesvehiculesCtrl'
          }
        }
      }).state('app.categoriesDetail', {
        url: '/categoriesDetail',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesDetail.html',
            controller: 'CategoriesCtrl'
          }
        }
      })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent' :{
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })
      .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent' :{
          templateUrl: 'templates/setting.html',
          controller: 'SettingCtrl'
        }
      }
    })
      .state('app.message', {
        url: '/message',
        views: {
          'menuContent' :{
            templateUrl: 'templates/message.html',
            controller: 'MessageCtrl'
          }
        }
      });



    $urlRouterProvider.otherwise('/app/home');
  });
