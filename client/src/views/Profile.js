import React from "react";

// import Navbar from "components/Navbar.js";
// import Footer from "components/Footer.js";
// import ProfileImg from '../assets/img/proflie.jpg'

export default function Profile() {
  return (
    <>




      <div>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        <div x-data="{ sidebarOpen: false, darkMode: false }">
          <div class="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
            <div
              class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

            <div
              class="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
              <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                  <div class="avatar">
                    <div class="mb-8 rounded-full w-24 h-24">
                      <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt="hey" />
                    </div>
                  </div>
                </div>
              </div>

              <nav class="flex flex-col mt-10 px-4 text-center">
                <a href="/nope"
                  class="py-2 text-sm text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded">Overview</a>
                <a href="/nope"
                  class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Tickets</a>
                <a href="/nope"
                  class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Ideas</a>
                <a href="/nope"
                  class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Contacts</a>
                <a href="/kk"
                  class="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Settings</a>
              </nav>
            </div>
     

            <div class="flex-1 flex flex-col overflow-hidden">
              <header class="flex justify-between items-center p-6">
                <div class="flex items-center space-x-4 lg:space-x-0">
                  <button
                    class="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                  <div>
                    <h1 class="text-2xl font-medium text-gray-800 dark:text-white">Overview</h1>
                  </div>
                </div>


              </header >

              <main class="flex-1 overflow-x-hidden overflow-y-auto">
                <div class="container mx-auto px-6 py-8">
                  <div
                    class="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed">
                    Content
                  </div>
                </div>
              </main>
            </div >
          </div >
        </div >
      </div >
    </>
  );
}
