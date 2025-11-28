import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Student Feedback Form</h2>
      <p className="sub-title">
        Please provide your honest feedback about the course and faculty.
      </p>

      <form>
        {/* Student Details */}
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roll">Roll Number</label>
          <input
            type="text"
            id="roll"
            name="roll"
            placeholder="Enter your roll number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your college email"
            required
          />
        </div>

        {/* Course / Faculty Details */}
        <div className="form-group">
          <label htmlFor="course">Course / Subject</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Example: Web Technologies"
          />
        </div>

        <div className="form-group">
          <label htmlFor="faculty">Faculty Name</label>
          <input
            type="text"
            id="faculty"
            name="faculty"
            placeholder="Enter faculty name"
          />
        </div>

        {/* Rating */}
        <div className="form-group">
          <label>Overall Rating for the Course</label>
          <div className="rating-options">
            <label>
              <input type="radio" name="rating" value="1" /> 1
            </label>
            <label>
              <input type="radio" name="rating" value="2" /> 2
            </label>
            <label>
              <input type="radio" name="rating" value="3" /> 3
            </label>
            <label>
              <input type="radio" name="rating" value="4" /> 4
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="5"
                defaultChecked
              />{" "}
              5
            </label>
          </div>
        </div>

        {/* Yes/No Questions */}
        <div className="form-group">
          <label>Was the syllabus covered on time?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="syllabus"
                value="Yes"
                defaultChecked
              />{" "}
              Yes
            </label>
            <label>
              <input type="radio" name="syllabus" value="No" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Was the teaching method understandable?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="teaching" value="Excellent" />{" "}
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="teaching"
                value="Good"
                defaultChecked
              />{" "}
              Good
            </label>
            <label>
              <input type="radio" name="teaching" value="Average" />{" "}
              Average
            </label>
            <label>
              <input type="radio" name="teaching" value="Poor" /> Poor
            </label>
          </div>
        </div>

        {/* Comments */}
        <div className="form-group">
          <label htmlFor="comments">Suggestions / Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Write your feedback here..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
          <button type="reset" className="btn btn-reset">
            Reset
          </button>
        </div>

        <p className="note">
          Note: This feedback will be used only for academic improvement.
        </p>
      </form>
    </div>
  );
}

export default App;
