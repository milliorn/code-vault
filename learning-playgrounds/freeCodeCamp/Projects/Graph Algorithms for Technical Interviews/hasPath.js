export const DepthFirst = (_graph, src, dst) => {
	if (src === dst) return true;

	for (let neighbor of _graph[src]) {
		if (DepthFirst(_graph, neighbor, dst)) {
			return true;
		}
	}
	return false;
};

export const BreathFirst = (_graph, src, dst) => {
	const queue = [src];

	while (queue.length > 0) {
		const current = queue.shift();

		if (current === dst) return true;

		for (let neighbor of _graph[current]) {
			queue.push(neighbor);
		}
	}
	return false;
};
