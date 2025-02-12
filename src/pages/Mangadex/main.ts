import {pageInterface} from "./../pageInterface";

export const Mangadex: pageInterface = {
    name: 'Mangadex',
    domain: 'https://www.mangadex.org',
    database: 'Mangadex',
    type: 'manga',
    isSyncPage: function(url){
      if(url.split('/')[3] !== 'chapter'){
        return false;
      }else{
        return true;
      }
    },
    sync:{
      getTitle: function(url){return j.$('.manga-link, a.manga_title').text().trim()},
      getIdentifier: function(url){return utils.urlPart(Mangadex.sync.getOverviewUrl(url), 4);},
      getOverviewUrl: function(url){return utils.absoluteLink(j.$('a.manga-link, a.manga_title').first().attr('href'), Mangadex.domain);},
      getEpisode: function(url){
        var chapterId = url.split('/')[4];
        var curOption = j.$('#jump-chapter option[value="'+chapterId+'"], #jump_chapter option[value="'+chapterId+'"]');
        if(curOption.length){
          var temp = curOption.text().trim().match(/(ch\.|chapter)\D?\d+/i);
          if(temp !== null){
            return EpisodePartToEpisode(temp[0]);
          }
        }
        return NaN;
      },
      getVolume: function(url){
        var chapterId = url.split('/')[4];
        var curOption = j.$('#jump-chapter option[value="'+chapterId+'"], #jump_chapter option[value="'+chapterId+'"]');
        if(curOption.length){
          var temp = curOption.text().trim().match(/(vol\.|volume)\D?\d+/i);
          if(temp !== null){
            temp = temp[0].match(/\d+/);
            if(temp !== null){
              return parseInt(temp[0]);
            }
          }
        }
        return 0;
      },
    },
    overview:{
      getTitle: function(){return j.$('.card-header').first().text().trim();},
      getIdentifier: function(url){return utils.urlPart(url, 4)},
      uiSelector: function(selector){
        j.$(".container .card .edit.row > * > .row").first().after('<div class="row m-0 py-1 px-0 border-top"><div class="col-lg-3 col-xl-2 strong">MyAnimeList:</div><div class="col-lg-9 col-xl-10 kal-ui"></div></div>');
        selector.appendTo(j.$(".container .card .kal-ui").first());
      },
      list:{
        offsetHandler: false,
        elementsSelector: function(){return j.$(".chapter-container > .row:not(:first-of-type) .chapter-row");},
        elementUrl: function(selector){return utils.absoluteLink(selector.find("a").first().attr('href'), Mangadex.domain);},
        elementEp: function(selector){return selector.attr('data-chapter');},
      }
    },
    init(page){
      if(document.title == "Just a moment..."){
          con.log("loading");
          page.cdn();
          return;
      }
      api.storage.addStyle(require('!to-string-loader!css-loader!less-loader!./style.less').toString());
      if(j.$('.card-header').length){
        if(/chapter\/\d+\/comments/i.test(window.location.href)){
          con.info('Comments');
          return;
        }
        j.$(document).ready(function(){page.handlePage()});
      }else{
        con.info('Waiting');
        utils.waitUntilTrue(function(){return Mangadex.sync.getOverviewUrl('')}, function(){
          con.info('Start');
          page.handlePage();
          var tempChapterId = utils.urlPart(window.location.href, 4);
          utils.urlChangeDetect(function(){
            var newTempChapterId = utils.urlPart(window.location.href , 4)
            if( tempChapterId !== newTempChapterId){
              tempChapterId = newTempChapterId;
              con.info('Check');
              page.handlePage();
            }else{
              con.info('Nothing to do')
            }
          });
        });
      }
      j.$(document).ready(function(){
        switch($('#theme_id').val()) {
          case "2":
          case "4":
          case "6":
          case "7":
            $('body').addClass('MALSyncDark');
            break;
          default:
        }
      });
    }
};

function EpisodePartToEpisode(string) {
    if(!string) return '';
    if(!(isNaN(parseInt(string)))){
        return string;
    }
    var temp = [];
    temp = string.match(/(ch\.|chapter)\D?\d+/i);
    console.log(temp);
    if(temp !== null){
        string = temp[0];
        temp = string.match(/\d+/);
        if(temp !== null){
            return temp[0];
        }
    }
    return '';
};
