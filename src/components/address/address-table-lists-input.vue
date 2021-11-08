<template>
  <div>
    {{ addressTableListsInput.prev_out }}
  </div>
</template>

<script>
export default {
  name: 'address-table-lists-input',
  props: {
    addressTableListsInput: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  })
}
</script>


<style>


</style>
