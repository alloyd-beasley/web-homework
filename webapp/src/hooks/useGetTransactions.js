import { gql, useQuery } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query {
    transactions{
        id
        user_id
        description
        merchant_id
        debit
        credit
        amount
    }
  }
`;

export const useGetTransactions = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  
  return {
    loading,
    error,
    data
  };
};