import { useState } from 'react'
import moment from 'moment'

import LockIcon from 'components/icons/LockIcon'
import TransactionView from 'components/transactions/TransactionView'

/**
 * Renders a single transaction block, which you can click to view more details.
 * @param {*} props contains the properties of the transaction, as per https://developer.up.com.au/#get_transactions_id
 */
export default function TransactionBlock(props) {
  const [isOpen, setOpen] = useState(false)

  // Calculate the total price, accounting for round-ups.
  const total = props.attributes.roundUp ? parseFloat(props.attributes.amount.value) + parseFloat(props.attributes.roundUp.amount.value) : parseFloat(props.attributes.amount.value)
  const price = total < 0 ? <div>${total < 0 ? total * -1 : total}</div> : <div style={{ color: '#00bc83' }}>+${total}</div>

  return (
    <>
      <div onClick={() => setOpen(!isOpen)} title="View transaction..." className="cursor-pointer p-3 flex border-t border-gray-200 hover:bg-gray-100 focus:bg-gray-300 duration-100">
        <div className="flex items-center justify-center">
          <LockIcon className="w-8 h-8" />
        </div>
        <div className="text-left">
          <p className="text-sm">{props.attributes.description}</p>
          <div className=" text-xs text-gray-600">
            {moment(props.attributes.createdAt).format('hh:mma')}{props.attributes.message && ', ' + props.attributes.message}
          </div>
        </div>
        <div className="ml-auto text-right">
          <div className="flex items-center justify-end">
            {props.attributes.roundUp &&
              <svg title={`Round up: ${props.attributes.roundUp.amount.value}`} className="w-4 h-4 mr-2 mb-px" style={{ width: '0.85rem' }} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36ZM18 32C25.7319 32 32 25.7319 32 18C32 10.2681 25.7319 4 18 4C10.2681 4 4 10.2681 4 18C4 25.7319 10.2681 32 18 32Z" fill="#FF7A64" />
                <path d="M17.6536 7.1C17.8076 6.83333 18.1925 6.83333 18.3464 7.1L28.0459 23.9C28.1999 24.1667 28.0074 24.5 27.6995 24.5H8.30052C7.9926 24.5 7.80015 24.1667 7.95411 23.9L17.6536 7.1Z" fill="#FF7A64" />
              </svg>
            }
            {price}
          </div>
          {
            props.attributes.foreignAmount &&
            <div className="text-xs text-gray-600">{props.attributes.foreignAmount.currencyCode} {props.attributes.foreignAmount.value}</div>
          }
        </div>
      </div>
      <TransactionView isOpen={isOpen} setOpen={setOpen} transaction={props} />
    </>
  )
}
