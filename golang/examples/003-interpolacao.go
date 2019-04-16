package main

import "fmt"

func main() {
	name := "Marcos"
	age := 21
	message := fmt.Sprintf("%s tem %d anos", name, age)

	fmt.Println(message)
}
