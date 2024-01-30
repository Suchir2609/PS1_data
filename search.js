const fs = require('fs')

const search = (word, file)=>{
    const results = []

    const databuffer = fs.readFileSync(file)
    const dataJSON = databuffer.toString()
    const parsedData=JSON.parse(dataJSON)

    for(let i=0; i<parsedData.length; i++){
        if(parsedData[i].station.includes(word)){
            results.push(parsedData[i]) 
        } else {
            
        }
    }
    return results
}


module.exports = search