import { handleActions } from 'redux-actions'
import { UPDATETOTALINVOICE } from '../types/account'

const account = [
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 0,
		status: 'unchecked',
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout'
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 0,
		status: 'unchecked'
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout'
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'unchecked'
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 0,
		status: 'checkedout'
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": '2018年2月2日', //开票日期
		"invoiceNum": '2388442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'unchecked'
	},
]

export default handleActions({
	[UPDATETOTALINVOICE](state, action){
		return action.payload
	}
}, account)
