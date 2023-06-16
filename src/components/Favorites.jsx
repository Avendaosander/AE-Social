import { GET_FAVORITES } from "../graphql/tweets"
import { useQuery } from '@apollo/client'
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export default function Favorites({handleFavModal}){
    const {loading, error, data} = useQuery(GET_FAVORITES)


    return(
        <div className="min-w-[300px]">
             <section className='fixed z-10 bg-slate-500/20 top-0 right-0 min-w-[300px] bottom-0 left-0 flex justify-center items-center'>
                <article className='bg-slate-950 p-5 rounded-lg min-w-[300px]'>
                    {
                        loading?
                        <div className="relative flex flex-col justify-around min-h-24 w-4/5 sm:w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 bg-slate-800">
                        <h1 className='text-center text-slate-300'><FaSpinner className='w-32 h-32 animate-spin'/></h1>
                        </div>:
                        <div className="to">
                            <button onClick={() => handleFavModal()}><h1 className="text-slate-300"><AiOutlineClose/></h1></button>
                            <h3 className='text-slate-300 mb-6 text-center min-w-[300px]'>Tus Favoritos</h3>
                            {
                                data.tweetsFav.length>0?
                                <div className="to">
                                {
                                    data.tweetsFav.map((tw)=>(
                                        <div className="relative flex flex-col mb-6 justify-around min-h-20 sm:w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 bg-slate-800">
                                            <h3 className='text-slate-300'>@{tw.username}</h3>
                                            <p className='text-white text-sm border-slate-500 pb-2 mb-2 mt-2'>
                                                {tw.message}
                                            </p>
                                        </div>
                                    ))
                                }
                                </div>:
                                    <div className='flex justify-around mt-3'>
                                        <h1 className='text-slate-300'>Aun no tienes favoritos</h1>
                                    </div>
                            }
                        </div>
                    }
                </article>
            </section>
        </div>
    )
}