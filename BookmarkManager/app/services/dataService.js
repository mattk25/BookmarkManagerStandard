(function () {

    var dataService = function (config, customersService, customersBreezeService) {
        return (config.useBreeze) ? customersBreezeService : customersService;
    };

    bookmarkManager.bookmarkApp.factory('dataService',
        ['config', 'customersService', 'customersBreezeService', dataService]);

}());

