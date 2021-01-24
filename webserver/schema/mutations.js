const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat } = graphql
const { TransactionModel } = require('../data-models/Transaction')
const { TransactionType } = require('./transaction-type')

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
        const tx = new TransactionModel({ user_id, description, merchant_id, debit, credit, amount })
        const saved = await tx.save()

        tx.id = saved._id

        return tx
      }
    },
    editTransactionById: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString },
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      /* eslint-disable-next-line camelcase */
      resolve: async (parentValue, { id, user_id, description, merchant_id, debit, credit, amount }) => {
        const saved = await TransactionModel.findOneAndUpdate({ _id: id }, { user_id, description, merchant_id, debit, credit, amount }, {
          new: true
        })

        return saved
      }
    },
    removeTransactionById: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString }
      },
      /* eslint-disable-next-line camelcase */
      resolve: async (parentValue, { id }) => {
        const removed = await TransactionModel.findByIdAndDelete({ _id: id })
        removed.id = removed._id

        return removed
      }
    }
  }
})

module.exports = mutation
