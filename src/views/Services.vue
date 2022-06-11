<template>
  <div class="bg-[#FAFAFA] px-24 pt-14 pb-28">
    <div class="text-center mb-8">
        <small class="font-['Montserrat-medium'] text-[17px] text-black opacity-30">what can i offer you</small>
        <h3 class="font-['Montserrat-bold'] text-[24px]">Xidmətlər və xüsusiyyətlər</h3>
    </div>
    <div class="flex flex-wrap justify-center">
        <Service v-for="(service, index) in services" :key="index" :service="service"></Service>
    </div>
  </div>
</template>

<script>
import Service from '../components/Service.vue';
import tv from '../assets/icons/services/tv.svg';

export default {
    data() {
        return {
            services: [
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                },
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                },
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                },
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                },
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                },
                {
                    icon: tv,
                    name: 'The Polished Bannister Event Planners',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at laoreet aliqu'
                }
            ]
        }
    },

    components: {
        Service
    }
}
</script>

<style>

</style>