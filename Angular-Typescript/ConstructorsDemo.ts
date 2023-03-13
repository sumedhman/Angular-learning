function Student(){
    let sid:number=101;
    let sName:string="Srikant";
    let isActive:boolean=true;
    let sMark:number[]=[45,67,89];
    let total:number=0;
    for(let i of sMark){
        total+=i;
    }
}
 let std=new Student();
 console.log("Student Name is"+std.sName)
 console.log("Student Name is"+std.sMark)
 console.log("Student Name is"+std.total)
 console.log("Student Name is"+std.sid)