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
 
};