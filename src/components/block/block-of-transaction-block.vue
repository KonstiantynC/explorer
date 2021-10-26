<template>
  <div class="transactions_blok_list">
    <div class="transactions_blok__title">Block Transactions:</div> 
    <div
      class="ul_list__blockTransactions"
      v-for="(transaction, index) in transactionBlock.tx"
      :key="`transaction-${index}`"
    > 
      <transaction-info 
        :transaction-info="transaction"
      />
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
import TransactionInput from './block-transaction-input.vue'
import TransactionOut from './block-transaction-out.vue'
import TransactionInfo from './block-of-transaction-info.vue'


export default {
  name: 'transaction-block',
  components: {
    TransactionInput,
    TransactionOut,
    TransactionInfo
  },
  data: () => ({
    
  }),
  props: {
    transactionBlock: {
      type: Object,
      default: () => ({}),
      required: true
    }
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
