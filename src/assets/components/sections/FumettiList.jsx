import comics from '../../comics.js';
import Card from "../ui/card";
import jumbotron from '../../img/jumbotronMarvel.jpg';

export default function fumetti() {
  return (
    <main>
      <section>
        <img src={jumbotron} alt='jumbotron Marvel' className='w-screen static'/>
        <div className='bg-blue-500 inline-block px-6 py-2 absolute bottom-55 left-55'>
        <h2 className='text-white uppercase font-bold'>Ultime uscite</h2>
        </div>
      </section>
      <section className='grid grid-cols-6 gap-6 bg-gray-800 w-screen text-white text-center p-12'>
    {comics.map(comic => 
  <Card  key={comic.id} thumb={comic.thumb} title={comic.title} />
    )}
      </section>
</main>
  )
}