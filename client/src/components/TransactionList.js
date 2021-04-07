import React, { useContext, useEffect } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)
    
    useEffect(() => {
        getTransactions()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h4>History</h4>
            <ul className="list">
                {transactions.map(transaction => (<Transaction  key={transaction.id} transaction={transaction}/>))}                
            </ul>
        </>
    )
}

export default TransactionList