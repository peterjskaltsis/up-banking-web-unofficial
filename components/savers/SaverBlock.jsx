import Link from 'next/link'

/**
 * Renders a single saver/account block, which can be clicked to show you more detail.
 * @param {*} attributes are the attributes of a saver/account, as per https://developer.up.com.au/#get_accounts_id
 * @param {*} hasGoal 
 */
export default function SaverBlock({ attributes, hasGoal }) {

  // The single transactional account is not considered a 'Saver'.
  if (attributes.accountType === "TRANSACTIONAL") {
    return <></>
  }

  return (
    (<Link
      href="#"
      title={`View saver: ${attributes.displayName}`}
      className="bg-white text-gray-900 rounded py-3 px-4">

      <div className="flex items-center">
        <p className="flex items-center">
          <span className="text-2xl mr-2">🔒</span>
          {attributes.displayName}
          {!hasGoal &&
            // FIXME - Temp use of hasGoal, eventually check if round up account, when the API allows us to do so.
            <svg title={`Round-up enabled`} className="w-4 h-4 ml-2 mb" style={{ width: '0.85rem' }} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36ZM18 32C25.7319 32 32 25.7319 32 18C32 10.2681 25.7319 4 18 4C10.2681 4 4 10.2681 4 18C4 25.7319 10.2681 32 18 32Z" fill="#FF7A64" />
              <path d="M17.6536 7.1C17.8076 6.83333 18.1925 6.83333 18.3464 7.1L28.0459 23.9C28.1999 24.1667 28.0074 24.5 27.6995 24.5H8.30052C7.9926 24.5 7.80015 24.1667 7.95411 23.9L17.6536 7.1Z" fill="#FF7A64" />
            </svg>
          }
        </p>
        <div className="ml-auto text-right">
          <p className="text- font-">${attributes.balance.value}</p>
          {hasGoal && <p className="text-xs font-normal text-gray-600"> of $100</p>}
        </div>
      </div>
      {hasGoal && <div className="mt-1 w-full h-1 rounded bg-gray-300"></div>}

    </Link>)
  );
}
