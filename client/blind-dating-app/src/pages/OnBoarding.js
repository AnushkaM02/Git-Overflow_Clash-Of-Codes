// console.log("OnBoarding");
import { useState } from "react";
import Nav from "../components/Nav";
// import instaLogo from "../images/instagram.png";
import { Link } from "react-router-dom";

const OnBoarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    url: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="onb-body">
        <Nav minimal={true} setShowModal={() => {}} showModal={false} />

        <div className="onboarding">
          <h1>Create Profile</h1>

          <form onSubmit={handleSubmit} method="post">
            <section>
              <label htmlFor="first_name">Name </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Name"
                required={true}
                value={formData.first_name}
                onChange={handleChange}
              />
              <br></br>
              <label>Birthday</label>
              <div className="multiple-input-container">
                <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  value={formData.dob_day}
                  onChange={handleChange}
                />

                <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                />

                <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={formData.dob_year}
                  onChange={handleChange}
                />
              </div>

              <label>Gender </label>
              <div className="multiple-input-container">
                <input
                  id="male-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender_identity === "male"}
                />
                <label htmlFor="male-gender-identity">Male</label>
                <input
                  id="female-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_identity === "female"}
                />
                <label htmlFor="female-gender-identity">Female</label>
                <input
                  id="more-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={formData.gender_identity === "more"}
                />
                <label htmlFor="more-gender-identity">Other</label>
              </div>
              <div className="show-gender">
                <label htmlFor="show-gender">Show Gender On My Profile </label>

                <input
                  id="show-gender"
                  type="checkbox"
                  name="show_gender"
                  onChange={handleChange}
                  checked={formData.show_gender}
                />
              </div>
              <br></br>
              <label>My Match Preferences </label>

              <div className="multiple-input-container">
                <input
                  id="male-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender_interest === "male"}
                />
                <label htmlFor="male-gender-interest">Male</label>
                <input
                  id="female-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_interest === "female"}
                />
                <label htmlFor="female-gender-interest">Female</label>
                <input
                  id="everyone-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === "everyone"}
                />
                <label htmlFor="everyone-gender-interest">Other</label>
              </div>

              <label htmlFor="about">About Me </label>
              <input
                id="about"
                type="text"
                name="about"
                required={true}
                placeholder="I like long walks..."
                value={formData.about}
                onChange={handleChange}
              />
              <br></br>

              <label htmlFor="socials">My Socials</label>
              <input
                id="socials"
                type="text"
                name="socials"
                placeholder="instagram_username"
                value={formData.socials}
                onChange={handleChange}
              />
              <br></br>

              <hr color="grey" />

              <div>
                <h2>
                  <b>Questions</b>
                </h2>

                <label>Select your top 3 interests</label>
                <div className="multiple-input-container">
                  <input
                    id="ques1_1"
                    type="radio"
                    name="ques1_1"
                    value="travel"
                    onChange={handleChange}
                    checked={formData.ques1_1}
                  />
                  <label htmlFor="ques1_2">Travel</label>
                  <input
                    id="ques1_2"
                    type="radio"
                    name="ques1_2"
                    value="exercise"
                    onChange={handleChange}
                    checked={formData.ques1_2}
                  />
                  <label htmlFor="ques1_3">Exercise</label>
                  <input
                    id="ques1_3"
                    type="radio"
                    name="ques1_3"
                    value="cooking"
                    onChange={handleChange}
                    checked={formData.ques1_3}
                  />
                  <div>
                    <br></br>
                  </div>
                  <label htmlFor="ques1_3">Cooking</label>
                  <input
                    id="ques1_4"
                    type="radio"
                    name="ques1_4"
                    value="watching-movies"
                    onChange={handleChange}
                    checked={formData.ques1_4 === "watching-movies"}
                  />

                  <label htmlFor="ques1_4">Watching Movies</label>
                  <input
                    id="ques1_5"
                    type="radio"
                    name="ques1_5"
                    value="outdoor-activities"
                    onChange={handleChange}
                    checked={formData.ques1_5 === "outdoor-activities"}
                  />
                  <label htmlFor="ques1_5">Outdoor Activities</label>
                  <input
                    id="ques1_6"
                    type="radio"
                    name="ques1_6"
                    value="politics"
                    onChange={handleChange}
                    checked={formData.ques1_6 === "politics"}
                  />
                  <label htmlFor="ques1_6">Politics</label>
                </div>

                <br></br>

                <label>Which connection is more important to you?</label>
                <div className="multiple-input-container">
                  <input
                    id="ques2_1"
                    type="radio"
                    name="ques2_1"
                    value="emotional"
                    onChange={handleChange}
                    checked={formData.ques2_1 === "emotional"}
                  />
                  <label htmlFor="ques2_1">Emotional</label>
                  <input
                    id="ques2_2"
                    type="radio"
                    name="ques2_2"
                    value="physical"
                    onChange={handleChange}
                    checked={formData.ques2_2 === "physical"}
                  />
                  <label htmlFor="ques2_2">Physical</label>
                </div>

                <br></br>

                <label>What describes you the most?</label>
                <div className="multiple-input-container">
                  <input
                    id="ques3_1"
                    type="radio"
                    name="ques3_1"
                    value="career-oriented"
                    onChange={handleChange}
                    checked={formData.ques3_1}
                  />
                  <label htmlFor="ques3_1">Career-Oriented</label>
                  <input
                    id="ques3_2"
                    type="radio"
                    name="ques3_2"
                    value="family-oriented"
                    onChange={handleChange}
                    checked={formData.ques3_2}
                  />
                  <label htmlFor="ques3_2">Family-Oriented</label>
                </div>

                <br></br>

                <label>Employment Status</label>
                <div className="multiple-input-container">
                  <input
                    id="ques4_1"
                    type="radio"
                    name="ques4_1"
                    value="not-employed"
                    onChange={handleChange}
                    checked={formData.ques4_1}
                  />
                  <label htmlFor="ques4_1">Not Employed</label>
                  <input
                    id="ques4_2"
                    type="radio"
                    name="ques4_2"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.ques4_2}
                  />
                  <label htmlFor="ques4_2">Part-Time</label>
                  <input
                    id="ques4_3"
                    type="radio"
                    name="ques4_3"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.ques4_3}
                  />
                  <label htmlFor="ques4_3">Full-Time</label>
                </div>

                <br></br>

                <label>Is Religion important to you?</label>
                <div className="multiple-input-container">
                  <input
                    id="ques5_1"
                    type="radio"
                    name="ques5_1"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.ques5_1}
                  />
                  <label htmlFor="ques5_1">Yes</label>
                  <input
                    id="ques5_2"
                    type="radio"
                    name="ques5_2"
                    value="no"
                    onChange={handleChange}
                    checked={formData.ques5_2}
                  />
                  <label htmlFor="ques5_2">No</label>
                </div>

                <br></br>

                <label>Is Politics important to you?</label>
                <div className="multiple-input-container">
                  <input
                    id="ques6_1"
                    type="radio"
                    name="ques6_1"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.ques6_1}
                  />
                  <label htmlFor="ques5_1">Yes</label>
                  <input
                    id="ques6_2"
                    type="radio"
                    name="ques6_2"
                    value="no"
                    onChange={handleChange}
                    checked={formData.ques6_2}
                  />
                  <label htmlFor="ques6_2">No</label>
                </div>
              </div>
              <Link to="/matchme">
                <input type="submit" />
              </Link>
            </section>

            {/* <section> }
                        {/* <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        /> */}
            {/* <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div> */}

            {/* </section> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
