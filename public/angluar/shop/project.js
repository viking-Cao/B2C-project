angular.module("myApp", ["ui.router","loginModule","regModule","homepageModule","orderModule","shopcarModule","detailModule"])
    .run(function($rootScope, $interval) {
        $rootScope.$on("$stateChangeStart", function() {
            if ($rootScope.timer) {
                $interval.cancel($rootScope.timer);
                $rootScope.timer = undefined;
            }
        })
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider.state("login", {
            url: "/login",
            template: "<login></login>",
            //templateUrl: "./login/login.html",
            //controller: "loginCtrl"
        }).state("reg", {
            url: "/reg",
            template: "<reg></reg>"
            //templateUrl: "./reg/reg.html",
            //controller: "regCtrl"
        }).state("shopcar",{
            url:"/shopcar/:id",
            templateUrl: "./shopcar/shopcar.html",
            controller:"shopcarCtrl"
        }).state("detail",{
            url:"/detail/:id",
            templateUrl: "./detail/detail.html",
            controller:"detailCtrl"
        }).state("homepage",{
            url:"/homepage",
            //template:"<homepage></homepage>>"
            templateUrl: "./homepage/homepage.html",
            controller: "homepageCtrl"
        }).state("order",{
            url:"/order",
            templateUrl: "./order/order.html",
            controller:"orderCtrl"
        })
    })

.factory('ajax', function($http) {
    return function(config) {
        if (config.type == "get") {
            var params = "?"
            for (var attr in config.data) {
                params += attr + "=" + config.data[attr] + "&"
            }
            $http.get(config.url + params).success(function(data) {
                config.success(data);
            })
        } else {
            $http.post(config.url, config.data).success(function(data) {
                config.success(data);
            })
        }
    };
});