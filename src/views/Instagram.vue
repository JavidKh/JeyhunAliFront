<template>
  <div class="bg-[#FAFAFA] px-32 py-20">
    <div class="text-center mb-8">
        <small class="font-['Montserrat-medium'] text-[17px] text-black opacity-30">On instagram</small>
        <h3 class="font-['Montserrat-bold'] text-[24px]">#Jeyhunali</h3>
    </div>
    <div class="flex justify-between mb-8">
        <Post v-for="(post, index) in posts" :key="index" :post="post"></Post>
    </div>
    <div class="flex justify-center">
        <button class="bg-[#18243D] font-['Montserrat-medium'] text-[20px] text-white py-4 px-12">Follow me on IG</button>
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import img1 from "../assets/images/posts/1.png";
import img2 from "../assets/images/posts/2.png";
import img3 from "../assets/images/posts/3.png";
import img4 from "../assets/images/posts/4.png";

export default {
    data() {
        return {
            posts: [
                {
                    image: img1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr..",
                    likes: 2544,
                    comments: 2544
                },
                {
                    image: img2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr..",
                    likes: 2544,
                    comments: 2544
                },
                {
                    image: img3,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr..",
                    likes: 2544,
                    comments: 2544
                },
                {
                    image: img4,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr..",
                    likes: 2544,
                    comments: 2544
                }
            ]
        }
    },

    components: {
        Post
    }
}
</script>

<style>

</style>