angular.module("shopcarModule", [])
    .controller("shopcarCtrl", function($scope, $state,$stateParams) {

        $scope.homepage = function() {
            $state.go("homepage")
        };

        $scope.order=function(){
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

        $scope.del=function(id){
            fetch("/emp/delEmp", {
                credentials:'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${id}`
            }).then(function(response) {
                return response.json();
            }).then((data) => {
                if(data == true){
                    $scope.shopcar()
                }
            });
        };

        $scope.shopcar= function(){
            fetch("/users/findUsername", {
                credentials:'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function(response) {
                return response.json();
            }).then((data) => {
                $scope.$apply(function() {
                    $scope.shopcarM = data;
                })
            });
        };
        $scope.shopcar();

        $scope.count=1;
        $scope.add=function(){
            $scope.count++
        }
        $scope.sub=function(){
            $scope.count--
        }

        $scope.addnumber=function(){
            $scope.val=1;
            //var i =$scope.val ;
            $scope.val -- ;

        }

        var p=$scope.val;
        $scope.subnumber=function(){
            p--;
            $scope.val = p;
        }

    });
