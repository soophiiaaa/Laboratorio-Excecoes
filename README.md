Claro! Aqui está o modelo de README com a adição das informações sobre a origem da atividade:

---

# Laboratório 07 - Exceções em JavaScript

## Proposta da Atividade

Esta atividade foi proposta pelo **Professor Ricardo Rubens** do **Instituto Federal de Alagoas - Campus Maceió**, como parte da disciplina de **Programação Orientada a Objetos (POO)** no curso de **Desenvolvimento de Sistemas**.

## Objetivo

Este laboratório tem como objetivo praticar o uso de exceções em JavaScript, por meio de um sistema simples de contas bancárias. Você irá implementar e aprimorar os métodos de duas classes, `Conta` e `Banco`, para gerenciar erros e garantir a robustez do sistema.

## Tarefas

1. **Melhore o método `sacar` da classe `Conta`** para lidar com a situação em que o valor do saque é maior que o saldo disponível.
   
2. **Modifique o método `encontrarConta` da classe `Banco`** para lidar com a situação em que uma conta com o número especificado não é encontrada.

3. **Aprimore o método `depositar` da classe `Conta`** para garantir que apenas valores positivos sejam aceitos como depósito.

4. **Melhore o método `criarConta` da classe `Banco`** para garantir que o número da conta seja único.

5. **Implemente uma maneira eficaz de lidar com situações em que valores inválidos são passados como parâmetros para os construtores das classes `Conta` e `Banco`**.

6. **Modifique o método `sacar` da classe `Conta`** para lançar uma exceção quando o valor do saque for maior que o saldo disponível.

7. **Determine em quais situações seria apropriado lançar exceções no método `encontrarConta` da classe `Banco`**.

8. **Altere o código de demonstração** para tratar as exceções lançadas pelos métodos.

## Estrutura de Classes

### Classe `Conta`

A classe `Conta` representa uma conta bancária com os seguintes métodos:

- `depositar(valor)`: Depósito de um valor na conta.
- `sacar(valor)`: Realiza um saque na conta, com as devidas verificações de saldo.
  
### Classe `Banco`

A classe `Banco` gerencia contas bancárias, com os seguintes métodos:

- `criarConta(numero, saldoInicial)`: Cria uma nova conta com um número único e um saldo inicial.

## Demonstração

O código de demonstração deve utilizar as classes `Conta` e `Banco`, executando operações como criação de contas, depósitos, saques e verificações de saldo, com tratamento de exceções.

---
