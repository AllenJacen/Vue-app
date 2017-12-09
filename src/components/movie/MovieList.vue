<template>
  <div class='movie-list'>
   <ul>
     <li @click="goDetail(movie.id)" v-for="movie in movieList" :key="movie.id" class="movie">
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-title">
          <p class="movie-name">{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
          <!-- <router-link to="/movie/movieDetail">
     <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-title">
          <p class="movie-name">{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
     </router-link> -->
     </li>
   </ul>
    <div v-show="loadingShow" class="loading">
                <img src="../../assets/img/loading.gif" alt="">
        </div>
    <div v-show="tip" class="tip">
     <h4>数据已经到底了</h4>
  </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return {
      movieList:[],
      loadingShow:true,
      tip:false
    }
  },
  mounted(){
    this.loadData();

    window.onscroll= () => {
        let cH = document.documentElement.clientHeight;//可视区域的高度
        let sH =window.pageYOffset  //用于FF
                || document.documentElement.scrollTop  
                || document.body.scrollTop  
                || 0;//被卷去的高
        let dH =document.documentElement.scrollHeight;//正文的高度
      // console.log(cH);
      // console.log(sH);
      // console.log(dH);
      if(Math.abs( (cH+sH) - dH ) < 1 ){
        // console.log('到底了');
        this.loadingShow = true;
        if(!this.tip){
           this.loadData();
        }else{
          this.loadingShow = false;
        }
       
      }
      };

   },
   methods:{
    loadData() {
        //var url1=API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset='+this.movieList.length;
  var url2='/static/data/moviedata.json';
  Axios.get(url2)
  .then( res =>{
    this.loadingShow=false;
    let list=res.data.data.movies;
    let mydata =list.slice(this.movieList.length,this.movieList.length+10);
    if(mydata.length < 10){
      this.tip=true;
    }
    this.movieList=this.movieList.concat(mydata);
    // console.log(this.movieList);
      })
  .catch(()=>{
    alert('获取失败！！！');
      });

   },
   goDetail (movieId) {
    //  console.log(movieId);
     this.$router.push('/movie/movieDetail/'+movieId)
   }
   
   }
  
  }
</script>


<style scoped>
.movie-list {
margin:1rem 0;
}
.movie{
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc; 
}
.movie-img{
  flex-grow: 1;
  margin-right: 0.2rem;
  width: 0;
}
.movie-img img {
  width: 100%;
}
.movie-title{
  flex-grow: 2;
  width: 0;
}
.movie-name{
  font-weight: bolder;
}
.loading{
  text-align: center;
}
.tip {
  text-align: center;
}



</style>