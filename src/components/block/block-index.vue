<template>
  <div class="page_block">
    <div 
      v-if="!isLoaded"
      class="block_loader" 
    >
      <loader />
    </div>
    <div 
      v-else 
      class="page_block_title_block"
    >
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
  </div>
</template>

<script>
import transactionBlock from './block-of-transaction-block.vue'
import tableListMain from './block-table-list-main.vue'
import tableListOther from './block-table-list-other.vue'
import blockPageUnderheader from './block-page-underheader.vue'
import loader from '../views/loader.vue'
import axios from 'axios'

export default {
  name: 'block',
  components: {
    transactionBlock,
    blockPageUnderheader,
    tableListMain,
    tableListOther,
    loader
  },
  data: () => ({
    info: [],
    errored: true,
    isLoaded: false
  }),
  methods: {
    loadBlock() {
      axios
      .get('https://blockchain.info/rawblock/' + this.$route.params.hash)
      .then(response => {
        this.info = response.data
        this.isLoaded = true
      })
      .catch(error => {
        this.$router.push({
          name: 'error-index',
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
.page_block_title_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1150px;
}

.page_block {
  width: 100%;
}
.block_loader {
  margin-top: 60px;
}

</style>


