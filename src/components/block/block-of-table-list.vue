<template>
  <div class="content">
    <table>
      <tbody>
        <tr>
          <td>
            <span>No:</span>
            <span>{{ blockInfo.ver }}</span>
          </td>
          <hr/>
          <td>
            <span>Miner:</span>
            <span>{{ blockInfo.prev_block }}</span>
          </td>
          <hr/>
          <td>
            <span>Merkle root:</span> 
            <span>{{ blockInfo.mrkl_root }}</span>
          </td>
          <hr/>
          <td>
            <span>Timestamp:</span> 
            <span>{{ TransactionDate(blockInfo.time) }}</span>
          </td>
          <hr/>
          <td>
            <span>Bits:</span> 
            <span>{{ blockInfo.bits }}</span>
          </td>
          <hr/>
          <td>
            <span>Number of Transactions:</span> 
            <span>{{ blockInfo.n_tx }}</span>
          </td>
          <hr/>
          <td>
            <span>Nonce:</span>
            <span>{{ blockInfo.nonce }}</span>
          </td>
          <hr/>
          <td>
            <span>Size:</span>
            <span>{{ blockInfo.size }}</span>
          </td>
          <hr/>
          <td>
            <span>Block Reward:</span>
            <span>{{ blockInfo.block_index }}</span>
          </td>
          <hr/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'table-list',
  components: {
  },
  props: {
    blockInfo: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
  }),
  methods: {
    TransactionDate () {
      return moment(this.blockInfo.time * 1000).format('dddd, MMMM DD YYYY')
    }
  }
}

  
</script>


<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;
}

h2 {
  margin-left: 15px;
}

tr {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

tbody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;

}


td {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
}

hr {
  width: 1000px;
}

</style>
