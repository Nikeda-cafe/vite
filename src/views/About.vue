<script setup>
defineProps(['code','id']);
</script>
<template>
    アバウト
    <div>{{this.$route.params.code}}</div>
    <div>{{this.$route.params.id}}</div>
    <div>{{code}} : {{id}}</div>
</template>
