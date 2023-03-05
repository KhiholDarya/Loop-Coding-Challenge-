const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
function calcTip (bills){
		if (bills >= 50 && bills <= 300){
			return  (bills / 100) * 15;
		} else{
			return   (bills / 100) * 20;
		}
}

for (let i=0; i < bills.length; i++){
	tips.push (calcTip(bills[i]));
	total.push (tips[i] + bills[i]);
	console.log(` The bill is ${bills[i]},the tips are ${tips[i]} and the total value is ${total[i]}.`);
}

let sum = 0;
function calcAverage(arr){
	for(let i = 0; i < arr.length; i++){
		sum +=  arr[i];
	}
	console.log(sum);
	sum /= arr.length;
	return sum;
}
calcAverage(total);
console.log(sum);