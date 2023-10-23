# SOLID and Clean Clode principles

The main goal of this repository, is to have shortcut knowledges and principles to mitigate or reduce
technical debt.

## 📍Clean Code

1. [Naming conventions](./src/clean-code/01-names.ts)
2. [Name Types](./src/clean-code/02-name-types.ts)
3. [Naming functions](./src/clean-code/03-functions.ts)
4. [Refactoring functions avoid else statement](./src/clean-code/04-refactoring-functions-avoid-else.ts)
5. [DRY (Don't repeat yourself)](./src/clean-code/05-dry.ts)
6. [Single Responsibility Principle](./src/clean-code/06-classes-c.ts)
7. [Single Responsibility Principle - Composition over
   inheritance](./src/clean-code/07-single-responsability-principle.ts)

## 📍 STUPID - Code Smells

  1. [Singleton](./src/code-smells/01-singleton.js)
  2. Tight coupling:
      - [High coupling](./src/code-smells/02-high-coupling.ts)
      - [Low coupling](./src/code-smells/02-low-coupling.ts)
  3. Untestability
  4. Premature Optimization
  5. Indescriptive Naming
  6. Duplication (no DRY)

## 📍 SOLID

  1. [Single Responsability Principle](./src/solid/01-single-responsability-principle.ts)

  Una clase o módulo debe tener una única razón para cambiar. Es decir, debe tener una
  única responsabilidad.

    Indicios de violaciones:

    - Nombres de clases o módulos demasiado genéricos.
    - Cambios en el código suelen afectar la clase o módulo.
    - Cantidad elevada de métodos públicos.
    - Cantidad excesiva de líneas de código.

  2. [Open Closed Principle](./src/solid/02-open-closed-principle-a.ts)

  Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para
  su extensión, pero cerradas para su modificación.

    Indicios de violaciones:

      - Cambios en el código suelen afectar la clase o módulo.
      - Cantidad elevada de métodos públicos.
      - Cantidad excesiva de líneas de código.
      - Cuando una clase o módulo afecta muchas layers (storage, presentación, etc.).

  3. [Liskov Substitution Principle](./src/solid/03-liskov-substitution-a.ts)

  Siendo U un subtipo de T, entonces los objetos de tipo T en un programa pueden ser
  sustituidos por objetos de tipo U sin alterar las propiedades del sistema.

    Indicios de violaciones:

      - Cuando una clase hija no puede ser sustituida por la clase padre.
      - Cuando una clase hija no puede implementar un método de la clase padre.

  4. [Interface Segregation Principle](./src/solid/04-interface-segregation-principle-a.ts)

  Los clientes no deben ser forzados a depender de interfaces que no usan.

    Indicios de violaciones:

      - Cuando una clase implementa una interfaz que no usa.
      - Está relacionado con el principio de responsabilidad única y con el principio de sustitución de Liskov.

  5. [Dependency inversion Principle](./src/solid/05-dependency-a.ts)

  Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben
  depender de **abstracciones**, que son las que vamos a utilizar en los lugares dónde
  necesitemos la implementación concreta.

  Se suele utilizar la **inyección de dependencias** para cumplir con este principio, a su
  vez que se cumple con el principio de **open and closed**, y con la **Sustitución de Liskov**.

    Indicios de violaciones:

      - Dependencias ocultas, es decir, cuando una clase crea una instancia de otra clase dentro de un método. Suele resolverse con inyección de dependencias.

## 📔 References
- [Clean Javascript](https://cleanjavascript.es/)
- [Refactoring Guru](https://refactoring.guru/)
- [Clean Code Javascript Repo](https://github.com/ryanmcdermott/clean-code-javascript)
- [The Pragmatic Programmer](https://github.com/HugoMatilla/The-Pragmatic-Programmer)