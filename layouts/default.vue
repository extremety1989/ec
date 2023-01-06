<template>
    <div>
         <header class="shadow-sm bg-white">
         <nav class="container mx-auto p-4 flex justify-between">
             <NuxtLink to="/" class="font-bold">EC</NuxtLink>
         </nav>

         </header>
         <nav class="container mx-auto flex justify-center">
            <ul class="p-2" v-for="category in categories" :key="category.id">
                 <li><NuxtLink :to="`/products/${category.id}`">{{category.name}}</NuxtLink></li>
             </ul>
        </nav>
       <div class="container mx-auto p-4">
         <slot />
       </div>
       <footer class="container mx-auto p-4 flex justify-between border-t-2">
             <ul class="flex gap-4">
                 <li><NuxtLink to="/about">About</NuxtLink></li>
             </ul>
         </footer>
     </div>
  </template>
  
  <script setup lang="ts">
     const {id} = useRoute().params
    //  const category_selected = ref(id)
    //  const {data:categories} = await useFetch("https://fakestoreapi.com/products/categories")
     const categories = [
      {
        id: 1,
        name: 'Earthen Bottle',
      },
      {
        id: 2,
        name: 'Nomad Tumbler',
      },
      {
        id: 3,
        name: 'Focus Paper Refill',
      },
      {
        id: 4,
        name: 'Machined Mechanical Pencil',
      },
      // More products...
    ]
  </script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>