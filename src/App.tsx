import { useState } from 'react'	
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>	
	
	<main className="flex-col items-center justify-center min-h-[61%] bg-gradient-to-r from-gray-900 to-blue-900">
		<div className="p-20 ">
			<p
				className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-1 text-3xl font-sans  font-bold tracking-tight justify-center">
				Cambia tus hábitos deportivos y alimenticios con CBOOM
			</p>
			<h2
				className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500 mt-8 text-3xl font-sans  font-bold tracking-tight sm:text-2xl justify-center">
				¿Qué es CBOOM?
			</h2>
			<p className="mt-2">CBoom es una página web deportiva la cual busca orientar a las personas para mejorar su
				bienestar físico y mental entregando herramientas y recomendaciones de alimentación y ejercitación.
			</p>
			<h2
				className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-8 text-3xl font-sans  font-bold tracking-tight sm:text-2xl justify-center">
				¿Porqué escoger CBoom comparada con otras opciones?
			</h2>
			<p className="mt-2 mb-10">CBoom tiene infinidad de ejercicios y dietas diseñadas para que encaje con
				cualquier
				cliente, desde ejercicios y dietas para personas principiantes como hasta para personas veteranas.
				Además podrás encontrar de todo en este sitio, desde ejercicios hasta regímen de alimentación, por
				otro lado, contamos con un equipo de expertos como nuticionistas y personal trainer altamente
				capacitados para hacer tu experiencia mas personalizada.
			</p>
		</div>
	</main>

	

    </>
  )
}

export default App
