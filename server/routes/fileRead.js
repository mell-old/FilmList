const fs = require('fs');
module.exports = (fileData) =>{
    //console.log(fileData);
    let arrayData = fileData.split('\n');
    //console.log(arrayData);
    const elements = arrayData.filter(el=> el !== '');
    //console.log(elements);
    arrayData = elements.map(el =>{
            const element = el.split(': ')[1];
            console.log(element);
            return element;
    });
    //console.log(arrayData);
    let data = [];
    for (let i = 0; i<arrayData.length; i +=4)
    {
        data.push({
            Title: arrayData[i],
            ReleaseYear: arrayData[i+1],
            Format: arrayData[i+2],
            Stars: arrayData[i+3].split(', ')
        });
    }
    return data;
};
