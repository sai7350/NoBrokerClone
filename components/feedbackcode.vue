<template>
    <div class=" ">
      <button @click="toggleFeedback" class=" text-white font-semibold rounded-lg text-base bg-gray-900  border-gray-600 w-32 h-12 absolute right-0 bottom-0  transform ">
        Feedback
      </button>
      <div v-if="showFeedback" id="feedback-main">
        <div id="feedback-div" class="bg-gray-200 bg-opacity-40 p-8 rounded-lg absolute left-1/2 transform -translate-x-1/2 mt-8 w-11/12 md:w-96">
          <form @submit.prevent="submitFeedback" class="form" id="feedback-form1" name="form1" enctype="multipart/form-data">
            <div class="mb-6">
              <input v-model="name" type="text" class="w-full p-3 border border-blue-500 bg-white rounded-l focus:outline-none text-gray-600 focus:border-blue-500" required placeholder="Name" id="feedback-name" />
            </div>
            <div class="mb-6">
              <input v-model="email" type="email" class="w-full p-3 border border-blue-500 bg-white focus:outline-none text-gray-600 focus:border-blue-500" id="feedback-email" placeholder="Email" required />
            </div>
            <div class="mb-6">
              <textarea v-model="comment" class="w-full p-3 border border-blue-500 bg-white focus:outline-none text-gray-600 focus:border-blue-500 resize-y h-40" id="feedback-comment" required placeholder="Hey, I really love the site but I believe that you could incorporate some ..... and also get rid of the ...... on the section."></textarea>
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full py-4 bg-blue-500 text-white font-semibold text-xl border border-blue-500 cursor-pointer hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition duration-300" id="feedback-button-blue">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showFeedback: false,
        name: '',
        email: '',
        comment: '',
      };
    },
    methods: {
      toggleFeedback() {
        this.showFeedback = !this.showFeedback;
      },
      submitFeedback() {
        // Handle form submission here
        console.log('Submitted', this.name, this.email, this.comment);
        // You can send an HTTP request to your server here
      },
    },
  };
  </script>
  