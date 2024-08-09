package search

import "testing"

var tests = []struct {
	a   []int
	x   int
	exp int
}{
	{[]int{}, 1, 0},
	{[]int{1, 2, 3, 3}, 0, 0},
	{[]int{1, 2, 3, 3}, 1, 0},
	{[]int{1, 2, 3, 3}, 2, 1},
	{[]int{1, 2, 3, 3}, 3, 3}, // incorrect test case
	{[]int{1, 2, 3, 3}, 4, 4},
}

func TestFind(t *testing.T) {
	for _, e := range tests {
		res := Find(e.a, e.x)
		if res != e.exp {
			t.Errorf("Find(%v, %d) = %d, expected %d",
				e.a, e.x, res, e.exp)
		}
	}
}
