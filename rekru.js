// solution1: 1.208ms solution2: 0.362ms
const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
}

function solution1(expenses) {
    const first_sundays = ["2023-01-01", "2023-02-05", "2023-03-05", "2023-04-02", "2023-05-07", "2023-06-04", "2023-07-02", "2023-08-06", "2023-09-03", "2023-10-01", "2023-11-05", "2023-12-03"]
    let result = null;
    const reformed = Object.entries(expenses)
    const find_days = reformed.reduce((acc,curr,index)=>{
        const days = Object.entries(reformed[index][1])
        days.reduce((acc1,curr1,index1)=>{
            const day = `${reformed[index][0]}-${curr1[0]}`
            const dated = new Date(day)
            const dated2 = `${dated}`
            const find_month = first_sundays.find((month)=>{
                month.slice(5,7) == reformed[index][0].slice(5,7)
                if(month.slice(5,7) == reformed[index][0].slice(5,7)){
                    return reformed[index][0]
                }
            })
            if(day<=find_month){
                if(curr1[1].food){
                    curr1[1].food.reduce((accfood,currfood)=>{
                        acc.push(currfood)
                        return accfood
                    },0.0)
                }
                if(curr1[1].fuel){
                    curr1[1].fuel.reduce((accfuel,currfuel)=>{
                        acc.push(currfuel)
                        return accfuel
                    },0.0)
                }
            }
        },[])
        return acc
    },[])
    const sorted = find_days.sort((a, b) => a - b)
    const dlugosc = find_days.length
    if(dlugosc%2!=0){
        result = sorted[(dlugosc-1)/2]
    }
    else{
        result = (sorted[dlugosc/2 - 1]+sorted[dlugosc/2])/2
    }
    return result;
}
function solution2(expenses) {
    function quickSort(arr) {
        if (arr.length <= 1){
            return arr
        }
        const piwot = arr[Math.floor(arr.length / 2)]
        const lewo = arr.filter(x => x < piwot)
        const srodek = arr.filter(x => x === piwot)
        const prawo = arr.filter(x => x > piwot)
        return [...quickSort(lewo), ...srodek, ...quickSort(prawo)]
    }
    const first_sundays = ["2023-01-01", "2023-02-05", "2023-03-05", "2023-04-02", "2023-05-07", "2023-06-04", "2023-07-02", "2023-08-06", "2023-09-03", "2023-10-01", "2023-11-05", "2023-12-03"]
    let result = null;
    const reformed = Object.entries(expenses)
    const find_days = reformed.reduce((acc,curr,index)=>{
        const days = Object.entries(reformed[index][1])
        days.reduce((acc1,curr1,index1)=>{
            const day = `${reformed[index][0]}-${curr1[0]}`
            const dated = new Date(day)
            const dated2 = `${dated}`
            const find_month = first_sundays.find((month)=>{
                month.slice(5,7) == reformed[index][0].slice(5,7)
                if(month.slice(5,7) == reformed[index][0].slice(5,7)){
                    return reformed[index][0]
                }
            })
            if(day<=find_month){
                if(curr1[1].food){
                    curr1[1].food.reduce((accfood,currfood)=>{
                        acc.push(currfood)
                        return accfood
                    },0.0)
                }
                if(curr1[1].fuel){
                    curr1[1].fuel.reduce((accfuel,currfuel)=>{
                        acc.push(currfuel)
                        return accfuel
                    },0.0)
                }
            }
        },[])
        return acc
    },[])
    const dlugosc = find_days.length    
    sorted = quickSort(find_days)
    if(dlugosc%2!=0){
        result = sorted[(dlugosc-1)/2]
    }
    else{
        result = (sorted[dlugosc/2 - 1]+sorted[dlugosc/2])/2
    }
    return result;
}
console.time("solution1")
solution1(expenses)
console.timeLog("solution1")
console.time("solution2")
solution2(expenses)
console.timeLog("solution2")