<template>

  <footer class="bg-white rounded-lg shadow m-4 dark:bg-white">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-black sm:text-center dark:text-black">© 2024 <a href="https://flowbite.com/"
                  class="hover:underline">YFN</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
              <li class="md:mx-4 mx-2 md:my-0 my-6">
                  <RouterLink class="text-md hover:text-gray-600 hover:underline " to="/privacy">Privacy Policy</RouterLink>
              </li>
              <li class="md:mx-4 mx-2 md:my-0 my-6">
                  <RouterLink class="text-md hover:text-gray-600 hover:underline " to="/contact">Contact Us</RouterLink>
              </li>
          </ul>
      </div>
  </footer>

</template>