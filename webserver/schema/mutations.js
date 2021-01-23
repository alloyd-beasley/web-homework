const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLList } = graphql
const { TransactionModel } = require('../data-models/Transaction')
const { TransactionType, TransactionInputType } = require('./transaction-type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTransaction: {
      type: TransactionType,
      args: {
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      /* eslint-disable-next-line camelcase */
      resolve: async (parentValue, { user_id, description, merchant_id, debit, credit, amount }) => {        
        const tx = new TransactionModel({ user_id, description, merchant_id, debit, credit, amount });
        const saved = await tx.save();

        tx.id = saved._id;

        return tx;
      }
    },
  }
})

module.exports = mutation
