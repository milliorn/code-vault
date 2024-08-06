package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/gojek/heimdall/v7"
	"github.com/gojek/heimdall/v7/httpclient"
	"github.com/gojek/heimdall/v7/hystrix"
)

func main() {
	// Create a new HTTP client with a default timeout
	// Use the client's GET method to create and execute the request
	// Heimdall returns the standard *http.Response object
	googleTest()

	// Create an http.Request instance
	// Call the `Do` method, which has a similar interface to the `http.Do` method
	httpGoogle()

	// Use the Hystrix client to make a request to google.com
	// Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services, and 3rd party libraries, stop cascading failure, and enable resilience in complex distributed systems where failure is inevitable.
	hystrixGoogle()

	// Hystrix client with fallback function
	fallbackGoogle()

	// Retry mechanism using Heimdall
	googleRetry()
}

// httpGoogle is a function that sends an HTTP GET request to "http://google.com" and prints the response body.
// It uses a timeout of 1000 milliseconds for the HTTP request.
// If an error occurs during the request or reading the response body, it panics.
func httpGoogle() {
	timeout := 1000 * time.Millisecond
	client := httpclient.NewClient(httpclient.WithHTTPTimeout(timeout))

	req, _ := http.NewRequest(http.MethodGet, "http://google.com", nil)

	res, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(body))
}

func googleTest() {
	timeout := 1000 * time.Millisecond
	client := httpclient.NewClient(httpclient.WithHTTPTimeout(timeout))

	res, err := client.Get("http://google.com", nil)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(body))
}

// hystrixGoogle is a function that sends an HTTP GET request to http://google.com using the hystrix client.
// It sets various configurations for the hystrix client, such as the HTTP timeout, command name, hystrix timeout,
// maximum concurrent requests, and error percent threshold.
// If the request is successful, it prints the response body to the console.
// If any error occurs during the request or reading the response body, it panics.
func hystrixGoogle() {
	client := hystrix.NewClient(
		hystrix.WithHTTPTimeout(1000*time.Millisecond),
		hystrix.WithCommandName("google_get_request"),
		hystrix.WithHystrixTimeout(1000*time.Millisecond),
		hystrix.WithMaxConcurrentRequests(30),
		hystrix.WithErrorPercentThreshold(20),
		// hystrix.WithStatsDCollector("localhost:8125", "myapp.hystrix"), // Uncomment and configure if you have StatsD
	)

	res, err := client.Get("http://google.com", nil)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(body))
}

// fallbackGoogle is a function that demonstrates the usage of a fallback function in a hystrix-wrapped HTTP client.
// It creates a new fallback function that is executed when an error occurs during the HTTP request.
// The fallback function implementation can be customized to perform a fallback action, such as posting to another channel.
// This function sets up a hystrix-wrapped HTTP client with various configurations, including a timeout, command name, hystrix timeout,
// maximum concurrent requests, and error percent threshold.
// It uses the fallback function as the fallback action when an error occurs.
// The function then makes an HTTP GET request to "http://google.com" using the hystrix-wrapped client.
// If an error occurs during the request, it panics.
// Finally, it reads the response body and prints it to the console.
func fallbackGoogle() {
	// Create a new fallback function
	fallbackFn := func(err error) error {
		// Implement the fallback action (like posting to another channel)
		fmt.Println("Fallback executed due to:", err)
		// Return nil as there's no need to propagate the error further
		return nil
	}

	timeout := 1000 * time.Millisecond

	// Create a new hystrix-wrapped HTTP client with the fallbackFunc as the fallback function
	client := hystrix.NewClient(
		hystrix.WithHTTPTimeout(timeout),
		hystrix.WithCommandName("MyCommand"),
		hystrix.WithHystrixTimeout(1100*time.Millisecond),
		hystrix.WithMaxConcurrentRequests(100),
		hystrix.WithErrorPercentThreshold(20),
		hystrix.WithFallbackFunc(fallbackFn),
	)

	// The rest is the same as the previous example
	res, err := client.Get("http://google.com", nil)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(body))
}

// googleRetry is a function that demonstrates how to implement retry mechanism using Heimdall library to make HTTP GET request to "http://google.com".
// It sets a backoff mechanism with a constant backoff interval and maximum jitter interval, and creates a retry mechanism with the backoff.
// The function creates an HTTP client with a timeout, sets the retry mechanism and the number of times to retry, and makes the GET request.
// If an error occurs during the request or reading the response body, it panics. Otherwise, it prints the response body.
func googleRetry() {
	// First set a backoff mechanism. Constant backoff increases the backoff at a constant rate
	backoffInterval := 2 * time.Millisecond
	// Define a maximum jitter interval. It must be more than 1*time.Millisecond
	maximumJitterInterval := 5 * time.Millisecond

	backoff := heimdall.NewConstantBackoff(backoffInterval, maximumJitterInterval)

	// Create a new retry mechanism with the backoff
	retrier := heimdall.NewRetrier(backoff)

	timeout := 1000 * time.Millisecond
	// Create a new client, sets the retry mechanism, and the number of times you would like to retry
	client := httpclient.NewClient(
		httpclient.WithHTTPTimeout(timeout),
		httpclient.WithRetrier(retrier),
		httpclient.WithRetryCount(4),
	)

	res, err := client.Get("http://google.com", nil)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(body))
}
