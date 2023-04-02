import { type NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
				<div className="text-left font-sans text-7xl font-bold text-blue-300">
					Welcome!
				</div>
				<div className="my-10 px-4">
					<div className="-left text-left font-sans text-4xl font-light text-slate-200">
						My name is
						<div className="inline font-bold text-blue-300">
							&nbsp;Ranjan Srinivas.
						</div>
					</div>
					<div className="text-left text-2xl font-light text-slate-400">
						I work as as
						<div className="inline font-semibold text-teal-500">
							&nbsp;Machine Learning Engineer
						</div>
						, attempting to detect and prevent fraudulent actors in the fintech
						ecosystem.
					</div>
					<ul className="mt-10 text-left text-2xl font-light text-slate-200">
						<li>
							Developing fraud detection and prevention solutions at
							<div className="inline font-semibold text-green-600	">
								&nbsp;Chippercash.
							</div>
						</li>
						<li>
							Residing in the best city in the world,
							<div className="inline font-semibold text-green-600	">
								&nbsp;Los Angeles.
							</div>
						</li>
						<li>
							Failing miserably at first person shooters, especially
							<div className="inline font-semibold text-green-600	">
								&nbsp;Apex Legends.
							</div>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
