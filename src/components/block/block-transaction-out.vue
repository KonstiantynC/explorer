<template>
  <div class="block_transaction_out">
    <router-link 
      :to="{ name: 'address', params: { addr: this.transactionOut.addr }}"
      class="block_out"
    >
      {{ transactionOut.addr }}
    </router-link>
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

  }),
  mounted () {

  }
}
</script>


<style>
.block_out {
  text-decoration: none;
}

.block_transaction_out {
  background-color: #ffffff;
  padding: 15px 20px;
  margin: 0 0 10px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;  
}

</style>
