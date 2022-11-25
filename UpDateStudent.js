const db=wx.cloud.database()

function UpDateStudent(Name,Birthday,userId,Info){
  db.collection('Student').where({name:Name,birthday:Birthday}).update({
    data:{
      usrId:userId,
      info:Info
    }
  })
}

module.exports=UpDateStudent;