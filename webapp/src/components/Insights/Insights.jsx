import React, { useContext, useState, useEffect } from 'react'
import { insightsContainer, chartContainer } from './InsightsStyles'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from 'recharts'
import { TransactionContext } from '../../TransactionContext'

const Insights = () => {
  const [barData, setBarData] = useState([])
  const { dataContext } = useContext(TransactionContext)

  useEffect(() => {
    const { transactions } = dataContext
    if (transactions.length > 0) {
      const data = []
      const dataMap = new Map()
      transactions.forEach(tx => dataMap.set(tx.user_id, { txCount: 0, txTotal: 0 }))

      for (const tx of transactions) {
        const t = dataMap.get(tx.user_id)
        t.txCount += 1
        t.txTotal += tx.amount
      }

      dataMap.forEach((v, k) => data.push({ user_id: k, txAvg: v.txTotal / v.txCount }))

      let creditCounter = 0
      let debitCounter = 0

      data.forEach(d => d.credit ? creditCounter++ : debitCounter++)

      setBarData(data)
    }
  }, [dataContext.transactions])

  return (
    <div css={insightsContainer}>
      {barData.length > 0 && (
        <div css={chartContainer}>
          <h1>
              Average Spend Per User
          </h1>
          <ResponsiveContainer height={600} width={700}>
            <BarChart data={barData} height={250} width={730}>
              <CartesianGrid stroke={'#FFAB91'} strokeDasharray='3 3' />
              <XAxis dataKey='user_id' tick={{ fill: '#FFAB91' }} />
              <YAxis dataKey='txAvg' tick={{ fill: '#FFAB91' }} tickFormatter={(item) => `$${item}`} />
              <Bar dataKey='txAvg' fill='#82ca9d' />
              <Tooltip contentStyle={{ color: 'whitesmoke', background: '#37474F' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default Insights
