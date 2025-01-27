import React from "react";

const TestDuration = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <div style={{ width: "250px", backgroundColor: "#333", color: "white", padding: "20px", height: "100vh" }}>
                <h2>QuizControl</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Dashboard</a></li>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Test Duration</a></li>
                    <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Settings</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "20px" }}>
                <h1>Test Duration</h1>
                <p>Set the duration for the test in minutes.</p>

                <form style={{ maxWidth: "400px", margin: "20px auto" }}>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="duration" style={{ display: "block", marginBottom: "5px" }}>Test Duration (in minutes)</label>
                        <input type="number" id="duration" name="duration" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007b8f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Set Duration</button>
                </form>
            </main>
        </div>
    );
};

export default TestDuration;
