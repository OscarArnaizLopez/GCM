var gcm = require('net.iamyellow.gcmjs');

var pendingData = gcm.data;
if (pendingData && pendingData !== null) {
    // if we're here is because user has clicked on the notification
    // and we set extras for the intent
    // and the app WAS NOT running
    // (don't worry, we'll see more of this later)
    Ti.API.info('******* data (started) ' + JSON.stringify(pendingData));
}

function doRegister() {

    gcm.registerForPushNotifications({
        success : function(ev) {
            // on successful registration
            alert('******* success, ' + ev.deviceToken);
        },
        error : function(ev) {
            // when an error occurs
            alert('******* error, ' + ev.error);
        },
        callback : function(e) {
            // when a gcm notification is received WHEN the app IS IN FOREGROUND

            alert(JSON.stringify(e));
        },
        unregister : function(ev) {
            // on unregister
            Talert('******* unregister, ' + ev.deviceToken);
        },
        data : function(data) {
            // if we're here is because user has clicked on the notification
            // and we set extras in the intent
            // and the app WAS RUNNING (=> RESUMED)
            // (again don't worry, we'll see more of this later)
            Ti.API.error('******* data (resumed) ' + JSON.stringify(data));
            alert('******* data (resumed) ' + JSON.stringify(data));
        }
    });
}


$.index.open();
