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
      required: true
    }
  },
  data: () => ({

  })
}
</script>


<style>


</style>
