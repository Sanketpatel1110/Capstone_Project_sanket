import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "easymde/dist/easymde.min.css";

const AddMarkdownPage = () => {
  const [title, setTitle] = useState("");
  const [markdown_content, setMarkdownContent] = useState("");
  const navigate = useNavigate();

  const submitContent = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/add-markdown-content`,
        {
          title,
          markdown_content,
        }
      );
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Failed to submit content:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SimpleMDE value={markdown_content} onChange={setMarkdownContent} />
      <button onClick={submitContent}>Submit</button>
    </div>
  );
};

export default AddMarkdownPage;
