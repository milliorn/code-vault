export const islandCount = (grid) => {
	const visited = new Set();

	let count = 0;
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (explore(grid, row, col, visited) === true) {
				count++;
			}
		}
	}

	return count;
};

const explore = (grid, r, c, visited) => {
	const rowInbounds = 0 <= r && r < grid.length;
	const colInbounds = 0 <= c && c < grid[0].length;
	if (!rowInbounds || !colInbounds) return false;

	if (grid[r][c] === "W") return false;

	const pos = r + "," + c;
	if (visited.has(pos)) return false;
	visited.add(pos);

	explore(grid, r - 1, c, visited);
	explore(grid, r + 1, c, visited);
	explore(grid, r, c - 1, visited);
	explore(grid, r, c + 1, visited);
	return true;
};
