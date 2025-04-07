
expenses = {
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
    result = null;
    const reformed = Object.entries(expenses)
    const find_days = reformed.reduce((acc,curr,index)=>{
        let was_sunday = false
        const days = Object.entries(reformed[index][1])
        const days_counted = days.reduce((acc1,curr1,index1)=>{
            const day = `${reformed[index][0]}-${curr1[0]}`
            const dated = new Date(day)
            const dated2 = dated.toDateString()
            const week_day = dated2.slice(0,3)
            if(was_sunday==false){
                let summed = 0.0
                if(curr1[1].food){
                    const food = curr1[1].food.reduce((accfood,currfood)=>{
                        accfood+=currfood
                        return accfood
                    },0.0)
                    summed+=food
                }
                if(curr1[1].fuel){
                    const fuel = curr1[1].fuel.reduce((accfuel,currfuel)=>{
                        accfuel+=currfuel
                        return accfuel
                    },0.0)
                    summed+=fuel
                }
                acc.push(summed)
            }
            if(week_day=="Sun"){
                was_sunday = true
            }
        },[])
        return acc
    },[])
    const sorted = find_days.sort((a, b) => a - b)
    return result;
}
// func solution2(expenses) {
//     result = null;
//     // ...
//     return result;
// }
solution1(expenses)