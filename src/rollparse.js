function parseArgument(strArg){
    const splitString = strArg.split('d');
    for (let i = 0; i<2; i++){
        splitString[i]=splitString[Number(i)]
    }
    return splitString;
}

module.exports = parseArgument
