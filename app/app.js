// Application B (appB.js)
const { dir } = require('console');
const express = require('express');
const app = express();
const port = 4000;
const path = require('path')

function directory(where1, where2, where3, where4){
let dirPath = path.join(path.dirname(__dirname), where1)


    if(where1 == undefined){
        return null 
    }
    if(where2 == undefined){
        return dirPath
    }
    if(where3 == undefined){
        return dirPath + '\\' + where2
    }
    if(where4 == undefined){
        return dirPath + '\\' + where2 + '\\' + where3
    }
}

app.get('/styles.css', (req,res) =>{ 
    res.sendFile(directory('frontend' , 'styles.css'));
});


app.get('/', (req,res) =>{ 
    res.sendFile(directory('frontend' , 'index.html'));
});

app.get('/images/Chess_klt45.svg', (req,res) =>{ 
    res.sendFile(directory('frontend', 'images' , 'Chess_klt45.svg'));
});


app.listen(port)