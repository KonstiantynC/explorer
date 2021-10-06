<template>
  <div class="transactions_blok_list">
    <div class="transactions_blok__title">Block Transactions:</div> 
    <div
      class="ul_list__blockTransactions"
      v-for="(transaction, index) in blockTransactions"
      :key="`transaction-${index}`"
    > 
      <div class="transactions_field">
        <div>Fee:</div>
        <div class="fee__value">{{ transaction.fee }}</div>
      </div>
      <div>
        <div class="transactions_field">
          <div>Hash:</div>
          <router-link class="transaction_link" to="/transaction">{{ transaction.hash }}</router-link>
          <div class="transactions_date">
            <div>Date:</div>
            <div class="time__value">{{ transaction.time }}</div>
          </div>
        </div>
      </div>
      <div 
        class="transactionInput"
        v-for="(objInput, index) in transaction.inputs"
        :key="`objInput-${index}`"
      >
        <transaction-input
          :transaction-input="objInput"
        />
      </div>
      <div
        class="transactionOut"
        v-for="(objOut, index) in transaction.out"
        :key="`objOut-${index}`"
      >
        <transaction-out
         :transaction-out="objOut"
        />
      </div>
      <br/>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
import TransactionInput from './TransactionInput.vue'
import TransactionOut from './TransactionOut.vue'

export default {
  name: 'transaction-block',
  components: {
    TransactionInput,
    TransactionOut
  },
  data: () => ({
    blockTransactions: []
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103')
      .then(response => {
        this.info = response.data
        this.blockTransactions = this.info.tx
      })
      .catch(error  => {
        console.log(error)
      })
  },
}
</script>


<style>
.transactions_blok_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  padding-left: 15px;
}

.transactions_blok__title {
  font-size: 25px;
  font-weight: 600;
}

.transactions_field {
  display: flex;
  flex-direction: row;
  width: 800px;
  padding-bottom: 10px;
}

.transaction_link {
  padding-left: 35px;
}


.fee__value {
  padding-left: 35px; 
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
