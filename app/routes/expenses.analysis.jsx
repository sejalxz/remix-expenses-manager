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

import ExpenseStatistics from "../components/expenses/ExpenseStatistics"
import Chart from '../components/expenses/Chart'

function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={ DUMMY_EXPENSES }/>
      <ExpenseStatistics expenses={ DUMMY_EXPENSES } />
    </main>
  )
}

export default ExpensesAnalysisPage