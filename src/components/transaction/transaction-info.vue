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

  })
}
</script>


<style>
.transaction_block_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 25px 30px;
  width: 1080px;
  height: auto;
}


.transaction_inputs {
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
}
.transaction_out_title {
  display: flex;
  flex-direction: column;
}

</style>
