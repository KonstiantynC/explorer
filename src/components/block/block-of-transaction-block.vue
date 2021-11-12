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
      <div class="transact_block_title">
        <div class="transact_block_item">
          <div class="transact_block_text">
            Input Consumed
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
        </div>
        <img class="image_arrow" :src="imageArrow">
        <div class="transact_block_item">
          <div class="transact_block_text">
            Outputs Created
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
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
import TransactionInput from './block-transaction-input.vue'
import TransactionOut from './block-transaction-out.vue'
import TransactionInfo from './block-of-transaction-info.vue'
import imageArrow from '../img/arrow.svg'

export default {
  name: 'transaction-block',
  components: {
    TransactionInput,
    TransactionOut,
    TransactionInfo
  },
  data: () => ({
    imageArrow
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
  width: 1150px;
}

.transactions_blok__title {
  display: flex;
  justify-content: flex-start;
  width: 1150px;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;

}

.ul_list__blockTransactions {
  background-color: #f7f7f7;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  margin-bottom: 25px;
  width: 1150px;
  height: auto;
}

.transact_block_title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 30px;
}

.transact_block_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.transact_block_text {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.image_arrow {
  width: 150px;
  height: 150px;
}

</style>
