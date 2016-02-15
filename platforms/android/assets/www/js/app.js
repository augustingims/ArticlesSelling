var translations = {
  "en": {
    "hp1": "My Location",
    "last": "Lastest Articles",
    "ht": "SellYourArticle",
    "ad": "Submit Ad",
    "cat":"Categories",
    "cat1":"Technology - Electronics",
    "cat2":"Fashion and Beauty",
    "cat3":"Home - Furniture - Garden",
    "cat4":"Hobbies - Art - Sports",
    "cat5":"Farming - Animals",
    "cat6":"Vehicles",
    "cat7":"Real Estate",
    "cat8":"Jobs and Services"
  },
  "fr": {
    "hp1": "Ma Localisation",
    "last": "Derniers Articles",
    "ht": "VendTonArticle",
    "ad": "Soumettez Annonce",
    "cat":"Catégories",
    "cat1":"Technologie - Électronique",
    "cat2":"Mode et Beauté",
    "cat3":"Maison - Meubles - Jardin",
    "cat4":"Passe-temps - Art - Sport",
    "cat5":"Agriculture - Animaux",
    "cat6":"Véhicules",
    "cat7":"Immobilier",
    "cat8":"Emplois et Services"
  }
};
angular.module('starter', ['ionic','ngCordova','ion-fab-button','jett.ionic.filter.bar','starter.controllers','ionic-material','ionic.closePopup','ksSwiper','ngStorage','pascalprecht.translate'])

  .run(function($ionicPlatform,$state,$rootScope) {
      $rootScope.appReady = {status:false};
  $ionicPlatform.ready(function() {

    console.log('ionic Ready');
    $rootScope.appReady.status = true;
    $rootScope.$apply();
    console.log('in app.js, appReady is '+$rootScope.appReady.status);

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

.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

      for(lang in translations){
        $translateProvider.translations(lang, translations[lang]);
      }

      $translateProvider.preferredLanguage('en');

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
      url: '/home',
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
          controller: 'AdsCtrl'
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

      .state('app.signUp', {
        url: '/login/:signUp',
        views: {
          'menuContent': {
            templateUrl: 'templates/signUp.html',
            controller: 'SignUpCtrl'
          }
        }
      })
      .state('app.property', {
        url: '/Property',
        views: {
          'menuContent': {
            templateUrl: 'templates/Property.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.automobiles', {
        url: '/Automobiles',
        views: {
          'menuContent': {
            templateUrl: 'templates/Automobiles.html',
           controller: 'AddCtrl'
          }
        }
      }).state('app.jobs', {
        url: '/Jobs',
        views: {
          'menuContent': {
            templateUrl: 'templates/Jobs.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.learning', {
        url: '/Learning',
        views: {
          'menuContent': {
            templateUrl: 'templates/Learning.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.pets', {
        url: '/Pets',
        views: {
          'menuContent': {
            templateUrl: 'templates/Pets.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.community', {
        url: '/Community',
        views: {
          'menuContent': {
            templateUrl: 'templates/Community.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.services', {
        url: '/Services',
        views: {
          'menuContent': {
            templateUrl: 'templates/Services.html',
            controller: 'AddCtrl'
          }
        }
      }) .state('app.forsale', {
        url: '/For Sale',
        views: {
          'menuContent': {
            templateUrl: 'templates/Forsale.html',
            controller: 'AddCtrl'
          }
        }
      })

      .state('app.categories', {
        url: '/categories',
        views: {
          'menuContent': {
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      })

        .state('app.categoriesfashion', {
        url: '/categoriesfashion',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfashion.html',
            controller: 'CategoriesfashionCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categoriesfarming', {
        url: '/categoriesfarming',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfarming.html',
            controller: 'CategoriesfarmingCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categoriesfurniture', {
        url: '/categoriesfurniture',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesfurniture.html',
            controller: 'CategoriesfurnitureCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categorieshobbies', {
        url: '/categorieshobbies',
        views: {
          'menuContent': {
            templateUrl: 'templates/categorieshobbies.html',
            controller: 'CategorieshobbiesCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categoriesreal', {
        url: '/categoriesreal',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesreal.html',
            controller: 'CategoriesrealCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categoriesservices', {
        url: '/categoriesservices',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesservices.html',
            controller: 'CategoriesservicesCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
          }
        }
      }).state('app.categoriesvehicules', {
        url: '/categoriesvehicules',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoriesvehicules.html',
            controller: 'CategoriesvehiculesCtrl'
          },
          'right-panel': {
            templateUrl: 'templates/filter.html',
            controller:'filterCtrl'
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
      }).state('app.category', {
        url: '/category/{id}',
        views: {
          'menuContent': {
            templateUrl: 'templates/category.html',
            controller: 'CategoriesCtrl'
          }
        }
      })
      .state('app.detail', {
        url: '/detail/{id}',
        views: {
          'menuContent': {
            templateUrl: 'templates/detail.html',
            controller: 'DetailCtrl'
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
      })
      .state('app.description', {
        url: '/description',
        views: {
          'menuContent': {
            templateUrl: 'templates/description.html',
            controller:'DescriptionCtrl'

          }
        }
      })
      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
            controller:'ContactCtrl'

          }
        }
      });
    $urlRouterProvider.otherwise('/app/home');
  });
