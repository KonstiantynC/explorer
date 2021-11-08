<template>
  <div>
    <div 
      v-for="(addressItem, index) in addressTableList.txs"
      :key="`addressItem-${index}`"
    >
      <div
        v-for="(itemInput, index) in addressItem.inputs"
        :key="`itemInput-${index}`"
      >
        <address-table-lists-input 
          :address-table-lists-input="itemInput"
        />
      </div>
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

</style>
