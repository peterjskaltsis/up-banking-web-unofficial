
// The Up Banking API URL.
export const apiUrl = 'https://api.up.com.au/api/v1'

/**
 * Simple fetcher for SWR that sends a provided token with a request.
 */
export const queryWithToken = (url, token) => fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json())

export const queryWithTokenAndParams = (url, token, params) => fetch(url + '?' + new URLSearchParams(params).toString(), { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json())