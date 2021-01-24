import React from 'react'
import TestRenderer from 'react-test-renderer'
import { renderHook } from '@testing-library/react-hooks'
import { useGetTransactions, GET_TRANSACTIONS } from '../../hooks/useGetTransactions'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: {
      query: GET_TRANSACTIONS
    },
    result: {
      data: {
        transactions: [
          {
            amount: 12.72,
            credit: false,
            debit: true,
            description: 'description',
            merchant_id: '000',
            user_id: 'andrew_B'
          }
        ]
      }
    }
  }
]

describe('useGetTransactions Tests', () => {
  test('get all transactions with no arguments', () => {
    const wrapper = ({ children }) => (
      TestRenderer.create(
        <MockedProvider mocks={mocks}>
          {children}
        </MockedProvider>
      )
    )
    const { result } =
            renderHook(() => useGetTransactions(), { wrapper })

    console.log(result)
  })
})
