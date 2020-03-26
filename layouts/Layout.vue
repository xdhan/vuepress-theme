<template>
  <div>
    <Navbar></Navbar>
    <Home></Home>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
export default {
  components: { Home, Navbar },
}
</script>
