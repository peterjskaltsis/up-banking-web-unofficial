import { useState, useEffect } from 'react'

import moment from 'moment'
import { useSWRInfinite } from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component'

import ArrowIcon from 'components/icons/ArrowIcon'
import LoadingIcon from 'components/icons/LoadingIcon'
import SectionList from 'components/SectionList'
import TransactionBlock from 'components/transactions/TransactionBlock'
import { apiUrl, queryWithToken } from 'lib/api'

// Pagination page size.
const PAGE_SIZE = 20

/**
 * Custom hook to return paginated transaction data for a given Up account/saver.
 * @param {*} accountId is the ID of the account/saver you want to query.
 */
export function useTransactionPages({ accountId, token } = {}) {
  return useSWRInfinite(
    (index, previousPageData) => {
      // We reached the end.
      if (previousPageData && previousPageData.data.length === 0) return null;

      // First page, ∴ previousPageData is null.
      if (index === 0) {
        return [apiUrl + `/accounts/${accountId}/transactions?page[size]=${PAGE_SIZE}`, token]
      }

      return [previousPageData.links.next, token]
    },
    queryWithToken,
    {
      refreshInterval: 10000, // Refresh every 10 seconds.
      revalidateAll: true,
      // onSuccess: (data, key) => console.log("ppp", data)
    }
  )
}

/**
 * Renders a list of transactions, divided into sections by day.
 * @param {*} account from which you want to show the transactions. See more info here: https://developer.up.com.au/#get_accounts_id
 */
export default function TransactionsList({ account, token }) {
  const [numTransactions, setNumTransactions] = useState(0)
  const [transactions, setTransactions] = useState(null)
  const props = useTransactionPages({ accountId: account.id, token })

  // Function to load next page in pagination.
  const loadNext = () => props.setSize(x => x + 1)

  // Format transactions when SWR provides new data.
  useEffect(() => {
    if (!props.data) {
      console.log("loading")
    } else {
      var totalTransactions = []
      props.data.forEach((page, index) => {
        const reducedPageData = page.data ? page.data.reduce((result, trans) => {
          // Create new group
          const date = trans.attributes.createdAt.substring(0, 10)
          if (!result[date]) {
            result[date] = {
              date,
              data: []
            };
          }
          // Append to group
          result[date].data.push({
            ...trans
          })
          setNumTransactions(num => num + 1)
          return result;
        }, {})
          : []

        const pageTransactions = Object.keys(reducedPageData).map((key) => reducedPageData[key])
        totalTransactions = [...totalTransactions, ...pageTransactions]
      })

      setTransactions(totalTransactions)
    }
  }, [props.data?.[0]?.data])

  if (!transactions) {
    return <div><LoadingIcon /></div>
  }

  // Assorted indication constants (OLD).
  const isLoadingInitialData = !props.data.data && !props.error;
  const isLoadingMore = isLoadingInitialData || (props.data.data && typeof props.data.data[size - 1] === 'undefined')
  const isEmpty = props.data?.[0].data?.length === 0;
  const isReachingEnd = isEmpty || (props.data && props.data[props.data.length - 1]?.data?.length < PAGE_SIZE)

  return (
    <>
      <div className="w-full overflow-visible">
        <InfiniteScroll
          style={{ overflow: 'visible' }}
          next={loadNext}
          hasMore={isLoadingMore}
          loader={<LoadingIcon />}
          dataLength={transactions.length}
          endMessage={
            <p className="text-center mt-3">
              <b>You have seen it all!</b>
            </p>
          }
        // TODO - Make a cool round up saver feature, for web.
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
        >
          <div className="w-full bg-white text-gray-900 rounded overflow-hidden">
            <div className="p-3 flex">
              <div className="text-left">
                <h2 className="">{moment().format('MMMM yyyy')}</h2>
                <div className=" text-xs text-gray-600">{numTransactions} Purchases</div>
              </div>
              <div className="ml-auto text-right">
                <h2 className="">$126</h2>
                <div className="text-green-500 text-xs text-gray-600">$100 less than usual</div>
              </div>
              <div className="flex items-center ml-2 text-gray-500">
                <ArrowIcon className="w-4 h-4 transform rotate-180" />
              </div>
            </div>
            <SectionList
              key={props.data}
              className=""
              keyExtractor={(item, index) => item.date + index}
              renderSectionHeader={item =>
                <div className="flex py-1 px-3 uppercase tracking-wider bg-gray-200 text-gray-500 text-xxs font-medium">
                  {moment(item.date).format('ddd, DD MMMM')}
                </div>
              }
              renderItem={(item, index) => <TransactionBlock key={index} {...item} />}
              sections={transactions}
            />
          </div>
        </InfiniteScroll>
        {
          // DEBUGGING
          /* <div className="text-white">
            {!isReachingEnd && (
              <button
                type="button"
                onClick={() => setSize(size + 1)}
                disabled={isReachingEnd || isLoadingMore}
              >
                {isLoadingMore ? '. . .' : 'load more'}
              </button>
            )}
            {!isReachingEnd && (
              <button
                type="button"
                onClick={() => size > 1 ? setSize(size - 1) : null}
                disabled={isReachingEnd || isLoadingMore}
              >
                {isLoadingMore ? '. . .' : 'previous'}
              </button>
            )}
          </div> */
        }
      </div>
    </>
  )
}
