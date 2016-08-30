const graphql = require('graphql');

const query = new graphql.GraphQLObjectType({
	name: 'Query',
	description: 'First GraphQL Server Config — Yay!',
	fields: () => ({
		hello: {
			type: graphql.GraphQLString,
			description: "Accepts a name so you can be nice and say hi",
			args: {
				name: {
					type: new graphql.GraphQLNonNull(graphql.GraphQLString),
					description: 'Name you want to say hi to :)',
				}
			},
			resolve: (_,args) => {
				return `Hello, ${args.name}!!!`;
			}
		},
		luckyNumber: {
			type: graphql.GraphQLInt,
			description: "A lucky number",
			resolve: () => {
				return 888;
			}
		}
	})
});

const schema = new graphql.GraphQLSchema({
 query
});

module.exports = schema;
