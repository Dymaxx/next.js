import Nav from '../components/nav'
import Properties from '../components/properties'
import Courasel from '../components/courasel'
import Slider from '../components/slider'
import Map2 from '../components/maps2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaFacebook } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <body>
      <Nav />
      
        <Slider />
        {/* Content container */}
        <div className="bg-white">
        <div className="   flex ">

          {/* Price card */}
          <div className="z-40 m-auto w-100 md:w-1/2 "  id="priceCard">
          <div className="bg-blue-900 bg-opacity-75 px-12   py-10 w-100  lg:w-1/2 xl:1/4 " >
            <div className="text-white text-3xl pb-4 font-bold font-sans">STUNNING 6 BED HOUSE IN THE HEART OF THE CITY</div>
            
   
              <p className="text-white border-b-2 pb-10">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              <h2 className="text-3xl text-white font-bold font-sans text-center pt-4 mb-10">$2.000.00.000</h2>
              <div className="text-center ">
              <Link href="/" >
            <a className="text-white py-4 px-10 border-2 hover:bg-gray-500 ">ALL SALES</a>
          </Link>
          </div>
        </div>
        </div>
         {/* End of Price card */}
      </div>
      </div>

      {/* Propperties */}
      <div className="bg-white pt-32">
      <div className="md:w-1/2 block m-auto text-center  bg-white">
        <h1 className="pb-10 text-4xl font-bold text-blue-700">LATEST PROPERTIES FOR SALE</h1>
        <div className="text-center md:text-left grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3  gap-6 "id="properties"> 
          <Properties />
        </div>
      </div>
      </div>
      
  {/* End of Propperties */}

  {/* RENTAL  */}
    <div className="pt-40 bg-white">
    <h1 className="pb-40 text-4xl font-bold text-blue-700  text-center">LATEST RENTAL PROPERTIES</h1>
    <div className="bg-blue-900">
      <div className=" w-100 md:w-2/3 mx-auto grid grid-col-1 lg:grid-cols-2 px-20 gap-20 pb-20  ">
        <img className="-mt-10" src="img/rent1.jpg" alt=""/>
        <div className="pt-10 text-white">
          <h2 className="text-2xl font-bold mb-4">CHASE AVENUE</h2>
          <p className="text-yellow-400 mb-4">4 Bedrooms</p>
          <p className="mb-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <h2 className="text-blue-500 font-bold">$500/per week</h2>
        </div>
      </div>
    </div>
    <div>
    
    <div className="bg-blue-800">
      <div className=" w-100 md:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 px-20 pt-20 gap-8  ">
        
        <div className="pt-10 text-white">
          <h2 className="text-2xl font-bold mb-4">CHASE AVENUE</h2>
          <p className="text-yellow-400 mb-4">4 Bedrooms</p>
          <p className="mb-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <h2 className="text-blue-500 font-bold">$500/per week</h2>
        </div>
        <img className=" ml-auto" src="img/rent2.jpg" alt=""/>
      </div>
    </div>
    </div>
    </div>
    {/* End of Rental */}
    {/* REALTORS  */}
    <div className="bg-white">
    <div className="lg:w-1/2  m-auto px-4 py-24" id="REALTORS ">
    <h1 className="pb-24 text-4xl font-bold text-blue-700 text-center">REALTORS YOU CAN TRUST</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10  text-center">
      <div className="bg-blue-red text-blue-900 text-center "><img className="h-16 m-auto mb-4" src="img/clipboard.svg" alt=""/>
      <h2 className="text-xl px-10 font-bold">FREE REGISTRATION <br></br> NO HIDDEN FEES</h2>
      </div>
      <div className="bg-blue-red text-blue-900 h-"><img className="h-16 m-auto mb-4 " src="img/stack.svg" alt=""/>
      <h2 className="text-xl px-10 font-bold">FREE REGISTRATION <br></br> NO HIDDEN FEES</h2></div>
      <div className="bg-blue-red text-blue-900 h-"><img className="h-16 m-auto mb-4" src="img/map.svg" alt=""/>
      <h2 className="text-xl px-10 font-bold">FREE REGISTRATION <br></br> NO HIDDEN FEES</h2></div>
    </div>
    </div>
    </div>
    {/* End of REALTORS  */}

    {/* Clients */}
    <div className="text-center py-32 ">
    <h1 className="pb-12 text-4xl font-bold text-white text-center">WHAT OUR CLIENTS THINK</h1>
      <div className="w-1/2 grid grid-col-1 xl:grid-cols-3 m-auto ">
        
        <div className=" max-w-64"><img className="h-4 m-auto mb-4" src="img/quote.svg" alt=""/>
        <p className="text-white mb-4">"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
        <h3 className="text-yellow-400">- Tina & James Heart </h3>
        </div>
        <div className=" max-w-64"><img className="h-4 m-auto mb-4" src="img/quote.svg" alt=""/>
        <p className="text-white mb-4">"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
        <h3 className="text-yellow-400">- Mary van den Reich </h3>
        </div>
        <div className=" max-w-64"><img className="h-4 m-auto mb-4" src="img/quote.svg" alt=""/>
        <p className="text-white mb-4">"I'm a testimonial.Click to edit me and add text that says something nice about you and your services"</p>
        <h3 className="text-yellow-400">- Paul & Susan Taylor</h3>
        </div>
        
      </div>
    </div>
{/* End of Clients */}
   
    <div className="bg-white py-32">
    <h1 className="pb-12 text-4xl font-bold text-blue-700 text-center">CONTACT US</h1>
    <div className="  lg:w-1/2 grid grid-col-2 lg:grid-cols-2 gap-32 gap-row-10 m-auto px-4 py-24" id="REALTORS ">
      {/* Contact adres side */}
      <div className="m-auto">
        <h3 className=" text-xl font-bold text-blue-700 mb-8">ADDRESS</h3>
        <p className="text-lg text-gray-600 pb-10">500 Terry Francois Street <br/> San Francisco, CA 94158</p>
    
        <Map2 />
        <h3 className=" text-xl font-bold text-blue-700 mb-8 mt-10">TO SPEAK WITH AN AGENT, <br/> PLEASE CALL OR EMAIL US:</h3>
        <p className="text-lg text-gray-600 ">Email: info@mysite.com</p>
        <p className="text-lg text-gray-600 ">Tel: 123-456-7890</p>
        <p className="text-lg text-gray-600 pb-10">Fax: 123-456-7890</p>
    </div>
    {/* End of adres side */}

    {/* Contact form side */}
    <div className="mx-auto">
          <h3 className=" text-xl font-bold text-blue-700 mb-8">ALTERNATIVELY YOU CAN FILL IN THE FOLLOWING CONTACT FORM:</h3>
          <div className=' justify-center items-center  flex'>
          <form className='w-full flex flex-col'>
            <input className='bg-gray-200 shadow-inner rounded-l p-2 mb-2 w-full' id='name' type='name' aria-label='name' placeholder='Enter your name' />
            <input className='bg-gray-200 shadow-inner rounded-l p-2 mb-2 w-full' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
            <input className='bg-gray-200 shadow-inner rounded-l p-2 mb-2 w-full' id='subject' type='subject' aria-label='subject' placeholder='Subject' />
            <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r ' type='submit'>
              Send
            </button>
        </form>
      </div>
    </div>

    </div>
    </div>

    {/* End of contact */}
    {/* Footer */}
    <footer className="bg-yellow-600 py-4">
      <div className="w-1/2 flex justify-between m-auto">
        <p className="text-white ">© 2023 by Faber & Co Real Estate. Proudly created with Wix.com</p>
        <div className="flex gap-4">
        <Link href="/"><a><img className="h-8 text-white" src="img/facebook.svg" alt=""/></a></Link>
        <Link href="/"><a><img className="h-8 text-white" src="img/twitter.svg" alt=""/></a></Link>
        </div>
      </div>
    </footer>
    {/* End of Footer */}
    </body>
  )
}
const PriceCard = {
  // marginTop: '-24rem',
  
  bgOpacity: '90%',

};
const div = {
  height: '100%',
};


