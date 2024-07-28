package hello

import (
	quoteV3 "rsc.io/quote/v3"
)


func Hello() string {
	return "Hello, world."
}

func Hello_RSC() string {
	return quoteV3.Hello()
}

func Proverb() string {
	return quoteV3.Concurrency()
}

func HelloV3() string {
	return quoteV3.HelloV3()
}
