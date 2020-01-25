export default {
  methods: {
    justCheckOne(treeData, item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.checkedItems = []
      this.computeCheckedItems(treeData)
      this.$emit('change', this.checkedItems)
    },
    computeCheckedItems(treeData) {
      if (treeData.checked) {
        this.checkedItems.push(treeData)
      }
      if (treeData.child && treeData.child.length > 0) {
        treeData.child.forEach(item => {
          this.computeCheckedItems(item)
        })
      }
    }
  }
}
