<template>
    <nav class="nav sticky top-0 bg-white py-3.5 px-24 md:flex justify-between 
    items-center">
        <div class="flex items-center cursor-pointer">

            <span class="text-black text-xl mr-1">
                <i class="bi bi-calendar2-event"></i>
            </span>
            <a href="/">
                <div class="text-3xl text-black">YFN</div>
            </a>
        </div>

        <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute  md:w-auto w-full top-14 duration-500 ease-in"
            :class="[open ? 'left-0 bg-white' : 'left-[-100%] bg-transparent']">
            <li class="md:mx-4 md:my-0 my-6">
                <RouterLink class="text-2xl hover:text-gray-600" to="/contact">Contact Us</RouterLink>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <RouterLink class="text-2xl hover:text-gray-600" to="/waitlist">Join The Wait</RouterLink>
            </li>
            <!-- <Button></Button> -->
        </ul>

    </nav>
</template>

<script>
import { ref } from 'vue';
// import Button from './button.vue'

export default {
    name: 'Navbar',
    components: {
        // Button
    },
    setup() {
        let open = ref(false)

        function menuOpen() {
            open.value = !open.value
            console.log(open.value)
        }

        return { open, menuOpen }
    },
    methods: {

    }

}
</script>

<style lang="scss">
.nav {

    a {
        font-weight: bold;
        color: black;

        &.router-link-exact-active {
            color: #4B5563;
        }
    }
}
</style>