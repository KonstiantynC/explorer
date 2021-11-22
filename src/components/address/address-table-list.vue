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
      <img class="image_arrow_address" :src="imageArrow">
      <div class="address_Out_item">
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
import imageArrow from '../img/arrow.svg'

export default {
  name: 'address-table-list',
  components: {
    addressTableListsInput,
    addressTableListsOut,
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
    imageArrow
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
  width: 1150px;
  height: auto;
}

.address_input_item {
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
}

.address_Out_item {
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
}

.image_arrow_address {
  width: 150px;
  height: 100px;
  padding: 15px 0 0;
}


</style>
