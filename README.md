# babel-bug-reproduction
A reproduction of a babel bug for an issue submission.

```bash
git clone git@github.com:RubikonBlockchain/babel-bug-reproduction.git
cd babel-bug-reproduction
npm install
for run in {1..10}; do npm run test; done;
```
The above code calls `npm run test` ten times, which should be enough to produce the failure that sometimes happens.
