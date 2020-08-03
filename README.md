# Unofficial Up Banking Web App — An open banking experiment

> The project is built with [Next.js](https://nextjs.org/) and hosted with [Vercel](https://vercel.com/).

Up [recently released](https://up.com.au/blog/api_lets_hack_on_banking/) the beta version of their [API](https://developer.up.com.au/) and I decided to build a web app to complement Up's mobile app (I've found this also makes a great PWA iPad app for Up too).

This app also uses the `SWR` (stale-while-revalidate) HTTP strategy, so your balances and transactions _refresh auto-magically_ (try it out by transferring some 💰).

You can visit the site [here](https://up-banking-web-unofficial.vercel.app) and use your own `Personal Access Token` 👾 (which you can get [here](https://api.up.com.au/getting_started/)), to view your transactions and savers. OR you can fork/clone the repo and play with it on your own machine.

As the API is in `beta`, not many features are available nor is much data, so it's really just a read-only dashboard for now. However, I plan on building some features into the project as the API blossoms! 🎉

> **DISCLAIMER** This site is not affiliated with Up Banking in any way. It's purely an exercise of experimention with their API. Your token is not sent to any server etc, it is only stored in React's state, and wiped on refresh.

Thank you for the awesome API [@up-banking](https://www.github.com/up-banking)! ⚡️

Built by [Peter Skaltsis](https://www.twitter.com/peterjskaltsis).

## Extensions

- [ ] Add savers

## Getting Started

First, install dependencies with:

```bash
npm i
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file (note, it full reloads the page due to the dodgy re-rendering of the single page).

## Deploy on Vercel

The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
