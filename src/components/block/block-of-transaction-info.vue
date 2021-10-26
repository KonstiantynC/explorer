<template>
  <div>
    <div class="transactions_field">
      <div>Fee:</div>
      <div class="fee__value">{{ transactionInfo.fee }}</div>
    </div>
    <div>
      <div class="transactions_field">
        <div>Hash:</div>
        <router-link class="transaction_link" to="/transaction">{{ transactionInfo.hash }}</router-link>
        <div class="transactions_date">
          <div>Date:</div>
          <div class="time__value">{{ transactionInfo.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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


</style>
