import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Philip',
    last: 'Johnson',
    address: '1680 East-West Road',
    telephone: '808-956-3489',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'Henri',
    last: 'Cassanova',
    address: '1680 East-West Road',
    telephone: '808-956-3489',
    email: 'hcassanova@hawaii.edu',
  },
  {
    first: 'Kim',
    last: 'Binstead',
    address: '1680 East-West Road',
    telephone: '808-956-3489',
    email: 'binstead@hawaii.edu',
  },
  { first: 'David', last: 'Chin', address: '1680 East-West Road', telephone: '808-956-3489', email: 'chin@hawaii.edu' },
];
/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
