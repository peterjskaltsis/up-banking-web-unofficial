import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import useSWR from 'swr'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import TextTransition, { presets } from 'react-text-transition'
//const TextTransition = dynamic(() => import('react-text-transition').then(mod => mod), { ssr: false })
//const presets = dynamic(() => import('react-text-transition').then(mod => mod.presets), { ssr: false })

import { apiUrl, queryWithToken } from 'lib/api'
import Avatar from 'components/up/Avatar'
import ArrowIcon from 'components/icons/ArrowIcon'
import LoadingIcon from 'components/icons/LoadingIcon'
import SaverBlock from 'components/savers/SaverBlock'
import TransactionsList from 'components/transactions/TransactionsList'
import ExportBlock from 'components/export/exportBlock'

export default function Index() {
  // Number of pages in the app.
  const APP_PAGES = 3

  const router = useRouter()
  const [token, setToken] = useState(null)
  const [page, setPage] = useState(0)
  const [isError, setError] = useState(false)

  // Functions to move between pages.
  const nextPage = () => setPage(p => p + 1 === APP_PAGES ? p : p + 1)
  const prevPage = () => setPage(p => p >= 1 ? p - 1 : p)

  // The entry page to introduce users to the site/experiment.
  const Intro = () =>
    <div className="flex flex-col items-center justify-center text-center h-full">
      <br />
      <div className="AnimatedLogo__Root-sc-1is1pya-0 equnmi h-24 w-24 overflow-hidden relative transform scale-150" style={{ height: 75, width: 75 }}>
        <div version="orangeOnYellow" className="AnimatedLogo__Background-sc-1is1pya-1 fjoinp"></div>
        <svg version="orangeOnYellow" className="AnimatedLogo__Wordmark-sc-1is1pya-2 relative text-white" fill="currentColor" viewBox="0 0 900 900">
          <defs></defs>
          <path d="M782.78 435.5a113.87 113.87 0 0 0-9.47-43.75C747 332.2 692.2 302.46 626.68 312.24a175.72 175.72 0 0 0-32.46 8.07c-3.67-4.73-8.88-6.74-16.81-6.76h-39.22a10.73 10.73 0 0 0-10 7.23c-5.6 15.42-55.3 151.91-71.26 194.3-2.79 7.43-14 31.37-41.05 26.74a21.73 21.73 0 0 1-14.62-10 20.15 20.15 0 0 1-2.58-16.26l.68-2.36c1.59-5.56 3.39-11.86 5.53-17.51l62.48-164.91a10.57 10.57 0 0 0-9.88-14.31c-19.89 0-40.54 0-46.21-.05-9.87-.38-17.34 5.1-20.66 14.52-9.39 26.71-18.92 52.83-28.32 77.64-5.21 13.75-10.11 28.23-14.44 41-5.69 16.86-11.59 34.3-18.33 50.92-4.34 10.72-10.16 22.82-20.4 31.36-13.59 11.31-30.35 15.34-51.22 12.38-8-1.13-14.77-5.7-19.73-13.19-5.06-7.65-7.17-16.85-6.47-28.11.86-13.36 5.25-26.29 10.06-39.45 10.71-29.41 32.5-87.76 49-130.77a10.56 10.56 0 0 0-9.85-14.35H238.44a24.18 24.18 0 0 0-14.11 4c-9.25 6.15-21.38 17.75-35.45 31.2C169.47 372 145.42 395 122 410.19a10.56 10.56 0 0 0-.29 17.55c2.6 1.81 5 1.77 9.31 1a6.62 6.62 0 0 0 1.08-.2c6.6-1.35 21.23-5.05 53.88-13.41-9.3 23.51-18.73 48.72-23.44 75.8-5.74 32.93 2.4 63.7 23.54 89 34 40.68 89.92 42.26 127.55 26.54 14.17-5.92 25.05-15.56 33.94-25.12 17.75 23.47 49.32 33.44 75.4 30.84l-7.06 19.07-2.77 7.48c-11.62 31.45-26.09 70.6-34 90.85-2.67 6.85-2 13.93 1.8 19.46s10.13 8.57 17.75 8.57l38.24-.29a10.47 10.47 0 0 0 10-7c6.21-17.31 15.44-42.92 24.74-68.75l9.3-25.79c10.11-28.08 19.1-53 22.88-63.63l9.15-25.6a118.05 118.05 0 0 0 13.18 13.1c31.85 26.84 68.92 37 110.18 30.15 35.24-5.84 65.5-20.38 89.94-43.24 38.86-36.33 57.87-80.43 56.48-131.07zm-78.54 13.34c-4.64 34.54-20.81 60.79-48.08 78-14.29 9-29.61 13.61-45.55 13.61h-.31c-25.16-.08-46.41-15.77-54.15-40a82 82 0 0 1-3-13.31c-.23-1.61-.32-3.25-.46-5.48l-.17-1.58a108.85 108.85 0 0 1 25.54-65.24c16.69-19.84 38.41-30.84 64.59-32.58 1.36-.09 2.72-.14 4.06-.14 22.12 0 40.69 12 50.94 33 5.78 11.79 8 23.14 6.59 33.72z"></path>
        </svg>
      </div>
      <br />
      <br />

      <h1 className="leading-tight text-4xl font-semibold">Up Your<br />Banking Game</h1>
      <small className="mt-4  text-sm text-gray-400">The <span className="font-medium text-primary">unofficial</span> web app</small>
      <br />
      <br />
      <br />

      <div className="grid gap-2 grid-flow-col mb-4">
        <img alt="Progress coin" src="/coin.png" className="w-4 h-4" />
        <div className="bg-altWhite w-4 h-4 rounded-full"></div>
        <div className="bg-altWhite w-4 h-4 rounded-full"></div>
      </div>

      <p className="text-gray-600 text-sm max-w-xs">This is an unofficial demo web app, built by Peter Skaltsis with Up's API. Not a skerrick of your data is stored.</p>
      <button className="sm:max-w-xxs w-full mt-4 border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => nextPage()}>
        <div className="text-center text-gray-900">Agree &amp; Continue</div>
      </button>
      <br />
    </div>

  // The page where a user enters their token, it is not sent anywhere, just stored in React state.
  const TokenEntry = () =>
    <div className="flex flex-col h-full pt-0 md:pb-0 text-left">
      <div className="mb-6 flex items-center">
        <button onClick={() => prevPage()} className="text-primary flex items-center"><ArrowIcon className="mr-2 h-5 w-3 text-primary" /></button>
        <div className="ml-auto inline-grid gap-2 grid-flow-col mb-4">
          <img alt="Progress coin" src="/coin.png" className="w-4 h-4" />
          <img alt="Progress coin" src="/coin.png" className="w-4 h-4" />
          <div className="bg-altWhite w-4 h-4 rounded-full"></div>
        </div>
      </div>

      <h1 className="leading-tight text-3xl mb-3">What's your<br />personal token?</h1>
      <input onChange={(e) => setToken(e.target.value)} value={token} className="text-primary text-3xl bg-transparent placeholder-gray-700 focus:outline-none" placeholder="up:yeah:abcdef123" autoFocus />
      <br />
      <br />

      <div className="mt-auto">
        <button disabled={token?.length === 0} className="disabled:bg-gray-700 disabled:cursor-not-allowed mb-2 sm:max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => nextPage()}>
          <div className="text-center text-gray-900">Next</div>
        </button>
        <hr className="border-altWhite bg-altWhite my-4" />
        <div className="grid gap-4 md:grid-flow-col">
          <div>
            <p className="text-sm text-primary"><a href="https://api.up.com.au/getting_started/" title="Get your Personal Access Token to play with!" target="_blank" rel="noreferrer">Don't have your personal token?</a></p>
            <p className="mt-4 text-gray-600 text-sm max--xs">I <b>do not</b> store this token in any way. Everything is kept in React state and no network requests are made, other than those to the Up API.</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Agreement</p>
            <p className="mt-4 text-gray-600 text-sm max--xs">That being said, enter at your own risk. By entering, you agree that I don't take responsibility for any misuse of your token. If you're worried, reset it by creating a new one <a href="https://api.up.com.au/getting_started/" className="text-primary" title="Reset your Personal Access Token." target="_blank" rel="noreferrer">here.</a></p>
          </div>
        </div>
      </div>
    </div>

  /**
   * The main application container. This function houses a fairly simple/lazy/quick way to rotate through a few 
   * different page states, so that we don't have to store Personal Access Tokens in browser memory.
   */
  function MainApp() {
    const { data: accountData, error: accountError } = useSWR([apiUrl + '/accounts', token], queryWithToken, { refreshInterval: 1000000 })

    // Error connecting to the API.
    if (accountError) {
      // setError(true)
      console.log("acc error", accountError)
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <svg className="w-16 h-24" width="149" height="215" viewBox="0 0 149 215" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.0251 153.025C40.6583 154.392 40.6583 156.608 42.0251 157.975C43.392 159.342 45.608 159.342 46.9749 157.975L42.0251 153.025ZM104.025 157.975C105.392 159.342 107.608 159.342 108.975 157.975C110.342 156.608 110.342 154.392 108.975 153.025L104.025 157.975ZM44.5 155.5C46.9749 157.975 46.9738 157.976 46.9728 157.977C46.9725 157.977 46.9715 157.978 46.971 157.979C46.9698 157.98 46.9689 157.981 46.968 157.982C46.9664 157.983 46.9655 157.984 46.9651 157.985C46.9645 157.985 46.9665 157.983 46.971 157.979C46.9801 157.97 46.9996 157.951 47.0295 157.923C47.0891 157.867 47.1899 157.773 47.3314 157.648C47.6144 157.398 48.0594 157.02 48.6621 156.558C49.8687 155.632 51.7001 154.37 54.124 153.1C58.9655 150.564 66.1617 148 75.5 148V141C64.8383 141 56.5345 143.936 50.876 146.9C48.0499 148.38 45.8813 149.868 44.4004 151.005C43.6594 151.573 43.0887 152.055 42.6921 152.406C42.4937 152.582 42.3386 152.725 42.2274 152.83C42.1717 152.882 42.127 152.925 42.0933 152.958C42.0764 152.974 42.0623 152.988 42.051 152.999C42.0453 153.005 42.0403 153.01 42.036 153.014C42.0338 153.016 42.0318 153.018 42.03 153.02C42.0291 153.021 42.0279 153.022 42.0275 153.023C42.0263 153.024 42.0251 153.025 44.5 155.5ZM75.5 148C84.8383 148 92.0345 150.564 96.876 153.1C99.2999 154.37 101.131 155.632 102.338 156.558C102.941 157.02 103.386 157.398 103.669 157.648C103.81 157.773 103.911 157.867 103.971 157.923C104 157.951 104.02 157.97 104.029 157.979C104.034 157.983 104.036 157.985 104.035 157.985C104.035 157.984 104.034 157.983 104.032 157.982C104.031 157.981 104.03 157.98 104.029 157.979C104.028 157.978 104.027 157.977 104.027 157.977C104.026 157.976 104.025 157.975 106.5 155.5C108.975 153.025 108.974 153.024 108.973 153.023C108.972 153.022 108.971 153.021 108.97 153.02C108.968 153.018 108.966 153.016 108.964 153.014C108.96 153.01 108.955 153.005 108.949 152.999C108.938 152.988 108.924 152.974 108.907 152.958C108.873 152.925 108.828 152.882 108.773 152.83C108.661 152.725 108.506 152.582 108.308 152.406C107.911 152.055 107.341 151.573 106.6 151.005C105.119 149.868 102.95 148.38 100.124 146.9C94.4655 143.936 86.1617 141 75.5 141V148Z" fill="#FF1F3A" />
            <rect x="3.5" y="3.5" width="142" height="208" rx="12.5" stroke="#FF1F3A" strokeWidth="7" />
            <circle cx="33" cy="119" r="7" fill="#FF1F3A" />
            <circle cx="116" cy="119" r="7" fill="#FF1F3A" />
          </svg>
          <br />
          <h1 className="text-3xl mb-2">Sorry</h1>
          <p className="text-gray-600  max-w-xs">We weren't able to establish a connection to Up. Please check your internet connection and try again.</p>
          <br />
          <br />
          <button className="sm:max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => { setToken(null), setPage(0) }}>
            <div className="text-center text-gray-900">Try again</div>
          </button>
        </div>
      )
    }

    // Loading account data.
    if (!accountData) {
      setError(true)
      return (
        < div className="w-full h-full flex flex-col items-center justify-center text-center" >
          <LoadingIcon className="w-20" />
          <p className="mt-3 text-gray-100 text-sm">Loading account data..</p>
        </div >
      )
    }

    // An error ocurred upon successful API connection.
    if (accountData.errors) {
      setError(true)
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <svg className="w-16 h-24" width="149" height="215" viewBox="0 0 149 215" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.0251 153.025C40.6583 154.392 40.6583 156.608 42.0251 157.975C43.392 159.342 45.608 159.342 46.9749 157.975L42.0251 153.025ZM104.025 157.975C105.392 159.342 107.608 159.342 108.975 157.975C110.342 156.608 110.342 154.392 108.975 153.025L104.025 157.975ZM44.5 155.5C46.9749 157.975 46.9738 157.976 46.9728 157.977C46.9725 157.977 46.9715 157.978 46.971 157.979C46.9698 157.98 46.9689 157.981 46.968 157.982C46.9664 157.983 46.9655 157.984 46.9651 157.985C46.9645 157.985 46.9665 157.983 46.971 157.979C46.9801 157.97 46.9996 157.951 47.0295 157.923C47.0891 157.867 47.1899 157.773 47.3314 157.648C47.6144 157.398 48.0594 157.02 48.6621 156.558C49.8687 155.632 51.7001 154.37 54.124 153.1C58.9655 150.564 66.1617 148 75.5 148V141C64.8383 141 56.5345 143.936 50.876 146.9C48.0499 148.38 45.8813 149.868 44.4004 151.005C43.6594 151.573 43.0887 152.055 42.6921 152.406C42.4937 152.582 42.3386 152.725 42.2274 152.83C42.1717 152.882 42.127 152.925 42.0933 152.958C42.0764 152.974 42.0623 152.988 42.051 152.999C42.0453 153.005 42.0403 153.01 42.036 153.014C42.0338 153.016 42.0318 153.018 42.03 153.02C42.0291 153.021 42.0279 153.022 42.0275 153.023C42.0263 153.024 42.0251 153.025 44.5 155.5ZM75.5 148C84.8383 148 92.0345 150.564 96.876 153.1C99.2999 154.37 101.131 155.632 102.338 156.558C102.941 157.02 103.386 157.398 103.669 157.648C103.81 157.773 103.911 157.867 103.971 157.923C104 157.951 104.02 157.97 104.029 157.979C104.034 157.983 104.036 157.985 104.035 157.985C104.035 157.984 104.034 157.983 104.032 157.982C104.031 157.981 104.03 157.98 104.029 157.979C104.028 157.978 104.027 157.977 104.027 157.977C104.026 157.976 104.025 157.975 106.5 155.5C108.975 153.025 108.974 153.024 108.973 153.023C108.972 153.022 108.971 153.021 108.97 153.02C108.968 153.018 108.966 153.016 108.964 153.014C108.96 153.01 108.955 153.005 108.949 152.999C108.938 152.988 108.924 152.974 108.907 152.958C108.873 152.925 108.828 152.882 108.773 152.83C108.661 152.725 108.506 152.582 108.308 152.406C107.911 152.055 107.341 151.573 106.6 151.005C105.119 149.868 102.95 148.38 100.124 146.9C94.4655 143.936 86.1617 141 75.5 141V148Z" fill="#FF1F3A" />
            <rect x="3.5" y="3.5" width="142" height="208" rx="12.5" stroke="#FF1F3A" strokeWidth="7" />
            <circle cx="33" cy="119" r="7" fill="#FF1F3A" />
            <circle cx="116" cy="119" r="7" fill="#FF1F3A" />
          </svg>
          <br />
          {accountData.errors.map((err, index) => (
            <div key={index}>
              <p className="text-2xl mb-2 text-white">Error: {err.title}</p>
              <p className="text-sm text-gray-600  max-w-xs text-gray-600">{err.status === "401" ? <>The Personal Access Token you provided must have expired or is invalid. Please check your code or <a href="https://api.up.com.au/getting_started" className="text-primary underline" target="_blank" rel="noreferrer">generate a new one.</a></> : err.detail}</p>
              <br />
            </div>
          ))
          }
          <button className="sm:max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => { setToken(null), setPage(0) }}>
            <div className="text-center text-gray-900">Try again</div>
          </button>
        </div >
      )
    }

    setError(false)
    return (
      <>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-center">
            <h1 className="text-4xl font-medium flex items-center text-primary justify-center">
              <TextTransition
                text={`$` + accountData.data[0].attributes.balance.value}
                springConfig={presets.stiff}
              >{`$` + accountData.data[0].attributes.balance.value}</TextTransition>
            </h1>
            <div className="text-gray-100 text-sm text-center w-full">Available</div>
            <br />
            <br />

            <TransactionsList account={accountData.data[0]} token={token} />
          </div>

          <div className="h-fit sm:block hidden">
            <h2 className="text-4xl text-primary font-medium text-center w-full flex items-center justify-center">
              <TextTransition
                text={`$` + accountData.data.reduce((totalSaved, acc, index) => index === 0 ? totalSaved : totalSaved + parseFloat(acc.attributes.balance.value), 0).toFixed(2)}
                springConfig={presets.stiff}
              >{`$` + accountData.data.reduce((totalSaved, acc, index) => index === 0 ? totalSaved : totalSaved + parseFloat(acc.attributes.balance.value), 0).toFixed(2)}</TextTransition>
            </h2>
            <div className="text-gray-100 text-sm text-center w-full">Total saved</div>
            <br />
            <br />

            <div className="grid lg:grid-cols-1 gap-6 ">
              {
                accountData.data.map((account, index) => (
                  <SaverBlock key={index} hasGoal={index != 1} {...account} />
                ))
              }
            </div>
            <br />

            <div>
              <ExportBlock />
            </div>
            <br />

            <div className="flex items-center p-3 rounded bg-green-100 text-green-400">
              <div>
                <h3 className="font-bold">Bonus Rate Activated</h3>
                <div className=" text-xs text-gray-600">Learn more about our interest rates</div>
              </div>
              <p className="ml-auto font-bold text-xl">1.60%</p>
            </div>
            <br />

            <div className="bg-altWhite rounded p-4 pb-8 flex flex-col items-center justify-center">
              <img alt="Pay your friends" src="/payments.gif" className="w-48" />
              <h2 className="text-2xl text-white font-semibold text-center w-full flex items-center justify-center">
                Send Money with Up
              </h2>
              <div className="mt-2 text-gray-400 text-sm text-center w-full">To send payments from your Up account you must first enable this browser by verifying it below.</div>
              <br />
              <button className="max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => alert('Payments coming soon! Waiting on the API.')}>
                <div className="text-center text-gray-900">Enable Payments</div>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={"flex flex-col container" + " " + (page === 2 && !isError ? "" : "h-screen")}>
      <Head>
        <title>Unofficial Up Web — An open banking experiment</title>
        <meta name="description" content="An unofficial web app client for Up Banking, built with their new API." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name='application-name' content='Unofficial Up Web' />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Unofficial Up Web" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
        <meta name='msapplication-TileColor' content='#242430' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name="theme-color" content="#242430"></meta>
        <meta name="robots" content="index,follow" />

        <meta name="og:title" property="og:title" content="Unofficial Up Web — An open banking experiment" />
        <meta name="og:description" property="og:description" content="An UNOFFICIAL web app client for Up Banking, built with their new open banking API." />
        <meta property="og:image" content="https://up-banking-web-unofficial.vercel.app/cover.png" />
        <meta property="og:image:secure_url" content="https://up-banking-web-unofficial.vercel.app/cover.png" />
        <meta property="og:image:alt" content="Unofficial Up Web" />
        <meta property="og:url" content="https://up-banking-web-unofficial.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unofficial Up Web — An open banking experiment" />
        <meta name="twitter:description" content="An UNOFFICIAL web app client for Up Banking, built with their new open banking API." />
        <meta name="twitter:image" content="https://up-banking-web-unofficial.vercel.app/cover.png" />

        <link rel="apple-touch-icon" href="/icon-lg.png"></link>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <header className={"items-center py-6 md:mb-6" + " " + (page === 2 ? "flex" : "md:flex hidden")}>
        {
          page > 0 ?
            <button onClick={() => setPage(0)} className="AnimatedLogo__Root-sc-1is1pya-0 equnmi h-24 w-24 overflow-hidden relative" style={{ height: 75, width: 75 }}>
              <div version="orangeOnYellow" className="AnimatedLogo__Background-sc-1is1pya-1 fjoinp"></div>
              <svg version="orangeOnYellow" className="AnimatedLogo__Wordmark-sc-1is1pya-2 relative text-white" fill="currentColor" viewBox="0 0 900 900"><defs></defs><path d="M782.78 435.5a113.87 113.87 0 0 0-9.47-43.75C747 332.2 692.2 302.46 626.68 312.24a175.72 175.72 0 0 0-32.46 8.07c-3.67-4.73-8.88-6.74-16.81-6.76h-39.22a10.73 10.73 0 0 0-10 7.23c-5.6 15.42-55.3 151.91-71.26 194.3-2.79 7.43-14 31.37-41.05 26.74a21.73 21.73 0 0 1-14.62-10 20.15 20.15 0 0 1-2.58-16.26l.68-2.36c1.59-5.56 3.39-11.86 5.53-17.51l62.48-164.91a10.57 10.57 0 0 0-9.88-14.31c-19.89 0-40.54 0-46.21-.05-9.87-.38-17.34 5.1-20.66 14.52-9.39 26.71-18.92 52.83-28.32 77.64-5.21 13.75-10.11 28.23-14.44 41-5.69 16.86-11.59 34.3-18.33 50.92-4.34 10.72-10.16 22.82-20.4 31.36-13.59 11.31-30.35 15.34-51.22 12.38-8-1.13-14.77-5.7-19.73-13.19-5.06-7.65-7.17-16.85-6.47-28.11.86-13.36 5.25-26.29 10.06-39.45 10.71-29.41 32.5-87.76 49-130.77a10.56 10.56 0 0 0-9.85-14.35H238.44a24.18 24.18 0 0 0-14.11 4c-9.25 6.15-21.38 17.75-35.45 31.2C169.47 372 145.42 395 122 410.19a10.56 10.56 0 0 0-.29 17.55c2.6 1.81 5 1.77 9.31 1a6.62 6.62 0 0 0 1.08-.2c6.6-1.35 21.23-5.05 53.88-13.41-9.3 23.51-18.73 48.72-23.44 75.8-5.74 32.93 2.4 63.7 23.54 89 34 40.68 89.92 42.26 127.55 26.54 14.17-5.92 25.05-15.56 33.94-25.12 17.75 23.47 49.32 33.44 75.4 30.84l-7.06 19.07-2.77 7.48c-11.62 31.45-26.09 70.6-34 90.85-2.67 6.85-2 13.93 1.8 19.46s10.13 8.57 17.75 8.57l38.24-.29a10.47 10.47 0 0 0 10-7c6.21-17.31 15.44-42.92 24.74-68.75l9.3-25.79c10.11-28.08 19.1-53 22.88-63.63l9.15-25.6a118.05 118.05 0 0 0 13.18 13.1c31.85 26.84 68.92 37 110.18 30.15 35.24-5.84 65.5-20.38 89.94-43.24 38.86-36.33 57.87-80.43 56.48-131.07zm-78.54 13.34c-4.64 34.54-20.81 60.79-48.08 78-14.29 9-29.61 13.61-45.55 13.61h-.31c-25.16-.08-46.41-15.77-54.15-40a82 82 0 0 1-3-13.31c-.23-1.61-.32-3.25-.46-5.48l-.17-1.58a108.85 108.85 0 0 1 25.54-65.24c16.69-19.84 38.41-30.84 64.59-32.58 1.36-.09 2.72-.14 4.06-.14 22.12 0 40.69 12 50.94 33 5.78 11.79 8 23.14 6.59 33.72z"></path></svg>
            </button>
            :
            <div style={{ height: 75, width: 75 }} />
        }
        <div className="relative group flex-col z-40 sm:flex hidden">
          <div className={(page > 0 && "ml-3") + " " + "cursor-pointer text-gray-400 group-hover:text-white duration-100 flex items-start"}>Unofficial Demo <div className="ml-1 w-2 h-2 rounded-full bg-primary animate-bounce" /></div>
          <div className="mt-6 absolute w-64 transform origin-top-left group-hover:scale-100 scale-0 duration-100">
            <svg className="text-altWhite h-3 left-0 ml-2 rotate-180 transform" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
            <div className="text-sm rounded bg-altWhite text-primary py-2 px-3" style={{ backdropFilter: 'blur(8px) saturate(40%)', WebkitBackdropFilter: 'blur(8px) saturate(40%)' }}>
              <b className="tracking-wide">NOTE</b> This site is not affiliated with Up Banking in any way.<br />It's purely an application of their new API by a happy customer.
            </div>
          </div>
        </div>

        <nav className="ml-auto grid grid-flow-col gap-6 text-gray-600 items-center">
          <a href="https://up.com.au/" title="Go to Up's website" className="hover:text-gray-700 duration-100" target="_blank" rel="noopener">Up</a>
          {page === 2 && !isError ?
            <>
              <a title="Your activity" className="cursor-pointer text-white">Activity</a>
              <a title="View payments" href="#" className="hover:text-gray-700 duration-100" >Payments</a>
              <Avatar className="text-white" />
              <button onClick={() => router.reload()} className="border border-transparent text-gray-900 font-semibold duration-100 md:flex hidden px-4 py-2 bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150 rounded">Log out</button>
            </>
            :
            <a href="https://www.github.com/peterjskaltsis/up-banking-web-unofficial" title="Check out the source" className="hover:text-gray-700 duration-100" target="_blank" rel="noopener">Github</a>
          }
        </nav>
      </header>

      <main className="flex-1 md:mt-0 mt-6">
        <SwitchTransition mode={'out-in'}>
          <CSSTransition key={page} classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false)
            }}>
            <>
              {page === 0 && <Intro />}
              {page === 1 && <TokenEntry />}
              {page === 2 && <MainApp />}
            </>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <br />

      <footer className="text-gray-600 py-6 md:mb-6 md:mt-6 mb-2 mt-0 border-t border-gray-800 flex md:flex-row flex-col md:text-left items-center text-sm">
        Unofficial Up Banking Website
        <a href="https://peter-s.now.sh/" target="_blank" rel="noopener" className="md:ml-auto mr-6 md:mt-0 mt-3">Built by <span className="text-primary">Peter Skaltsis</span></a>
      </footer>
    </div >
  )
}
