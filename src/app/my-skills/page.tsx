import Image from "next/image";
import data from "../../../public/data/skills.json";

interface Skill {
	image: string;
	name: string;
	description: string;
}

export default function Skills() {
	const skills: Skill[] = data as Skill[];

	return (
		<div className="Underline mt-15">
			<h1 className="text-center text-green-600 text-2xl capitalize mb-2">
				my skills
			</h1>
			<p className="text-center mb-2">I have hands-on experience with</p>
			<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
				{skills.map((skill, index) => (
					<div key={index} className="card bg-base-100 w-96 shadow-sm p-4">
						<Image src={skill.image} alt={skill.name} width={64} height={64} />
						<div className="card-body">
							<h2 className="card-title">{skill.name}</h2>
							<p>{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
