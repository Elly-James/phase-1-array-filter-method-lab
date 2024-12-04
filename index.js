// Code your solution here


function findMatching(arr, str){
    let x= arr.filter((y) => y.toLowerCase() === str.toLowerCase())
    return x
}
console.log(findMatching( [ 'Bobby', 'bobby' ], "bobBy"));

function fuzzyMatch(arr2, str2){
    let y=arr2.filter((x)=> x.charAt(1)===str2.charAt(1))
    return y;
}
console.log(fuzzyMatch([ 'Sammy', 'Sarah', 'Sally' ], "Sarah"))


const drivers = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "New York" },
    { name: "Annette", hometown: "Atlanta" },
    { name: "Bobby", hometown: "Boston" }
];


function matchName(arr4, str5){
    
    return arr4.filter((drivers)=> drivers.name===str5)
}
console.log(matchName(drivers, "Bobby"));

