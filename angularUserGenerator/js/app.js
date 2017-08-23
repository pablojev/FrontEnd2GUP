var app = angular.module('webapp', []);

app.controller('mainController', function($scope, $http) {
    $scope.makeUser = function(name, lastname) {
        return { name: name, lastname: lastname }
    }
/*
1. Pobierzmy wszystkie zasoby z bazy danych - /db
    - zasoby, ktore zostaną zwrócone, przypiszmy do $scope.resources
*/
    $http({
        method: 'GET',
        url: 'http://localhost:3000/db'
    }).then(function(success) {
        $scope.resources = success.data;
        $scope.loadData();
    }, function(error) {
        
    }); 
    
    console.log($scope.resources);
    
    $scope.loadData = function(sex) {
        if(['male', 'female'].indexOf(sex.toLowerCase()) == -1) {
            // losujemy liczbe <0, 1>
            var r = Math.round(Math.random()); // <0, 1>
            // następnie przypisujemy do zmiennej var sex; wartość 'male' w przypadku 0, 'female' w przypadku 1
            sex = (r === 0) ? 'male' : 'female';
        }
        // teraz mamy poprawnie wylosowana lub przekazana plec
        // 
    }
    
    
    $scope.users = [];
    for(var i = 0; i < 10; i++) {
        $scope.users.push($scope.makeUser("Justyna", "Testowa"));
    }
});