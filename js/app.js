//authenticate 
var apiKey = '46928854';
var token = 'T1==cGFydG5lcl9pZD00NjkyODg1NCZzaWc9ODVkZTNkMDhmNzJjZDgwNzBiODJjZmI3ZTNkOTlhNzJkOTJiODg1ODpzZXNzaW9uX2lkPTFfTVg0ME5qa3lPRGcxTkg1LU1UWXdNRGMyT0RNeU9URTFNWDR6UVVzd1oyZElNMEYzVjI0emEwUlRUamhHTkVSRWRFZC1mZyZjcmVhdGVfdGltZT0xNjAwNzcxMDI0Jm5vbmNlPTAuNzQ5ODcxMDI2MDA0MTg0MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjAwNzc0NjIzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
var sessionId = '1_MX40NjkyODg1NH5-MTYwMDc2ODMyOTE1MX4zQUswZ2dIM0F3V24za0RTTjhGNEREdEd-fg';
//create a meeting
var session = OT.initSession(apiKey, sessionId);
var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%',
  });
//connect to a meeting
session.connect(token, function (err) {
    if (err) {
        
    } else {
        alert("connected!!!")
        //publish my stream
        session.publish(publisher);
        //subcribe to other's streams
        session.on("streamCreated", function (event) {
            var subscriber = session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
              });
        })
        
    }
}
);


