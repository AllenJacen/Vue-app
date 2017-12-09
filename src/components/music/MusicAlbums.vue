<template>
  <div class="commonstyle">
     <!-- {{$route.params.musicId}} -->
         <a-player v-if='isShow' :autoplay='true' :music="Songs" :showlrc="3">
        </a-player>
  </div>
</template>

<script>
import Axios from 'axios';
import VueAplayer from 'vue-aplayer';
export default {
  components:{
      'a-player': VueAplayer,
  },
    data(){
        return {
            Songs:[],
             isShow:false
        }
    },
   mounted () {
       Axios.get('/static/data/musicdata.json').then(res=>{
       console.log(res)
          let musicData=res.data.musicData;
          musicData.forEach(element => {
            this.Songs.push({
            title: element.title,
            author: element.author,
            url: element.src,
            pic: element.musicImgSrc,
            lrc: '/static/' + element.lrc
            });
          });
          this.isShow=true;
       }).catch();
   },
//    beforeRouteLeave: (to, from, next) => {
//     //    console.log(this);
//    }
}
</script>


<style scoped>
.commonstyle{
    margin:1rem 0;
}
</style>