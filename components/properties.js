import Link from 'next/link'

const links = [
  {img:'home1.jpg', title:'DOWN AVENUE',price:'500.000',bedrooms:'4' ,desc:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."  ,href: '/'},
  {img:'home2.jpg', title:'QUEENS WAY',price:'450.000',bedrooms:'3' ,desc:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."  ,href: '/'},
  {img:'home3.jpg', title:'RANDALL CLOSE',price:'790.000',bedrooms:'6' ,desc:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."  ,href: '/'},
  
]

export default function Properties() {
  return (
    
    
        <>
          {links.map(({img,title,price,bedrooms,desc, href }) => (
              <div className="mb-20">
                <img className="pb-4 mx-auto md:mx-0" src={`img/${img}`} alt=""/>
                <h3 className="font-bold text-blue-900 text-xl pb-4">{title}</h3>
                <h3 className="font-bold text-blue-900 text-xl pb-4">{price}</h3>
                <p className="text-yellow-500 text-lg pb-4">{bedrooms} Bedrooms</p>
                <p className="text-gray-500 text-lg pb-10">{desc} </p>
                <Link href={href}><a className="border-2 border-blue-900 text-blue-900 py-2 px-6 ">READ MORE</a></Link>
            </div>
            // <li key={`${href}${label}`}>
            //   <a href={href} className={`${className}`}>
            //     {label}
            //   </a>
            // </li>
          ))}
        
        
        
       
  </>
  )
}
