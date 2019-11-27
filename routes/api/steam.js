const router = require("express").Router();
const axios = require("axios");
const fs = require('fs');
let apps = [];
fs.readFile('applist.json', (err, data) => {
  if (err) throw err;
  let applist = JSON.parse(data);
  apps = applist.applist.apps;
});

async function getappnews (appstoget) {  
    const promises = appstoget.map(async app => {
      const response = await axios.get("http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid="+app+"&count=10&maxlength=300&format=json");
      return response.data.appnews;
    })
  
    // wait until all promises resolve
    const results = await Promise.all(promises)
    results.forEach(e=>{
        idtoget = e.appid;
        let apptitle = apps.find(o=> o.appid===idtoget);
        e.appname = apptitle.name;
    })
    return results;
  }

router.route("/getappnews").post((req, res)=>{
    getappnews(req.body.appstoget).then(resp =>{
        res.json(resp);
    });
})
router.route("/getmorenews").post((req, res) =>{
  getappnews([req.body.app]).then(resp=>{
    res.json(resp);
  })
})

router.route("/getapplist").get((req, res)=>{
    axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/").then(res=>{

    })
})
router.route("/isloggedin").get((req, res)=>{
  if(req.user!==undefined) res.send(true);
  else res.send(false);
})
router.route("/searchapplist").post((req, res)=>{
  let searchterm = req.body.search.toLowerCase();
  let searchresults = [];
  searchresults = apps.filter(o=> o.name.toLowerCase().startsWith(searchterm));
  res.json(searchresults);
})

router.route("/getuserfriends").get((req, res)=>{
  axios.get("http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key="+process.env.STEAM_KEY+"&steamid="+req.user.steamId+"&relationship=friend").then(resp=>{
    res.json(resp.data.friendslist.friends);
  })
})

router.route("/getuserdata").post((req, res)=>{
  let friends = req.body.user;
  let query = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+process.env.STEAM_KEY+"&steamids=";
  friends.forEach(f=>{
    query+=f.steamid+",";
  })
  query = query.substring(0, query.length-2);
  axios.get(query).then(resp=>{
    res.json(resp.data.response.players);
  })
})

router.route("/getmydata").get((req, res)=>{
  let query = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+process.env.STEAM_KEY+"&steamids="+req.user.steamId;
  axios.get(query).then(resp=>{
    res.json(resp.data.response.players);
  })
})

router.route("/getachievementdata").post((req, res)=>{
  let query = "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid="+req.body.appid+"&key="+process.env.STEAM_KEY+"&steamid="+req.user.steamId;
  console.log(query);
  axios.get(query).then(resp=>{
    res.json(resp.data);
  }).catch(err=>{
    res.send(err);
  })
})
module.exports = router;