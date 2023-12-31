import { useState, type FormEvent } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [messageCase, setMessageCase] = useState("other");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (name && contact && message) {
        await fetch("https://site-sender.anton-sh-local.workers.dev/", {
          method: "POST",
          body: `Имя: ${name}%0AКейс: ${messageCase}%0AКонтакт: ${contact}%0A%0A${message}`
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  return <form onSubmit={submit}>
    <div className="flex flex-col m-auto max-w-none w-2/3 prose">
      <label className="form-control w-full max-w-none">
        <div className="label">
          <span className="label-text"><h3>What is your name ?</h3></span>
        </div>
        <input
          name="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-none"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="form-control w-full max-w-none">
        <div className="label">
          <span className="label-text"><h3>What is your contact ?</h3></span>
        </div>
        <input
          name="contact"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-none"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </label>

      <label className="form-control w-full max-w-none">
        <div className="label">
          <span className="label-text"><h3>What is your case ?</h3></span>
        </div>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Other</span>
          <input type="radio"
            name="case"
            value="other"
            checked={messageCase == "other"}
            onChange={(event) => event.target.checked && setMessageCase("other")}
            className="radio"
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Hiring</span>
          <input type="radio"
            name="case"
            value="hiring"
            className="radio"
            checked={messageCase == "hiring"}
            onChange={(event) => event.target.checked && setMessageCase("hiring")}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Chatting</span>
          <input type="radio"
            name="case"
            checked={messageCase == "chatting"}
            onChange={(event) => event.target.checked && setMessageCase("chatting")}
            value="chatting"
            className="radio" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Open-Source projects</span>
          <input type="radio"
            name="case"
            checked={messageCase == "open-source"}
            onChange={(event) => event.target.checked && setMessageCase("open-source")}
            value="open-source"
            className="radio" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Technical question</span>
          <input type="radio"
            name="case"
            value="question"
            checked={messageCase == "question"}
            onChange={(event) => event.target.checked && setMessageCase("question")}
            className="radio" />
        </label>
      </label>

      <label className="form-control w-full max-w-none">
        <div className="label">
          <span className="label-text"><h3>Write your message here</h3></span>
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-32"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="">
        </textarea>
      </label>

      <button type="submit" className="btn my-8 btn-wide btn-lg">Submit</button>
    </div>
  </form>
}