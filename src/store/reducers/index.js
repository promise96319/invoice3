
import { combineReducers } from 'redux'
import company from './company'
import userInfo from './userInfo'
import account from './account'
import accountfilter from './accountfilter'

export default combineReducers({
	company,
	userInfo,
	account,
	accountfilter,
})
