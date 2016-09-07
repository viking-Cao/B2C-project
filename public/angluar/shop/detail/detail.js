angular.module("detailModule", [])
    .controller("detailCtrl", function($scope, $state, $rootScope,$http,$stateParams) {
        function findVid(){
            $http.post("/emp/findVid",{id: $stateParams.id})
                .success(function(data){
                    console.log(data)
                    $scope.detailM = data;
                })
             }


        $scope.logining =function(_id){
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
                    fetch("/users/useritem", {
                        credentials:'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `id=${$scope.detailM[0].id}&name=${$scope.detailM[0].name}&price=${$scope.detailM[0].price}&color=${$scope.detailM[0].color}&img=${$scope.detailM[0].img400s1}`
                    }).then(function(response) {
                        return response.json();
                    }).then(function(data) {
                        console.log(data)
                        $state.go("shopcar",{
                            id:_id
                        })
                        $rootScope.id=_id;
                    });
                } else{
                    alert("请先登录！")
                    $state.go("login")
                }
            });
        }

        findVid()

})