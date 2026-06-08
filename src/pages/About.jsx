import React from "react";

function About() {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Hero Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div>
          <span
            style={{
              background: "#eef2ff",
              color: "#4f46e5",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            About ShopWave
          </span>

          <h1
            style={{
              fontSize: "3.5rem",
              marginTop: "20px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Redefining Modern
            <br />
            Fashion Commerce
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            ShopWave is a premium e-commerce platform dedicated to
            delivering the latest fashion and lifestyle essentials.
            We combine style, quality, and convenience to create an
            exceptional shopping experience for customers across India.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
          alt="ShopWave"
          style={{
            width: "100%",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        />
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "20px",
            background: "#f8fafc",
          }}
        >
          <h2>🎯 Our Mission</h2>
          <p>
            To make premium fashion accessible through a seamless and
            enjoyable online shopping experience.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            borderRadius: "20px",
            background: "#f8fafc",
          }}
        >
          <h2>🚀 Our Vision</h2>
          <p>
            To become India's most trusted destination for fashion,
            lifestyle, and innovation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "30px",
            borderRadius: "20px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "30px",
            borderRadius: "20px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>1200+</h2>
          <p>Premium Products</p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "30px",
            borderRadius: "20px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>150+</h2>
          <p>Partner Brands</p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "30px",
            borderRadius: "20px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>4.9★</h2>
          <p>Average Rating</p>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "30px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="CEO"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Arjun Mehta</h3>
            <p>Founder & CEO</p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Director"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Priya Sharma</h3>
            <p>Creative Director</p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="Manager"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Rahul Verma</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;