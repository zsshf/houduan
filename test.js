const db = wx.cloud.database();

function test(Name, Birthday) {
  // let flag = true;
  var Data = db
    .collection("Student")
    .where({ name: Name, birthday: Birthday })
    .get({
      success: (res) => {
        if (res.data.length == 0) res.data = true;
        else res.data = false;
      },
    });
  return res.data;
}
test("姜凡", "1961-01-04");
module.exports = test;
