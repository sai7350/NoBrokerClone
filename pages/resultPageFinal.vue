<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 w-full shadow-lg py-4">
            <div class="px-5 uppercase"> <span class=" text-red-600">Find<span class="font-semibold">YourHouse</span>
                </span></div>
        </div>

        <div class="container mx-auto p-8">
            <h1 class="text-3xl font-semibold text-gray-800 mb-6 text-center">Price Statistics</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <span class="block text-lg font-semibold text-gray-700 mb-2">Average Price</span>
                    <span class="block text-2xl font-bold text-blue-500">{{ formattedAveragePrice }}</span>
                </div>
                <div
                    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <span class="block text-lg font-semibold text-gray-700 mb-2">Maximum Price</span>
                    <span class="block text-2xl font-bold text-blue-500">{{ formattedMaxPrice }}</span>
                </div>
                <div
                    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <span class="block text-lg font-semibold text-gray-700 mb-2">Minimum Price</span>
                    <span class="block text-2xl font-bold text-blue-500">{{ formattedMinPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
definePageMeta({
    layout: false,
});
</script>