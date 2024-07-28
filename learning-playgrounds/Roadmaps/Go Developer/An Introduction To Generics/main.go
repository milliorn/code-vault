package main

import (
	"fmt"
	"golang.org/x/exp/constraints"
)

type Point []int32

func main() {
	x := GMin[int](2, 3)
	fmt.Println(x)

	fmin := GMin[float64]
	m := fmin(2.0, 3.0)
	fmt.Println(m)

	s := Scale([]int{1, 2, 3}, 2)
	fmt.Println(s)

	p := Point{1, 2}
	fmt.Println(p)

	ScaleAndPrint(p)
}

func GMin[T constraints.Ordered](x, y T) T {
	if x < y {
		return x
	}
	return y
}

func Scale[S ~[]E, E constraints.Integer](s S, c E) S {
	r := make(S, len(s))
	for i, v := range s {
		r[i] = v * c
	}
	return r
}

func (p Point) String() string {
	return fmt.Sprintf("(%d, %d)", p[0], p[1])
}

func ScaleAndPrint(p Point) {
	s := Scale(p, 2)
	fmt.Println(s)
}
