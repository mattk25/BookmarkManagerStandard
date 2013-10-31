var bookmarkManager = {};
bookmarkManager.bookmarkApp = {};

(function () {

    bookmarkManager.bookmarkApp = angular.module('bookmarkApp',
        ['ngRoute', 'ngAnimate', 'routeResolverServices', 'wc.Directives', 'wc.Animations', 'ui.bootstrap']);

    bookmarkManager.bookmarkApp.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/customers', {
                controller: 'CustomersController',
                templateUrl: '/app/views/customers/customers.html'
            })
            .when('/customerorders/:customerID', {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/views/customers/customerOrders.html'
            })
            .when('/customeredit/:customerID', {
                controller: 'CustomerEditController',
                templateUrl: '/app/views/customers/customerEdit.html'
            })
            .when('/orders', {
                controller: 'OrdersController',
                templateUrl: '/app/views/orders/orders.html'
            })
            .when('/about', {
                controller: 'AboutController',
                templateUrl: '/app/views/about.html'
            })
            .otherwise({ redirectTo: '/customers' });

    }]);

}());