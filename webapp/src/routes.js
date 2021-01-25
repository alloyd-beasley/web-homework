import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { contentStyle, layoutStyle } from './styles/AppStyles'
import { TransactionContext } from './TransactionContext'
import { useGetTransactions } from './hooks/useGetTransactions'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'

const AppRouter = () => {
  const [dataContext, setDataContext] = useState({ transactions: [], txDataLoading: false })
  const providerValue = useMemo(() => ({ dataContext, setDataContext }), [dataContext, setDataContext])

  const transactions = useGetTransactions()

  useEffect(() => {
    const { loading, data } = transactions
    if (data && data.transactions) {
      setDataContext({ transactions: data.transactions, txDataLoading: loading })
    } else {
      setDataContext({ transactions: [], txDataLoading: loading })
    }
  }, [transactions.data, transactions.loading])

  return (
    <Router>
      <div css={layoutStyle}>
        <Nav />
        <div className='main-content' css={contentStyle}>
          <TransactionContext.Provider value={providerValue}>
            <Route component={Home} exact path='/' />
            <Route component={() => (<div>Content for /another route</div>)} exact path='/Insights' />
          </TransactionContext.Provider>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
