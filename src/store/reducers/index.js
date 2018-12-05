
import { combineReducers } from 'redux'
import company from './company'
import userInfo from './userInfo'
import account from './account'

export default combineReducers({
	company,
	userInfo,
	account,
})
