import logo from '../../img/marvel-logo.png';

export default function Header() {
  return (
    <header>
        <img src={logo} alt="Logo Marvel"/>
        <ul>
        <li>
            Characters
        </li>        
        <li>
            Comics
        </li>      
          <li>
            Movies
        </li>        
        <li>
            Tv
        </li>       
         <li>
            Games
        </li>       
         <li>
            Collectibles
        </li>       
         <li>
            Videos
        </li>       
         <li>
            Fans
        </li>       
         <li>
            News
        </li>
        <li>
            Shop
        </li>
        </ul>
    </header>
  )
}