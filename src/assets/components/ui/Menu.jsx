const menu = [
    {
label: 'Characters',
url: '/',
isActive: false,
},
{
    label: 'Comics',
url: '/',
isActive: true,
},
{
    label: 'Movies',
url: '/',
isActive: false,
},
{
    label: 'Tv',
url: '/',
isActive: false,
},
{
    label: 'Games',
url: '/',
isActive: false,
},
{
    label: 'Collectibles',
url: '/',
isActive: false,
},
{
    label: 'Videos',
url: '/',
isActive: false,
},
{
    label: 'Fans',
url: '/',
isActive: false,
},
{
    label: 'News',
url: '/',
isActive: false,
},
{
    label: 'Shop',
url: '/',
isActive: false,
},
]

export default function Menu() {
  return (
    <ul className="flex items-center gap-6 text-sm uppercase">
      {menu.map((link) => (
        <li key={link.label}>
<a href={link.url} className={`${link.isActive ? 'font-bold, text-blue-500 border-b-2 border-blue-500' : ''}`}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}





