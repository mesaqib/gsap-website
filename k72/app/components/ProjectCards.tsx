import React from 'react'

const ProjectCards = ({image1,image2}: any) => {



  return (
    <>
        <>
         <div className="mb-4 w-1/2 relative group rounded-none transition-all hover:rounded-4xl overflow-hidden group cursor-pointer">
              <img src={image1} className="object-cover h-full w-full group-hover:skew" />
              <div className="absolute top-0 left-0 h-full w-full bg-black/30 hidden justify-center items-center group-hover:flex">
                <h1 className="text-[4vw] transition-all uppercase border border-2 text-white rounded-3xl px-5">Voir Projet</h1>
              </div>
           </div>

           <div className="mb-4 w-1/2 relative group rounded-none transition-all hover:rounded-4xl overflow-hidden group cursor-pointer">
              <img src={image2} className="object-cover h-full w-full group-hover:skew" />
              <div className="absolute top-0 left-0 h-full w-full bg-black/30 hidden justify-center items-center group-hover:flex">
                <h1 className="text-[4vw] transition-all uppercase border border-2 text-white rounded-3xl px-5">Voir Projet</h1>
              </div>
           </div>
        </>
    </>
  )
}

export default ProjectCards
