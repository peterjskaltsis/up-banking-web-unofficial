/**
 * Render export block UI
 */
import { DateRangePicker } from "rsuite"
import moment from "moment";
import { useState } from "react";
import { apiUrl, queryWithTokenAndParams } from 'lib/api'

const { afterToday } = DateRangePicker;

const predefinedBottomRanges = [
  {
    label: 'Last 30 days',
    value: [moment(new Date()).subtract(29, 'days').toDate(), new Date()]
  },
  {
    label: 'This month',
    value: [moment(new Date()).startOf('month').toDate(), new Date()]
  },
  {
    label: 'Last month',
    value: [moment(new Date()).subtract(1, 'month').startOf('month').toDate(), moment(new Date()).subtract(1, 'month').endOf('month').toDate()]
  },
  {
    label: 'This year',
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()]
  },
  {
    label: 'Last year',
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)]
  }
];

export default function ExportBlock({ accountId, token }) {
  const [dates, setDates] = useState([null, null])
  const [dataLoading, setDataLoading] = useState(false)

  const downloadFile = (data, fileName) => {
    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    // Clean up and remove the link
    link.parentNode.removeChild(link);
  }

  const getDateAsString = (date) => {
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    const yyyy = `${date.getFullYear()}`
    const dateString = `${dd}/${mm}/${yyyy}`

    return dateString
  }

  const exportTxns = async () => {
    let allData = []

    let params = {
      'filter[since]': dates[0].toISOString(),
      'filter[until]': dates[1].toISOString(),
      'page[size]': 50
    }
    setDataLoading(true)
    try {
      while (true) {
        const data = await queryWithTokenAndParams(apiUrl + `/accounts/${accountId}/transactions`, token, params);

        allData = [...allData, ...data.data]

        if (!data.links.next) {
          break;
        }

        params = data.links.next.split('?')[1];
      }

      if (allData) {
        console.log(allData)
        const delimiter = ','
        const replacer = (key, value) => value === null ? '' : value
        // const header = Object.keys(allData[0]['attributes'])
        const headers = ['rawText', 'description', 'message', 'roundUp', 'cashback', 'amount', 'createdAt']
        const csv = [
          headers.join(delimiter),
          ...allData.map(row => headers.map(fieldName => {
            if (fieldName === 'amount') {
              return JSON.stringify(row['attributes'][fieldName]['value'], replacer)
            }
            if ((fieldName === 'cashback' || fieldName === 'roundUp') && row['attributes'][fieldName]) {
              return JSON.stringify(row['attributes'][fieldName]['amount']['value'], replacer)
            }
            return JSON.stringify(row['attributes'][fieldName], replacer)
          }).join(delimiter))
        ].join('\r\n')
        console.log(csv)
        const fromDate = getDateAsString(dates[0])
        const toDate = getDateAsString(dates[1])
        const fileName = `UpBank-Export-${fromDate}-${toDate}.csv`
        downloadFile(csv, fileName)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setDataLoading(false)
    }
  }

  return (
    <div className="bg-white rounded py-3 px-4 flex gap-4 justify-between">
      <DateRangePicker
        size="lg"
        placeholder="From - To"
        className="flex-auto"
        appearance="subtle"
        disabledDate={afterToday()}
        ranges={predefinedBottomRanges}
        value={dates}
        onChange={value => setDates(value)} />
      <button className="border border-transparent text-gray-900 font-semibold duration-100 px-4 py-2 bg-secondary hover:bg-secondary-dark hover:text-secondary focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150 rounded" onClick={exportTxns} disabled={dataLoading}>
        {dataLoading ? 'Loading' : 'Export'}
      </button>
    </div>
  );
}
