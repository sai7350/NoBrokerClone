<template>
  <div>
    <Header />
    <div class="md:mt-24 md:text-2xl ml-80">
      Unlock Accurate Property Pricing on
      <span class="border- text-red-600"
        >Find<span class="font-semibold">YourHouse</span>
      </span>
    </div>

    <div class="">
      <div class="bg-orange-100 ml-[360px] mt-5 h-14 w-2/5 rounded-lg">
        <span class="flex ml-3">
          <img
            src="/Images/icons8-trust-100.png"
            alt=""
            class="w-12 h-12 p-2 mt-2"
          /><span class="mt-4 text-gray-600 text-lg">Trusted</span>
          <Span class="ml-5 mt-3 border h-9"></Span>
          <span class="flex">
            <img
              src="/Images/icons8-fast-100.png"
              alt=""
              class="w-12 h-12 p-2 mt-2"
            /><span class="mt-4 text-gray-600 text-lg">FastService</span>
            <Span class="ml-5 mt-3 border h-9"></Span>
          </span>

          <span class="flex">
            <img
              src="/Images/icons8-low-price-64.png"
              alt=""
              class="w-10 h-10 p-2 mt-3"
            /><span class="mt-4 text-gray-600 text-lg">Lowest Price</span>
          </span>
        </span>
      </div>
    </div>

    <div class="flex w-full mt-10 justify-center">
      <!-- select City starts here -->
      <div class="">
        <select class="select border p-2 rounded-md border-red-700 w-20">
          <option disabled selected>City</option>
          <option>Nagpur</option>
          <option>Pune</option>
          <option>Mumbai</option>
        </select>
      </div>
      <!-- select City ends here -->

      <!-- select BHK options starts -->
      <div class="">
        <select class="select border p-2 ml-1 rounded-md border-red-700 w-20">
          <option disabled selected>BHK</option>
          <option>2BHK</option>
          <option>3BHK</option>
          <option>4BHK</option>
        </select>
      </div>

      <!-- select BHK options ends -->

      <div class="flex">
        <input
          type="text"
          class="border border-red-700 p-2 h-10 ml-1 rounded-l focus:outline-none text-gray-600"
          style="width: 400px"
          placeholder="What are you looking for?"
        />

        <button
          type="submit"
          class="w-14 h-10 ml-0 bg-red-500 text-white text-xl border border-red-500 rounded-r hover:bg-red-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 ml-3 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="text-center">
        
        
      <button
        type="submit"
        class="w-52 h-8 ml-6 mt-36 text-white text-sm border cursor-pointer"
        style="background-color: #009587"
      >
        <span> Post Free Property Ad </span>
      </button>
    </div>
  </div>

  <!-- <Feedbackcode/> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  method: {
    toggle_visibility() {
      var e = document.getElementById("feedback-main");
      if (e.style.display == "block") {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body {
  background: #f2f2f2;
  font-family: "Open Sans", sans-serif;
}
</style>
