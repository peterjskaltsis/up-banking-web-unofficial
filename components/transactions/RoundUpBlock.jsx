/**
 * Renders a block to show the round-up details of a transaction, hidden if the transaction does not contain round-up data.
 * @param {*} transaction is a transaction, as detailed at: https://developer.up.com.au/#get_transactions_id
 */
export default function RoundUpBlock({ transaction }) {
  const roundUp = transaction.attributes.roundUp

  if (!roundUp) return <></>

  const total = parseFloat(transaction.attributes.amount.value) + parseFloat(roundUp.amount.value)
  const absoluteTotal = (total < 0) ? total * -1 : total

  const amount = parseFloat(roundUp.amount.value)
  const absoluteAmount = (amount < 0) ? amount * -1 : amount

  return (
    <div className="text-sm text-gray-900 bg-white rounded p-4 grid grid-flow-col gap-6 items-center leading-tight text-left">
      <div className="flex items-center">
        {/* <svg className="w-5 h-5 mr-2 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> */}
        <svg title={`Round up: ${roundUp.amount.value}`} className="w-4 h-4 mr-2 mb-px" style={{ width: '.85rem' }} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36ZM18 32C25.7319 32 32 25.7319 32 18C32 10.2681 25.7319 4 18 4C10.2681 4 4 10.2681 4 18C4 25.7319 10.2681 32 18 32Z" fill="#FF7A64" />
          <path d="M17.6536 7.1C17.8076 6.83333 18.1925 6.83333 18.3464 7.1L28.0459 23.9C28.1999 24.1667 28.0074 24.5 27.6995 24.5H8.30052C7.9926 24.5 7.80015 24.1667 7.95411 23.9L17.6536 7.1Z" fill="#FF7A64" />
        </svg>
        <p className="font-semibold">Round-up</p>
      </div>
      <div>
        <p>{absoluteAmount < 1 ? absoluteAmount * 100 + 'c' : '$' + absoluteAmount}</p>
        <small className="text-xs text-gray-600">Amount</small>
      </div>
      <div>
        <p>{absoluteTotal < 1 ? absoluteTotal + 'c' : '$' + absoluteTotal}</p>
        <small className="text-xs text-gray-600">Total</small>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
