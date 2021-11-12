<template>
  <div class="transaction_out">
    <div>
      <router-link
        class="transact_link" 
        :to="{ name: 'address', params: { addr: this.transactionOut.addr  }}"
      >
        {{ transactionOut.addr }}
      </router-link>
    </div>
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
  
}
</script>


<style>
.transaction_out {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 15px 20px;
  margin: 0 0 10px 0;
  width: 350px;
  border-radius: 25px;
  border: 1px solid #e0e0e0; 
}

.transact_link {
  text-decoration: none;
}

</style>
