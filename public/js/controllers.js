'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function($scope) {

    $scope.game = false;

    $scope.firstGame = false;

    $scope.teamOneScores = [];

    $scope.teamTwoScores = [];

    $scope.startGame = function() {

      $scope.game = true;
      $scope.firstGame = true;
      alert("First Game! First Game Bets Itself!");
    };

    $scope.submitScore = function() {

      if ($scope.firstGame == true) {

        if ((parseInt($scope.scoreOneAct) + parseInt($scope.scoreTwoAct)) != 13) {
          alert("Books need to equal 13");
        }

        $scope.teamOneScores.push({
          bid: $scope.scoreOneAct,
          act: $scope.scoreOneAct,
          score: calcBidScore($scope.scoreOneAct, $scope.scoreOneAct)
        });

        $scope.teamTwoScores.push({
          bid: $scope.scoreTwoAct,
          act: $scope.scoreTwoAct,
          score: calcBidScore($scope.scoreTwoAct, $scope.scoreTwoAct)
        });

        $scope.firstGame == false;

      } else {

        if (($scope.scoreOneBid + $scope.scoreTwoBid) < 10) {
          alert("Bid's need to equal 10");
        }

        if ((parseInt($scope.scoreOneAct) + parseInt($scope.scoreTwoAct)) != 13) {
          alert("Books need to equal 13");
        }

        $scope.teamOneScores.push({
          bid: $scope.scoreOneBid,
          act: $scope.scoreOneAct,
          score: calcBidScore($scope.scoreOneBid, $scope.scoreOneAct)
        });

        $scope.teamTwoScores.push({
          bid: $scope.scoreTwoBid,
          act: $scope.scoreTwoAct,
          score: calcBidScore($scope.scoreTwoBid, $scope.scoreTwoAct)
        });

        checkScore($scope.teamOneTotal(), $scope.teamTwoTotal());

      }

    };



    $scope.teamOneTotal = function() {

      var total = 0;

      if ($scope.teamOneScores.length == 0) {
        return 0;
      }

      for (var i = 0; i < $scope.teamOneScores.length; i++) {
        total += parseInt($scope.teamOneScores[i].score);
      }

      return total;


    };

    $scope.teamTwoTotal = function() {

      var total = 0;

      if ($scope.teamTwoScores.length == 0) {
        return 0;
      }

      for (var i = 0; i < $scope.teamTwoScores.length; i++) {
        total += $scope.teamTwoScores[i].score;
      }

      return total;


    };

    function calcBidScore(bid, act) {

      if ($scope.firstGame == true) {

        act = parseInt(act);
        return (act * 10);

      } else {

        bid = parseInt(bid);

        act = parseInt(act);

        if (bid == 10 && act == 10) {
          return 200;
        }

        if (bid < act) {
          // special rules
          return (bid * 10) + (act - bid);

        } else if (bid > act) {

          return -(bid * 10);

        } else {

          return (bid * 10);

        }

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


  });