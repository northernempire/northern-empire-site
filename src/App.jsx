import { useState } from 'react'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [activePage, setActivePage] = useState(null)

  const pages = ['NuTrap','Artists','Beats','Movies','Videos','Art','Store']

  const pageContent = {
    NuTrap:{title:'NuTrap Archives',desc:'Secret NuTrap system and hidden empire knowledge.'},
    Artists:{title:'Artists',desc:'Embedded music players and artist hubs.'},
    Beats:{title:'Beats Marketplace',desc:'Buy and license NuTrap beats.'},
    Movies:{title:'Movies',desc:'Northern Empire cinema vault.'},
    Videos:{title:'Videos',desc:'Music videos and visuals.'},
    Art:{title:'Art',desc:'Digital art and NFT future gallery.'},
    Store:{title:'Store',desc:'Merchandise and luxury empire products.'},
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1568322445389-f64ac2515020')] bg-cover"/>

      {!entered && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-6xl text-yellow-400 tracking-[0.3em]">NORTHERN EMPIRE</h1>
          <p className="mt-6 text-gray-300">Luxury • NuTrap • Royal Sound</p>

          <button
            onClick={()=>setEntered(true)}
            className="mt-10 px-10 py-4 border border-yellow-400 text-yellow-300 hover:shadow-[0_0_30px_purple]"
          >
            ENTER
          </button>
        </div>
      )}

      {entered && (
        <div className="p-10 grid md:grid-cols-3 gap-6">
          {pages.map(p=>(
            <div
              key={p}
              onClick={()=>setActivePage(p)}
              className="border border-yellow-600 p-6 hover:border-purple-500 cursor-pointer"
            >
              <h2 className="text-xl text-yellow-300">{p}</h2>
              <p className="text-sm text-gray-400 mt-2">{pageContent[p].desc}</p>
            </div>
          ))}
        </div>
      )}

      {activePage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 max-w-lg w-full border border-yellow-500">
            <h2 className="text-2xl text-yellow-300">{pageContent[activePage].title}</h2>
            <p className="mt-4 text-gray-300">{pageContent[activePage].desc}</p>

            <button
              className="mt-6 text-purple-400"
              onClick={()=>setActivePage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
