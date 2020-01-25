<template>
  <tree compute-type="only-check-one" @change="change" @check="check"></tree>
</template>

<script>
  import Tree from "@/components/Tree";

  export default {
    name: "Demo",
    components: {
      Tree
    },
    data() {
      return {
      }
    },
    methods: {
      change(checkedItems){
      },
      check(checkedItems){
        //console.log(checkedItems)
      }
    }
  }
</script>

<style scoped>

</style>
