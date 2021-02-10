import React, { useState, useEffect, useRef } from "react";

function FunctionalForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [technology, setTechnology] = useState("React");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (event) => {
    alert(`
Hi ${username}
Your selected technology: ${technology}`);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Username: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          ref={inputRef}
          required
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <label> Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label> Technology: </label>
        <select
          value={technology}
          onChange={(event) => {
            setTechnology(event.target.value);
          }}
        >
          <option value="React" selected>
            React
          </option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FunctionalForm;
