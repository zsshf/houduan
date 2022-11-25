const db=wx.cloud.database()


function test(Name,Birthday){

  var Data=db.collection('Student').where({name:Name,birthday:Birthday}).get()
  .then(res=>{
    console.log(res)
    if(res.data.length==0) return 0;
    else return 1;
    })
    var A;
    Data.then(res=>{
      A=res;
      console.log(A)
    })
    console.log(A)
    if(A) return true;
    else return false;
  }




module.exports=test;