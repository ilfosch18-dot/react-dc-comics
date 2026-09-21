import facebook from '../../img/footer-facebook.png';
import periscope from '../../img/footer-periscope.png';
import pinterest from '../../img/footer-pinterest.png';
import twitter from '../../img/footer-twitter.png';
import youtube from '../../img/footer-youtube.png';



export default function Footer() {
  return (
    <footer className="flex items-center justify-evenly bg-gray-700 p-6">
    <button className="border-2 p-3 border-blue-500 text-white uppercase font-bold">Sign-up now!</button>
   <div className='flex items-center'>
  <h3 className="text-blue-500 uppercase mr-4 font-bold">Follow us</h3>
  <ul className="flex items-center gap-6 text-sm uppercase">
    <li><img src={facebook} alt="Logo Marvel" /></li>
    <li><img src={periscope} alt="Logo Marvel" /></li>
    <li><img src={pinterest} alt="Logo Marvel" /> </li>
    <li><img src={twitter} alt="Logo Marvel" /> </li>
    <li><img src={youtube} alt="Logo Marvel" /> </li>
  </ul></div> 
    </footer>
  )
}