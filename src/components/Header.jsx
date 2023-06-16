import logo from '../assets/AESocial.jpg'

export default function Header({handleFavModal}){
    return(
        <div className="flex flex-basic">
            <img src={logo} alt="Logo AE Social" className='ml-4 w-32 h-28'/>
            <button onClick={() => handleFavModal()} className='ml-6 text-slate-300 '> 
               Ver Favoritos
            </button>
        </div>
    )
}