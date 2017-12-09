import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
    photoList:[]
};

//行动，通过这里的行动操作state里的值
const mutations = {
  setPhotoList(state,status){
        state.photoList = status;
  }
};
//计算属性,相当于computed
const getters = {

};

//执行异步的 ，mutations是执行同步的
const actions = {
        setPhotoList({
            commit
        },status){
           commit('setPhotoList',status);
        }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});