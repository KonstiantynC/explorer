<template>
  <div>
    <div 
      v-if="transactionInput.prev_out === null"
    >
      COINBASE (Newly Generated Coins)
    </div>
    <div 
      v-else
    >
      <router-link to="/address">{{ transactionInput.prev_out.addr }}</router-link>
    </div>
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
  
}
</script>


<style>


</style>
