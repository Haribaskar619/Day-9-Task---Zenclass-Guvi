// Day 9 - Task 

const getCountries = () => {
    console.log("Getting countries.....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        console.log(countries);
        const reg = "Asia";

        // Countries in Asia Region
        const countNameList = countries.filter(countries => countries.region === reg);
        console.log(countNameList.map((countNameList) => { return { name: countNameList.name.common , region : countNameList.region }}));

        // countries below 2 lakh population
        const popLess = countries.filter(countries => countries.population < 2_00_000 );
        console.log(popLess.map((popLess) => { return {name: popLess.name.common , population: popLess.population} }))

        // for each using and display name , capital & flag
        countries.forEach(element => {
            console.log(element.name.common,element.capital, element.flag)
        });

        // using reduce total population
        const allPop = countries.filter(countries => countries.population);
        console.log(allPop.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.population;
        },0));

        // show countries with us dollars
        const curr = {name:"United States dollar"}
        const totalPop = countries.filter(countries => countries.currencies === curr);
        const usCurr = (totalPop.map((totalPop) => { return {currencies: totalPop.currencies.name} }));
        console.log(usCurr);
        
    }
}

getCountries();




