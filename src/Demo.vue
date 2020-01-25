<template>
  <tree compute-type="just-disable-child" @change="change" @check="check"></tree>
</template>

<script>
  import Tree from "@/components/Tree";

  export default {
    name: "Demo",
    components: {
      Tree
    },
    data() {
      return {}
    },
    methods: {
      change(checkedItems) {
        console.log(checkedItems)
      },
      check(checkedItems) {
        //console.log(checkedItems)
      }
    }
  }
</script>

<style scoped>

</style>
