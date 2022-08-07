import { module, test } from 'qunit';
import { click, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | input / output', function (hooks) {
  setupApplicationTest(hooks);

  test('should output 100', async function (assert) {
    await visit('/');
    await fillIn('[id="num01"]', '10');
    await fillIn('[id="num02"]', '10');
    await click('[id="calculate"]');
    assert.dom('[id="result"]').hasText('100');
  });

  test('large number PASSING test', async function (assert) {
    await visit('/');
    await fillIn('[id="num01"]', '98765432123');
    await fillIn('[id="num02"]', '10101010101');
    await click('[id="calculate"]');
    assert.dom('[id="result"]').hasText('997630627504052874423');
  });

  test('too large ERROR test', async function (assert) {
    await visit('/');
    await fillIn('[id="num01"]', '998765432123');
    await fillIn('[id="num02"]', '110101010101');
    await click('[id="calculate"]');
    assert.dom('[id="result"]').hasText('Congrats! You broke it.');
  });
});
