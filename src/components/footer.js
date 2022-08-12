import Logo from '../assets/logo.png'
export default function Footer() {
  return (
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6">
      <span class="text-sm text-black sm:text-center dark:text-black">© 2022 <a href="#" class="hover:underline">DoersCenta</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <img className="w-32" src={Logo} />
        </li>
      </ul>
    </footer>
  )
}