// import '../imports/api/tasks.js';

if (Meteor.isServer) {
  Meteor.methods({
    'searchGit':function (topic) {
       check(topic, String);
       var userAgent=Meteor.settings.userAgent;
       var headers={"headers":{"User-Agent":userAgent}};
       return new Promise(function(resolve,reject){
         HTTP.call('GET',Meteor.settings.link+topic,
           headers,
         function(err,res){
           var kool;
           if(err){
           console.log(err);
         }else{
           kool=JSON.parse(res.content);
           //console.log(kool.items[0]);
           console.log("yes");
         }return resolve(kool.items);
       });
     });
       //console.log("gjfh");
       //return topic+"hgfh";
     }
  });

}
