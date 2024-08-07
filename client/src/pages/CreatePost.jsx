import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(""),
    postText: Yup.string().required(""),
    username: Yup.string().min(3).max(15).required(),
  });

  const handleSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log('it worked');
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="title"
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="post"
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="username"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
