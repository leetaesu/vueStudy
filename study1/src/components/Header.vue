<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/join">회원가입</router-link>
    </div>
    <img src="https://common-cdn-api.joycityglobal.com/portal/common/txt/txt_logo2.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .header{
    width: 100%;
    text-align: center;
    background: #000;
    padding: 50px 0;
  }
</style>
