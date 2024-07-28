package hello

import "testing"

func TestHello(t *testing.T) {
	want := "Hello, world."
	if got := Hello(); got != want {
		t.Errorf("Hello() = %q, want %q", got, want)
	}
}

func TestHello_RSC(t *testing.T) {
	want := "Hello, world." // Update expected value to "Hello, world."
	if got := Hello_RSC(); got != want {
		t.Errorf("Hello_RSC() = %q, want %q", got, want)
	}
}

func TestProverb(t *testing.T) {
	want := "Concurrency is not parallelism."
	if got := Proverb(); got != want {
		t.Errorf("Proverb() = %q, want %q", got, want)
	}
}

func TestHelloV3(t *testing.T) {
	want := "Hello, world." // Update expected value to "Hello, world."
	if got := HelloV3(); got != want {
		t.Errorf("HelloV3() = %q, want %q", got, want)
	}
}
