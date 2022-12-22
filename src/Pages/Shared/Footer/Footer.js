import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<div>
           <footer class="p-4 mt-20 bg-slate-200 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-center">
        <ul class="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl text-orange-400 ">About</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl  text-orange-400">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" class="mr-4 hover:underline md:mr-6 text-xl  text-orange-400">Licensing</Link>
            </li>
            <li>
                <Link href="#" class="hover:underline text-xl  text-orange-400">Contact</Link>
            </li>
        </ul>
    </div>
</footer> 
        </div>
  );
};

export default Footer;
