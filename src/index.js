// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var results = new Object();

if (currency>10000)
	{
	results.error="You are rich, my friend! We don't have so much coins for exchange";
	return results;
	}
if (currency<=0){
	return results;
}
var H=Math.floor(currency/50);console.log(H);
	currency=currency%50;console.log(currency);
if (H!=0)
	{
		results.H=H;
	}
var Q=Math.floor(currency/25);console.log(H);
currency=currency%25;
if (Q!=0)
	{
		results.Q=Q;
	}
var D=Math.floor(currency/10);
	currency=currency%10;
if (D!=0)
	{
		results.D=D;
	}
var N=Math.floor(currency/5);
	if (N!=0){
		results.N=N;
	}
var P=currency%5;
if (P!=0){
	results.P=P;
}

return results;

}
