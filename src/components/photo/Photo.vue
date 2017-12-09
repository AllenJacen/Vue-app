<template>
  <div class="commonstyle">
      <common-header bg="rgb(63,81,181)">
          <span slot="title">Pic</span>
      </common-header>
      <router-view></router-view>
      <common-footer  bg="rgb(63,81,181)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
  components: {
      CommonHeader,
      CommonFooter
  }
}
</script>


<style scoped>
.commonstyle{
    margin:1rem 0;
}
</style>