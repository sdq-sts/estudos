package main

import (
	"fmt"
)

var explicitVariable bool

func main() {
	implicitVariable := true

	fmt.Println("ExplicitVariable:", explicitVariable)
	fmt.Println("ImplicitVariable:", implicitVariable)
}
