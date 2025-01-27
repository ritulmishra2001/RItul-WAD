import React from "react";

const AddQuestions = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <div style={{ width: "250px", backgroundColor: "#007b8f", color: "white", padding: "20px", height: "100vh" }}>
                <h2>QuizControl</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Dashboard</a></li>
                    <li style={{ marginBottom: "10px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Add Questions</a></li>
                    <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Settings</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "20px" }}>
                <h1>Add Questions</h1>
                <p>Fill out the form below to add questions to your quiz.</p>

                <form style={{ maxWidth: "600px", margin: "20px auto" }}>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="question" style={{ display: "block", marginBottom: "5px" }}>Question</label>
                        <textarea id="question" name="question" rows="4" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></textarea>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="option1" style={{ display: "block", marginBottom: "5px" }}>Option 1</label>
                        <input type="text" id="option1" name="option1" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="option2" style={{ display: "block", marginBottom: "5px" }}>Option 2</label>
                        <input type="text" id="option2" name="option2" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="option3" style={{ display: "block", marginBottom: "5px" }}>Option 3</label>
                        <input type="text" id="option3" name="option3" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="option4" style={{ display: "block", marginBottom: "5px" }}>Option 4</label>
                        <input type="text" id="option4" name="option4" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="answer" style={{ display: "block", marginBottom: "5px" }}>Correct Answer</label>
                        <select id="answer" name="answer" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
                            <option value="">Select Correct Answer</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>
                    </div>

                    <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007b8f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add Question</button>
                </form>
            </main>
        </div>
    );
};

export default AddQuestions;
