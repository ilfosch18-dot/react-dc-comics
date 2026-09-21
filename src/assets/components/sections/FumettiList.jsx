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
      <section className='bg-gray-800 w-screen text-white text-center p-8'>
      <p className='p-4'>Main Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Illo, nam deserunt distinctio neque ullam provident doloremque! 
      Maxime ab cum dolorem deserunt odio in alias asperiores! 
      Rerum exercitationem error perferendis incidunt.</p>

     <p className='p-4'>Main Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Illo, nam deserunt distinctio neque ullam provident doloremque! 
      Maxime ab cum dolorem deserunt odio in alias asperiores! 
      Rerum exercitationem error perferendis incidunt.</p>

         <p className='p-4'>Main Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Illo, nam deserunt distinctio neque ullam provident doloremque! 
      Maxime ab cum dolorem deserunt odio in alias asperiores! 
      Rerum exercitationem error perferendis incidunt.</p>
      
         <p className='p-4'>Main Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Illo, nam deserunt distinctio neque ullam provident doloremque! 
      Maxime ab cum dolorem deserunt odio in alias asperiores! 
      Rerum exercitationem error perferendis incidunt.</p>
      </section>
</main>
  )
}