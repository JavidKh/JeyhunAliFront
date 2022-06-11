<template>
  <div class="flex justify-between bg-[#18243D] px-32 py-16">
      <div class="flex flex-col justify-between w-1/2 pr-24 py-12">
          <div>
            <small class="text-white font-['Montserrat-medium'] text-[17px]">
                <span class="mr-4">—</span>
                <span class="opacity-30">Get in touch</span>
            </small>
            <h6 class="font-['Montserrat-bold'] text-[24px] text-white mb-2 mt-1">Contact info</h6>
            <small class="font-['Montserrat-medium'] text-[17px] text-white opacity-30">
                Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use 
                Lorem Ipsum as their default model text.
            </small>
          </div>
          <div class="contact-methods flex">
              <div class="pr-24">
                  <img src="../assets/icons/contacts/call.svg" alt="phone" class="mb-2" />
                  <p class="font-['Montserrat-semiBold'] text-[20px] text-white mb-1">
                      Phone
                  </p>
                  <small class="font-['Montserrat-regular'] text-[14px] text-white opacity-90">
                      +994 51 373 48 48
                  </small>
              </div>
              <div class="pr-24">
                  <img src="../assets/icons/contacts/email.svg" alt="email" class="mb-2" />
                  <p class="font-['Montserrat-semiBold'] text-[20px] text-white mb-1">
                      Email
                  </p>
                  <small class="font-['Montserrat-regular'] text-[14px] text-white opacity-90">
                      example@example.co
                  </small>
              </div>
          </div>
          <div class="flex items-center">
            <p class="uppercase font-['Montserrat-semiBold'] text-[13px] text-[#999999] mr-5">
                Follow me
            </p>
            <div class="flex">
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/twitter.svg" alt="twitter"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/instagram.svg" alt="instagram"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/facebook.svg" alt="facebook"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/linkedin.svg" alt="linkedin"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/youtube.svg" alt="youtube"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
                <a href="#" class="relative rounded-full border border-[#C4C4C4] w-[30px] h-[30px] mr-4">
                    <img src="../assets/icons/social/contacts/whatsapp.svg" alt="whatsapp"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px]" />
                </a>
            </div>
      </div>
      </div>
      <div class="w-1/2 bg-white p-12">
          <p class="font-['Montserrat-semiBold'] text-[24px] mb-7">Stay in Touch</p>
          <form @submit="submit($event)">
            <input type="text" name="name" id="name" placeholder="Your name"
                   class="border border-[#C4C4C4] rounded-xl w-full py-2 px-4 mb-4" v-model="form.name" />
            <input type="email" name="email" id="email" placeholder="Your email"
                   class="border border-[#C4C4C4] rounded-xl w-full py-2 px-4 mb-4" v-model="form.email" />
            <input type="tel" name="phone" id="phone" placeholder="Phone "
                   class="border border-[#C4C4C4] rounded-xl w-full py-2 px-4 mb-4" v-model="form.phone" />
            <textarea name="theme" id="theme" placeholder="Your message" v-model="form.theme"
                      class="border border-[#C4C4C4] rounded-xl w-full h-[132px] resize-none py-2 px-4 mb-5">
            </textarea>
            <button type="submit" class="font-['Montserrat-medium'] text-[16px] text-white
                bg-[#1C1C1C] rounded-xl px-14 py-2">
                Send message
            </button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                theme: ''
            }
        }
    },

    methods: {
        submit(e) {
            e.preventDefault();
        }
    }
}
</script>

<style>

</style>