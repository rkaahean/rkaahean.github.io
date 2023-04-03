import { CustomLink } from "../components/links";
import { Navbar } from "../components/navbar";
import { APEX_LEGENDS_LOGO, CURRENT_COMPANY_LOGO, MUFC_LOGO } from "../data/assets/logos";

export default function About() {
  return (
    <div className="bg-stone-950 flex min-h-screen flex-col items-center justify-start">
      <Navbar/>
      <div className="w-1/3">
        <div className="text-5xl font-bold text-slate-100">Ranjan Srinivas</div>
        <div className="mt-5 text-lg text-slate-300">
          Hello, my name is Ranjan Srinivas, and I&apos;m an aspiring Software
          Engineer at&nbsp;
          <span className="inline-block align-middle">
            <CustomLink url="https://www.chippercash.com" text="Chippercash" logo={CURRENT_COMPANY_LOGO}/>
          </span>.
        </div> 
        <div className="mt-5 text-lg text-slate-300">
          I currently focus on building end-to-end Machine Learning solutions
          to combat fraudulent activity in the fintech space.
        </div>
        <div className="mt-5 text-lg text-slate-300">
          Outside of work, you can find me playing&nbsp;         
          <span className="inline-block align-middle">
            <CustomLink url="https://www.ea.com/games/apex-legends" text="Apex Legends" logo={APEX_LEGENDS_LOGO}/>
          </span>, watching 
          <span className="inline-block align-middle">
            <CustomLink url="https://www.manutd.com/" text="Manchester United" logo={MUFC_LOGO}/>
          </span>&nbsp;
          or relaxing at a local coffee shop.
        </div>
      </div>
    </div>
  );
}
