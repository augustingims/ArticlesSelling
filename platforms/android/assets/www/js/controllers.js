
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
  }).controller('CategoriesCtrl', function($scope,$ionicFilterBar,$rootScope,$ionicModal) {

        var filterBarInstance;
        $scope.showFilterBar = function () {

            filterBarInstance = $ionicFilterBar.show({
                //items: $scope.cats,
                update: function (filteredItems, filterText) {
                    console.log(filterText);
                    $scope.q = filterText;
                }
            });
        };
        $scope.nameCat = window.localStorage.getItem('nameCat');
        $scope.catName = window.localStorage.getItem('catName');
    })
  .controller('mainhome', function($scope,$http,$timeout,$ionicPlatform,$rootScope,$ionicModal,$ionicPopover,$translate,$location) {
    var _this = this;

      $scope.swiper = {};

        $scope.cat= [
            {idcat:1,namecat:'Automobiles'},
            {idcat:2,namecat:'Property'},
            {idcat:3,namecat:'Jobs'},
            {idcat:4,namecat:'Services'},
            {idcat:5,namecat:'Learning'},
            {idcat:6,namecat:'Pets'},
            {idcat:7,namecat:'For Sale'},
            {idcat:8,namecat:'Community'}
        ];

        var map = new Object();
        $scope.initMap = function(){
            map = new Object();
            map['Automobiles']={icon:"ion-model-s", couleur:"icon1"};
            map['Jobs']={icon:"ion-briefcase", couleur:"icon2"};
            map['Services']={icon:"ion-wrench", couleur:"icon3"};
            map['Learning']={icon:"ion-ios-book", couleur:"icon4"};
            map['For Sale']={icon:"ion-home", couleur:"icon5"};
            map['Community']={icon:"ion-ios-people", couleur:"icon6"};
            map['Pets']={icon:"ion-ios-paw", couleur:"icon7"};
            map['Property']={icon:"ion-android-plane", couleur:"icon8"};

        };
        $scope.initMap();
        $scope.getIcon = function(k){
            return "icon "+map[k].icon+" "+map[k].couleur;
        };
        $scope.catshow = function(url,id){
            window.localStorage.setItem('catName',url);
            $location.path("/app/"+url);
        };

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

        $scope.ChangeLanguage = function(lang){
            $translate.use(lang);
            $scope.closePopover();
        };

        $ionicPopover.fromTemplateUrl('templates/ChooseTranslate.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });

  })

    .controller('AddCtrl', function($scope,$ionicModal) {

        $scope.itemautomobiles = [
            {id:1, namecat:'Car Parts & Accessories'},
            {id:2, namecat:'Campervans & Caravans'},
            {id:3, namecat:'Motorbikes & Scooters'},
            {id:4, namecat:'Motorbike Parts & Accessories'},
            {id:5, namecat:'Vans, Trucks & Plant'},
            {id:6, namecat:'Wanted'}
        ];
        $scope.itemcommunity = [
            {id:59, namecat:'Announcements'},
            {id:60, namecat:'Car Pool - Bike Ride'},
            {id:61, namecat:'Charity - Donate - NGO'},
            {id:62, namecat:'Lost - Found'},
            {id:63, namecat:'Tender Notices'}
        ];
        $scope.itemjobs = [
            {id:15, namecat:'Full Time Jobs'},
            {id:16, namecat:'Internet Jobs'},
            {id:17, namecat:'Learn & Earn jobs'},
            {id:18, namecat:'Manual Labor Jobs'},
            {id:19, namecat:'Other Jobs'},
            {id:20, namecat:'OwnBusiness'}
        ];
        $scope.itemlearning = [
            {id:30, namecat:'Automotive Classes'},
            {id:31, namecat:'Computer Multimedia Classes'},
            {id:32, namecat:'Sports Classes'},
            {id:33, namecat:'Home Improvement Classes'},
            {id:34, namecat:'Language Classes'},
            {id:35, namecat:'Music Classes'},
            {id:36, namecat:'Personal Fitness'},
            {id:37, namecat:'Other Classes'}
        ];
        $scope.itemforsale = [
            {id:42, namecat:'Audio & Stereo'},
            {id:43, namecat:'Baby & Kids Stuff'},
            {id:44, namecat:'CDs, DVDs, Games & Books'},
            {id:45, namecat:'Clothes, Footwear & Accessories'},
            {id:46, namecat:'Computers & Software'},
            {id:47, namecat:'Home & Garden'},
            {id:48, namecat:'Music & Instruments'},
            {id:49, namecat:'Office Furniture & Equipment'},
            {id:50, namecat:'Phones, Mobile Phones & Telecoms'},
            {id:51, namecat:'Sports, Leisure & Travel'},
            {id:52, namecat:'Tickets'},
            {id:53, namecat:'TV, DVD & Cameras'},
            {id:54, namecat:'Video Games & Consoles'},
            {id:55, namecat:'Freebies'},
            {id:56, namecat:'Miscellaneous Goods'},
            {id:57, namecat:'Stuff Wanted'},
            {id:58, namecat:'Swap Shop'}
        ];
        $scope.itempets = [
            {id:38, namecat:'Pets for Sale'},
            {id:39, namecat:'Petsitters & Dogwalkers'},
            {id:40, namecat:'Equipment & Accessories'},
            {id:41, namecat:'Missing, Lost & Found'}
        ];
        $scope.itemproperty = [
            {id:7, namecat:'House for Rent'},
            {id:8, namecat:'House for Sale'},
            {id:9, namecat:'Apartments For Sale'},
            {id:10, namecat:'Apartments for Rent'},
            {id:11, namecat:'Farms-Ranches'},
            {id:12, namecat:'Land'},
            {id:13, namecat:'Vacation Rentals'},
            {id:14, namecat:'Commercial Building'}
        ];
        $scope.itemservices = [
            {id:21, namecat:'Building, Home & Removals'},
            {id:22, namecat:'Entertainment'},
            {id:23, namecat:'Health & Beauty'},
            {id:24, namecat:'Miscellaneous'},
            {id:25, namecat:'Property & Shipping'},
            {id:26, namecat:'Tax, Money & Visas'},
            {id:27, namecat:'Telecoms & Computers'},
            {id:28, namecat:'Travel Services & Tours'},
            {id:29, namecat:'Tuition & Lessons'}
        ];


        $scope.getSubCat = function(catname){
            window.localStorage.setItem('nameCat',catname);
        };
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

    })
    .controller('AdsCtrl', function($scope,$cordovaCamera,$rootScope,$ionicPopup) {
        $scope.images = [];
        $scope.ready = false;

        $rootScope.$watch('appReady.status', function() {
            console.log('watch fired '+$rootScope.appReady.status);
            if($rootScope.appReady.status) $scope.ready = true;
        });
        $scope.upload = function(){
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                targetWidth: 500,
                targetHeight: 500,
                saveToPhotoAlbum:false
            };
            $cordovaCamera.getPicture(options).then(function(imageData){
                $scope.images.push({image:imageData}).then(function () {
                    if($scope.images.length < 5){
                        alert("The Image Was Saved");
                    }else{
                        var max = $ionicPopup.alert({
                            title: 'Images',
                            template: 'The number of item is limit to 5',
                        });
                        max.then(function(res) {
                            console.log("Max images");
                        });
                    }
                });
            }, function(error){
                console.error("ERROR: " + error);
            });
        };
        $scope.selImages = function() {
            window.imagePicker.getPictures(
                function(results) {
                    for (var i = 0; i < results.length; i++) {
                        if($scope.images.length < 5){
                            $scope.images.push({image:results[i]});
                        }else{
                            var max = $ionicPopup.alert({
                                title: 'Images',
                                template: 'The number of item is limit to 5',
                            });
                            max.then(function(res) {
                                console.log("Max images");
                            });
                        }
                    }
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                }, function (error) {
                    console.log('Error: ' + error);
                }, {
                    maximumImagesCount: 5
                }
            );
        };
        $scope.showConfirm = function(index) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Image',
                template: 'Are you sure you want to remove this element?',
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                    $scope.images.splice(index, 1);
                } else {
                    console.log('You are not sure');
                }
            });
        };
    })
    .controller('DetailCtrl', function($scope,$ionicModal,IonicClosePopupService,$ionicPopup,$timeout) {
        $ionicModal.fromTemplateUrl('templates/email.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sendMail = modal;
        });
        $scope.openEmail = function() {
            $scope.sendMail.show();
        };
        $scope.hideEmail = function() {
            $scope.sendMail.hide();
        };

        $scope.call = function() {
            var popupCall = $ionicPopup.show({
                title: 'Choice Number',
                templateUrl:'templates/call.html',
                scope: $scope
            });
            IonicClosePopupService.register(popupCall);
            $timeout(function() {
                popupCall.close();
            }, 5000);
        };

        $scope.sms = function() {
            var popupSms =  $ionicPopup.show({
                title: 'Choice Number',
                templateUrl:'templates/sms.html',
                scope: $scope
            });
            IonicClosePopupService.register(popupSms);
            $timeout(function() {
                popupSms.close();
            }, 5000);
        };

        $scope.sendEmail= function() {
            if(window.plugins && window.plugins.emailComposer) {
             window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
             console.log("Response -> " + result);
             },
             $scope.subjet, // Subject
             $scope.bodyEmail,                      // Body
             ['augustingims@gmail.com'],    // To
             [$scope.fromCC],                    // CC
             null,                    // BCC
             false,                   // isHTML
             null,                    // Attachments
             null);                   // Attachment Data
             }
            $scope.hideEmail();
            $scope.subjet="";
            $scope.bodyEmail="";
            $scope.fromCC="";
        };
        $scope.phone = ['691542066','671323870'];
    })

    .controller('LoginCtrl', function($scope) {

    })
    .controller('SettingCtrl', function($scope,$ionicModal) {

        $scope.homecity= window.localStorage.getItem('city');

        $scope.homecountry= window.localStorage.getItem('country');

        //Creation des Modal
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
       // Ouverture des Modal
        $scope.openChange = function() {
            $scope.change.show();
        };
        $scope.openChangeville = function() {
            $scope.closeville.show();
        };
        $scope.openChangepays = function() {
            $scope.closepays.show();
        };
        // Click sur Item Du Model Country
        $scope.countrychange = function(country){
            window.localStorage.setItem("country", country);
            $scope.homecountry= window.localStorage.getItem('country');
            console.log($scope.homecountry);
            $scope.back();
        };
        // Click sur Item Du Model City
        $scope.citychange = function(ville){
            window.localStorage.setItem("city", ville);
            $scope.homecity= window.localStorage.getItem('city');
            console.log($scope.homecity);
            $scope.closecity();
        };
        //Fermerture des Modal
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
    .controller('LocationCtrl', function($scope) {

    })

    .controller('SignUpCtrl', function($scope) {

    })

    .controller('filterCtrl', function($scope) {

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

    });
