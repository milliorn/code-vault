import { connectedComponentsCount } from "./connectedComponentsCount.js";
import { BreathFirst, DepthFirst } from "./hasPath.js";
import { islandCount } from "./islandCount.js";
import { largestComponent } from "./largestComponent.js";
import { shortestPath } from "./shortestPath.js";
import { undirectedPath } from "./undirectedPath.js";

let graph = {
	f: ["g", "i"],
	g: ["h"],
	h: [],
	i: ["g", "k"],
	j: ["i"],
	k: [],
};

console.log(DepthFirst(graph, "f", "k")); //true
console.log(DepthFirst(graph, "i", "h")); //true

console.log(BreathFirst(graph, "f", "k")); //true
console.log(BreathFirst(graph, "i", "h")); //true

graph = {
	v: ["x", "w"],
	w: [],
	x: [],
	y: ["z"],
	z: [],
};

console.log(DepthFirst(graph, "v", "w")); //true
console.log(DepthFirst(graph, "v", "z")); //false

console.log(BreathFirst(graph, "v", "w")); //true
console.log(BreathFirst(graph, "v", "z")); //false

console.log("*".repeat(10));

let edges = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // -> true
console.log(undirectedPath(edges, "m", "j")); // -> true
console.log(undirectedPath(edges, "l", "j")); // -> true
console.log(undirectedPath(edges, "k", "o")); // -> false
console.log(undirectedPath(edges, "i", "o")); // -> false

edges = [
	["b", "a"],
	["c", "a"],
	["b", "c"],
	["q", "r"],
	["q", "s"],
	["q", "u"],
	["q", "t"],
];

console.log(undirectedPath(edges, "a", "b")); // -> true
console.log(undirectedPath(edges, "a", "c")); // -> true
console.log(undirectedPath(edges, "r", "t")); // -> true
console.log(undirectedPath(edges, "r", "b")); // -> false

console.log("*".repeat(10));

let connected = connectedComponentsCount({
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
});

console.log(connected);

connected = connectedComponentsCount({
	1: [2],
	2: [1, 8],
	6: [7],
	9: [8],
	7: [6, 8],
	8: [9, 7, 2],
});

console.log(connected);

connected = connectedComponentsCount({
	3: [],
	4: [6],
	6: [4, 5, 7, 8],
	8: [6],
	7: [6],
	5: [6],
	1: [2],
	2: [1],
});

console.log(connected);

console.log(connectedComponentsCount({}));

console.log(
	connectedComponentsCount({
		0: [4, 7],
		1: [],
		2: [],
		3: [6],
		4: [0],
		6: [3],
		7: [0],
		8: [],
	})
);

console.log("*".repeat(10));

console.log(
	largestComponent({
		0: ["8", "1", "5"],
		1: ["0"],
		5: ["0", "8"],
		8: ["0", "5"],
		2: ["3", "4"],
		3: ["2", "4"],
		4: ["3", "2"],
	})
);

console.log(
	largestComponent({
		1: ["2"],
		2: ["1", "8"],
		6: ["7"],
		9: ["8"],
		7: ["6", "8"],
		8: ["9", "7", "2"],
	})
);

console.log(
	largestComponent({
		3: [],
		4: ["6"],
		6: ["4", "5", "7", "8"],
		8: ["6"],
		7: ["6"],
		5: ["6"],
		1: ["2"],
		2: ["1"],
	})
);

console.log(largestComponent({}));

console.log(
	largestComponent({
		0: ["4", "7"],
		1: [],
		2: [],
		3: ["6"],
		4: ["0"],
		6: ["3"],
		7: ["0"],
		8: [],
	})
);

console.log("*".repeat(10));

edges = [
	["w", "x"],
	["x", "y"],
	["z", "y"],
	["z", "v"],
	["w", "v"],
];

console.log(shortestPath(edges, "w", "z"));
console.log(shortestPath(edges, "y", "x"));

edges = [
	["a", "c"],
	["a", "b"],
	["c", "b"],
	["c", "d"],
	["b", "d"],
	["e", "d"],
	["g", "f"],
];

console.log(shortestPath(edges, "a", "e"));
console.log(shortestPath(edges, "e", "c"));
console.log(shortestPath(edges, "b", "g"));

edges = [
	["c", "n"],
	["c", "e"],
	["c", "s"],
	["c", "w"],
	["w", "e"],
];

console.log(shortestPath(edges, "w", "e"));
console.log(shortestPath(edges, "n", "e"));

edges = [
	["m", "n"],
	["n", "o"],
	["o", "p"],
	["p", "q"],
	["t", "o"],
	["r", "q"],
	["r", "s"],
];

console.log(shortestPath(edges, "m", "s"));

console.log("*".repeat(10));

let grid = [
	["W", "L", "W", "W", "W"],
	["W", "L", "W", "W", "W"],
	["W", "W", "W", "L", "W"],
	["W", "W", "L", "L", "W"],
	["L", "W", "W", "L", "L"],
	["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid));

grid = [
	["L", "W", "W", "L", "W"],
	["L", "W", "W", "L", "L"],
	["W", "L", "W", "L", "W"],
	["W", "W", "W", "W", "W"],
	["W", "W", "L", "L", "L"],
];

console.log(islandCount(grid));

grid = [
	["L", "L", "L"],
	["L", "L", "L"],
	["L", "L", "L"],
];

console.log(islandCount(grid));

grid = [
	["W", "W"],
	["W", "W"],
	["W", "W"],
];

console.log(islandCount(grid));
