import { BsGithub } from 'react-icons/bs'

function Footer() {
   return (
      <footer className="bg-slate-900 fixed bottom-0 h-auto sm:h-14 w-full flex flex-col sm:flex-row justify-around sm:items-center text-center gap-3 py-4">
         <h3 className="text-slate-300 text-sm">Desarrolladores:</h3>
         <div className="flex justify-between sm:justify-center items-center mx-16 sm:mx-0 sm:gap-3 text-slate-300">
            <p className='text-sm'>Alexander Avendaño</p>
            <a href="https://github.com/Avendaosander" target="_blank" rel="noopener noreferrer">
               <BsGithub className='text-lg'/>
            </a>
         </div>
         <div className="flex justify-between sm:justify-center items-center mx-16 sm:mx-0 sm:gap-3 text-slate-300">
            <p className='text-sm'>Eutimio Briceño</p>
            <a href="https://github.com/Alejo2608" target="_blank" rel="noopener noreferrer">
               <BsGithub className='text-lg'/>
            </a>
         </div>
      </footer>
   )
}

export default Footer