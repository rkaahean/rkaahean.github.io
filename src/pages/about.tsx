import { Link } from "../components/links";

export default function About() {
  return (
    <div className="bg-stone-950 flex min-h-screen flex-col items-center justify-start">
      <div className="w-1/3">
        <div className="text-5xl font-bold text-slate-100">Ranjan Srinivas</div>
        <div className="mt-5 text-lg text-slate-300">
          Hello, my name is Ranjan Srinivas, and I&apos;m an aspiring Software
          Engineer at <span className="inline-block align-middle"><Link /></span>.
        </div> 
        <div className="mt-5 text-lg text-slate-300">
          I currently focus on building end-to-end Machine Learning solutions
          to combat fraudulent activity in the fintech space.
        </div>
      </div>
    </div>
  );
}
