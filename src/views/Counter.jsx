import React from "react";
import create from "zustand";

// 创建一个 Zustand store
const useStore = create((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
}));

// 定义 Counter 组件
function Counter() {
	const { count, decrease } = useStore();
	// 也可以这样使用
	const increase = useStore((state) => state.increase);
	return (
		<div>
			<h1>zustand demo</h1>
			<h2>{count}</h2>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}
export default Counter;
