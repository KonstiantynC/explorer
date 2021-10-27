<template>
  <div>
    <div class="transactions_field">
      <div>Fee:</div>
      <div class="fee__value">{{ transactionInfo.fee }}</div>
    </div>
    <div>
      <div class="transactions_field">
        <div>Hash:</div>
        <router-link 
          class="transaction_link" 
          :to="{ name: 'transaction', params: { tx: this.transactionInfo.hash }}"
        >
          {{ transactionInfo.hash }}
        </router-link>
        <div class="transactions_date">
          <div>Date:</div>
          <div class="time__value">{{ transactionInfo.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import satoshiBitcoin from 'satoshi-bitcoin'

export default {
  name: 'transaction-info',
  props: {
    transactionInfo: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  methods: {

  }
}
</script>


<style>
.transaction_link {
  text-decoration: none;
}

</style>
