 <template>
  <div class="block_transaction_input">
    <div 
      v-if="transactionInput.prev_out === null"
    >
      COINBASE (Newly Generated Coins)
    </div>
    <div 
      v-else
    >
      <router-link
        class="block_input" 
        :to="{ name: 'address', params: { addr: this.transactionInput.prev_out.addr }}"
      >
        {{ transactionInput.prev_out.addr }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transaction-input',
  props: {
    transactionInput: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data: () => ({

  }),
  components: {
    
  },
  
}
</script>


<style>
.block_input {
  text-decoration: none;
}

.block_transaction_input {
  background-color: #ffffff;
  padding: 15px 20px;
  margin: 0 0 10px 0;
  width: 350px;
  border-radius: 25px;
  border: 1px solid #e0e0e0;  
}
/*
 
*/

</style>
