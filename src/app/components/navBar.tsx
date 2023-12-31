import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function NavBar() {
  const pathname = usePathname();


  return (
    <>
        <nav className="bg-gray-900 flex">
        <ul className="flex items-center space-x-4 ul">
            <li>
            <Image
                src={'/tailwind.svg'}
                alt="tailwind logo"
                width={75}
                height={75}
                className="h-8 w-auto img m-2"
            />
            </li>
            {navigation.map((item) => (
            <li
                key={item.name}
                className={`m-2 links ${
                pathname == item.href ? 'text-gray-50 underline' : ''
                }`} // Apply 'text-gray-50 underline' class to the active item
            >
                <Link href={item.href} className="text-gray-50">
                {item.name}
                </Link>
            </li>
            ))}
            <li className="menu-li mr-2" id="menu_btn">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                {/* Dropdown menu */}
            </li>
        </ul>
        <ul id='d-links' className="dropdown-menu items-center" >
            {navigation.map((item) => (
            <li
                key={item.name}
                
                className={`m-2 d-links ${
                    pathname == item.href ? 'text-gray-50 underline' : ''
                }`} // Apply 'text-gray-50 underline' class to the active item
                >
                <Link href={item.href} className="text-gray-50">
                    {item.name}
                </Link>
            </li>
            ))}
        </ul>
        </nav>
    </>
  );
}
