<template>
  <div class="home">
    <my-button size="big" icon="user">我是大按钮</my-button>
    <hr>
    <my-button size="small">我是小按钮</my-button>
    <hr>
    <my-button size="large">我是特殊按钮</my-button>
    <hr>
    <my-button size="huge" disabled icon="bell slash outline">我是禁用按钮</my-button>
    <hr>
    <my-button size="tiny"  icon="sync" loading >我是加载按钮</my-button>
    <hr>
    <my-button animated="animated" size="small">
      <div slot="hidden">$1000</div>
      <div slot="visible">牛牛</div>
    </my-button>
    <hr>
    <my-button animated="fade" size="small">
      <div slot="hidden">$1000</div>
      <div slot="visible">牛牛</div>
    </my-button>
    <hr>
    <my-button size="big" @click="hClick">事件</my-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    hClick () {
      alert('别点我')
    }
  },
  components: {
  }
}
</script>
