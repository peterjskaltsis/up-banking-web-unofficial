import Head from 'next/head'
import Link from 'next/link'

export default function Error() {
    return (
        <div className={"flex flex-col container h-screen"}>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0" />
                <meta name='msapplication-TileColor' content='#242430' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name="theme-color" content="#242430"></meta>
                <meta name="robots" content="noindex,nofollow" />

                <link rel="apple-touch-icon" href="/icon-lg.png"></link>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <header className={"items-center py-6 md:mb-6 md:flex hidden"}>
                <Link href="/">
                    <a title="Return home" className="AnimatedLogo__Root-sc-1is1pya-0 equnmi h-24 w-24 overflow-hidden relative" style={{ height: 75, width: 75 }}>
                        <div version="orangeOnYellow" className="AnimatedLogo__Background-sc-1is1pya-1 fjoinp"></div>
                        <svg version="orangeOnYellow" className="AnimatedLogo__Wordmark-sc-1is1pya-2 relative text-white" fill="currentColor" viewBox="0 0 900 900"><defs></defs><path d="M782.78 435.5a113.87 113.87 0 0 0-9.47-43.75C747 332.2 692.2 302.46 626.68 312.24a175.72 175.72 0 0 0-32.46 8.07c-3.67-4.73-8.88-6.74-16.81-6.76h-39.22a10.73 10.73 0 0 0-10 7.23c-5.6 15.42-55.3 151.91-71.26 194.3-2.79 7.43-14 31.37-41.05 26.74a21.73 21.73 0 0 1-14.62-10 20.15 20.15 0 0 1-2.58-16.26l.68-2.36c1.59-5.56 3.39-11.86 5.53-17.51l62.48-164.91a10.57 10.57 0 0 0-9.88-14.31c-19.89 0-40.54 0-46.21-.05-9.87-.38-17.34 5.1-20.66 14.52-9.39 26.71-18.92 52.83-28.32 77.64-5.21 13.75-10.11 28.23-14.44 41-5.69 16.86-11.59 34.3-18.33 50.92-4.34 10.72-10.16 22.82-20.4 31.36-13.59 11.31-30.35 15.34-51.22 12.38-8-1.13-14.77-5.7-19.73-13.19-5.06-7.65-7.17-16.85-6.47-28.11.86-13.36 5.25-26.29 10.06-39.45 10.71-29.41 32.5-87.76 49-130.77a10.56 10.56 0 0 0-9.85-14.35H238.44a24.18 24.18 0 0 0-14.11 4c-9.25 6.15-21.38 17.75-35.45 31.2C169.47 372 145.42 395 122 410.19a10.56 10.56 0 0 0-.29 17.55c2.6 1.81 5 1.77 9.31 1a6.62 6.62 0 0 0 1.08-.2c6.6-1.35 21.23-5.05 53.88-13.41-9.3 23.51-18.73 48.72-23.44 75.8-5.74 32.93 2.4 63.7 23.54 89 34 40.68 89.92 42.26 127.55 26.54 14.17-5.92 25.05-15.56 33.94-25.12 17.75 23.47 49.32 33.44 75.4 30.84l-7.06 19.07-2.77 7.48c-11.62 31.45-26.09 70.6-34 90.85-2.67 6.85-2 13.93 1.8 19.46s10.13 8.57 17.75 8.57l38.24-.29a10.47 10.47 0 0 0 10-7c6.21-17.31 15.44-42.92 24.74-68.75l9.3-25.79c10.11-28.08 19.1-53 22.88-63.63l9.15-25.6a118.05 118.05 0 0 0 13.18 13.1c31.85 26.84 68.92 37 110.18 30.15 35.24-5.84 65.5-20.38 89.94-43.24 38.86-36.33 57.87-80.43 56.48-131.07zm-78.54 13.34c-4.64 34.54-20.81 60.79-48.08 78-14.29 9-29.61 13.61-45.55 13.61h-.31c-25.16-.08-46.41-15.77-54.15-40a82 82 0 0 1-3-13.31c-.23-1.61-.32-3.25-.46-5.48l-.17-1.58a108.85 108.85 0 0 1 25.54-65.24c16.69-19.84 38.41-30.84 64.59-32.58 1.36-.09 2.72-.14 4.06-.14 22.12 0 40.69 12 50.94 33 5.78 11.79 8 23.14 6.59 33.72z"></path></svg>
                    </a>
                </Link>

                <div className="relative group flex-col z-40 sm:flex hidden">
                    <div className={"cursor-pointer text-gray-400 group-hover:text-white duration-100 flex items-start"}>Unofficial Demo <div className="ml-1 w-2 h-2 rounded-full bg-primary animate-bounce" /></div>
                    <div className="mt-6 absolute w-64 transform origin-top-left group-hover:scale-100 scale-0 duration-100">
                        <svg className="text-altWhite h-3 left-0 ml-2 rotate-180 transform" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                        <div className="text-sm rounded bg-altWhite text-primary py-2 px-3" style={{ backdropFilter: 'blur(8px) saturate(40%)', WebkitBackdropFilter: 'blur(8px) saturate(40%)' }}>
                            <b className="tracking-wide">NOTE</b> This site is not affiliated with Up Banking in any way.<br />It's purely an application of their new API by a happy customer.
              </div>
                    </div>
                </div>

                <nav className="ml-auto grid grid-flow-col gap-6 text-gray-600 items-center">
                    <a href="https://up.com.au/" title="Go to Up's website" className="hover:text-gray-700 duration-100" target="_blank" rel="noopener">Up</a>

                    <a href="https://www.github.com/peterjskaltsis/up-banking-web-unofficial" title="Check out the source" className="hover:text-gray-700 duration-100" target="_blank" rel="noopener">Github</a>

                </nav>
            </header>

            <main className="flex-1 md:mt-0 mt-6">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <svg className="w-16 h-24" width="149" height="215" viewBox="0 0 149 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.0251 153.025C40.6583 154.392 40.6583 156.608 42.0251 157.975C43.392 159.342 45.608 159.342 46.9749 157.975L42.0251 153.025ZM104.025 157.975C105.392 159.342 107.608 159.342 108.975 157.975C110.342 156.608 110.342 154.392 108.975 153.025L104.025 157.975ZM44.5 155.5C46.9749 157.975 46.9738 157.976 46.9728 157.977C46.9725 157.977 46.9715 157.978 46.971 157.979C46.9698 157.98 46.9689 157.981 46.968 157.982C46.9664 157.983 46.9655 157.984 46.9651 157.985C46.9645 157.985 46.9665 157.983 46.971 157.979C46.9801 157.97 46.9996 157.951 47.0295 157.923C47.0891 157.867 47.1899 157.773 47.3314 157.648C47.6144 157.398 48.0594 157.02 48.6621 156.558C49.8687 155.632 51.7001 154.37 54.124 153.1C58.9655 150.564 66.1617 148 75.5 148V141C64.8383 141 56.5345 143.936 50.876 146.9C48.0499 148.38 45.8813 149.868 44.4004 151.005C43.6594 151.573 43.0887 152.055 42.6921 152.406C42.4937 152.582 42.3386 152.725 42.2274 152.83C42.1717 152.882 42.127 152.925 42.0933 152.958C42.0764 152.974 42.0623 152.988 42.051 152.999C42.0453 153.005 42.0403 153.01 42.036 153.014C42.0338 153.016 42.0318 153.018 42.03 153.02C42.0291 153.021 42.0279 153.022 42.0275 153.023C42.0263 153.024 42.0251 153.025 44.5 155.5ZM75.5 148C84.8383 148 92.0345 150.564 96.876 153.1C99.2999 154.37 101.131 155.632 102.338 156.558C102.941 157.02 103.386 157.398 103.669 157.648C103.81 157.773 103.911 157.867 103.971 157.923C104 157.951 104.02 157.97 104.029 157.979C104.034 157.983 104.036 157.985 104.035 157.985C104.035 157.984 104.034 157.983 104.032 157.982C104.031 157.981 104.03 157.98 104.029 157.979C104.028 157.978 104.027 157.977 104.027 157.977C104.026 157.976 104.025 157.975 106.5 155.5C108.975 153.025 108.974 153.024 108.973 153.023C108.972 153.022 108.971 153.021 108.97 153.02C108.968 153.018 108.966 153.016 108.964 153.014C108.96 153.01 108.955 153.005 108.949 152.999C108.938 152.988 108.924 152.974 108.907 152.958C108.873 152.925 108.828 152.882 108.773 152.83C108.661 152.725 108.506 152.582 108.308 152.406C107.911 152.055 107.341 151.573 106.6 151.005C105.119 149.868 102.95 148.38 100.124 146.9C94.4655 143.936 86.1617 141 75.5 141V148Z" fill="#FF1F3A" />
                        <rect x="3.5" y="3.5" width="142" height="208" rx="12.5" stroke="#FF1F3A" strokeWidth="7" />
                        <circle cx="33" cy="119" r="7" fill="#FF1F3A" />
                        <circle cx="116" cy="119" r="7" fill="#FF1F3A" />
                    </svg>
                    <br />
                    <h1 className="text-3xl mb-2">Page not found</h1>
                    <p className="text-gray-600  max-w-xs">Sorry, but the page you were trying to view does not exist.</p>
                    <br />
                    <br />
                    <Link href="/">
                        <a title="Go back to the home page" className="sm:max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150">
                            <div className="text-center text-gray-900">Go Home</div>
                        </a>
                    </Link>
                </div>
            </main>
            <br />

            <footer className="text-gray-600 py-6 md:mb-6 md:mt-6 mb-2 mt-0 border-t border-gray-800 flex md:flex-row flex-col md:text-left items-center text-sm">
                Unofficial Up Banking Website
                <a href="https://peter-s.now.sh/" target="_blank" rel="noopener" className="md:ml-auto mr-6 md:mt-0 mt-3">Built by <span className="text-primary">Peter Skaltsis</span></a>
            </footer>
        </div >
    )
}