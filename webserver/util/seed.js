const toJson = require('csvtojson')
const seeder = require('mongoose-seed')
const MONGO_URI = 'mongodb://localhost:27017/graphql'
const path = require('path')

const data = [{
  model: 'transaction',
  'documents': []
}]

toJson().fromFile(path.join(__dirname, '/transactions.csv')).then(tx => {
  for (let i = 0; i < tx.length; i++) {
    const transaction = tx[i]
    transaction.credit === 'TRUE' ? transaction.credit = true : transaction.credit = false
    transaction.debit === 'TRUE' ? transaction.debit = true : transaction.debit = false
    transaction.amount = parseFloat(transaction.amount)

    data[0].documents.push(transaction)
  }

  seeder.connect(MONGO_URI, () => {
    seeder.loadModels([path.join(__dirname, '../data-models/Transaction.js')])

    seeder.clearModels(['transaction'], function () {
      seeder.populateModels(data, function () { seeder.disconnect() })
    })
  })
})
