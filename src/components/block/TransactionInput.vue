<template>
  <div>
    {{ transactionInput.prev_out }}
  </div>
</template>

<script>
export default {
  name: 'transaction-input',
  props: {
    transactionInput: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({

  }),
  components: {
    
  },
  mounted () {
    console.log(this.transactionInput)
  }
}
</script>


<style>


</style>
