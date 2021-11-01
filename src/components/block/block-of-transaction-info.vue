<template>
  <div>
    <div class="transactions_field">
      <div class="fee__value">
        {{ transactionInfo.fee }}
      </div>
      <div class="fee_text">
        <strong>BTC</strong> from
        </div>
    </div>
    <div>
      <div class="transactions_field">
        <div>
          <fa icon="exchange-alt" class="block_transaction_icon" />
        </div>
        <router-link 
          class="transaction_link" 
          :to="{ name: 'transaction', params: { tx: this.transactionInfo.hash }}"
        >
          {{ transactionInfo.hash }}
        </router-link>
        <div class="transactions_date">
          <div>Date:</div>
          <div class="time__value">
            {{ transactionDate(transactionInfo.time) }}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import satoshiBitcoin from 'satoshi-bitcoin'
import moment from 'moment'

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
    transactionDate () {
      return moment(this.transactionInfo.time * 1000).format('MMMM Do YYYY')
    },
    convertSatoshiFee() {
      toBitcoin(this.tableListMain.fee)
    }
  }
}
</script>


<style>
.transaction_link {
  text-decoration: none;
  margin-left: 5px;
}

.transactions_field {
  display: flex;
  flex-direction: row;
  width: 800px;
  padding-bottom: 10px;
}

.fee__value {
  padding-left: 35px; 
}

.fee_text {
  margin-left: 6px;
}

.block_transaction_icon {
  color: #000000;
}

.transactions_date {
  display: flex;
  flex-direction: row;
  padding-left: 25px;
}

.time__value {
  padding-left: 15px; 
}

</style>
