var app = angular.module('calculatorApp', []);
app.controller('calculatorCtrl', function ($scope) {
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.result = 0;
    $scope.selectedOperator = '+';
    $scope.calculate = function () {
        switch ($scope.selectedOperator) {
            case '+': $scope.result = $scope.num1 + $scope.num2;
                break;
            case '-': $scope.result = $scope.num1 - $scope.num2;
                break;
            case '*': $scope.result = $scope.num1 * $scope.num2;
                break;
            case '/':
                if ($scope.num2 !== 0) {
                    $scope.result = $scope.num1 / $scope.num2;
                }
                else {
                    $scope.result = 'Error:Division by zero';
                }
                break;
            default:
                $scope.result = 'invalid operator';
        }
    }
});