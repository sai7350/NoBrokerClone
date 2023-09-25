<script >
export default{
    data(){
        return{
            activetab:1,
        }
    }
}

</script>

<template>
    <div>
        <div class=" justify-center flex mt-20 ">

        <div class="bg-white w-auto justify-items-center h-96 rounded-lg shadow-xl">
            <div id="tabs" class="md:mb-4 mb-4">
                                <div class="tabs md:ml-20 md:mx-10 py-4 flex">
                                    <a class="md:mx-10 md:px-3  text-lg mx-2 p-1 hover:cursor-pointer transition duration-200   rounded md:font-bold mb-30 hover:bg-gray-400 hover:text-white"
                                        @click="activetab = 1" :class="{ 'active': activetab === 1 }">Login</a>
                                    <a class="md:mx-10 md:px-3  text-lg p-1 mx-2 hover:cursor-pointer transition duration-200  rounded md:font-bold mb-30  hover:bg-gray-400 hover:text-white"
                                        @click="activetab = 2" :class="{ 'active': activetab === 2 }">Register</a>
                                    <!-- <a class="md:mx-10" @click="activetab=3" :class="{ 'active': activetab === 3 }">Tab 3</a>  -->
                                </div>
                            </div>



                            <hr class="border-t-2 border-blue-600">
                            
                        </div>
          

        </div>
    </div>


</template>

<style  scoped>
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 6px solid blueviolet;
    cursor: default;
}

</style>
