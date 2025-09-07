import Image from "next/image";
import data from "../../../public/data/skills.json";

export const Skills = () => {
	return (
		<div className="Underline mt-15">
			<h1 className="text-center text-green-600 text-2xl capitalize mb-2 ">
				my skills
			</h1>
			<p className="text-center mb-2">I have hands-on experience with</p>
			<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
				{data.map((data: any, index: any) => (
					<div key={index} className="card bg-base-100 w-96 shadow-sm p-4">
						<Image
							src={data.image}
							alt={data.image}
							width={64}
							height={64}
						></Image>
						<div className="card-body">
							<h2 className="card-title">{data.name}</h2>
							<p>{data.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
