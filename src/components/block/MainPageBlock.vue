<template>
  <div class="container">
    <div class="ul_list">
      <table-list />
    </div>
    <div class="content">
      <div class="block_of_transactions">Block Transactions:</div> 
      <div
        class="ul_list__blockTransactions"
        v-for="item in blockTransactions"
        :key="item.time"
      > 
        <div>{{ item.fee }}</div>
        <div>{{ item.hash }}</div>
        <div>{{ item.time }}</div>
        <!--<div>{{ item.inputs }}</div>
        <div>{{ item.out }}</div>-->
        <hr/>
      </div>  
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
import TableList from './TableList.vue'

export default {
  name: 'block',
  components: {
    TableList
  },
  data: () => ({
    info: [],
    errored: false,
    hash: '',
    id: 0,
    prevBlock: '',
    merkleRoot: '',
    timestamp: '',
    bits: 0,
    height: 0,
    numberOfTransactions: 0,
    nonce: 0,
    size: 0,
    maihain: true,
    blockReward: 0,
    transactionVolume: '',
    blockTransactions: []
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103')
      .then(response => {
        this.info = response.data
        console.log("INFO", this.info)
        this.hash = this.info.hash
        this.id = this.info.ver
        this.prevBlock = this.info.prev_block
        this.merkleRoot = this.info.mrkl_root
        this.bits = this.info.bits
        this.timestamp = this.info.time
        this.nonce = this.info.nonce
        this.numberOfTransactions = this.info.n_tx
        this.size = this.info.size
        this.mainChain = this.info.main_chain
        this.height = this.info.height
        this.blockReward = this.info.block_index
        this.transactionVolume = this.info.relayed_by
        this.blockTransactions = this.info.tx
      })
      .catch(error  => {
        console.log(error)
      })
  },
  methods: {
    
  }      
}

</script>


<style>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: grey;
  width: 100%;
  padding-inline-start: 0;
  margin: 20px;

}

.ul_list {
  display: flex;
  justify-content: center;
}
li {
  display: flex;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: grey;
  margin: 20px;
}

.block_of_transactions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: green;
  font-size: 26px;
  font-weight: 600;
  margin: 10px;
}

.ul_list__blockTransactions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 100%;
}


</style>


