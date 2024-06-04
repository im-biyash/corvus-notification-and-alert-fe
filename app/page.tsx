import  Sidebar  from './Mycomponents/Sidebar';
import Hero from './Mycomponents/Hero';

export default function Home() {
  return (
    <main className=" home min-h-screen justify-between ">
      <div className='flex gap-4 '>
     <Sidebar/>
      <Hero/>
      </div>
    </main>
  );
}
