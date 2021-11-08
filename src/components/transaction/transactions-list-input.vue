<template>
  <div class="transaction_input">
    <div> 
      <router-link
        class="transact_link" 
        :to="{ name: 'address', params: { addr: this.transactionInput.prev_out.addr  }}"
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
.transact_link {
  text-decoration: none;
}

.transaction_input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 15px 20px;
  margin: 0 0 10px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;  
}



</style>
