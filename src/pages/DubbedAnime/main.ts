import { pageInterface } from "./../pageInterface";

export const DubbedAnime: pageInterface = {
  name: "DubbedAnime",
  domain: "https://ww5.dubbedanime.net",
  type: "anime",
  isSyncPage: function(url) {
    if (url.split("/")[3] === "episode") {
      return true;
    } else {
      return false;
    }
  },
  sync: {
    getTitle: function(url){return j.$("h1.dosis.ep-title").text().replace(/(episode|ova).*\d+/gmi,"").trim();},
    getIdentifier: function(url) {
      return j.$("a.w-100.btn.btn-success").attr("href").split("/")[4];
    },
    getOverviewUrl: function(url){
      return j.$("a.w-100.btn.btn-success").attr("href");
    },
    getEpisode: function(url){
      var episodePart = url.split("/")[4];
      if(episodePart.length){
        var temp = episodePart.match(/-(episode|ova)-\d+-/gmi);
        if(temp !== null){
          return temp[0].replace(/\D+/g, "");
        } else {
          return 1;
        }
      }
    },
  },
  overview:{
    getTitle: function(url){
      return j.$("h1.h3.dosis.mt-0.text-white.pt-2.d-none.d-sm-block").text().trim();
    },
    getIdentifier: function(url){
      return url.split("/")[4];
    },
    uiSelector: function(selector){
      selector.insertAfter(j.$("#episodes > div > div.row.mb-3.pr-2").first());
    },
  },
  init(page){
    if(document.title == "Just a moment..."){
      con.log("loading");
      page.cdn();
      return;
    }
    api.storage.addStyle(require('!to-string-loader!css-loader!less-loader!./style.less').toString());
    j.$(document).ready(function(){
      if (page.url.split("/")[3] === "episode" || page.url.split("/")[3] === "anime") {
        page.handlePage();
        }
      });
  }
};
