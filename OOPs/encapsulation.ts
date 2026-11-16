class BankAccount {
    private balance: number;

    constructor(
        public owner: string,
        startingBalance: number
    ) {
        this.balance = startingBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Alex", 100);
account.deposit(50);
console.log(`${account.owner}'s balance: $${account.getBalance()}`);