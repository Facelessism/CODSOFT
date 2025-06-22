function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>TAP to Register</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Your Name: </label><br />
          <input type="text" name="name" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Your Email: </label><br />
          <input type="email" name="email" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Your Password: </label><br />
          <input type="password" name="password" />
        </div>
        <button type="submit">Register with Dream JobBoard</button>
      </form>
    </div>
  );
}

export default Register;
