<template>
     <ul class="commonstyle">
         <li v-for="music in musicList" :key='music.id'>
            <router-link :to='"/music/musicAlbums/"+music.id'>
                  <img :src="music.bg" alt="">
            </router-link>
         </li>
     </ul>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return {
            musicList:[]
        }
    },
   mounted () {
       Axios.get('/static/data/musiclist.json').then(res=>{
        //    console.log(res)
            this.musicList=res.data.albums;
       }).catch();
   }
}
</script>


<style scoped>
.commonstyle{
    margin:1rem 0;
}
.commonstyle li{
    float: left;
     width: 50%;
}
.commonstyle li img{
    width: 100%;
}
</style>