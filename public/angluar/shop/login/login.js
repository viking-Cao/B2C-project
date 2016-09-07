angular.module("loginModule", [])
    .controller("loginCtrl", function($scope, $state) {
        $scope.user = {
            username: "zhangsan",
            password: "111111"
        };


        $scope.reg=function(){
            $state.go("reg")
        }
    })

    .directive("login", function($http, $state) {
        return {
            restrict: "AE",
            templateUrl: "./login/login.html",
            scope: {},
            link: function(scope) {
                scope.user = {
                    username: "",
                    password: ""
                };

                scope.login = function() {
                    $http.get("/users/login?username=" + scope.user.username + "&password=" + scope.user.password)
                        .success(function(data) {
                            if (eval(data)) {
                                $state.go("homepage")
                            }else{
                                alert("账号或者密码错误")
                            }
                        })
                };

                scope.reg = function() {
                    $state.go("reg")
                }

                scope.homepage = function(){
                    $state.go("homepage")
                }

            }
        }
    })