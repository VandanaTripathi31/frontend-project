import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    roles: '',
    employmentType: {
      fullTime: false,
      partTime: false,
      internship: false,
    },
    skillLevel: {
      intermediate: false,
      junior: false,
      senior: false,
    },
    workMode: {
      onsite: false,
      remote: false,
    },
    budget: '',
    roleInformation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e, section) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: checked,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', JSON.stringify(formData));

    // Optionally clear the form data
    setFormData({
      contactName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      roles: '',
      employmentType: {
        fullTime: false,
        partTime: false,
        internship: false,
      },
      skillLevel: {
        intermediate: false,
        junior: false,
        senior: false,
      },
      workMode: {
        onsite: false,
        remote: false,
      },
      budget: '',
      roleInformation: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Contact Name:</label>
        <input
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>City you are operating from:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Roles you are looking to hire:</label>
        <input
          type="text"
          name="roles"
          value={formData.roles}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <h3>Employment Type You are Offering</h3>
        <label>
          <input
            type="checkbox"
            name="fullTime"
            checked={formData.employmentType.fullTime}
            onChange={(e) => handleCheckboxChange(e, 'employmentType')}
          />
          Full Time Role
        </label>

        <label>
          <input
            type="checkbox"
            name="partTime"
            checked={formData.employmentType.partTime}
            onChange={(e) => handleCheckboxChange(e, 'employmentType')}
          />
          Part Time Role
        </label>

        <label>
          <input
            type="checkbox"
            name="internship"
            checked={formData.employmentType.internship}
            onChange={(e) => handleCheckboxChange(e, 'employmentType')}
          />
          Internship Role
        </label>
      </div>

      <div>
        <h3>Skill Level</h3>
        <label>
          <input
            type="checkbox"
            name="intermediate"
            checked={formData.skillLevel.intermediate}
            onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
          />
          Intermediate Level
        </label>

        <label>
          <input
            type="checkbox"
            name="junior"
            checked={formData.skillLevel.junior}
            onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
          />
          Junior Level
        </label>

        <label>
          <input
            type="checkbox"
            name="senior"
            checked={formData.skillLevel.senior}
            onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
          />
          Senior Level
        </label>
      </div>

      <div>
        <h3>Are these positions Onsite or Remote?</h3>
        <label>
          <input
            type="checkbox"
            name="onsite"
            checked={formData.workMode.onsite}
            onChange={(e) => handleCheckboxChange(e, 'workMode')}
          />
          On Site
        </label>

        <label>
          <input
            type="checkbox"
            name="remote"
            checked={formData.workMode.remote}
            onChange={(e) => handleCheckboxChange(e, 'workMode')}
          />
          Remote
        </label>
      </div>

      <div>
        <label>What is your budget? (in rupees):</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Information about the role you are looking to hire:</label>
        <textarea
          name="roleInformation"
          value={formData.roleInformation}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
