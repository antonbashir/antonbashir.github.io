import { useState, type FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class Hiring {
  companyName: string
  vacancyUrl: string
  expectations: Set<string>
  tasks: Set<string>
  description: string

  constructor(
    companyName: string,
    vacancyUrl: string,
    expectations: Set<string>,
    tasks: Set<string>,
    description: string,
  ) {
    this.companyName = companyName;
    this.vacancyUrl = vacancyUrl;
    this.expectations = expectations;
    this.tasks = tasks;
    this.description = description;
  }

  copy = () => new Hiring(this.companyName, this.vacancyUrl, this.expectations, this.tasks, this.description)

  withCompanyName = (name: string) => {
    this.companyName = name
    return this
  }

  withVacancyUrl = (url: string) => {
    this.vacancyUrl = url
    return this
  }

  withDescription = (description: string) => {
    this.description = description
    return this
  }

  withExpectation = (expectation: string) => {
    this.expectations.add(expectation)
    return this
  }

  withoutExpectation = (expectation: string) => {
    this.expectations.delete(expectation)
    return this
  }

  withTask = (task: string) => {
    this.tasks.add(task)
    return this
  }

  withoutTask = (task: string) => {
    this.tasks.delete(task)
    return this
  }

  format = () => {
    return `
Имя компании: ${this.companyName}

Вакансия: ${this.vacancyUrl}

Ожидания:
${[...this.expectations.values()].map(expectation => `* ${expectation}`).join("\n")}

Задачи:
${[...this.tasks.values()].map(task => `* ${task}`).join("\n")}

Описание: ${this.description}
    `
  }

  valid = () => {
    return this.companyName.length > 0
  }
}

type HiringProperties = {
  hiring: Hiring
  error: boolean
  onChanged: (hiring: Hiring) => void
}

type HiringCheckboxProperties = {
  label: string
  checked: boolean
  onChecked: (checked: boolean) => void;
}

const expectations = [
  "Team membership",
  "Backend programming on common frameworks",
  "Frontend programming on common frameworks",
  "Fullstack programming on common frameworks",
  "Classic DevOps (AWS, GCP, Terraform, K8s, etc...)",
  "System architecture modeling",
  "Team leading",
  "Individual contributions",
  "Algorithms low-level development",
  "OS low-level development",
  "New framework development",
]

const tasks = [
  "Offline technical task",
  "Live coding with company-based task",
  "Live coding with LeetCode-based task (like 'Write braces validator')",
  "Live coding with technology-based task (like 'Write SQL query')",
  "System design task",
  "Dialog about my commercial experience",
  "Dialog about my open-source experience",
  "Dialog about values and reasons",
  "Technology-specific questions (like 'What is the GOMAXPROCS default value ?')",
  "More than 3 interview steps",
  "Less than 3 interview steps",
]

const HiringCheckbox = (properties: HiringCheckboxProperties) =>
  <label className="flex flex-row items-start justify-start gap-4 label cursor-pointer">
    <input
      type="checkbox"
      className="checkbox"
      checked={properties.checked}
      onChange={(event) => properties.onChecked(event.target.checked)}
    />
    <span className="label-text text-lg">{properties.label}</span>
  </label>

const HiringForm = (properties: HiringProperties) => {
  return <>
    <label className="form-control w-full max-w-none">
      <div className="label">
        <span className="label-text"><h3>Company name</h3></span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className={`input input-bordered input-lg w-full max-w-none ${properties.error && 'input-error'}`}
        value={properties.hiring.companyName}
        onChange={(event) => properties.onChanged(properties.hiring.withCompanyName(event.target.value))}
      />
      <div className="label">
        {properties.error && <span className="label-text-alt text-error">Should not be empty</span>}
      </div>
    </label >

    <label className="form-control w-full max-w-none">
      <div className="label">
        <span className="label-text"><h3>Vacancy URL</h3></span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-none"
        value={properties.hiring.vacancyUrl}
        onChange={(event) => properties.onChanged(properties.hiring.withVacancyUrl(event.target.value))}
      />
    </label>

    <label className="form-control w-full max-w-none">
      <div className="label">
        <span className="label-text"><h3>What do you expect from me ?</h3></span>
      </div>
      <div className="flex flex-col">
        {expectations.map(expectation => <HiringCheckbox key={expectation}
          label={expectation}
          checked={properties.hiring.expectations.has(expectation)}
          onChecked={(checked) => properties.onChanged(checked ? properties.hiring.withExpectation(expectation) : properties.hiring.withoutExpectation(expectation))}
        />)}
      </div>
    </label>

    <label className="form-control w-full max-w-none">
      <div className="label">
        <span className="label-text"><h3>What will you give me during interview process ?</h3></span>
      </div>
      <div className="flex flex-col">
        {tasks.map(task => <HiringCheckbox key={task}
          label={task}
          checked={properties.hiring.tasks.has(task)}
          onChecked={(checked) => properties.onChanged(checked ? properties.hiring.withTask(task) : properties.hiring.withoutTask(task))}
        />)}
      </div>
    </label>

    <label className="form-control w-full max-w-none">
      <div className="label">
        <span className="label-text"><h3>Vacancy short description</h3></span>
      </div>
      <textarea
        className="textarea textarea-bordered h-32"
        placeholder=""
        value={properties.hiring.description}
        onChange={(event) => properties.onChanged(properties.hiring.withDescription(event.target.value))}
      >
      </textarea>
    </label>
  </>
}

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [messageCase, setMessageCase] = useState("other");
  const [hiring, setHiring] = useState<Hiring>(new Hiring(
    "",
    "",
    new Set(),
    new Set(),
    "",
  ));
  const [error, setError] = useState(false);

  const hasError = () => !name || (messageCase == "hiring" ? !hiring.valid() : false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!hasError()) {
        await fetch("https://site-sender.anton-sh-local.workers.dev/", {
          method: "POST",
          body: `
Имя: ${name}

Кейс: ${messageCase}

Контакт: ${contact}
${hiring.format()}

${message}
          `
        })
        setError(false);
        toast("Thank you for your message!");
        return;
      }
      setError(true);
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
          type="text"
          placeholder="Type here"
          className={`input input-bordered input-lg w-full max-w-none ${error && 'input-error'}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="label">
          {error && <span className="label-text-alt text-error">Should not be empty</span>}
        </div>
      </label>

      <label className="form-control w-full max-w-none">
        <div className="label">
          <span className="label-text"><h3>What is your contact ?</h3></span>
        </div>
        <input
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
            value="other"
            checked={messageCase == "other"}
            onChange={(event) => event.target.checked && setMessageCase("other")}
            className="radio"
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Chatting</span>
          <input type="radio"
            checked={messageCase == "chatting"}
            onChange={(event) => event.target.checked && setMessageCase("chatting")}
            value="chatting"
            className="radio" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Open-Source projects</span>
          <input type="radio"
            checked={messageCase == "open-source"}
            onChange={(event) => event.target.checked && setMessageCase("open-source")}
            value="open-source"
            className="radio" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Technical question</span>
          <input type="radio"
            value="question"
            checked={messageCase == "question"}
            onChange={(event) => event.target.checked && setMessageCase("question")}
            className="radio" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-sm">Hiring</span>
          <input type="radio"
            value="hiring"
            className="radio"
            checked={messageCase == "hiring"}
            onChange={(event) => event.target.checked && setMessageCase("hiring")}
          />
        </label>
      </label>

      {messageCase == "hiring"
        ? <HiringForm error={error} hiring={hiring} onChanged={(hiring) => setHiring(hiring.copy())} ></HiringForm>
        : <label className="form-control w-full max-w-none">
          <div className="label">
            <span className="label-text"><h3>Write your message here</h3></span>
          </div>
          <textarea
            className="textarea textarea-bordered h-32"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="">
          </textarea>
        </label>
      }

      <button type="submit" className="btn my-8 btn-wide btn-lg">Submit</button>
    </div>
    <ToastContainer
      hideProgressBar
      toastClassName={"bg-black relative flex p-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"}
      bodyClassName={() => "bg-black text-white text-sm block p-4"}
      toastStyle={{ background: "black" }}
      bodyStyle={{ background: "black" }}
    />
  </form>
}