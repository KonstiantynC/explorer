<template>
  <div class="address_list_compose">
    <div 
      v-for="(addressItem, index) in addressTableList.txs"
      :key="`addressItem-${index}`"
      class="address_list_item_input"
    >
      <div class="address_input_item">
        <span>Input Consumed</span>
        <div
          v-for="(itemInput, index) in addressItem.inputs"
          :key="`itemInput-${index}`"
        >
          <address-table-lists-input 
            :address-table-lists-input="itemInput"
          />
        </div>
      </div>
      <div>
        <span>Outputs Created</span>
        <div
          v-for="(itemOut, index) in addressItem.inputs"
          :key="`itemOut-${index}`"
        >
          <address-table-lists-out 
            :address-table-lists-out="itemOut"
          /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addressTableListsInput from './address-table-lists-input.vue'
import addressTableListsOut from './address-table-lists-out.vue'

export default {
  name: 'address-table-list',
  components: {
    addressTableListsInput,
    addressTableListsOut
  },
  props: {
    addressTableList: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  
}
</script>


<style>
.address_list_item_input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 30px 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 25px 30px;
  width: 1080px;
  height: auto;

}

.address_input_item {
  display: flex;
  flex-direction: column;
}

</style>
