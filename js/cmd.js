function getCommentList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3306/api/cmtlist',
        success:function(res){
            console.log(res)

        }
    })
}
getCommentList()