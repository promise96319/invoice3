
import { handleActions } from 'redux-actions'
import { UPDATECOMPANY, UPDATEDEFAULTCOMPANY } from '../types/company'

const companyState = {
	company: [],
	defaultCompany: {
		id: 8,
		name: '有略教育科技有限公司',
		
	}
}

export default handleActions({
	[UPDATECOMPANY](state, action){
		return {
			...state,
			company: action.payload
		}
	},
	[UPDATEDEFAULTCOMPANY] (state, action) {
		return {
			...state,
			defaultCompany: action.payload
		}
	}
}, companyState)
