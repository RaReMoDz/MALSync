[![img](https://img.shields.io/travis/com/lolamtisch/MALSync.svg?style=flat-square&logo=travis)](https://travis-ci.com/lolamtisch/MALSync)
[![img](https://img.shields.io/discord/358599430502481920.svg?style=flat-square&logo=discord&label=Chat%20%2F%20Support&colorB=7289DA)](https://discordapp.com/invite/cTH4yaw)
[![img](https://img.shields.io/github/issues/lolamtisch/MALSync.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/lolamtisch/MALSync/issues)
[![Codacy Badge](https://img.shields.io/codacy/grade/e07fabd76b97499788614bf48f8248db.svg?style=flat-square&logo=codacy&logoColor=white)](https://www.codacy.com/app/francisco.seipel/MALSync?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lolamtisch/MALSync&amp;utm_campaign=Badge_Grade)

# MAL-Sync
**MAL-Sync** is a powerful extension and userscript, which enables automatic episode tracking between MyAnimeList/Anilist/Kitsu/Simkl and multiple anime streaming websites.  

Makes it possible to use your MyAnimeList/Anilist/Kitsu/Simkl anime/mangalist as a centralized bookmarks system for all supported pages.  

#### **Supported Pages** <a id="anchor-link"></a>

<!--pages-->
  <table>
    <thead>
      <tr>
        <th>Anime</th>
        <th>Manga</th>
        <th>Media Server</th>
      </tr>
    </thead>
    <tbody>
      <tr>
                <td><a href="http://kissanime.ru"><img src="https://www.google.com/s2/favicons?domain=http://kissanime.ru"> kissanime</a></td>
                <td><a href="http://kissmanga.com"><img src="https://www.google.com/s2/favicons?domain=http://kissmanga.com"> kissmanga</a></td>
                <td><a href="http://app.emby.media"><img src="https://www.google.com/s2/favicons?domain=app.emby.media"></a> <a href="http://app.emby.media">Emby</a> <a href="https://github.com/lolamtisch/MALSync/wiki/Emby-Plex">[Wiki]</a></td>
              </tr><tr>
                <td><a href="https://9anime.to"><img src="https://www.google.com/s2/favicons?domain=https://9anime.to"> 9anime</a></td>
                <td><a href="https://www.mangadex.org"><img src="https://www.google.com/s2/favicons?domain=https://www.mangadex.org"> Mangadex</a></td>
                <td><a href="http://app.plex.tv"><img src="https://www.google.com/s2/favicons?domain=http://app.plex.tv"></a> <a href="http://app.plex.tv">Plex</a> <a href="https://github.com/lolamtisch/MALSync/wiki/Emby-Plex">[Wiki]</a></td>
              </tr><tr>
                <td><a href="https://otakustream.tv"><img src="https://www.google.com/s2/favicons?domain=https://otakustream.tv"> Otakustream</a></td>
                <td><a href="https://mangarock.com"><img src="https://www.google.com/s2/favicons?domain=https://mangarock.com"> Mangarock</a></td>
                <td></td>
              </tr><tr>
                <td><a href="http://www.crunchyroll.com"><img src="https://www.google.com/s2/favicons?domain=http://www.crunchyroll.com"> Crunchyroll</a></td>
                <td><a href="https://novelplanet.com"><img src="https://www.google.com/s2/favicons?domain=https://novelplanet.com"> Novelplanet</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://vrv.co"><img src="https://www.google.com/s2/favicons?domain=https://vrv.co"> Vrv</a></td>
                <td><a href="https://proxer.me"><img src="https://www.google.com/s2/favicons?domain=https://proxer.me"> Proxer</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://gogoanimes.co"><img src="https://www.google.com/s2/favicons?domain=https://gogoanimes.co"> Gogoanime</a></td>
                <td><a href="https://manganelo.com"><img src="https://www.google.com/s2/favicons?domain=https://manganelo.com"> MangaNelo</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://twist.moe"><img src="https://www.google.com/s2/favicons?domain=https://twist.moe"> Twistmoe</a></td>
                <td><a href="https://mangakakalot.com"><img src="https://www.google.com/s2/favicons?domain=https://mangakakalot.com"> Mangakakalot</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.anime4you.one"><img src="https://www.google.com/s2/favicons?domain=https://www.anime4you.one"> Anime4you</a></td>
                <td><a href="https://www.viz.com"><img src="https://www.google.com/s2/favicons?domain=https://www.viz.com"> VIZ (Bad)</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://branitube.net"><img src="https://www.google.com/s2/favicons?domain=https://branitube.net"> Branitube</a></td>
                <td><a href="https://serimanga.com"><img src="https://www.google.com/s2/favicons?domain=https://serimanga.com"> serimanga (Bad)</a></td>
                <td></td>
              </tr><tr>
                <td><a href="http://www.turkanime.tv"><img src="https://www.google.com/s2/favicons?domain=http://www.turkanime.tv"> Turkanime</a></td>
                <td><a href="https://mangadenizi.com"><img src="https://www.google.com/s2/favicons?domain=https://mangadenizi.com"> mangadenizi (Bad)</a></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animepahe.com"><img src="https://www.google.com/s2/favicons?domain=https://animepahe.com"> animepahe</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.netflix.com"><img src="https://www.google.com/s2/favicons?domain=https://www.netflix.com"> Netflix</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animeflv.net"><img src="https://www.google.com/s2/favicons?domain=https://animeflv.net"> animeflv</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://jkanime.net/"><img src="https://www.google.com/s2/favicons?domain=https://jkanime.net/"> Jkanime</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://proxer.me"><img src="https://www.google.com/s2/favicons?domain=https://proxer.me"> Proxer</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.wakanim.tv"><img src="https://www.google.com/s2/favicons?domain=https://www.wakanim.tv"> Wakanim</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animevibe.tv"><img src="https://www.google.com/s2/favicons?domain=https://animevibe.tv"> Animevibe</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://wonderfulsubs.com"><img src="https://www.google.com/s2/favicons?domain=https://wonderfulsubs.com"> WonderfulSubs</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://kawaiifu.com"><img src="https://www.google.com/s2/favicons?domain=https://kawaiifu.com"> kawaiifu</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://4anime.to"><img src="https://www.google.com/s2/favicons?domain=https://4anime.to"> 4Anime</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://dreamanimes.com.br"><img src="https://www.google.com/s2/favicons?domain=https://dreamanimes.com.br"> Dreamanimes</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www10.animeultima.eu"><img src="https://www.google.com/s2/favicons?domain=https://www10.animeultima.eu"> animeultima</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www1.aniflix.tv"><img src="https://www.google.com/s2/favicons?domain=https://www1.aniflix.tv"> Aniflix</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.animefreak.tv"><img src="https://www.google.com/s2/favicons?domain=https://www.animefreak.tv"> Animefreak</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animedaisuki.moe"><img src="https://www.google.com/s2/favicons?domain=https://animedaisuki.moe"> AnimeDaisuki</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.anime-planet.com"><img src="https://www.google.com/s2/favicons?domain=https://www.anime-planet.com"> AnimePlanet</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www17.kickassanime.io"><img src="https://www.google.com/s2/favicons?domain=https://www17.kickassanime.io"> KickAssAnime</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.riie.net"><img src="https://www.google.com/s2/favicons?domain=https://www.riie.net"> RiiE</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animekisa.tv"><img src="https://www.google.com/s2/favicons?domain=https://animekisa.tv"> AnimeKisa</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="http://animeindo.moe"><img src="https://www.google.com/s2/favicons?domain=http://animeindo.moe"> AnimeIndo</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://shinden.pl"><img src="https://www.google.com/s2/favicons?domain=https://shinden.pl"> Shinden</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.funimation.com"><img src="https://www.google.com/s2/favicons?domain=https://www.funimation.com"> Funimation</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="http://voiranime.com"><img src="https://www.google.com/s2/favicons?domain=http://voiranime.com"> Voiranime</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://ww5.dubbedanime.net"><img src="https://www.google.com/s2/favicons?domain=https://ww5.dubbedanime.net"> DubbedAnime</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.neko-sama.fr"><img src="https://www.google.com/s2/favicons?domain=https://www.neko-sama.fr"> NekoSama</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://anime-odcinki.pl"><img src="https://www.google.com/s2/favicons?domain=https://anime-odcinki.pl"> AnimeOdcinki</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.animezone.pl"><img src="https://www.google.com/s2/favicons?domain=https://www.animezone.pl"> AnimeZone</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://animeflix.io"><img src="https://www.google.com/s2/favicons?domain=https://animeflix.io"> Animeflix</a></td>
                <td></td>
                <td></td>
              </tr><tr>
                <td><a href="https://www.animefever.tv"><img src="https://www.google.com/s2/favicons?domain=https://www.animefever.tv"> AnimeFever</a></td>
                <td></td>
                <td></td>
              </tr>
    </tbody>
  </table>
  <!--/pages-->

[List of supported features by page](pages.md)

#### **Download**  
[![Chrome](https://img.shields.io/chrome-web-store/users/kekjfbackdeiabghhcdklcdoekaanoel.svg?style=flat-square&label=Chrome&logo=google%20chrome&logoColor=white)](https://chrome.google.com/webstore/detail/mal-sync/kekjfbackdeiabghhcdklcdoekaanoel?hl=en)  
[![Firefox](https://img.shields.io/amo/users/mal-sync.svg?style=flat-square&label=Firefox&logo=mozilla%20firefox&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/mal-sync)  
[![Userscript](https://img.shields.io/badge/Userscript-Download-brightgreen.svg?style=flat-square&label=Userscript&logo=javascript&logoColor=white)](https://greasyfork.org/de/scripts/372847-mal-sync)
#### **Complementary Adult Userscript**
[Here](src/pages-adult/README.md)

## What more can it do?

MyAnimeList
  - Direct links to the supported websites
  - Links to the next episode
  - Enlarge thumbnails in many places
  - Adds missing watching status tags like in the related anime section
  - Estimated time to next episode and estimated current episode number (JP release time)

miniMAL (Extension Popup)
  - Allows to browse, search and edit MyAnimeList anime/manga everywhere
  - Access MAL Bookmarks everywhere
  - MAL-Sync's Settings

Update Check [BETA]
  - Checks for new episodes/chapter in the background and sends out a notification
  - Updates the links to the next episode
  - Makes current episode estimation more accurate  
!This feature is disabled by default. You will need to enable it in the miniMAL popup!

## Want to Contribute?
Then let me know on [Discord](https://discordapp.com/invite/cTH4yaw).  

How to build? [Wiki](https://github.com/lolamtisch/MALSync/wiki/Build)

You can't code, but want to help? [Donations](https://github.com/lolamtisch/MALSync/wiki/Donations)
