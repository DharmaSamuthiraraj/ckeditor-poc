<!DOCTYPE html>
<html ng-app='ckapp'>
 <head>
 	<title>CKEditor POC</title>

 	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
 	<script type="text/javascript" src="bower_components/jquery/jquery.min.js"></script>
 	<script type="text/javascript" src="bower_components/angular-ckeditor/angular-ckeditor.min.js"></script>
 	<script type="text/javascript" src="js/ckeditor/ckeditor.js"></script>
 	<script type="text/javascript" src="js/CkeditorCtrl.js"></script>
 	<link rel="stylesheet" type="text/css" href="css/style.css"> 	
 </head>
 <body> 	
 	<div class="main-container" ng-controller="CkeditorCtrl">
 		<h1>CK Editor POC</h1> 		
 		<section class="text-editor" ng-hide="showContent">
 			<div ckeditor="editorConfig" ng-model="discount.description" ready="onReady()"></div>	
 		</section>

 		<section class="text-view label_md" ng-show="showContent">
 				<p ng-bind-html="discount.description | toTrustedHTML"></p>	
 		</section>

 		<div class="footer"> 			
			<button type="button" class="button1" ng-click="submit()" ng-hide="showContent">Submit</button>	
			<button type="button" class="button1" ng-click="edit()" ng-show="showContent">Edit</button>		
		</div> 	
	</div>
</body>
</html>
