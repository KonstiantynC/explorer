<template>
  <div>
    {{ transactionOut.spending_outpoints }}
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
