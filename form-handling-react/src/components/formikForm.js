import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Submit data (mock API call)
        console.log('Form data submitted:', values);
        // Reset form
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4 border rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
