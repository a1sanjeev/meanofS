/**
 * Created by SanJeev on 23-06-2017.
 */

var db=require('mdb');
var app=global.app;


var api_path=function(path){
    return '/api/users/'+path;
};

app.get(api_path('get_users'),function (req,res) {
    db.users.find({},function (err,data) {
        if(!err){
            app.send(req,res,data);
        }
        else {
            console.log(err)
        }
    });
});