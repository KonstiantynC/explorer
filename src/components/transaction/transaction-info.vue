<template>
  <div>
    <div>
      <div 
      class="transaction_inputs" 
      v-for="(input, index) in transactionInfo.inputs"
      :key="`input-${index}`"
      > 
        <transaction-input 
          :transaction-input="input"
        />
      </div>
      <div
        class="transaction_out"
        v-for="(itemOut, index) in transactionInfo.out"
        :key="`itemOut-${index}`"
      > 
        <transaction-out
          :transaction-out="itemOut"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TransactionInput from './transactions-list-input.vue'
import TransactionOut from './transactions-list-out.vue'

export default {
  name: 'transaction-info',
  components: {
    TransactionInput,
    TransactionOut
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



.transaction_inputs {
  padding-bottom: 25px;
}

.transaction_out {
  padding-bottom:  25px;
}
</style>
