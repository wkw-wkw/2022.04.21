<template>
<div>
<header-nav/>
<Carousel/>
</div>
</template>

<script>
import HeaderNav from '../../components/Headernav/HeaderNav'
import Carousel from '../../components/Carousel'
export default {
  name: 'HomePage',
  components: {
    HeaderNav,
    Carousel

  }
}
</script>

<style scoped>

</style>
