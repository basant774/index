import express from "express";
const app = express();
const students =[
    {
    id: 1,
    name: "basant",
    },{
    id: 2,
    name: "amr",    
    },
    {
    id: 3,
    name: "mohamed",    
    }
];
const studentsfunction = (request, response) =>{
    let output = '<ul>';
    for (let i=0;i<students.length;i++){
        const student =students[i];
        output +='<li>' +student.name + '</li>';
    }

    output += '</ul>'
response.send(output);
};
app.get('/students', studentsfunction);


app.listen(5000);