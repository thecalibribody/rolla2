function roll(values){
    const amount = values[0];
    const type = values[1];

    let results = [];

    for (let i = 0; i < amount; i++){
        results.push(Math.floor(Math.random()*type)+1);
        
    }
    
    return results;
    
}


module.exports = roll;