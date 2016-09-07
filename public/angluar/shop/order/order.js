angular.module("orderModule", [])
    .controller("orderCtrl", function($scope, $state,$stateParams) {

        $scope.homepage = function() {
            $state.go("homepage")
        };

        $scope.shopcar=function(){
            fetch("/users/isLogin", {
                credentials:'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${$stateParams.id}}`
            }).then(function(response) {
                return response.json();
            }).then((data) => {
                console.log(data)
                if( data == true){
                    $state.go("order")
                } else{
                    alert("请先登录！")
                    $state.go("login")
                }
            });
        }

        $scope.login= function () {
            $state.go("login")
        }

        //$scope.shopcar= function(){
        //    fetch("/users/findUsername", {
        //        credentials:'include',
        //        method: "POST",
        //        headers: {
        //            "Content-Type": "application/x-www-form-urlencoded"
        //        }
        //    }).then(function(response) {
        //        return response.json();
        //    }).then((data) => {
        //        $scope.$apply(function() {
        //            $scope.shopcarM = data;
        //        })
        //    });
        //};

         $scope.submitorder=function(){
            alert("提交成功")
            $state.go("homepage")
        }
        $scope.shopcar()

    })