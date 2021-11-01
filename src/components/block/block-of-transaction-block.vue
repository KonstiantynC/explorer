<template>
  <div class="transactions_blok_list">
    <div class="transactions_blok__title">
      <div>
        Block Transactions:
      </div>
    </div> 
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
  align-items: center;
  width: 1100px;
  padding-left: 15px;
  margin-top: 25px;
}

.transactions_blok__title {
  width: 1150px;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
  margin-right: 15px;
  display: flex;
  justify-content: flex-start;

}

.ul_list__blockTransactions {
  background-color: #ededed;
  border-radius: 5px;
  border: 1px solid #636363;
  margin-bottom: 25px;
  padding: 25px 30px;
  width: 1080px;
  height: auto;
  margin-right: 20px;
}



</style>
