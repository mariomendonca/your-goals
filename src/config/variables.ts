const API_KEY = process.env.API_KEY
const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const PROJECT_ID = process.env.PROJECT_ID
const STORAGE_BUCKET = process.env.STORAGE_BUCKET
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID
const DATABASE_URL = process.env.DATABASE_URL
const MEASUREMENT_ID = process.env.MEASUREMENT_ID
const APP_ID = process.env.APP_ID
const CLIENT_ID = process.env.CLIENT_ID
const SECRET_CLIENT_KEY = process.env.SECRET_CLIENT_KEY
const REDIRECT_URI = process.env.REDIRECT_URI
const RESPONSE_TYPE = process.env.RESPONSE_TYPE
const SCOPE = encodeURI('profile email')
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`


export {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  DATABASE_URL,
  MEASUREMENT_ID,
  APP_ID,
  CLIENT_ID,
  SECRET_CLIENT_KEY,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
  authUrl
}