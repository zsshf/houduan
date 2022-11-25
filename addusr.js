function addusr(usrId,Name,Birthday,Gender,City,Grade,Major,Class,Term,Phone,Email,Firm,Wrok,AvatarUrl){
    var time = Date.now().toString()
    db.collection("usr").add({
      data:{
        usrId:time,
        name:Name,
        birthday:Birthday,
        gender:Gender,
        city:City,
        grade:Grade,
        major:Major,
        class:Class,
        term:Term,
        phone:Phone,
        email:Email,
        firm:Firm,
        wrok:Wrok,
        avatarUrl:AvatarUrl
      }
    })
    console.log(time)
    return time
}