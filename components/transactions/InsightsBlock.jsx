import ArrowIcon from 'components/icons/ArrowIcon'

/**
 * Renders a block to show the insights for the group the transaction belongs to. (PLACEHOLDER for now, until the API provides more info).
 * @param {*} transaction is a transaction, as detailed at: https://developer.up.com.au/#get_transactions_id
 */
export default function InsightsBlock({ transaction }) {
  if (transaction.attributes.description.includes("Transfer")) {
    return <></>
  }

  return (
    <div className="text-sm text-gray-900 bg-white rounded p-4 grid grid-flow-col gap-6 items-center leading-tight text-left">
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-2 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <p className="font-semibold">Insights</p>
      </div>
      <div>
        <p>15</p>
        <small className="text-xs text-gray-600">Txns</small>
      </div>
      <div>
        <p>$7.26</p>
        <small className="text-xs text-gray-600">Average</small>
      </div>
      <div>
        <p>~$118</p>
        <small className="text-xs text-gray-600">All Time</small>
      </div>
      <ArrowIcon className="transform rotate-180 text-gray-500 h-4 w-auto ml-auto" />
    </div>
  )
}
