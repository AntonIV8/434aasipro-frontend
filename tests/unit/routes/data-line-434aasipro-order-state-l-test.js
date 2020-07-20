import { moduleFor, test } from 'ember-qunit';

moduleFor('route:data-line-434aasipro-order-state-l', 'Unit | Route | data-line-434aasipro-order-state-l', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:form-load-time-tracker',
    'service:objectlistview-events',
    'service:app-state',
    'service:adv-limit',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
