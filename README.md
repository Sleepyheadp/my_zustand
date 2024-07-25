### 为什么要使用 Parcel?

Parcel 是一个快速的、零配置的 web 应用程序打包工具。它可以处理现代 JavaScript 应用程序中的各种资源（如 JavaScript、CSS、HTML、图片等），并将它们打包成一个可以在浏览器中运行的输出文件。

如果你不想使用 Parcel，你可以选择其他工具来启动和构建你的项目，比如 Create React App、Vite 或者 Webpack。这里我们使用 Create React App 来代替 Parcel，启动和运行项目。

### 使用 Create React App

1. 安装 Create React App：

```bash
npx create-react-app zustand-example
cd zustand-example
```

2. 安装 zustand：

```bash
npm install zustand
```

3. 修改 src/index.js 文件

```jsx
import React from "react";
import ReactDOM from "react-dom";
import create from "zustand";
import "./index.css"; // Optional: include this if you want to use CSS

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
```

4. 运行项目

```bash
npm start
```

Create React App 会自动为你设置开发环境，包括启动开发服务器、处理模块热替换等。这样你就可以在浏览器中实时查看和调试你的 React 应用。

如果你更喜欢使用其他工具（如 Vite 或 Webpack），你也可以参考它们的官方文档来设置项目。以下是使用 Vite 的简要说明。

### 使用 Vite

1. 安装 Vite：

```bash
npm init vite@latest zustand-example
cd zustand-example
npm install
```

2. 安装 react 和 zustand

```bash
npm install react react-dom zustand
```

3. 修改 src/main.jsx 文件

```jsx
import React from "react";
import ReactDOM from "react-dom";
import create from "zustand";
import "./index.css"; // Optional: include this if you want to use CSS

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
```

4. 运行项目

```bash
npm run dev
```

这样，你的 React 应用就会在 Vite 提供的开发服务器上运行，并可以在浏览器中查看和调试。
