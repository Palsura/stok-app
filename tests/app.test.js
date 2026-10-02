const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

let server;
let base;

test.before(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

test.after(() => server.close());

test('health answers ok', async () => {
  const res = await fetch(`${base}/api/health`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: 'ok' });
});

test('products lists the stock', async () => {
  const res = await fetch(`${base}/api/products`);
  const products = await res.json();
  assert.strictEqual(res.status, 200);
  assert.ok(products.length > 0);
});

test('an unknown address answers 404 in JSON', async () => {
  const res = await fetch(`${base}/no/such/page`);
  assert.strictEqual(res.status, 404);
  assert.deepStrictEqual(await res.json(), { error: 'not found' });
});
