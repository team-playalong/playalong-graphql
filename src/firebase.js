const firebase = require('firebase');

firebase.initializeApp({
  serviceAccount: './playalong-prod-a22e039eb1e9.json',
  databaseURL: 'https://playalong-prod.firebaseio.com',
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
// var ref = db.ref('chords');
// ref.once('value', function(snapshot) {
//   console.log(snapshot.val());
// });
