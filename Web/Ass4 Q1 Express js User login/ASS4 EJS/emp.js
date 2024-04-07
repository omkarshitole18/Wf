const express = require('express');
const app = express();
const port =4000;

app.set('view engine','ejs');



app.use(express.urlencoded({ extended: false }));


let emps = [];

app.get('/', (req, res) => {
    res.render('emp1', { emps: emps });
});

app.get('/emp', (req, res) => {
    res.render('emp');
});


app.post('/emp', (req, res) => {
    const emp = {
        Name: req.body.Name,
        Age: req.body.Age,
        Designation: req.body.Designation
    };
    emps.push(emp);
    res.redirect('/');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

