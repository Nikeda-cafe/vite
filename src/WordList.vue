<script setup>
    defineProps(['words']);
</script>

<template>
    <li v-for="word in words">
        {{word.id}} : {{word.name}}
    </li>
</template>