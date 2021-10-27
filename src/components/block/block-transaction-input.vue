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
      <router-link
      class="block_input" 
      :to="{ name: 'address', params: { addr: this.transactionInput.prev_out.addr }}"
      >
        {{ transactionInput.prev_out.addr }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transaction-input',
  props: {
    transactionInput: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data: () => ({

  }),
  components: {
    
  },
  
}
</script>


<style>
.block_input {
  text-decoration: none;
}

</style>
