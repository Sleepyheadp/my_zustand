import React from "react";
import ReactDOM from "react-dom";
import create from "zustand";

// 创建一个 Zustand store
const useStore = create((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
}));

// 定义 Counter 组件
function Counter() {
	const { count, increase, decrease } = useStore();
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}

// 渲染应用
ReactDOM.render(<Counter />, document.getElementById("root"));
