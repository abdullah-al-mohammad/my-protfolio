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
    <div>
      <h1 className="text-center text-amber-400 text-2xl uppercase mb-3">my skills</h1>
      <p className="text-center mb-10 text-gray-500">I have hands-on experience with</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2">
            <Image className="mx-auto" src={skill.image} alt={skill.name} width={48} height={48} />
            <h2 className="text-sm font-medium">{skill.name}</h2>
            <p className="text-xs text-gray-500 leading-snug">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
