import validate from './update-user-form.validator';

describe('Update User Form Validator', () => {
  describe('Failure values', () => {
    const testFields = [
      {
        first_name: '', // Error
        last_name: 'Smith'
      },
      {
        first_name: ' ', // Error
        last_name: 'Smith'
      },
      {
        first_name: '     ', // Error
        last_name: 'Smith'
      },
      {
        first_name: 'J', // Error
        last_name: 'Smith'
      },
      {
        first_name: 'John',
        last_name: '' // Error
      },
      {
        first_name: 'J',
        last_name: 'S' // Error
      }
    ];

    it.each(testFields)('Missing Value %o', form => {
      console.log('FAILURE FORM FIELDS: ', form);
      const errors = validate(form);
      console.log('FAILURE ERRORS: ', errors);
    });
  });

  describe('Success values', () => {
    const testFields = [
      {
        first_name: 'Su',
        last_name: 'Smith'
      },
      {
        first_name: 'John',
        last_name: 'Smith'
      }
    ];

    it.each(testFields)('Missing Value %o', form => {
      console.log('SUCCESS FORM FIELDS: ', form);
      const errors = validate(form);
      console.log('SUCCESS ERRORS: ', errors);
    });
  });
});
