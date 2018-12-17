
import { handleActions } from 'redux-actions'
import { UPDATEFILTERCATE } from '../types/accountfilter'

const accountFilterState = {
	totalAccount: {
		// isAccountPeriod: false,
		// minUploadedDate: 0,
		// maxUploadedDate: 0,
		// accountPeriod: 0,
		// companyKeyword: '',
		// identity: 0,
		// invoiceNum: '134',
		// minBillingDate: 0,
		// maxBillingDate: 0,
		// minPrice: 0,
		// maxPrice: 0,
	},
	uncheckedAccount: {},
	checkedoutAccount: {}
}

export default handleActions({
	[UPDATEFILTERCATE](state, action){
		switch (action.payload.active) {
			case 0:
				return {
					...state,
					totalAccount: action.payload.filterCate
				}
			case 1:
				return {
					...state,
					uncheckedAccount: action.payload.filterCate
				}
			case 2:
				return {
					...state,
					checkedoutAccount: action.payload.filterCate
				}
		}
	}
}, accountFilterState)
