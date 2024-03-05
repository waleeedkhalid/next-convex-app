import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from '../../public/logo.png';

function Header() {
  return (
    // 22:02
<header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="#">
      <span className="sr-only">Home</span>
      <Image src={Logo} alt='logo' width={50} height={50}/>
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Knowledge </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">  Projects </a>
          </li>

        </ul>
      </nav>      
    </div>
  </div>
</header>
  )
}

export default Header