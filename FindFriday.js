    let date = new Date(), y = date.getFullYear(), m = date.getMonth(); // Gives us the current day in (Day Month Date Year Hours Seconds), parameters y for Year and m For Month
    let firstDay = new Date(y, m, 1);  //Finds the first day of the month you are currently in. Increment m paramater too loop trough all first days of the year
    let lastDay = new Date(y, m + 1, 0); //Finds the last day of the month you are currently in. Increment m paramater too loop trough all first days of the year
    let MonthLength = lastDay.toString().substr(8,2) // Finds the length of the chosen month(29,30,31), used if you want too loop trough entire month

        for (let i= 1; i <= 7; i++) { // Normal for loop that increments the value of i for each loop i is set too 1 because januar is == 1 not 0. loop 7 times because the is the max length too friday
            let IsItFriday = new Date(y, m+1, i);  //Finds the first friday of the current month.
                if(IsItFriday.toString().substr(0,3) == "Fri"){ // Takes IsItFriday object and turns it into a string, everything after the frist 3 characters(Giving us only the month e.g.(Fri, Mon, Sun etc.))
                    console.log(IsItFriday) //logs the first friday in the given month
                    IsItFriday = new Date(y, m+1, i-4);  //Takes the first friday of the month and decrements by 4 (Because we are looking for a monday monday is 4 days before friday)
                    console.log("\nMonday: " + IsItFriday+"\n\n") // logs the monday before the first friday of the month
                }
        }
