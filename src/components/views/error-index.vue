<template>
  <div class="error_main">  
    <error-header />
    <error-info />
  </div>
</template>

<script>
import errorHeader from './error-header.vue'
import errorInfo from './error-info.vue'


export default {
  name: 'error-index',
  components: {
    errorHeader,
    errorInfo
  },
  data: () => ({

  }),
}
</script>

<style>
.error_main {
  width: 100%;
}


</style>
