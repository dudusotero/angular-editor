angular.module("angularEditor", ['textAngular'])
    .controller('AngularEditorController', ['$scope', 'textAngularManager', function ($scope, textAngularManager) {

        $scope.editor = 'Olá Aryel!';

    }]);