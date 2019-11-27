import axios from "axios";

export default {
  getNews: function(appstoget) {
    return axios.post("/api/steam/getappnews", {
        appstoget
    });
  },
  getAppList: function(){
      return axios.get("/api/steam/getapplist");
  },
  getSearchResults: function(search){
    return axios.post("/api/steam/searchapplist", {
      search
    });
  },
  getSearchNews: function(app){
    return axios.post("/api/steam/getmorenews", {
      app
    });
  },
  checkLogin: function(){
    return axios.get("/api/steam/isloggedin");
  },
  getUserFriends: function(){
    return axios.get("/api/steam/getuserfriends");
  },
  getUserData: function(user){
    return axios.post("/api/steam/getuserdata", {
      user
    });
  },
  getMyData: function(){
    return axios.get("/api/steam/getmydata");
  },
  getAchievementData: function(appid){
    return axios.post("/api/steam/getachievementdata", {
      appid
    });
  },
  getGameSchema: function(appid){
    return axios.post("/api/steam/getgameschema", {
      appid
    });
  },
  getOwnedGames: function(){
    return axios.get("/api/steam/getownedgames");
  },
  getRecentlyPlayed: function(){
    return axios.get("/api/steam/getrecentlyplayed");
  }
 
};