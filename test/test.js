import { getDate, getInitials } from '../components/utils';

var assert = require('assert');
describe('Test Utils', function() {
  describe('#getDate', function() {
    it('should return 12/20/2014 from 2014-12-20T10:26:47.902000Z', function() {
      assert.equal(getDate('2014-12-20T10:26:47.902000Z'), '12/20/2014');
    });
  });
});