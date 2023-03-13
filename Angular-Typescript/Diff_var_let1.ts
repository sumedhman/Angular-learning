//we have variable with the help of  session 10
//var, let, const
//var is functioned scoped variable. it is access any wehre
//let is blocked scoped is variable. it is acccess in block only
//let variable is assigned one time in block.

function Test(){
    var mark:number =35
    var result:string = "pass"
    if(mark<35){
        var result:string ="fail"
        console.log("inside the if"+result)

    }
    console.log("outside the if"+result)
}
Test();  
