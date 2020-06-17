import key from './APIKEY'

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(key)

export default newsapi