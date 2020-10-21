const fromatPrice=function (price){
	let st=price.toString().split(".")
	if(parseInt(st[1])===0){
		return st[0]
	};
	return parseInt(st[0])+parseInt(st[1])/100
}

export default{
	fromatPrice
}