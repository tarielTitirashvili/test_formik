import React from "react";
import { useFormik } from "formik";

export default function YoutubeForm() {
  const formik = useFormik({});
  return (
    <div className="formContainer">
      <form className="form">
        <div>
          <label htmlFor="name">name</label>
          <input name="name" id="name" type={"text"} />
        </div>

        <div>
          <label htmlFor="lastName">lastName</label>
          <input name="lastName" id="lastName" type={"text"} />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input name="email" id="email" type={"email"} />
        </div>

        <button>submit</button>
      </form>
    </div>
  );
}
