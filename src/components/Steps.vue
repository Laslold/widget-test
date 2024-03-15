<template lang="">
  <el-steps
    class="progressStep"
    style="max-width: 100%"
    :active="0"
    process-status="success"
    finish-status="success"
    simple
  >
    <el-step title="Загальна інформація" />
    <el-step title="Розрахунок вартості" />
    <el-step title="Дані договору" />
  </el-steps>
</template>
<script>
export default {};
</script>
<style lang="css" scoped></style>
