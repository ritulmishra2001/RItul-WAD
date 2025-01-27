import React from "react";

const ManageTest = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <div style={{ width: "250px", backgroundColor: "#333", color: "white", padding: "20px", height: "100vh" }}>
                <h2>QuizControl</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Dashboard</a></li>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Manage Tests</a></li>
                    <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Settings</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "20px" }}>
                <h1>Manage Tests</h1>
                <p>Here you can view, edit, and delete tests.</p>

                {/* Example table */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Test Name</th>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Date</th>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>Sample Test 1</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>01/25/2025</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                <button style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "#007b8f", color: "white", border: "none", borderRadius: "5px" }}>Edit</button>
                                <button style={{ padding: "5px 10px", backgroundColor: "#d9534f", color: "white", border: "none", borderRadius: "5px" }}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ManageTest;
