import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let hasError = false;
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
      hasError = true;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      hasError = true;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(errors);
      return;
    }

    // Submit data (mock API call)
    console.log('Form data submitted:', formData);
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: ''
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}  // Corrected: Bind value to state
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}  // Corrected: Bind value to state
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}  // Corrected: Bind value to state
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
