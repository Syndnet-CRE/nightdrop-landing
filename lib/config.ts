// Dashboard app URL. Set NEXT_PUBLIC_APP_URL in Netlify env vars
// e.g. https://app.nightdrop.com or https://deal-feed-dashboard.netlify.app
const _appUrl = process.env.NEXT_PUBLIC_APP_URL;
if (!_appUrl) {
  throw new Error('NEXT_PUBLIC_APP_URL is not set. Add it to .env.local for dev or Netlify env vars for deploy.');
}
export const APP_URL = _appUrl;

export const LOGIN_URL = `${APP_URL}/login`
export const SIGNUP_URL = `${APP_URL}/signup`
