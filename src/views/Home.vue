<template>
  <div class="home">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Content
  }
}
</script>
