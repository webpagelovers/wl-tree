export default {
  methods: {
    justCheckAllChild(treeData, currentTreeNode, item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.setAllChildCheck(currentTreeNode, item.checked)

      this.checkedItems = []
      this.computeCheckedItems(treeData)
      this.$emit('change', this.checkedItems)

    },
    setAllChildCheck(item, checked) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          this.$set(obj, 'checked', checked)
          this.setAllChildCheck(obj, checked)
        })
      }
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
    },
  }
}
