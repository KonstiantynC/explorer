<template>
  <div>
    <div class="block_transact_hash">
      <div>
        <fa icon="exchange-alt" class="block_transaction_icon" />
        <router-link 
          class="transaction_link" 
          :to="{ name: 'transaction', params: { tx: this.transactionInfo.hash }}"
      >
          {{ transactionInfo.hash }}
        </router-link>
      </div>
      <div class="time__value">
        {{ transactionDate(transactionInfo.time) }}
      </div>  
    </div>
    <div class="block_fee">
      Fee
      {{ transactionInfo.fee }}
      BTC  
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
      toBitcoin(this.transactionInfo.fee)
    }
  },
}
</script>


<style>
.block_transact_hash {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


.transaction_link {
  text-decoration: none;
}

.block_transaction_icon {
  color: #000000;
}

.time__value {
  background-color: #ffffff;
  padding: 15px 20px;
  border-radius: 25px;
  border: 1px solid #e0e0e0; 
}

.block_fee {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
}

</style>
