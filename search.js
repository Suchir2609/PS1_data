const fs = require('fs')

const search = (word, file)=>{
    const results = []

    const databuffer = fs.readFileSync(file)
    const dataJSON = databuffer.toString()
    const parsedData=JSON.parse(dataJSON)

    for(let i=0; i<parsedData.length; i++){
        if(parsedData[i].station.includes(word)){
            results.push(parsedData[i]) 
        } else if (true){
            for(let j=0; j<parsedData[i].positions.length; j++){
                if (parsedData[i].positions[j].title.includes(word)){
                    results.push(parsedData[i])
                } else {

                }
            }
            
        } else {

        }
    }
    return results
}


module.exports = search