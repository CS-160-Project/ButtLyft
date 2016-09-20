﻿'user strict';

app.factory('intelPlatformDataSource', ['$http', 'ngAuthSettings', 'messageService',
    function ($http, ngAuthSettings, messageService) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri + 'api/iotgRoadmap/getplatforms';
        return new kendo.data.DataSource({
           // type: 'aspnetmvc-ajax',
            transport: {
                read: {
                    url: serviceBase,
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json'
                }
            },
            batch: false,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
            pageSize: 10,
            schema: {
                data: function (data) {
                    return data.data;
                },
                total: function (data) {
                    return data.total;
                },
                model: {
                    fields: {
                        platform: { type: "string" }
                    }
                }
            },
            error: function (e) {
                var msg = 'Error: ' + e.xhr.responseText;
                //alert(msg);
                console.log(msg);
            }
        });
    }]);