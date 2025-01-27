import React from "react";

const LoginPage = () => {
    return (
        <div style={{ background: "url('https://storage.googleapis.com/a1aa/image/pORZ2wxxZQamHVg') no-repeat center center/cover", height: "100vh" }}>
            <header style={{ textAlign: "center", padding: "20px", color: "white" }}>
                <h1>QuizControl - Login</h1>
            </header>

            <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 100px)" }}>
                <form style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h2>Login</h2>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
                        <input type="text" id="username" name="username" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
                        <input type="password" id="password" name="password" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007b8f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Login</button>
                </form>
            </main>

            <footer style={{ textAlign: "center", color: "white", padding: "10px", backgroundColor: "#333" }}>
                <p>&copy; 2025 QuizControl. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginPage;
