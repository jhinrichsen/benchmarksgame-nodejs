// The Computer Language Benchmarks Game
// http://benchmarksgame.alioth.debian.org

// transliterated from Rick Branson's Ruby program
// contributed by Jochen Hinrichsen

"use strict";

const BN = require('bn.js');

const N = new BN(process.argv[2] || 27);

const ZERO = new BN(0),
      ONE = new BN(1),
      TWO = new BN(2),
      THREE = new BN(3),
      TEN = new BN(10);

let i = new BN(0),
  k = new BN(0),
  ns = new BN(0),
  k1 = new BN(1),
  n = new BN(1),
  a = new BN(0),
  d = new BN(1),
  t = new BN(0),
  u = new BN(0);

for (;;) {
  k = k.add(ONE);
  t = n.mul(TWO);
  n = n.mul(k);
  a = a.add(t);
  k1 = k1.add(TWO);
  a = a.mul(k1);
  d = d.mul(k1);
  if (a.cmp(n) >= 0) {
    let q = n.mul(THREE).add(a);
    t = q.div(d);
    u = q.mod(d);
    u = u.add(n);
    if (d.cmp(u) === 1) {
      ns = ns.mul(TEN).add(t);
      i = i.add(ONE);
      if (i.mod(TEN).cmp(ZERO) === 0) {
        process.stdout.write(`${ns.toString(10, 10)}    :${i}\n`);
        ns = new BN(0);
      }
      if (i.cmp(N) >= 0) break;
   
      a = a.sub(d.mul(t));
      a = a.mul(TEN);
      n = n.mul(TEN);
    }
  }
}
