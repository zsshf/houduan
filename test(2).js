const db = wx.cloud.database();

async function test(Name, Birthday) {
  // let flag = true;
  var Data = await db.collection("Student").where({
     name: Name, birthday: Birthday 
    }).get();
  if(Data.data.length==0) Data.data = true;
  else Data.data = false;  
  return Data.data;
}
test("姜凡", "1961-01-04");
module.exports = test;
