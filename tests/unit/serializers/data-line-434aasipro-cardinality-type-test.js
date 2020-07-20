import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-434aasipro-cardinality-type', 'Unit | Serializer | data-line-434aasipro-cardinality-type', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:data-line-434aasipro-cardinality-type',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:data-line-434aasipro-cardinality-type',
    'model:data-line-434aasipro-catalog',
    'model:data-line-434aasipro-characteristic-type',
    'model:data-line-434aasipro-contragent',
    'model:data-line-434aasipro-customer-acl',
    'model:data-line-434aasipro-customer',
    'model:data-line-434aasipro-dba',
    'model:data-line-434aasipro-dictionary-value',
    'model:data-line-434aasipro-dictionary',
    'model:data-line-434aasipro-grp',
    'model:data-line-434aasipro-order-item',
    'model:data-line-434aasipro-order-state',
    'model:data-line-434aasipro-product-catalog',
    'model:data-line-434aasipro-resource-characteristic-log',
    'model:data-line-434aasipro-resource-characteristic',
    'model:data-line-434aasipro-resource-common',
    'model:data-line-434aasipro-resource-log',
    'model:data-line-434aasipro-resource-shared',
    'model:data-line-434aasipro-resource-spec-characteristic',
    'model:data-line-434aasipro-resource-spec',
    'model:data-line-434aasipro-resource-usage-spec',
    'model:data-line-434aasipro-resource',
    'model:data-line-434aasipro-role',
    'model:data-line-434aasipro-service-characteristic-log',
    'model:data-line-434aasipro-service-characteristic',
    'model:data-line-434aasipro-service-log',
    'model:data-line-434aasipro-service-order',
    'model:data-line-434aasipro-service-spec-acl',
    'model:data-line-434aasipro-service-spec-characteristic',
    'model:data-line-434aasipro-service-spec',
    'model:data-line-434aasipro-service-state',
    'model:data-line-434aasipro-service-usage-spec',
    'model:data-line-434aasipro-service',
    'model:data-line-434aasipro-user-group',
    'model:data-line-434aasipro-user-resource-spec',
    'model:data-line-434aasipro-user-role',
    'model:data-line-434aasipro-user-service-order',
    'model:data-line-434aasipro-user-service-spec',
    'model:data-line-434aasipro-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
