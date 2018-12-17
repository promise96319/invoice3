import { handleActions } from 'redux-actions'
import { UPDATEUSERINFO } from '../types/userInfo'

// const userInfo = {
// 	no: 'LvGqvcuZmgf4'
// }
const userInfo = null

export default handleActions({
	[UPDATEUSERINFO](state, action){
		return action.payload
	}
}, userInfo)
