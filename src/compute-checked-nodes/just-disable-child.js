export default {
  methods: {
    justDisableChild(treeData, item) {
      if (item.disabled) {
        return false
      }
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.setChild(item)
      this.checkedItems = []
      this.computeCheckedItems(treeData)
      this.$emit('change', this.checkedItems)
    },
    setChild(item) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          if (item.checked === 'all') {
            this.$set(obj, 'checked', 'all')
            this.$set(obj, 'disabled', true)
          } else {
            this.$set(obj, 'checked', '')
            this.$set(obj, 'disabled', false)
          }
        })
      }
    },
    computeCheckedItems(treeData) {
      if (treeData.checked && !treeData.disabled) {
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
