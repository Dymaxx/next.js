import Link from 'next/link'

const links = [
  { href: '#', label: 'HOME' ,  className:"text-yellow-700" },
  { href: '#', label: 'AGENTS' },
  { href: '#', label: 'CONTACT' },
  { href: '#', label: 'BOOK ONLINE' },
]

export default function Nav() {
  return (
    
    <nav className="bg-teal-300 p-6   " >
      <div className="flex justify-between items-center w-1/2 mx-auto">
        <ul className="">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline"><span className="text-center bold">FABER</span> & <span>CO</span><br></br>real estate</a>
          </Link>
        </li>
        </ul>
        <ul className="flex justify-between items-center space-x-24">
          {links.map(({ href, label,className }) => (
            <li key={`${href}${label}`}>
              <a href={href} className={`${className}`}>
                {label}
              </a>
            </li>
          ))}
        </ul></div>
      
     
    </nav>
  )
}
