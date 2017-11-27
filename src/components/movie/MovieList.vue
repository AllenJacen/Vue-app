<template>
  <div class='movieStyle'>
   <ul>
     <li v-for="movie in movieList" :key="movie.id" class="movie">
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-title">
          <p class="movie-name">{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
     </li>
   </ul>
    <div v-show="loadingShow" class="loading">
                <img src="../../assets/img/loading.gif" alt="">
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return {
      movieList:[],
      loadingShow:true
    }
  },
  mounted(){
    this.loadData();
    window.onscroll= () => {
        var cH = document.documentElement.clientHeight;//可视区域的高度
        var sH = Math.floor(document.documentElement.scrollTop|| window.pageYOfset ||document.body.scrollTop);//被卷去的高
        var dH = document.documentElement.scrollHeight;//正文的高度
        // console.log(cH);
        // console.log(sH);
        // console.log(dH);
      if(cH+sH==dH){
        console.log('到底了');
      }
      }

   },
   methods:{
    loadData() {
        //var url1=API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset='+this.movieList.length;
  var url2='/static/moviedata.json';
  Axios.get(url2)
  .then( res =>{
    this.loadingShow=false;
    let list=res.data.data.movies;
    this.movieList=this.movieList.concat(list.slice(this.movieList.length,this.movieList.length+10));
      })
  .catch(()=>{
    alert('获取失败！！！');
      });

   }
   
   }
  
  }
</script>


<style scoped>
.movieStyle{
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




</style>