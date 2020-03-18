<template>
  <div class="container">
    <button class="ui button" :class="cSize" @click="chuf">
      <template v-if="animated">
        <div v-if="$slots.hidden"  class="hidden content">
          <slot name="hidden"/>
        </div>
        <div v-if="$slots.visible"  class="visible content">
          <slot name="visible"/>
        </div>
      </template>
      <template v-else>
        <i v-if='icon' class="icon" :class="icon"></i>
        <slot>我是一个按钮</slot>
      </template>
    </button>
  </div>
</template>

<script>
export default {
  name: 'My-button',
  methods: {
    chuf () {
      this.$emit('click')
    }
  },
  props: {
    size: {
      type: String,
      default: 'small',
      required: false,
      validator (val) {
        return ['mini', 'tiny', 'small', 'medium',
          'large', 'big', 'huge', 'massive'].includes(val)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  computed: {
    cSize () {
      var classArr = [this.size]
      this.animated && classArr.push(`animated ${this.animated}`)
      this.loading && classArr.push('loading')
      this.disabled && classArr.push('disabled')

      return classArr
    }
    //   var classArr = [this.size]
    //   if (this.disabled) {
    //     classArr.push('disabled')
    //   }
    //   if (this.loading) {
    //     classArr.push('loading')
    //   }
    //   return classArr.join(' ')
    // }
  }
}
</script>

<style scoped>

</style>
