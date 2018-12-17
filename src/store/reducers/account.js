import { handleActions } from 'redux-actions'
import { UPDATETOTALINVOICE } from '../types/account'

const account = [
	{
		"purchaserName": '有方教育--------测试发票',
		"sellerName": '科技公司',

		"amountInFiguers": '12131', //价税合计

		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '62363',  //发票号码

		identity: 2,
		whoPays: 2,
		employeeName: '小明',
		reason: 3,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
		status: 'unchecked',
		createdAt: 1545070365056,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '62535',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout',
		createdAt: 1534370365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '625235',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 2,
		status: 'unchecked',
		createdAt: 1594040365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '6265432',  //发票号码
		"purchaserName": '有方教育1',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout',
		createdAt: 1544370365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '62523',  //发票号码
		"purchaserName": '有方教育2',
		"sellerName": '科技公司',
		identity: 2,
		status: 'unchecked',
		createdAt: 1544070335056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544271365056, //开票日期
		"invoiceNum": '466243562',  //发票号码
		"purchaserName": '有方教育3',
		"sellerName": '科技公司',
		identity: 2,
		status: 'checkedout',
		createdAt: 1564071365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '3452542',  //发票号码
		"purchaserName": '有方教育4',
		"sellerName": '科技公司',
		identity: 1,
		status: 'unchecked',
		createdAt: 1541020365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544051365056, //开票日期
		"invoiceNum": '6344245',  //发票号码
		"purchaserName": '有方教育5',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout',
		createdAt: 1534330695056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '2662388442',  //发票号码
		"purchaserName": '有方教育5',
		"sellerName": '科技公司',
		identity: 2,
		status: 'unchecked',
		createdAt: 1594050465056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544091365056, //开票日期
		"invoiceNum": '23828446442',  //发票号码
		"purchaserName": '有方教育7',
		"sellerName": '科技公司',
		identity: 1,
		status: 'checkedout',
		createdAt: 1544370965056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544071365056, //开票日期
		"invoiceNum": '622388442',  //发票号码
		"purchaserName": '有方教育8',
		"sellerName": '科技公司',
		identity: 1,
		status: 'unchecked',
		createdAt: 1544070435056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1546271365056, //开票日期
		"invoiceNum": '2733288442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 2,
		status: 'checkedout',
		createdAt: 1564077365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
	{
		"amountInFiguers": '12131', //价税合计
		"serviceDetail": [],  //信息详情
		"invoiceDate": 1544021365056, //开票日期
		"invoiceNum": '2352688442',  //发票号码
		"purchaserName": '有方教育到几点',
		"sellerName": '科技公司',
		identity: 1,
		status: 'unchecked',
		createdAt: 1549070365056,
		"serviceDetail": [{
			commodityName: '餐饮',
			commodityAmount: '23',
			commodityTax: '24'
		}],
		"invoiceType": 1,
	},
]

export default handleActions({
	[UPDATETOTALINVOICE](state, action){
		return action.payload
	}
}, account)
