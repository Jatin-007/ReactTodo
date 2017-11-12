var moment = require ('moment');

console.log(moment().format());

var neww = moment();
console.log('Current TImestamp', neww.unix());

var TImestamp = 1510435203;
var currentMoment = moment.unix(TImestamp);
console.log("current moment", currentMoment.format('MMM D, YY @ H:mm a'));