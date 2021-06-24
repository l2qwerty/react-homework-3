import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import RadioButtons from './RadioButtons';

function FormikContainer({ setActive, ...props }) {
  const radioOptions1 = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];
  const radioOptions2 = [
    { key: 'Option 4', value: 'option1' },
    { key: 'Option 5', value: 'option2' },
    { key: 'Option 6', value: 'option3' },
  ];
  const radioOptions3 = [
    { key: 'Option 7', value: 'option1' },
    { key: 'Option 8', value: 'option2' },
    { key: 'Option 9', value: 'option3' },
  ];
  const radioOptions4 = [
    { key: 'Option 10', value: 'option1' },
    { key: 'Option 11', value: 'option2' },
    { key: 'Option 12', value: 'option3' },
  ];
  const radioOptions5 = [
    { key: 'Option 13', value: 'option1' },
    { key: 'Option 14', value: 'option2' },
    { key: 'Option 15', value: 'option3' },
  ];
  const initialValues = {
    radioOption: '',
    radioOption2: '',
    radioOption3: '',
    radioOption4: '',
    radioOption5: '',
  };
  const validationSchema = Yup.object({
    radioOption: Yup.string().required('  Required!'),
    radioOption2: Yup.string().required('  Required!'),
    radioOption3: Yup.string().required('  Required!'),
    radioOption4: Yup.string().required('  Required!'),
    radioOption5: Yup.string().required('  Required!'),
  });

  const onSubmit = (values) => {
    setActive(false);
    const results = {
      ...values,
    };
    props.updateData(results);
  };
  // values.name.objectEntries().map((value) => 'Form data', values)
  // ('Form data', values)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <div className='modal-test'>
            <RadioButtons
              control='radio'
              label='First question'
              name='radioOption'
              options={radioOptions1}
            />
          </div>
          <div className='modal-test'>
            <RadioButtons
              control='radio'
              label='Second question'
              name='radioOption2'
              options={radioOptions2}
            />
          </div>
          <div className='modal-test'>
            <RadioButtons
              control='radio'
              label='Third question'
              name='radioOption3'
              options={radioOptions3}
            />
          </div>
          <div className='modal-test'>
            <RadioButtons
              control='radio'
              label='Fourth question'
              name='radioOption4'
              options={radioOptions4}
            />
          </div>
          <div className='modal-test'>
            <RadioButtons
              control='radio'
              label='Fifth question'
              name='radioOption5'
              options={radioOptions5}
            />
          </div>
          <button type='submit'>Send and show results</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
