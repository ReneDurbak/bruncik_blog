const express = require('express');
const PORT = 3306;
const app = express();
const cors = require('cors');
const db = require('./db')

app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    return res.json('My backend')
}) 

app.get('/articles', (req, res) => {
    db.query('SELECT * FROM articles', (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.json(results);
    });
  });
  

  app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT}`)
})