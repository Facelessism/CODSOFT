function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>TAP to Login</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Your Email: </label><br />
          <input type="email" name="email" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Youe Password: </label><br />
          <input type="password" name="password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
