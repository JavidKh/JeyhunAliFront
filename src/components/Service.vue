<template>
  <div class="flex flex-col items-center bg-white w-[395px] p-12 mr-2 mb-2">
      <img :src="service.icon" class="mb-8" />
      <h5 class="font-['Montserrat-semiBold'] text-[18px] text-center mb-2">{{service.name}}</h5>
      <p class="font-['Montserrat-regular'] text-[13px] text-center text-black opacity-[.44]">{{service.text}}</p>
  </div>
</template>

<script>
export default {
    props: ['service']
}
</script>

<style>

</style>