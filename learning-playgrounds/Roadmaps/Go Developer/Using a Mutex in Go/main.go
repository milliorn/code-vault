package main

import (
	"fmt"
	"sync"
	"time"
)

type intLock struct {
	val int
	sync.Mutex
}

func (n *intLock) isEven() bool {
	return n.val%2 == 0
}

func isEven(n int) bool {
	return n%2 == 0
}

func oldMain() {
	n := 0
	var m sync.RWMutex

	// goroutine 1
	// Since we are only reading data here, we can call the `RLock`
	// method, which obtains a read-only lock
	go func() {
		m.RLock()
		defer m.RUnlock()
		nIsEven := isEven(n)
		time.Sleep(5 * time.Millisecond)
		if nIsEven {
			fmt.Println(n, " is even")
			return
		}
		fmt.Println(n, "is odd")
	}()

	// goroutine 2
	go func() {
		m.RLock()
		defer m.RUnlock()
		nIsPositive := n > 0
		time.Sleep(5 * time.Millisecond)
		if nIsPositive {
			fmt.Println(n, " is positive")
			return
		}
		fmt.Println(n, "is not positive")
	}()

	// goroutine 3
	// Since we are writing into data here, we use the
	// `Lock` method, like before
	go func() {
		m.Lock()
		n++
		m.Unlock()
	}()

	time.Sleep(time.Second)
}

func main() {
	n := &intLock{val: 0}

	go func() {
		n.Lock()
		defer n.Unlock()
		nIsEven := n.isEven()
		time.Sleep(5 * time.Millisecond)
		if nIsEven {
			fmt.Println(n.val, " is even")
			return
		}
		fmt.Println(n.val, "is odd")
	}()

	go func() {
		n.Lock()
		n.val++
		n.Unlock()
	}()

	time.Sleep(time.Second)
}
