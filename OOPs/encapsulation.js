"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    owner;
    balance;
    constructor(owner, startingBalance) {
        this.owner = owner;
        this.balance = startingBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("Alex", 100);
account.deposit(50);
console.log(`${account.owner}'s balance: $${account.getBalance()}`);
