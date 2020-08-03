import moment from 'moment'
import LockIcon from 'components/icons/LockIcon'

/**
 * Renders a block to show more in-depth details of a transaction.
 * @param {*} transaction is a transaction, as detailed at: https://developer.up.com.au/#get_transactions_id
 */
export default function TransactionDetails({ transaction }) {
  const price = transaction.attributes.amount.valueInBaseUnits < 0 ? <div>${transaction.attributes.amount.value.substr(1)}</div> : <div style={{ color: '#00bc83' }}>+${transaction.attributes.amount.value}</div>

  return (
    <div className="text-gray-900 bg-white rounded p-4 leading-tight grid gap-4">
      <div className="flex items-center pt-2">
        <div className="mr-0"><LockIcon className="h-10 w-10 text-blue-600" /></div>
        <div className="text-left">
          <p>{transaction.attributes.description}</p>
          <small className="text-gray-600">{transaction.attributes.message}</small>
        </div>
        <div className="ml-auto text-right">
          <div className="text-lg">{price}</div>
          {
            transaction.attributes.foreignAmount &&
            <small className="text-gray-600">{transaction.attributes.foreignAmount.value} {transaction.attributes.foreignAmount.currencyCode}</small>
          }
          {
            transaction.attributes.status === "HELD" &&
            <div className="mt-2 bg-gray-800 text-white text-xxs font-medium tracking-wide rounded py-1 px-1">PENDING</div>
          }
        </div>
      </div>

      <hr className="border-gray-200" />

      {transaction.attributes.amount.valueInBaseUnits < 0 ?
        <div className="flex items-center text-sm">
          <p className="text-gray-600">Paid on</p>
          <p className="ml-auto">{moment(transaction.attributes.createdAt).format('DD MMM hh:mma')}</p>
        </div>
        :
        <div className="flex items-center text-sm">
          <p className="text-gray-600">Received</p>
          <p className="ml-auto">{moment(transaction.attributes.createdAt).format('DD MMM hh:mma')}</p>
        </div>
      }

      {transaction.attributes.foreignAmount &&
        <div className="flex items-center text-sm">
          <p className="text-gray-600">Exchange rate</p>
          <p className="ml-auto">$1 AUD = USD 0.7161</p>
        </div>
      }

      {transaction.attributes.rawText &&
        <>
          <hr className="border-gray-200" />

          <div className="flex items-center text-sm">
            <p className="text-gray-600 font-mono text-xs tracking-wider">{transaction.attributes.rawText}</p>
          </div>
        </>
      }

      {!transaction.attributes.description.includes("Transfer") &&
        <>
          <hr className="border-gray-200" />

          <div className="flex items-center text-sm text-indigo-500">
            <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            <p className="">Internet</p>
          </div>
        </>
      }

      {!transaction.attributes.description.includes("Transfer") &&
        <>
          <hr className="border-gray-200" />

          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            <p className="">Add tags</p>
          </div>
        </>
      }
    </div>
  )
}
