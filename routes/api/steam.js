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
    // load repository details for this array of repo URLs
  
    // map through the repo list
    const promises = appstoget.map(async app => {
      // request details from GitHub’s API with Axios
      const response = await axios.get("http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid="+app+"&count=3&maxlength=300&format=json");
  
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

router.route("/getapplist").get((req, res)=>{
    axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/").then(res=>{

    })
})

module.exports = router;