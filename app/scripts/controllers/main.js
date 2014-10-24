'use strict';

/**
 * @ngdoc function
 * @name imgurrandomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imgurrandomApp
 */

var subreddit = 'cats';
var imageArray;
function ajaxCall(page) {
	$.ajax({
	authorization: '8c4fdcec50df594',
	type: 'GET',
	dataType: 'json',
	headers: {
		Authorization: 'Client-ID ' + '8c4fdcec50df594',
		Accept: 'application/json'
	},
	url: 'https://api.imgur.com/3/gallery/r/' + subreddit + '/top/page/' + page + '.json',
	data: {

	},
	success: function(json){
		imageArray = [];
		for (var i = 0; i < 60; i++) {		
			imageArray[i] = json.data[i].link;
			$('#imageContainer').append('<img style = "margin: 5px; height: auto; width: 200px" id = "galleryImages" src = ' + imageArray[i] + '>');
		}
	},
	error: function(XMLHttpRequest, testStatus, errorThrown) {
				alert('error');
			}
	});
};

ajaxCall(1);


angular.module('imgurRandomApp')
	.controller('MainCtrl',['$scope', function ($scope) {
		$scope.enterSubreddit = function () {
			$scope.subreddit = '';
			console.log('test');
		};
		$scope.loadMore = function () {
			console.log('testing');
			ajaxCall(2);

		};
	}]);