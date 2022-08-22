<script setup>
    defineProps(['words']);
    defineEmits(['select-word'])
</script>

<template>
    <li v-for="word in words"
        @click="$emit('select-word',word.id,word.name)"
    >
        {{word.id}} : {{word.name}}
    </li>
</template>