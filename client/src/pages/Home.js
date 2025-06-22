function Home() {
  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        fontSize: "24px",
        lineHeight: "1.6",
        backgroundColor: "#e6f2ff" 
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#000" }}>
        Welcome to JobBoard
      </h2>
      <p style={{ color: "#000" }}>
        Find your dream job or post a vacancy today!!!
      </p>

      <h3 style={{
        fontSize: '22px',
        marginBottom: '10px',
        color: '#000'
      }}>
        4500+ Opportunities Available
      </h3>

      <h1 style={{
        fontSize: '42px',
        marginBottom: '20px',
        color: '#000'
      }}>
        Discover Your Perfect Job Match
      </h1>

      <p style={{
        fontSize: '18px',
        marginBottom: '30px',
        color: '#000'
      }}>
        Find full-time, part-time, and remote jobs that align with your skills and passion.
      </p>

      <button style={{
        padding: '12px 28px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '40px'
      }}>
        Upload Your Resume
      </button>

      <div style={{ marginTop: '30px' }}>
        <img
          src="https://via.placeholder.com/400x200?text=Job+Search+Visual"
          alt="Job illustration"
          style={{ maxWidth: '90%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}

export default Home;
