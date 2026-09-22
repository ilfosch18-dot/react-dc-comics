import logo from '../../img/marvel-logo.png';
import Menu from '../ui/Menu';

export default function Header() {
  return (
    <header className="flex items-center justify-evenly">
      <img src={logo} alt="Logo Marvel" />
      <Menu />
    </header>
  );
}