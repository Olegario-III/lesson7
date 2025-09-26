import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [touched, setTouched] = useState({ name: false, email: false, password: false });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.password === "") {
      setTouched({ name: true, email: true, password: true });
      setSuccess(""); // clear success message if invalid
      return;
    }
    console.log("Form submitted:", form);
    setSuccess("✅ Form submitted successfully!");
    setForm({ name: "", email: "", password: "" });
    setTouched({ name: false, email: false, password: false });
  };

  const handleClear = () => {
    setForm({ name: "", email: "", password: "" });
    setTouched({ name: false, email: false, password: false });
    setSuccess(""); // clear success message
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        {touched.name && form.name === "" && <p style={{ color: "red" }}>Name is required</p>}
        <br />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        {touched.email && form.email === "" && <p style={{ color: "red" }}>Email is required</p>}
        <br />

        {/* Password Field */}
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        {touched.password && form.password === "" && <p style={{ color: "red" }}>Password is required</p>}
        <br />

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      {/* Success Message */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default App;
