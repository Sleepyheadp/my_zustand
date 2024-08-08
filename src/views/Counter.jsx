import React from "react";
import create from "zustand";
// 创建一个 Zustand store
const useStore = create((set) => ({
	count: 0,
	deep: {
		nested: {
			obj: {
				num: 0,
			},
		},
	},
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
	normalDeepNum: () =>
		set((state) => ({
			deep: {
				...state.deep,
				nested: {
					...state.deep.nested,
					obj: {
						num: state.deep.nested.obj.num + 1,
					},
				},
			},
		})),
}));

// 定义increase功能实现
function Increase() {
	const increase = useStore((state) => state.increase);
	return <button onClick={increase}>Increase</button>;
}
// 定义 Counter 组件
function Counter() {
	const { count, decrease, normalDeepNum } = useStore();
	const reset = useStore((state) => state.reset);
	const deepNum = useStore((state) => state.deep.nested.obj.num);
	return (
		<div>
			<h1>zustand demo</h1>
			<h2>count:{count}</h2>
			<h2>deepNum:{deepNum}</h2>
			<Increase />
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>reset</button>
			<button onClick={normalDeepNum}>normalDeepNum</button>
		</div>
	);
}
export default Counter;
