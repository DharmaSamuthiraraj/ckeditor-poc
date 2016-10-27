var ckapp = angular.module('ckapp', ['ckeditor']);

ckapp.controller('CkeditorCtrl', ['$scope', ckeditorController]);

function ckeditorController ($scope) {  
    $scope.discount = {
  		description : ''
    };
    $scope.showContent = false;	

    // Editor options.
    $scope.editorConfig = {
	    language: 'en',
	    allowedContent: true,
	    entities: false,
	    toolbar: [
		  { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline']},
		  { name: 'paragraph', items: ['NumberedList', 'BulletedList']},
		  { name: 'colors', items: ['TextColor'] }
		],
		height: 280,
		resize_enabled:false,
		removePlugins:'elementspath'
    };

    // Called when the editor is completely ready.
    $scope.onReady = function () {
     	// ...
    };

    $scope.submit = function() {
  		$scope.showContent = true;
  		$scope.discount.description = parseHTML($scope.discount.description);
    }

    $scope.edit = function() {
  		$scope.showContent = false;
    }

  	function parseHTML(text){
        var x = $('<div/>').html(text);
        var isFormatted = (x.children().length > 0);
        if(isFormatted){
            htmlS = x[0].innerHTML;
        }else{
            htmlS = x.text()
        }
        return htmlS;
    }
}

ckapp.filter('toTrustedHTML', ['$sce', function($sce){

    return function(value, type) {
        return $sce.trustAsHtml(value);
    }
}]);