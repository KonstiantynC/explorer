<template>
  <div class="page_block">
    <block-page-underheader
      :block-page-underheader="info"
    />
    <div class="content">
      <table-list-main 
        :table-list-main="info"
      />
      <table-list-other
        :table-list-other="info"
      />
    </div>
    <transaction-block
      :transaction-block="info"  
    />
  </div>
</template>

<script>
import TransactionBlock from './block-of-transaction-block.vue'
import tableListMain from './block-table-list-main.vue'
import tableListOther from './block-table-list-other.vue'
import blockPageUnderheader from './block-page-underheader.vue'
import axios from 'axios'

export default {

  name: 'block',
  components: {
    TransactionBlock,
    blockPageUnderheader,
    tableListMain,
    tableListOther
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
  margin-top: 50px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
}

</style>


