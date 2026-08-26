import Image from 'next/image';
import data from '../../../public/data/skills.json';

interface Skill {
  image: string;
  name: string;
  description: string;
}

export default function Skills() {
  const skills: Skill[] = data as Skill[];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#141820] px-4 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.45)] sm:px-6 md:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),transparent_30%)]" />

      <div className="relative">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28rem] text-amber-200">
            Core skills
          </span>
          <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            My skills
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            I build modern, responsive, and user-focused digital experiences using a practical
            toolkit shaped by real-world development work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(251,191,36,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-yellow-200 to-orange-300 shadow-[0_10px_25px_rgba(251,191,36,0.35)]">
                  <Image
                    className="h-8 w-8 rounded-xl bg-white/95 p-1.5 object-contain"
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                  />
                </div>
                <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-2 py-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-amber-100/90">
                  Stack
                </span>
              </div>

              <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-amber-300/30 via-white/20 to-transparent" />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
