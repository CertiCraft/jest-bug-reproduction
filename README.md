# jest-bug-reproduction
A reproduction of a jest bug for an issue submission.

```bash
git clone git@github.com:RubikonBlockchain/jest-bug-reproduction.git
cd jest-bug-reproduction
npm install
for run in {1..10}; do npm run test; done;
```
The above code calls `npm run test` ten times, which should be enough to produce the failure that sometimes happens.
