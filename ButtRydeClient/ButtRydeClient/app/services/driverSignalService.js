﻿'use strict';
app.factory('driverSignalService', ['$', function ($) {

    var connection = null;
    var hub = null;

    return {
        initialize: function () {
            connection = $.hubConnection('http://localhost:1272/');
            hub = connection.createHubProxy('dataHub');
            connection.start();

            hub.on('onHit', function (data) {
                console.log(data);
            })
            hub.on('currentLocation', function(data){
                console.log(data);
            })

        },
        hit: function () {
            hub.invoke('hit');
        },
        sendLocation: function(){
            hub.invoke('sendLocation');
        }
    //    addNote: function (note) { //invoking a method with data
    //    hub.invoke('addNote', note);
    //},
    }


}]);