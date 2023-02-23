import { Outlet } from '@remix-run/react'
import expensesStyles from '../styles/expenses.css'
import ExpensesList from '../components/expenses/ExpensesList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'first expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'second expense',
    amount: 18.99,
    date: new Date().toISOString(),
  },
]

function ExpensesLayout() {
  return (
      <>
        <Outlet />
        <main>
            <ExpensesList expenses={ DUMMY_EXPENSES }/>
        </main>
      </>
        
  )
}

export default ExpensesLayout

export function links() {
  return [
      { rel: 'stylesheet', href: expensesStyles }
    ]
}
