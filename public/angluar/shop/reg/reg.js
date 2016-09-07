angular.module("regModule", [])
    .controller("regCtrl", function($scope, $state) {
        $scope.user = {
            username: "lis",
            password: "11111",
            password1:"2222"
        };
        //在控制器中使用$scope
        $scope.reg = function() {
            $state.go("login");
        };
    })
    .directive("reg", function(ajax,$http,$state) {
        return {
            restrict: "AE",
            templateUrl: "./reg/reg.html",
            scope: {},
            link: function(scope) {

                scope.homepage = function(){
                    $state.go("homepage")
                }

                scope.isUse=function(str){
                    var
                        re = /^[a-zA-z]\w{3,15}$/;
                    if(re.test(str)){
                        console.log(str)
                        $http.post("/users/isUse",scope.user)
                            .success(function(data){
                                if(eval(data)){
                                    scope.user.regInfo = "您的用户名已经被使用！"
                                }else{
                                    scope.user.regInfo = "可以注册"
                                }
                            })
                    }else{
                        alert("字母开头，至少4位");
                    }
                };

                scope.checkPassword=function(a){
                    var
                        re = /^[a-zA-z]\w{3,15}$/;
                    if(re.test(a)){
                        return true;
                        console.log(re.test(a))
                    }else{
                        alert("字母开头，至少4位");
                    }
                }

                scope.passWord=function(one,two){
                    if( one !== two){
                        alert("与上一次输入的密码不相符")
                    }
                }

                scope.reg = function() {
                    $http.post("/users/reg", scope.user)
                        .success(function(data) {
                            //$("#regbutton").attr("disabled",false)
                            alert("注册成功")
                            $state.go("login")
                        })
                }
            }
        }
    })