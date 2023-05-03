//https://jsonlint.con
//those type data json support
//string
//number
//object(json object)
//array
//boolean
//null

//Doesn't Support json those Data undefined,Date,functon
let parson={
    name:'raza', //string
    age:23, //number
    homeTown:'chittagong',
    married:false, //Bolean
    date:new Date(), //date
    test_null:null, //null
    test_undefined:undefined, //undefined
    greet:function(){//function
        console.log(`Hello ${this.name}`)
    }
}
parson.greet();
