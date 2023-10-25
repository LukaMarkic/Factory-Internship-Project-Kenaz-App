import React, { useRef, useState } from "react";
import "../../styles/single-page/commentSection.scss";
import profileImage from "../../images/comment-profile-image.png";
import { format } from "date-fns";

function CommentSection({ commentsData }) {
  const [comments, setComments] = useState(commentsData);
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div>
        {comments.length > 0
          ? comments.map((comment, index) => (
              <CommentElement key={index} commment={comment} />
            ))
          : "No featured comments."}
      </div>
      <h2>Add Your Comment</h2>
      <div>
        <p>
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit
          egestas, augue vel suspendisse. Et felis venenatis blandit sed est
          ultrices, adipiscing urna.
        </p>
        <CommentForm setComments={setComments} />
      </div>
    </div>
  );
}

function CommentElement({ commment }) {
  return (
    <div className="comment-element">
      <img src={profileImage} />
      <div>
        <div>
          <div>
            <h4>{commment.name}</h4>
            <p>{commment.date}</p>
          </div>
          <a href={`mailto:${commment.email}`}>Reply</a>
        </div>
        <p>{commment.comment}</p>
      </div>
    </div>
  );
}

function CommentForm({ setComments }) {
  const formRef = useRef(null);
  const currentDate = format(new Date(), "MMM do, yyyy h:mm a");

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = Array.from(formRef.current.elements);
    let formComment = {
      date: currentDate,
    };

    elements.forEach((element) => {
      if (element.name) {
        if (element.value.trim() === "") {
          element.classList.add("input-empty");
        } else {
          element.classList.remove("input-empty");
          formComment[element.name] = element.value;
        }
      }
    });

    if (Object.keys(formComment).length === 4) {
      setComments((prev) => [...prev, formComment]);
      formRef.current.reset();
    }
  };

  return (
    <form className="comment-form" ref={formRef}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="comment" placeholder="Comment" />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export { CommentSection, CommentElement, CommentForm };
