 function saturdayFun (activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
 }
 function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`
 }
 let wrapAdjective = function(type='*'){
    return function(adjective="hard-worker"){
        return `You are ${type}${adjective}${type}!`
    }
 }
