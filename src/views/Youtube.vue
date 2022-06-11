<template>
  <div class="bg-[#FAFAFA] px-24 py-14">
    <div class="text-center mb-8">
        <small class="font-['Montserrat-medium'] text-[17px] text-black opacity-30">Videos about me</small>
        <h3 class="font-['Montserrat-bold'] text-[24px]">Youtube kanalı</h3>
    </div>
    <div class="videos flex">
      <iframe :src="active" class="grow"></iframe>
      <div class="w-[20%] h-[630px] overflow-y-scroll ml-12">
        <div v-for="(video, index) in videos" :key="index" class="cursor-pointer relative"
             @click="active = video.src + '?autoplay=1'">
          <div v-if="video.src !== active.replace('?autoplay=1', '')" 
               :class="index !== videos.length - 1 ? 'mb-5' : ''">
            <img :src="video.thumbnail" :alt="video.src" />
            <img src="../assets/icons/youtube/youtube.svg"
                 class="w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        "https://www.youtube.com/watch?v=kuIgwZTkSoQ",
        "https://www.youtube.com/watch?v=KMZBauH47Jo",
        "https://www.youtube.com/watch?v=2S4qGKmzBJE",
        "https://www.youtube.com/watch?v=K1PCl5D-IpU",
        "https://www.youtube.com/watch?v=3ItP24jdKaI",
        "https://www.youtube.com/watch?v=5_iuNaULT5k"
      ],
      videos: [],
      active: ''
    }
  },

  methods: {
    retrieveId(str) {
      let youtube_video_id = str.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
      if (youtube_video_id.length === 11) return youtube_video_id;
      else return false;
    },

    embedToFrame(id) {
      return "https://www.youtube.com/embed/"+id;
    },

    retrieveThumbnail(id) {
      return "//img.youtube.com/vi/"+id+"/0.jpg";
    }
  },

  mounted() {
    this.data.map((item) => {
        let id = this.retrieveId(item);
        this.videos.push({
          id: id,
          src: this.embedToFrame(id),
          thumbnail: this.retrieveThumbnail(id)
        })
      }
    );
    this.active = this.videos[0].src;
  }
}
</script>

<style>

</style>