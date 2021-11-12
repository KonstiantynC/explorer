<template>
  <div class="table_list_other">
    <button @click="showList" class="button_details">
      Advanced Details
      <b class="caret"></b>
    </button>
    <table v-if="isShow">
      <tbody>
        <tr>
          <hr/>
          <td>
            <span>Current Depth</span> 
            <span>{{ tableListOther.n_tx }}</span>
          </td>
          <hr/>
          <td>
            <span>Block Size (bytes)</span>
            <span>{{ tableListOther.size }}</span>
          </td>
          <hr/>
          <td>
            <span>Block Virtual Size (vbytes) </span>
            <span>{{ tableListOther.weight }}</span>
          </td>
          <hr/>
          <td>
            <span>Nonce</span> 
            <span>{{ tableListOther.nonce }}</span>
          </td>
          <hr/>
          <td>
            <span>Merkle root</span> 
            <span>{{ tableListOther.mrkl_root }}</span>
          </td>
          <hr/>
          <td>
            <span>Bits (difficulty target)</span> 
            <span>{{ tableListOther.bits }}</span>
          </td>
          <hr/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'table-list-other',
  props: {
    tableListOther: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
    isShow: false
  }),
  methods: {
    showList() {
      this.isShow = !this.isShow
    }
  }
}
</script>


<style>

tr {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

tbody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1150px;

}


td {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
}

hr {
  width: 1150px;
}

.table_list_other {
  margin: 40px 0;
}

.button_details {
  padding: 8px 15px;
  font-size: 16px;
  background-color: #5799d4;
  color: #ffffff;
  border-radius: 5px;
  border-color: #5799d4;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}



</style>
