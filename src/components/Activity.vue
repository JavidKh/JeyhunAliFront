<template>
    <div class="relative pl-8 pb-10 m-0" :class="!isLast ? 'relative border-l border-[#D3D8E3]' : ''">
        <div class="absolute -left-[8px] top-0 w-[16px] h-[16px] bg-[#DDCACA] rounded-full"></div>
        <span class="font-['Montserrat-medium'] text-[18px] text-[#4A5977]">{{activity.date}}</span>
        <p class="font-['Montserrat-medium'] text-[14px] opacity-50">{{activity.content}}</p>
    </div>
</template>

<script>
export default {
    props: ['activity', 'isLast']
}
</script>

<style>

</style>