<template>
  <div class="mdl-grid bg-cell" style="display: block;">
    <div style="margin-bottom: 20px;">
      This feature is still in alpha. Use at your own risk. More info
      <a href="https://github.com/lolamtisch/MALSync/wiki/List-Sync">Here</a>
    </div>

    <div>
      <slot></slot>
    </div>

    <div :style="getTypeColor(getType('myanimelist.net'))" style="display: inline-block; margin-right: 40px; padding-left: 10px; margin-bottom: 20px;">
      MyAnimeList <span v-if="listProvider.mal.master">(Master)</span><br>
      {{listProvider.mal.text}} <br>
      <span v-if="listProvider.mal.list">List: {{listProvider.mal.list.length}}</span><br>
      <br>
    </div>
    <div :style="getTypeColor(getType('anilist.co'))" style="display: inline-block; margin-right: 40px; padding-left: 10px; margin-bottom: 20px;">
      AniList <span v-if="listProvider.anilist.master">(Master)</span><br>
      {{listProvider.anilist.text}} <br>
      <span v-if="listProvider.anilist.list">List: {{listProvider.anilist.list.length}}</span><br>
      <br>
    </div>
    <div :style="getTypeColor(getType('kitsu.io'))" style="display: inline-block; margin-right: 40px; padding-left: 10px; margin-bottom: 20px;">
      Kitsu <span v-if="listProvider.kitsu.master">(Master)</span><br>
      {{listProvider.kitsu.text}} <br>
      <span v-if="listProvider.kitsu.list">List: {{listProvider.kitsu.list.length}}</span><br>
      <br>
    </div>
    <div :style="getTypeColor(getType('simkl.com'))" style="display: inline-block; margin-right: 40px; padding-left: 10px; margin-bottom: 20px;">
      Simkl <span v-if="listProvider.simkl.master">(Master)</span><br>
      {{listProvider.simkl.text}} <br>
      <span v-if="listProvider.simkl.list">List: {{listProvider.simkl.list.length}}</span><br>
      <br>
    </div><br>

    <button type="button" :disabled="!listReady" @click="syncList()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style="margin-bottom: 20px;">Sync</button>
    <span v-if="listLength">{{listLength - listSyncLength}}/{{listLength}}</span>

    <div v-if="item.diff" v-for="(item, index) in list" v-bind:key="index" style="border: 1px solid black; display: flex; flex-wrap: wrap; margin-bottom: 10px;">
      <div style="width: 100%; border-bottom: 1px solid black; padding: 0px 5px;">{{item.master.title}}</div>
      <div style="width: 50px; border-right: 1px solid black; padding: 5px;">
        {{index}}
      </div>
      <div class="master" v-if="item.master && item.master.uid" :style="getTypeColor(getType(item.master.url))" style="background-color: #ffd5d5; border-right: 1px solid black; padding: 5px 10px; width: 70px;">
        ID: <a target="_blank" :href="item.master.url">{{item.master.uid}}</a><br>
        EP: {{item.master.watchedEp}}<br>
        Status: {{item.master.status}}<br>
        Score: {{item.master.score}}
      </div>
      <div class="slave" v-for="slave in item.slaves" v-bind:key="slave.uid" :style="getTypeColor(getType(slave.url))" style="border-right: 1px solid black; padding: 5px 10px; width: 100px;">
        ID: <a target="_blank" :href="slave.url">{{slave.uid}}</a><br>
        EP: {{slave.watchedEp}}
          <span v-if="slave.diff && slave.diff.watchedEp" style="color: green;">→ {{slave.diff.watchedEp}}</span><br>
        Status: {{slave.status}}
          <span v-if="slave.diff && slave.diff.status" style="color: green;">→ {{slave.diff.status}}</span><br>
        Score: {{slave.score}}
          <span v-if="slave.diff && slave.diff.score" style="color: green;">→ {{slave.diff.score}}</span>
      </div>
    </div>

    <div v-if="missing.length">
      <h2>Missing</h2>
      <div v-for="item in missing"  style="border: 1px solid black; display: flex; flex-wrap: wrap; margin-bottom: 10px;">
        <div style="width: 50px; border-right: 1px solid black; padding: 5px;">
          <a target="_blank" :href="item.url">{{item.malId}}</a>
        </div>
        <div :style="getTypeColor(item.syncType)" style="padding: 5px 10px;">
          {{item.title}}<br>
          EP: {{item.watchedEp}}<br>
          Status: {{item.status}}<br>
          Score: {{item.score}}
        </div>
        <div v-if="item.error" style="color: red; width: 100%; border-top: 1px solid;">{{item.error}}</div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import * as provider from "./../../../provider/provider.ts";
  import * as malUserList from "./../../../provider/MyAnimeList/userList.ts";
  import * as anilistUserList from "./../../../provider/AniList/userList.ts";
  import * as kitsuUserList from "./../../../provider/Kitsu/userList.ts";
  import * as simklUserList from "./../../../provider/Simkl/userList.ts";

  import * as sync from "./syncHandler.ts";

  export default {
    data: function(){
      return {
        listProvider: {
          mal: {
            text: 'Init',
            list: null,
            master: false
          },
          anilist: {
            text: 'Init',
            list: null,
            master: false
          },
          kitsu: {
            text: 'Init',
            list: null,
            master: false
          },
          simkl: {
            text: 'Init',
            list: null,
            master: false
          }
        },
        listReady: false,
        listLength: 0,
        list: {},
        missing: [],
      };
    },
    props: {
      listType: {
        type: String,
        default: 'anime'
      }
    },
    mounted: async function(){
      var type = this.listType;
      var mode = 'mirror';
      var typeArray = [];
      var master = api.settings.get('syncMode');
      var listP = [];

      this.listProvider.mal.text = 'Loading';
      listP.push( getList(malUserList, type).then((list) => {
        this.listProvider.mal.list = list;
        this.listProvider.mal.text = 'Done';
        if(master == 'MAL') this.listProvider.mal.master = true;
        if(list.length) typeArray.push('MAL');
        if(!list.length) this.listProvider.mal.text = 'Error';
      }) );

      this.listProvider.anilist.text = 'Loading';
      listP.push( getList(anilistUserList, type).then((list) => {
        this.listProvider.anilist.list = list;
        this.listProvider.anilist.text = 'Done';
        if(master == 'ANILIST') this.listProvider.anilist.master = true;
        if(list.length) typeArray.push('ANILIST');
        if(!list.length) this.listProvider.anilist.text = 'Error';
      }) );

      this.listProvider.kitsu.text = 'Loading';
      listP.push( getList(kitsuUserList, type).then((list) => {
        this.listProvider.kitsu.list = list;
        this.listProvider.kitsu.text = 'Done';
        if(master == 'KITSU') this.listProvider.kitsu.master = true;
        if(list.length) typeArray.push('KITSU');
        if(!list.length) this.listProvider.kitsu.text = 'Error';
      }) );

      this.listProvider.simkl.text = 'Loading';
      listP.push( getList(simklUserList, type).then((list) => {
        this.listProvider.simkl.list = list;
        this.listProvider.simkl.text = 'Done';
        if(master == 'SIMKL') this.listProvider.simkl.master = true;
        if(list.length) typeArray.push('SIMKL');
        if(!list.length) this.listProvider.simkl.text = 'Error';
      }) );

      await Promise.all(listP);

      var master = false;
      var slaves = [];

      if(this.listProvider.mal.master){
        master = this.listProvider.mal.list;
      }else{
        slaves.push(this.listProvider.mal.list);
      }

      if(this.listProvider.anilist.master){
        master = this.listProvider.anilist.list;
      }else{
        slaves.push(this.listProvider.anilist.list);
      }

      if(this.listProvider.kitsu.master){
        master = this.listProvider.kitsu.list;
      }else{
        slaves.push(this.listProvider.kitsu.list);
      }

      if(this.listProvider.simkl.master){
        master = this.listProvider.simkl.list;
      }else{
        slaves.push(this.listProvider.simkl.list);
      }

      sync.generateSync(master, slaves, mode, typeArray, this.list, this.missing);
      this.list = Object.assign({}, this.list);

      this.listReady = true;
    },
    destroyed: function(){
    },
    watch: {
    },
    computed: {
      listSyncLength: function(){
        return Object.values(this.list).filter(el => el.diff).length;
      }
    },
    methods: {
      lang: api.storage.lang,
      getType: sync.getType,
      getTypeColor: function(type){
        if(type == 'ANILIST') return 'border-left: 5px solid #02a9ff';
        if(type == 'KITSU') return 'border-left: 5px solid #f75239';
        if(type == 'SIMKL') return 'border-left: 5px solid #ffbf00';
        return 'border-left: 5px solid #2e51a2';
      },

      syncList: async function(){
        this.listReady = false;
        this.listLength = this.listSyncLength;

        sync.syncList(this.list, this.missing);
      },

    }
  }

  function getList(prov, type){
    return new Promise((resolve, reject) => {
      prov.userList(7, type, {fullListCallback: async function(list){
        con.log('list', list);
        resolve(list)
      }});
    });
  }


</script>
