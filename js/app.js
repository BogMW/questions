/**
 * Created by Admin on 16.09.2016.
 */
(function() {
    var app = angular.module('questionBox', []);



    app.controller("QuestionController", function () {
       this.users = users;
        this.questions = questions;

        var limitStep = 1;
        this.limit = limitStep;
        this.incrementLimit = function () {
            this.limit += 1;
        };

    });


    app.controller("ProfileController", function () {
        this.users = users;
        var show = 1;
        this.showProfile = show; //Show popup or no
        var showProf = 0;
        this.userToShow = showProf; //Whos profile to show in popup

        this.showWho = function (userNumber) { //Change profile when clicked on another in profile
            this.userToShow = userNumber;
        };

        this.closeProfile = function (){  // Close popup, when close button is clicked
            this.showProfile = 0;
        };
    });








var questions = [
    {
      authorId: 1,
      text: 'What language to learn',
      activities: [
          {
            userId: 3,
            text: 'Learn Javascript!'
          },
          {
            userId: 2,
            text: 'Learn PHP!'
          },
          {
              userId: 4,
              text: 'Learn PHP!'
          },
          {
              userId: 5,
              text: 'Learn PHP!'
          },
          {
              userId: 6,
              text: 'Learn PHP!'
          }
      ],
        discussions: 5,
        peers: 2,
        conversations: 1
    },

    {
        authorId: 2,
        text: 'Is this work?',
        activities: [
            {
             userId: 1,
             text: 'Yes, it work good!'
            },
            {
             userId: 4,
             text: 'Nop :('
            }
        ],
        discussions: 3,
        peers: 4,
        conversations: 2
    },

    {
        authorId: 3,
        text: 'Its tea time?',
        activities: [
            {
                userId: 1,
                text: 'Yes, it work good!'
            },
            {
                userId: 2,
                text: 'Nop :('
            },
            {
                userId: 4,
                text: 'Nop :('
            },
            {
                userId: 5,
                text: 'Nop :('
            },
            {
                userId: 6,
                text: 'Nop :('
            },
            {
                userId: 1,
                text: 'Nop :('
            },
            {
                userId: 2,
                text: 'Nop :('
            }
        ],
        discussions: 1,
        peers: 1,
        conversations: 2
    }
];
var users = [
    {
        username: 'Peter',
        userId: '1',
        userPhoto: 'images/1.jpg',
        registrationDay: '29 of May, 1990',
        lastSeen: 'Saturday',
        memberFor: '5 month',
        activityLvl: '1'
    },
    {
        username: 'Bogdan',
        userId: '2',
        userPhoto: 'images/2.jpg',
        registrationDay: '28 of Match, 1989',
        lastSeen: 'Sunday',
        memberFor: '9 month',
        activityLvl: '3'
    },
    {
        username: 'Serhii',
        userId: '3',
        userPhoto: 'images/3.jpg',
        registrationDay: '02 of April, 2005',
        lastSeen: 'Monday',
        memberFor: '1 month',
        activityLvl: '1'
    },
    {
        username: 'Vlodko',
        userId: '4',
        userPhoto: 'images/4.jpg',
        registrationDay: '02 of April, 2005',
        lastSeen: 'Saturday',
        memberFor: '5 days',
        activityLvl: '2'
    },
    {
        username: 'Anna',
        userId: '5',
        userPhoto: 'images/5.jpg',
        registrationDay: '02 of April, 2005',
        lastSeen: 'Monday',
        memberFor: '1 days',
        activityLvl: '1'
    },
    {
        username: 'Viktor',
        userId: '6',
        userPhoto: 'images/6.jpg',
        registrationDay: '02 of April, 2005',
        lastSeen: 'Friday',
        memberFor: '5 years',
        activityLvl: '3'
    }
];
})();