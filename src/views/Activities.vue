<template>
  <div class="bg-[#F4EEEE] flex">
      <div class="w-1/2">
          <img src="../assets/images/activities/activity.png" alt="activities" class="w-full" />
      </div>
      <div class="px-28 py-28 w-1/2">
          <div class="pl-8 mb-7">
              <small class="font-['Montserrat-medium'] text-[17px]">
                  <span class="mr-4">—</span>
                  <span class="opacity-30">Work History</span>
              </small>
              <h3 class="font-['Montserrat-bold'] text-[24px]">Fəaliyyət dövrü</h3>
          </div>
          <div>
            <Activity v-for="(activity, index) in activities" :key="index" :activity="activity" 
                    :isLast="index === activities.length - 1">
            </Activity>
          </div>
      </div>
  </div>
</template>

<script>
import Activity from '../components/Activity.vue';

export default {
    data() {
        return {
            activities: [
                {
                    date: "2004 – 2006",
                    content: "ANS Müstəqil Teleradio Şirkətində diktor, aparıcı, reportyor, xüsusi müxbir vəzifələrində çalışıb."
                },
                {
                    date: "2006 – 2008",
                    content: "Azad Azərbaycan Müstəqil Teleradio Yayım Şirkətində diktor, aparıcı, reportyor, xüsusi müxbir və  xarici telekanallarda (RTR, Ekspert TV) təcrübə keçmək üçün 2008-ci ildə əmək fəaliyyətinə ara verib."
                },
                {
                    date: "2010 – 2018",
                    content: "Azad Azərbaycan Müstəqil Teleradio Yayım Şirkətində İctimai-Siyasi Proqramlar Departamentinin redaktoru, ATV Xəbər proqramının aparıcısı, “Həftə Sonu” Analitik - İnformasiya Proqramında xüsusi müxbir, redaktor vəzifələrində"
                },
                {
                    date: "2010 – 2018",
                    content: "Azad Azərbaycan Müstəqil Teleradio Yayım Şirkətində İctimai-Siyasi Proqramlar Departamentinin redaktoru, ATV Xəbər proqramının aparıcısı, “Həftə Sonu” Analitik - İnformasiya Proqramında xüsusi müxbir, redaktor vəzifələrində"
                },
            ]
        }
    },

    components: {
        Activity
    }
}
</script>

<style>

</style>