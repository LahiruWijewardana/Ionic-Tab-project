angular.module('starter.controllers', ['ionic', 'ionic.contrib.frost', 'angularHelpOverlay', 'angular-intro'])

.controller('DashCtrl', function($scope, ChatsInbox) {

  $scope.chats = ChatsInbox.all();
  $scope.remove = function(chat) {
    ChatsInbox.remove(chat);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ChatInboxDetailCtrl', function($scope, $stateParams, ChatsInbox, $location) {
  $scope.chat = ChatsInbox.get($stateParams.chatId);

  $scope.go = function ( path ) {
    $location.path(path);
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ComposeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

//intro-js controller

.controller('IntroCtrl', function ($scope) {

    

    $scope.CompletedEvent = function (scope) {
        console.log("Completed Event called");
    };

    $scope.ExitEvent = function (scope) {
        console.log("Exit Event called");
    };

    $scope.ChangeEvent = function (targetElement, scope) {
        console.log("Change Event called");
        console.log(targetElement);  //The target element
        console.log(this);  //The IntroJS object
    };

    $scope.BeforeChangeEvent = function (targetElement, scope) {
        console.log("Before Change Event called");
        console.log(targetElement);
    };

    $scope.AfterChangeEvent = function (targetElement, scope) {
        console.log("After Change Event called");
        console.log(targetElement);
    };

    $scope.IntroOptions = {
        steps:[
        {
            element: document.querySelector('#step1'),
            intro: "This is the first tooltip."
        },
        {
            element: document.querySelectorAll('#step2')[0],
            intro: "<strong>You</strong> can also <em>include</em> HTML",
            position: 'right'
        },
        {
            element: '#step3',
            intro: 'More features, more fun.',
            position: 'bottom'
        },
        {
            element: '#step4',
            intro: "Another step.",
            position: 'bottom'
        },
        {
            element: '#step5',
            intro: 'Get it, use it.'
        }
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };

    $scope.ShouldAutoStart = false;

})

//End of intro-js controller

//controls in overlay..........................
.controller('OverlayCtrl', function ($scope) {
  $scope.showHelp = true;

  $scope.onStart = function(event) {
    console.log('STARTING');
    return '1';
  };

  $scope.onStop = function(event) {
    console.log('ENDING');
    return '0';
  };

  $scope.toggleHelp = function() {
    $scope.showHelp = !$scope.showHelp;
    var picture = $('.jumbotron img');
    if (picture.is(':visible')) {
      return ($('body').data('chardinJs')).toggle();
    } else {
      return picture.animate({
        height: 250
      }, 600, function() {
        return ($('body').data('chardinJs')).toggle();
      });
    }
  };

});

/*
//js controller

.controller('ChardCtrl', function($scope){
  $scope.chardinStart = chardinJs('start');
});




.controller('NavCtrl',function($scope) {
  $scope.OpenNav = function(){
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.CloseNav = function(){
    document.getElementById("myNav").style.width = "0%";
  }


});

//Controller for loading overlay

.controller('LoadingCtrl', ['$scope', '$ionicLoading', function($scope, $ionicLoading) {

  // Trigger the loading indicator
  $scope.show = function() {

    // Show the loading overlay and text
    $scope.loading = $ionicLoading.show({

      // The text to display in the loading indicator
      content: 'Loading',

      // The animation to use
      animation: 'fade-in',

      // Will a dark overlay or backdrop cover the entire view
      showBackdrop: true,

      // The maximum width of the loading indicator
      // Text will be wrapped if longer than maxWidth
      maxWidth: 200,

      // The delay in showing the indicator
      showDelay: 50,

      duration: 1500
    });
  };

  // Hide the loading indicator
  $scope.hide = function(){
    $scope.loading.hide();
  };
}])

*/

//Controller for ionic modal.............

/*
.controller('AppCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/tab-dash.html', {
    scope: $scope,
    animation: 'slide-in'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})
*/

// controller for frost screen

/*
.controller('AppCtrl', function($scope, $rootScope, $compile) {
  $scope.pushFrost = function() {
    var el = angular.element(document.getElementById('myPane'));
    $rootScope.showOverlay = true;
  };
})

.controller('OverlayCtrl', function($scope, $rootScope, $compile) {
  $scope.items = [];
  for(var i = 0; i < 5; i++) {
    $scope.items.push({text: 'Whatever ' + (i+1) });
  }
 
  $scope.hideFrost = function() {
    $rootScope.showOverlay = false;
    var el = angular.element(document.getElementById('myPane'));
    
    // el.remove(); Removes the complete object
 
    // Another way, still not working
    // var safe = el.children();
    // el.empty();
    // el.html('<ion-pane ng-controller="UnderCtrl" id="myPane">');
    // el.children = safe;
    // el = $compile(el)($scope);
 
  };
});
*/