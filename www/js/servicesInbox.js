angular.module('starter.servicesInbox', [])

.factory('ChatsInbox', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    letter: 'I am using html variable (by binding to ion-item), to show css based html in ion-item as shown in picture. Whenever a full paragraph comes, i get this "...." and the row do not expand in height with respect to the content. Very similar code, i have already did in Simple Cordova app, by using dangerously HTML',
    date: '2016/10/21',
    time: '20.50'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    letter: 'I have everything working, except for the right-aligned number. The numbers are actually a ul. This is by design. They will be font icons that are colored differently. For now, Im just trying to get the positioning to work. Currently, Im trying the following:',
    date: '2016/11/21',
    time: '20.48'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    letter: '',
    date: '2016/10/10',
    time: '09.21'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    letter: '',
    date: '2016/11/12',
    time: '11.42'
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
