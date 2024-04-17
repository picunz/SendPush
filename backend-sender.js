// Public part of VAPID key, generation of that covered in README
// All subscription tokens associated with that key, so if you change it - you may lose old subscribers
// You MUST need generate your own VAPID keys!
// Newer share your PRIVATE_VAPID_KEY. It should be stored in a safe storage
const VAPID_PUBLIC_KEY = "BMBlr6YznhYMX3NgcWIDRxZXs0sh7tCv7_YCsWcww0ZCv9WGg-tRCXfMEHTiBPCksSqeve1twlbmVAZFv7GSuj0"
const VAPID_PRIVATE_KEY = "vplfkITvu0cwHqzK9Kj-DYStbCH_9AhGx9LqMyaeI6w";


// npm install web-push
const webpush = require('web-push');

webpush.setVapidDetails(
    'https://www.kiand.it/push/',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

// CHANGE TO YOUR TOKEN FOR TEST
const pushSubscription = {
        "endpoint": "https://fcm.googleapis.com/fcm/send/dQvpOQCcF3Q:APA91bEQo54yO23jmWwQb62Zu-8EEUuk77eY7rAHhtV3YKw67G5OOLOgtPB7MjqhgNfa9iSLlee94UIR4Osi8Gzd0fggaL6U1Ghx6UAAWwHOfdkJLcF9SLDCmcr_s_QWBp0xCu4SMfkp",
        "expirationTime": null,
        "keys": {
            "p256dh": "BO6gyvtwNvA7ply1q5KrkHRYci4aThwu014VuB8VvcT8P7-JooFq_VYmbstbjclzJnHFGSoewJ7pGEMx1p9jTro",
            "auth": "IaMOlG-gk7mVlwNa0sYsBQ"
        }
    }
;
 
let pushData = JSON.stringify({
    "title": "Push title42",
    "body": "Additional text with some description",
    "icon": "https://www.kiand.it/push/images/favicon.png",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
    "data": {
        "url": "https://www.kiand.it/push/?page=success",
        "message_id": "your_internal_unique_message_id_for_tracking"
    }
});
webpush.sendNotification(pushSubscription, pushData);

