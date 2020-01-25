export default {
  methods: {
    justCheckChild(treeData, item) {
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.justSetChild(item, item.checked)
      this.checkedItems = []
      this.computeCheckedItems(treeData)
      this.$emit('change', this.checkedItems)
    },
    justSetChild(item, checked) {
      if (item.child && item.child.length > 0) {
        item.child.forEach(obj => {
          this.$set(obj, 'checked', checked)
        })
      }
    },
    clearAllNodes(treeData) {
      this.$set(treeData, 'checked', '')
      for (let key in treeData) {
        if (typeof treeData[key] === 'object') {
          this.clearAllNodes(treeData[key])
        }
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
    }
  }
}
