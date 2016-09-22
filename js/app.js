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
        var showLoadMore =1;
        this.isShown = showLoadMore;
        this.incrementLimit = function () {
            this.limit += 5;
            if (this.limit >= questions.length) {
                this.isShown = 0;
            }
        };
        this.recentActive = 'active-sort';
        this.hotActive = '';

        this.sortBy = 'votes';
        this.setSort = function (option) {
            if(option == 'date') {
                this.recentActive = 'active-sort';
                this.hotActive = '';
            } else {
                this.recentActive = '';
                this.hotActive = 'active-sort';
            }
            this.sortBy = option;
            console.log(this.sortBy);
        };

        var single = 1;
        this.showSingle = single;

        this.overflow = 'overflowYes';

        this.hideActivities = function (count) {
         return (count > 5)
        }
        this.setActivitiesLimit = function (count) {
            if (count > 5) {
                return 4;
            } else {
                return 5;
            }
        }
            });


    app.controller("ProfileController", function () {
        this.users = users;
        this.questions = questions;
        var show = 0;
        this.showProfile = show; //Show popup or no
        var showProf = 0;
        this.userToShow = showProf; //Whos profile to show in popup
        var showQuest = 0;
        this.showQuestion = 0;
        this.showAllQuestions = 1;
        this.questionToShow = showQuest; //What question to show


        this.showWho = function (userNumber) { //Change profile when clicked on another in profile
            this.userToShow = userNumber;
            this.showProfile = 1;
        };

        this.showWhat = function (questionNumber) { //Change profile when clicked on another in profile
            this.questionToShow = questionNumber;
            this.showQuestion = 1;
            this.showAllQuestions = 0;

        };

        this.closeProfile = function (){  // Close popup, when close button is clicked
            this.showProfile = 0;
        };

        this.backToQuestions = function () {
            this.showQuestion = 0;
            this.showAllQuestions = 1;
        };

        this.questionVoteUp = function (questionId) {
            questions[questionId].votes += 1;

        };
        this.questionVoteDown = function (questionId) {
            questions[questionId].votes -= 1;

        };

        this.answerVoteUp = function (questionId, answerId) {
            questions[questionId].activities[answerId].votes += 1;
        };
        this.answerVoteDown = function (questionId, answerId) {
            questions[questionId].activities[answerId].votes -= 1;
        };

        this.commentVoteUp = function (questionId, answerId, commentId) {
            questions[questionId].activities[answerId].comments[commentId].votes += 1;
        };
        this.commentVoteDown = function (questionId, answerId, commentId) {
            questions[questionId].activities[answerId].comments[commentId].votes -= 1;
        };





    });








var questions = [
    {
      authorId: 1,
      text: 'What language to learn',
      detailed: 'What language to learn, to be successful developer ?',
      votes: 0,
      date: '2012-01-26',
      activities: [
          {
            userId: 2,
            text: 'Learn Javascript!',
            votes: 69,
            comments: [
                {
                    authorId: 3,
                    text:  'No no no, learn Java',
                    votes: 1
                },
                {
                    authorId: 5,
                    text:  'Noooooo, learn PHP',
                    votes: 0
                }
            ]
          },
          {
            userId: 3,
            text: 'Learn Java!',
            votes: 0
          },
          {
              userId: 4,
              text: 'Learn PHP!',
              votes: 0
          },
          {
              userId: 5,
              text: 'Learn PHP!',
              votes: 0
          },
          {
              userId: 6,
              text: 'Learn PHP!',
              votes: 0
          },
          {
              userId: 6,
              text: 'Learn PHP!',
              votes: 0
          },
          {
              userId: 6,
              text: 'Learn PHP!',
              votes: 0
          }
      ],
        discussions: 5,
        peers: 2,
        conversations: 1
    },

    {
        authorId: 2,
        text: 'Is this work?',
        detailed: 'Is this SPA with angular is work good? If not, say me!',
        votes: 2,
        date: '2011-01-26',
        activities: [
            {
             userId: 1,
             text: 'Yes, it work good!',
                votes: 0
            },
            {
             userId: 4,
             text: 'Nop :(',
                votes: 0
            },
            {
                userId: 6,
                text: 'Learn PHP!',
                votes: 0
            },
            {
                userId: 6,
                text: 'Learn PHP!',
                votes: 0
            },
            {
                userId: 6,
                text: 'Learn PHP!',
                votes: 0
            }
        ],
        discussions: 3,
        peers: 4,
        conversations: 2
    },

    {
        authorId: 3,
        text: 'Its tea time?',
        detailed: 'Its tea time, or no? Nop, its time for beer :)',
        votes: 99,
        date: '2013-01-26',
        activities: [
            {
                userId: 6,
                text: 'Coffee!',
                votes: 5
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