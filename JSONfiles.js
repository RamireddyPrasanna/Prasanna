const{readFile,writeFile}=require('fs');
let emp=[
    {id: 1,name:'john'},
    {id: 2,name:'mahi'},
    {id: 3,name:'sindhu'},
    {id: 4,name:'likki'},
    {id: 5,name:'mouni'},
    {id: 6,name:'harry'},
    {id: 7,name:'peter'},
    {id: 8,name:'navya'},
    {id: 9,name:'pavani'},
    {id: 10,name:'sai'},
];
writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err)throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err)throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});