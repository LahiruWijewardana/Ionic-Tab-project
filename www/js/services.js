angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Im along the way',
    face: 'img/ben.png',
    letter: 'The content area in Ionic is the scrollable viewport of your app. While your headers and footers will be fixed to the top and bottom, respectively, the content area will fill the remaining available space.',
    date: '2016/10/21',
    time: '08.50'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    letter: 'I am using html variable (by binding to ion-item), to show css based html in ion-item as shown in picture. Whenever a full paragraph comes, i get this "...." and the row do not expand in height with respect to the content. Very similar code, i have already did in Simple Cordova app, by using dangerously HTML',
    date: '2016/12/15',
    time: '10.20'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    letter: '',
    date: '2016/09/16',
    time: '23.50'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    letter: '',
    date: '2016/08/21',
    time: '17.10'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    letter: '',
    date: '2016/10/21',
    time: '20.50'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
