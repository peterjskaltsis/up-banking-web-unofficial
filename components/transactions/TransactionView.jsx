import SlideOut from 'components/SlideOut'
import ArrowIcon from 'components/icons/ArrowIcon'
import LoadingIcon from 'components/icons/LoadingIcon'
import TransactionDetails from 'components/transactions/TransactionDetails'
import RoundUpBlock from 'components/transactions/RoundUpBlock'
import InsightsBlock from 'components/transactions/InsightsBlock'

/**
 * Renders the slide-out panel (to mimic the app functionality) which holds further details about a transaction.
 * @param {boolean} isOpen shows whether or not the panel should be displayed. 
 * @param {function} setOpen toggles the isOpen variable. 
 * @param {*} transaction is a transaction, as detailed at: https://developer.up.com.au/#get_transactions_id
 */
export default function TransactionView({ isOpen, setOpen, transaction }) {
  if (!transaction.attributes) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <LoadingIcon className="w-20" />
        <p className="mt-3 text-gray-100 text-sm">Loading account data..</p>
      </div>
    )
  }

  // Panel header to show the user the transaction type etc. Hacky way of determining the type, until the API is upgraded.
  const PanelHeader = () =>
    <div className="grid grid-flow-col text-white font-medium text-sm">
      <button className="mr-auto" onClick={() => setOpen(false)}><ArrowIcon className="w-4 h-4 transform -rotate-90" /></button>
      <div className="mx-auto">{transaction.attributes.description.includes("Transfer") ? "Transfer" : (transaction.attributes.amount.valueInBaseUnits < 0 ? "Purchase" : "Payment")}</div>
      <button className="ml-auto">
        <svg className="w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
      </button>
    </div>

  return (
    <SlideOut
      panelClassName="bg-dark w-full"
      type={'right'}
      isOpen={isOpen}
      backdropClicked={() => setOpen(false)}
      size={30}
    >
      <div className="grid gap-4 p-4">
        <PanelHeader />
        <TransactionDetails transaction={transaction} />
        <RoundUpBlock transaction={transaction} />
        <InsightsBlock transaction={transaction} />
        {transaction.attributes.foreignAmount &&
          <div className="text-white p-4 bg-altWhite rounded border border-altWhite text-xs">
            The AUD amount and exchange rate may change slightly to reflect the FX rate at the time of settlement.
                    </div>
        }
      </div>
    </SlideOut>
  )
}
