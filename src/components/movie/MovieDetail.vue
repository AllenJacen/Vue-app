<template>
  <div class='detail'>
    <!-- <h1>{{$route.params.movieId}}</h1> -->
    <div class='detail-content'>
      <div class="detail-img">
       <img :src="detail.img" alt="">
    </div>
   <div class='detail-info'>
      <h3 v-text="detail.nm"></h3>
        <p v-text="detail.sc+'分'"></p>
                <p>{{detail.cat}}</p>
                <p>{{detail.src}} / {{detail.dur}}分钟</p>
                <p>{{detail.rt}}</p>
   </div>
    </div>
     <hr>
    <div>
          <h3>主演</h3>
          <p>{{detail.star}}</p>
        </div>
        <hr>
        <div>
            <h3>简介</h3>
            <p>{{detail.dra}}</p>
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return {
      detail:{}
    }
  },
   mounted(){
     let url1 = API_PROXY+"http://m.maoyan.com/movie/" +
      this.$route.params.movieId +
      ".json";
      let url2= '/static/data/moviedetail.json';
      Axios.get(url2).then((res)=>{
        // console.log(res);
           this.detail = res.data.data.MovieDetailModel;
      }).catch();
   }
}
</script>


<style scoped>
.detail{
margin:1rem 0;
}
.detail-content{
  display: flex;
  /* border-bottom: 1px solid #ccc; */
}
.detail-img{
 flex-grow: 1;
 width: 0;
}
.detail-info{
  text-align: center;
  padding: 20px 20px;
 flex-grow: 1;
 width: 0;
}
.detail h3 {
  font-weight: bolder;
  text-align: center;
}
</style>