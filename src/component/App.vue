<template>
  <div>
    公共头部
    <router-view></router-view>
    公共底部
     <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
  </div>

</template>

<script>
export default {};
export default {
    data() {
      return {
      
        value2: null
      }
    }
  }
</script>
