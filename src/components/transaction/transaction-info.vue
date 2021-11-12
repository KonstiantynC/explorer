<template>
  <div>
    <div class="transaction_block_info">
      <div class="transaction_input_title">
        <div class="transact_block_text">
           Input Consumed
        </div>
        <div 
          class="transaction_inputs" 
          v-for="(input, index) in transactionInfo.inputs"
          :key="`input-${index}`"
        > 
          <transaction-input 
            :transaction-input="input"
          />
        </div>
      </div>
      <img class="image_arrow" :src="imageArrow">
      <div class="transaction_out_title">
        <div class="transact_block_text">
           Outputs Created
        </div> 
        <div
        class="transaction_out_item"
        v-for="(itemOut, index) in transactionInfo.out"
        :key="`itemOut-${index}`"
        > 
        <transaction-out
          :transaction-out="itemOut"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import transactionInput from './transactions-list-input.vue'
import transactionOut from './transactions-list-out.vue'
import imageArrow from '../img/arrow.svg'

export default {
  name: 'transaction-info',
  components: {
    transactionInput,
    transactionOut
  },
  props: {
    transactionInfo: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
    imageArrow
  })
}
</script>


<style>
.transaction_block_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  width: 1150px;
  height: auto;
}

.image_arrow {
  width: 150px;
  height: 150px;
}

.transaction_inputs {
  display: flex;
  flex-direction: column;
}
.transaction_out_title {
  display: flex;
  flex-direction: column;
}

</style>
