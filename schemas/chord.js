const firebase = require('firebase');

firebase.initializeApp({
  serviceAccount: './playalong-prod-a22e039eb1e9.json',
  databaseURL: 'https://playalong-prod.firebaseio.com',
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
const graphql = require('graphql');

const query = new graphql.GraphQLObjectType({
	name: 'Chord',
	description: 'Get a single chord!',
	fields: () => ({
		chordData: {
			type: new graphql.GraphQLObjectType({
				name: 'chordData',
				fields: () => ({
					chordKey: {
						type: graphql.GraphQLString,
						resolve: (_,args) => {
							console.log(_.chordKey)
							return _.chordKey;
						}
					},
				}),
			}),
			args: {
				chordKey: {
					type: new graphql.GraphQLNonNull(graphql.GraphQLString),
					description: 'Name you want to say hi to :)',
				}
			},

			resolve: (_,args) => {
				return new Promise((resolve, reject) => {
					var ref = db.ref(`chords/${args.chordKey}`);
					ref.once('value', snapshot => {
					  resolve(snapshot.val());
					});
				});
			},
		},
	})
});

const schema = new graphql.GraphQLSchema({
 query
});

module.exports = schema;
