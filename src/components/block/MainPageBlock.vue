<template>
  <div class="page_block">
    <TableList />
    <TransactionBlock />
  </div>
</template>

<script>
import TableList from './TableList.vue'
import TransactionBlock from './TransactionBlock'
export default {
  name: 'block',
  components: {
    TableList,
    TransactionBlock
  },
  data: () => ({
  }),
  methods: {
    
  }      
}

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


