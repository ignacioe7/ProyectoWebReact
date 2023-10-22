
const AppFooter = () => {
    return (
        <footer className=" bg-gray-800">
		<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
			<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
				“El músculo y la mente deben volverse uno. Uno sin el otro es cero”. Lee Haney.
			</p>

			<ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
				<li>
					<a className="text-gray-400 transition hover:text-white" href="/pages/acercaDe.html">
						Acerca
					</a>
				</li>

				<li>
					<a className="text-gray-400 transition hover:text-white" href="/pages/Services.html">
						Servicios
					</a>
				</li>

				<li>
					<a className="text-gray-400 transition hover:text-white" href="/pages/Feedback.html">
						Feedback
					</a>
				</li>

				<li>
					<a className="text-gray-400 transition hover:text-white" href="/pages/Informacion.html">
						Blog
					</a>
				</li>
			</ul>

			<ul className="mt-12 flex gap-6 md:gap-8 justify-center">
				<li>
					<a href="#" rel="noreferrer" target="_blank" className="text-gray-400 transition hover:text-white">
						<span className="sr-only">Cboom</span>
						<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
							className="h-6 w-6  hover:stroke-white" viewBox="-20 0 131 173">
							<path id="mejor" fill="none" stroke-width="6"
								d="M 104.05,170.13 C 96.05,166.63 76.55,141.26 77.80,132.13 78.93,134.99 95.95,150.01 94.12,146.00M 22.71,53.73 C 59.67,67.09 74.13,28.95 55.75,11.00 30.87,-12.96 -11.06,21.77 22.75,53.38 23.00,67.03 -8.99,80.27 10.00,122.00 9.94,123.73 25.22,126.68 25.25,125.75 27.88,137.88 72.88,137.24 77.80,132.13M 16.64,113.31 C 17.91,114.72 8.71,116.73 7.00,114.82M 37.81,56.49 C 37.81,56.49 37.44,91.88 37.44,91.88 57.10,65.00 82.62,83.61 89.27,110.47 92.98,130.68 98.61,146.14 128.55,150.50M 119.00,81.50 C 111.45,76.38 87.64,75.08 77.71,88.26M 29.25,81.40 C 26.31,76.68 36.46,65.39 37.81,56.50M 88.16,106.61 C 83.14,118.84 44.65,121.24 38.86,101.63 37.30,99.96 35.13,101.45 37.44,91.91 37.44,91.91 26.25,100.19 26.25,100.12M 59.74,89.91 C 49.26,88.26 41.52,96.26 38.86,101.65M 93.02,125.33 C 83.19,126.75 71.62,124.77 68.36,115.96 72.38,124.50 74.66,122.97 77.80,132.13M 58.59,115.59 C 53.92,123.25 33.98,126.38 25.27,125.80M 56.83,128.62 C 56.75,129.07 45.18,124.98 45.51,123.23M 36.39,45.38 C 12.83,44.23 19.37,12.70 37.07,13.56M 36.39,45.38 C 54.00,48.12 60.88,15.90 37.07,13.56M 36.28,25.09 C 31.51,24.45 28.56,33.66 36.39,34.57M 36.39,34.57 C 41.44,34.99 44.01,25.68 36.28,25.09" />
						</svg>
					</a>

				</li>
				<li>
					<a href="https://facebook.com/cboom/" rel="noreferrer" target="_blank" className="text-gray-400 transition hover:text-white">
						<span className="sr-only">Facebook</span>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd" />
						</svg>
					</a>
				</li>

				<li>
					<a href="https://www.instagram.com/cboom/" rel="noreferrer" target="_blank" className="text-gray-400 transition hover:text-white">
						<span className="sr-only">Instagram</span>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd" />
						</svg>
					</a>
				</li>

				<li>
					<a href="https://www.twitter.com/cboom/" rel="noreferrer" target="_blank" className="text-gray-400 transition hover:text-white">
						<span className="sr-only">Twitter</span>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1110 1200" aria-hidden="true">
							<path fill-rule="evenodd"
								d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
								clip-rule="evenodd" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</footer>
    );
};


export default AppFooter;