<template>
  <div>
    <router-link to="/address">{{ transactionOut.addr }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'transaction-out',
  props: {
    transactionOut: {
      type: Object,
      default: () => ({
      }),
    }
  },
  data: () => ({

  })
}
</script>


<style>


</style>
