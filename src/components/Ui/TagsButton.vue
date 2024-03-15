<template>
  <div class="tag" v-for="tag in tags">{{ tag.city }}</div>
</template>
<script>
export default {
  name: "tags",
  props: { tags: { type: Array, required: true } },
};
</script>
<style lang="css">
.tag {
  padding: 6px 20px;
  border: 1px solid var(--color-lightgrey);
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  color: var(--color-gray);
}
</style>
