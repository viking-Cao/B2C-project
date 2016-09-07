angular.module("homepageModule", [])
    .controller("homepageCtrl", function($scope, $state,$rootScope, $interval,$http,$stateParams) {
        $scope.imgSrc = "../images/1.jpg";
        $scope.imgsSrc = [{
            src: "../images/1.jpg",
            selected: true
        }, {
            src: "../images/2.jpg",
            selected: false
        }, {
            src: "../images/3.jpg",
            selected: false
        }, {
            src: "../images/4.jpg",
            selected: false
        }, {
            src: "../images/5.jpg",
            selected: false
        }]

        var _index = 0;
        $rootScope.timer = run();

        function run() {
            return $interval(function() {
                _index++;
                if (_index == $scope.imgsSrc.length) {
                    _index = 0;
                }
                $scope.imgSrc = $scope.imgsSrc[_index].src;

                $scope.imgsSrc.forEach(function(item, index) {
                    if (_index == index) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                })
            }, 2000);
        }

        $scope.start = function() {
            $rootScope.timer = run();
        };

        $scope.stop = function(index) {
            $interval.cancel($rootScope.timer);
            _index = index;
            $scope.imgSrc = $scope.imgsSrc[_index].src;

            $scope.imgsSrc.forEach(function(item, index) {
                if (_index == index) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            })
        }


        $scope.shopcar = function() {
            $state.go("shopcar")
        };

        $scope.login = function() {
            $state.go("login")
        };

        $scope.reg = function() {
            $state.go("reg")
        };

        $scope.findV=function(){
            $http.post("/emp/findV")
                .success(function(data){
                    $scope.pagemain = data;
                })
        }

        $scope.detail = function(_id) {
            $state.go("detail",{
                id:_id
            })
            $rootScope.id=_id;
        };


        $scope.findV();

    })

    //.directive("homepage", function($http, $state) {
    //    return {
    //        restrict: "AE",
    //        templateUrl: "./homepage/homepage.html",
    //        scope: {},
    //        //link: function(scope) {
    //        //    scope.user = {
    //        //        username: "zhangsan",
    //        //        password: "111111"
    //        //    };
    //        //    scope.login = function() {
    //        //        $http.get("/users/login?username=" + scope.user.username + "&password=" + scope.user.password)
    //        //            .success(function(data) {
    //        //                if (eval(data)) {
    //        //                    $state.go("info")
    //        //                }else{
    //        //                    alert("’À∫≈ªÚ’ﬂ√‹¬Î¥ÌŒÛ")
    //        //                }
    //        //            })
    //        //    };
    //        //    scope.reg = function() {
    //        //        $state.go("reg")
    //        //    }
    //        //}
    //    }
    //})