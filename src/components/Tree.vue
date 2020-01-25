<template>
  <div :class="[this.className]">
    <basic-tree
      :data="data"
      @check="check"
      @arrow-toggle="arrowToggle"
      @title-click="titleClick">
    </basic-tree>
  </div>
</template>

<script>
  import BasicTree from "./BasicTree";
  import defaultCheck from '../compute-checked-nodes/default-check'
  import justCheckOne from '../compute-checked-nodes/just-check-one'
  import onlyCheckOne from '../compute-checked-nodes/only-check-one'
  import justCheckChild from '../compute-checked-nodes/just-check-child'
  import justCheckAllChild from '../compute-checked-nodes/just-check-all-child'
  import justDisableChild from '../compute-checked-nodes/just-disable-child'
  import justDisableAllChild from '../compute-checked-nodes/just-disable-all-child'

  export default {
    name: "Tree",
    props: {
      data: {
        type: Object,
        default() {
          return {
            id: '1',
            nodes: '1',
            title: '1',
            depth: 1,
            checked: '',
            showChild: false,
            child: [
              {
                id: '2',
                nodes: '1-2',
                title: '1-1',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '6',
                    nodes: '1-2-6',
                    title: '1-1-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: [
                      {
                        id: '12',
                        nodes: '1-2-6-12',
                        title: '1-1-1-1',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                      {
                        id: '13',
                        nodes: '1-2-6-13',
                        title: '1-1-1-2',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                      {
                        id: '14',
                        nodes: '1-2-6-14',
                        title: '1-1-1-3',
                        depth: 4,
                        checked: '',
                        showChild: false,
                        child: []
                      },
                    ]
                  },
                ]
              },
              {
                id: '3',
                nodes: '1-3',
                title: '1-2',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '7',
                    nodes: '1-3-7',
                    title: '1-2-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  }
                ]
              },
              {
                id: '4',
                nodes: '1-4',
                title: '1-3',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '8',
                    nodes: '1-4-8',
                    title: '1-3-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  }
                ]
              },
              {
                id: '5',
                nodes: '1-5',
                title: '1-4',
                depth: 2,
                checked: '',
                showChild: false,
                child: [
                  {
                    id: '9',
                    nodes: '1-5-9',
                    title: '1-4-1',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  },
                  {
                    id: '10',
                    nodes: '1-5-10',
                    title: '1-4-2',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  },
                  {
                    id: '11',
                    nodes: '1-5-11',
                    title: '1-4-3',
                    depth: 3,
                    checked: '',
                    showChild: false,
                    child: []
                  }
                ]
              },
            ]
          }
        }
      },
      className: {
        type: String,
        default: ''
      },
      computeType: {
        type: String,
        default: 'default'
      }
    },
    components: {
      BasicTree
    },
    mixins: [defaultCheck, justCheckOne, onlyCheckOne, justCheckChild, justCheckAllChild, justDisableChild, justDisableAllChild],
    data() {
      return {}
    },
    methods: {
      check(item) {
        switch (this.computeType) {
          case 'default':
            this.defaultCheck(this.data, item)
            break
          case 'just-check-one':
            this.justCheckOne(this.data, item)
            break
          case 'only-check-one':
            this.onlyCheckOne(this.data, item)
            break
          case 'just-check-child':
            this.justCheckChild(this.data, item)
            break
          case 'just-check-all-child':
            this.justCheckAllChild(this.data, item, item)
            break
          case 'just-disable-child':
            this.justDisableChild(this.data, item)
            break
          case 'just-disable-all-child':
            this.justDisableAllChild(this.data, item)
            break
          default:
            this.defaultCheck(this.data, item)
        }
        this.$emit('check', item)
      },
      arrowToggle(item) {
        this.$emit('arrow-toggle', item)
      },
      titleClick(item) {
        this.$emit('title-click', item)
      },

    }
  }
</script>


<style scoped>

</style>
