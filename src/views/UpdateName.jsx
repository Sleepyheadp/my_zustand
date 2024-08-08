import React from "react";
import create from "zustand";
const PersonStore = create((set) => ({
	name: "capoo",
	updateName: (name) => set(() => ({ name: name })),
}));
function UpdateName() {
	const { name, updateName } = PersonStore();
	return (
		<div>
			<main>
				<h2>Name:{name}</h2>
				<label htmlFor="">
					<input
						type="text"
						onChange={(e) => {
							updateName(e.currentTarget.value);
						}}
						value={name}
					/>
				</label>
			</main>
		</div>
	);
}
export default UpdateName;
