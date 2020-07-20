import { Serializer as usrSerializer } from
  '../mixins/regenerated/serializers/data-line-434aasipro-usr';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(usrSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
