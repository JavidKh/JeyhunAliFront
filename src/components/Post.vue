<template>
  <div class="flex flex-col bg-white rounded-lg max-w-[294px]">
    <img :src="post.image" alt="@jeyhunali" class="rounded-lg" />
    <div class="grow flex flex-col justify-between p-7">
        <p class="font-['Montserrat-semiBold'] text-[16px] mb-6">{{post.text}}</p>
        <div class="flex font-['Montserrat-semiBold'] text-[13px]">
            <div class="flex mr-10">
                <img src="../assets/icons/instagram/heart.svg" alt="heart" class="mr-2" />
                <span>{{post.likes}}</span>
            </div>
            <div class="flex">
                <img src="../assets/icons/instagram/comment.svg" alt="comment" class="mr-2" />
                <span>{{post.comments}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["post"]
}
</script>

<style>

</style>