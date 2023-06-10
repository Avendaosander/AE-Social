import { BsGithub } from 'react-icons/bs'

function Footer() {
   return (
      <footer className="bg-slate-900 fixed bottom-0 h-14 w-full flex justify-around items-center">
         <h3 className="text-slate-300 text-sm">Desarrolladores:</h3>
         <div className="flex justify-center items-center gap-3 text-slate-300">
            <p className='text-sm'>Alexander Avendaño</p>
            <a href="https://github.com/Avendaosander" target="_blank" rel="noopener noreferrer">
               <BsGithub className='text-lg'/>
            </a>
         </div>
         <div className="flex justify-center items-center gap-3 text-slate-300">
            <p className='text-sm'>Eutimio Briceño</p>
            <a href="https://github.com/Alejo2608" target="_blank" rel="noopener noreferrer">
               <BsGithub className='text-lg'/>
            </a>
         </div>
      </footer>
   )
}

export default Footer