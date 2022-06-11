<template>
  <div class="bg-[#FAFAFA] py-20">
    <div class="text-center mb-8">
        <small class="font-['Montserrat-medium'] text-[17px] text-black opacity-30">lorem ipsum aspet</small>
        <h3 class="font-['Montserrat-bold'] text-[24px]">Tədbirlər və Layihələr</h3>
    </div>
    <GSCarousel :items="projects" item-gap="10" :items-to-show="4" :preview-size="240">
      <template #item="{ data }">
        <Project :project="data"></Project>
      </template>
    </GSCarousel>
  </div>
</template>

<script>
import Project from '../components/Project.vue';
import 'gitart-scroll-carousel/dist/style.css'
import { GSCarousel } from 'gitart-scroll-carousel';
import photo1 from '../assets/images/projects/1.png';
import photo2 from '../assets/images/projects/2.png';
import photo3 from '../assets/images/projects/3.png';
import photo4 from '../assets/images/projects/4.png';

export default {
    data() {
        return {
            projects: [ 
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo1,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo2,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo3,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo4,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo1,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
                {
                    name: "The Polished Bannister Event Planners",
                    photo: photo4,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliquet elementum. Ut est consequat, convallis libero, in.'                 
                },
            ]
        }
    },

    components: {
        Project,
        GSCarousel
    }
}
</script>

<style>
:root {
  --gsc-custom-arrow-bg: #D3D8E3
}

.gsc {
  overflow-x: hidden;
}

.gsc-indicator {
  display: none !important;
}

.gsc-arrow {
  width: 100px;
  height: 100px;
}

.gsc-arrow:hover {
    background-color: #D3D8E3;
}

.gsc-arrow span {
    border-color: #000000;
}

.gsc-arrow--side-right {
  left: 96% !important;
}

.gsc-arrow--side-right span {
  transform: translateX(-20px) rotate(-45deg);
}

.gsc-arrow--side-left {
  left: unset !important;
  right: 96% !important;
}

.gsc-arrow--side-left span {
  transform: translateX(20px) rotate(135deg);
}
</style>