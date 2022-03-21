/*jslint white:true */
/*global console */
    const d = new Date();
    let penis = d.getMonth();
    let a = 2
    console.log("HELLO: " + penis)


function lastFridayOfMonth(year, month) { "use strict";
	let lastDay = new Date(year, month+1, 0);
	if(lastDay.getDay() < 5) {
		lastDay.setDate(lastDay.getDate() - 7);
	}
	lastDay.setDate(lastDay.getDate() - (lastDay.getDay() -5));
    return lastDay;
}

console.log("HELLO: " + penis)

let year, month;

for(year=2022;year >= 2022;year -= 1) {
    
    console.log("HELLO: " + penis)

	for(month=11;month >= 0;month -= 1) {

        if(penis == month){

		let day = lastFridayOfMonth(year, month), dm7 = new Date(+day);
        console.log(day.getDay() + " " + day + " " + dm7);
    }
    else{
        console.log("PEEPEE")
    }
	}
}    console.log("HELLO: " + penis)
