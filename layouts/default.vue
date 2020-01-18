<template>
  <div>
    <Header1 />
    <Menu1 />
    <nuxt />
    <Footer2 />
  </div>
</template>

<script>
import Header1 from '@/components/Header/Header1.vue';
import Menu1 from '@/components/Header/Menu1.vue';
import Footer2 from '@/components/Footer/Footer2.vue';

export default {
  components: {
    Header1,
    Menu1,
    Footer2
  }
}
</script>