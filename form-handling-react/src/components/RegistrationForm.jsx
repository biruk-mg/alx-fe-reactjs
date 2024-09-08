import { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let hasError = false;
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
      hasError = true;
    }

    if (!email) {
      errors.email = 'Email is required';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      hasError = true;
    }

    if (!password) {
      errors.password = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(errors);
      return;
    }

    // Submit data (mock API call)
    console.log('Form data submitted:', { username, email, password });
    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={username}  // Corrected: Directly use destructured variable
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
          value={email}  // Corrected: Directly use destructured variable
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
          value={password}  // Corrected: Directly use destructured variable
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
