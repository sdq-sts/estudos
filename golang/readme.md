# Anotações para estudos em GO

### Comentários:

```go
// Isso é um comentário inline

/*
  Isso é um comentário
  de em formato de bloco
*/
```

### Imprimindo valores:

Valores podem ser impressos usando o pacote `fmt`.

```go
package main

import ( "fmt" )

func main() {
  fmt.Println("Olá, mundo")
  fmt.Printf("Olá, %s\n", "mundo")
  fmt.Printf("Olá, %d %s", 10, "mundos")
}
```

### Variáveis:

Variáveis podem ser criadas com o tipo explícito usando a palavra-chave `var` ou inplicitamente
usando o símbolo de atribuição `:=`, esse segundo só funciona dentro de escopo de funçṍes.

```go
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
```

### Interpolação:

```go
package main

import "fmt"

func main() {
	name := "Marcos"
	age := 21
	message := fmt.Sprintf("%s tem %d anos", name, age)

	fmt.Println(message)
}
```

### Tipos:

Existem vários tipos em Go, são eles:

```go
package main

func main() {
	// tipos primitivos
	var myBool bool = true
	var myInt int = 10
	var myInt8 int8 = 10
	var myInt16 int16 = 10
	var myInt32 int32 = 10
	var myInt64 int64 = 10
	var myUint uint = 10
	var myUint8 uint8 = 10
	var myUint16 uint16 = 10
	var myUint32 uint32 = 10
	var myUint64 uint64 = 10
	var myUintptr uintptr = 10
	var myFloat32 float32 = 10.5
	var myFloat64 float64 = 10.5
	var myComplex64 complex64 = -1 + 10i
	var myComplex128 complex128 = -1 + 10i
	var myString string = "foo"
	var myByte byte = 10  // alias para uint8
	var myRune rune = 'a' // alias para int32

	// tipos compostos
	var myStruct struct{} = struct{}{}
	var myArray []string = []string{}
	var myMap map[string]int = map[string]int{}
	var myFunction func() = func() {}
	var myChannel chan bool = make(chan bool)
	var myInterface interface{} = nil
	var myPointer *int = new(int)
}
```
