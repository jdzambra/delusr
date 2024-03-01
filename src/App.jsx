import { useState } from "react";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textResult, setTextResult] = useState("");

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(email, textResult);
    console.log(formJson);
  }
  function handleReset(e) {
    setEmail("");
    setPassword("");
  }

  return (
    <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
      <h1>
        Welcome, please type your email to delete your account from Calchi app
      </h1>
      <label>
        E-mail:
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          //defaultValue=""
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <hr />

      <button type="reset" onClick={() => setTextResult("Form reseted")}>
        Reset form
      </button>
      <button
        type="submit"
        onClick={() => setTextResult("Account deleted: " + email + "")}
      >
        Delete Account
      </button>
      <div>
        <h4>{textResult}</h4>
      </div>
    </form>
  );
}
