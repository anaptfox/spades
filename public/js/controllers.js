'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function ($scope) {

    $scope.game = false;

    $scope.firstHandGame = false;

    $scope.teamOneScores = [];

    $scope.teamTwoScores = [];

    $scope.startGame = function () {

      $scope.game = true;
      $scope.firstHandGame = true;
      alert("First hand bets itself!");

    };

    $scope.submitScore = function () {

      if ($scope.firstHandGame = true) {

        if ((parseInt($scope.scoreOneBooks) + parseInt($scope.scoreTwoBooks)) != 13) {
          alert("Books need to equal 13");
        }

        $scope.teamOneScores.push({
          books: $scope.scoreOneBooks,
          // TODO: first hand property
          score: firstHand($scope.scoreOneBooks, $scope.scoreOneBooks)
        });

        $scope.teamTwoScores.push({
          books: $scope.scoreTwoBooks,
          score: firstHand($scope.scoreTwoBooks, $scope.scoreTwoBooks)
        });

        $scope.firstHandGame = false;

      } else {

        if (($scope.scoreOneBid + $scope.scoreTwoBid) < 10) {
          alert("Bid's need to equal 10");
        }

        if ((parseInt($scope.scoreOneBooks) + parseInt($scope.scoreTwoBooks)) != 13) {
          alert("Books need to equal 13");
        }

        $scope.teamOneScores.push({
          bid: $scope.scoreOneBid,
          books: $scope.scoreOneBooks,
          score: calcBidScore($scope.scoreOneBid, $scope.scoreOneBooks)
        });

        $scope.teamTwoScores.push({
          bid: $scope.scoreTwoBid,
          books: $scope.scoreTwoBooks,
          score: calcBidScore($scope.scoreTwoBid, $scope.scoreTwoBooks)
        });

        checkScore($scope.teamOneTotal(), $scope.teamTwoTotal());

      }

    };


    $scope.teamOneTotal = function () {

      var total = 0;

      if ($scope.teamOneScores.length == 0) {
        return 0;
      }

      for (var i = 0; i < $scope.teamOneScores.length; i++) {
        total += parseInt($scope.teamOneScores[i].score);
      }

      return total;


    };

    $scope.teamTwoTotal = function () {

      var total = 0;

      if ($scope.teamTwoScores.length == 0) {
        return 0;
      }

      for (var i = 0; i < $scope.teamTwoScores.length; i++) {
        total += $scope.teamTwoScores[i].score;
      }

      return total;


    };

    function calcBidScore(bid, books) {

      bid = parseInt(bid);

      books = parseInt(books);

      if (bid == 10 && books == 10) {
        return 200;
      }

      if (bid < books) {
        // special rules
        return (bid * 10) + (books - bid);

      } else if (bid > books) {

        return -(bid * 10);

      } else {

        return (bid * 10);

      }

    };

    function checkScore(one, two) {

      if ((one >= 500) || (two >= 500)) {

        if (one > two) {
          alert("One Wins");
        } else {
          alert("Two Wins");
        }

      }

    }

    function firstHand(books) {

      var score = parseInt(books);
      return score * 10;

    }

  });