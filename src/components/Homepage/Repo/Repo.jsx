import React from 'react'

function Repo() {
  return (
<div class="relative group inline-block">
  <div
    class="bg-white py-2 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center gap-4 transition-transform duration-300 ease-out transform group-hover:-translate-y-1"
  >
    <svg
      class="transition-colors duration-200 group-hover:text-yellow-500"
      width="25"
      height="25"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
        fill="#FFA000"
      ></path>
      <path
        d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
        fill="#FFCA28"
      ></path>
    </svg>
    <p
      class="font-medium text-gray-700 transition-colors duration-200 group-hover:text-yellow-600"
    >
      Project Structure
    </p>
  </div>

  <div
    class="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-10"
  >
    <ul class="p-4 space-y-1 text-gray-600 font-light">
      <li class="flex items-center gap-2">
        <span>📁</span> <span class="ml-1">src</span>
      </li>
      <li class="flex items-center gap-2 pl-4">
        <span>📁</span> <span class="ml-1">app</span>
      </li>
      <li class="flex items-center gap-2 pl-8">
        <span>📄</span> <span class="ml-1">layout.js</span>
      </li>
      <li class="flex items-center gap-2 pl-8">
        <span>📄</span> <span class="ml-1">page.js</span>
      </li>
      <li class="flex items-center gap-2 pl-4">
        <span>📁</span> <span class="ml-1">components</span>
      </li>
      <li class="flex items-center gap-2 pl-8">
        <span>📄</span> <span class="ml-1">header.js</span>
      </li>
      <li class="flex items-center gap-2 pl-8">
        <span>📄</span> <span class="ml-1">footer.js</span>
      </li>
      <li class="flex items-center gap-2 pl-4">
        <span>📁</span> <span class="ml-1">styles</span>
      </li>
      <li class="flex items-center gap-2 pl-8">
        <span>📄</span> <span class="ml-1">globals.css</span>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Repo