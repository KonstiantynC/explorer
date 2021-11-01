<template>
  <div class="page_block">
    <block-page-underheader
      :block-page-underheader="info"
    />
    <div>
      <table-list
        :block-info="info" 
      />  
    </div>
    <transaction-block
      :transaction-block="info"  
    />
  </div>
</template>

<script>
import TableList from './block-of-table-list.vue'
import TransactionBlock from './block-of-transaction-block.vue'
import blockPageUnderheader from './block-page-underheader.vue'
import axios from 'axios'

export default {

  name: 'block',
  components: {
    TableList,
    TransactionBlock,
    blockPageUnderheader
  },
  data: () => ({
    info: [],
    errored: true
  }),
  methods: {
    loadBlock () {
      axios
      .get('https://blockchain.info/rawblock/' + this.$route.params.hash)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        this.$router.push({
          name: 'error',
          params: { 
            input: this.$route.params.hash 
          }
        })
        console.log(error)
      })
    }
  },
  mounted () {
    this.loadBlock()
  },
  /*updated () {
    this.loadBlock()
  } */     
}


/*
params: { 
  error: {
    hash: this.$route.params.hash,
    message: 'block'
  }             
}
*/
</script>


<style>
.page_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}


</style>


