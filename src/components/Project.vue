<template>
  <div class="project-card duration-300 px-8 py-12 bg-white h-full border-b-2 border-transparent
              hover:border-[#4A5977]">
    <div class="flex justify-center mb-6">
      <img :src="project.photo" :alt="project.name" />
    </div>
    <div>
      <h5 class="font-['Montserrat-semiBold'] text-[16px] mb-4">{{ project.name }}</h5>
      <p class="font-['Montserrat-regular'] text-[13px] opacity-[.44]">{{ project.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["project"]
}
</script>

<style>
</style>