<template>
    <form @submit.prevent="handleSubmit" novalidate method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
      <!-- First and Last Name -->
      <fieldset>
        <legend>Personal Information</legend>
  
        <div>
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            required
            pattern="[A-Za-z]+"
            title="Only letters are allowed"
          />
          <span v-if="!valid.firstName" class="error">First Name is required and must contain only letters.</span>
        </div>
  
        <div>
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            required
            pattern="[A-Za-z]+"
            title="Only letters are allowed"
          />
          <span v-if="!valid.lastName" class="error">Last Name is required and must contain only letters.</span>
        </div>
      </fieldset>
  
      <!-- Username -->
      <fieldset>
        <legend>Account Information</legend>
  
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            required
            minlength="3"
          />
          <span v-if="!valid.username" class="error">Username must be at least 3 characters long.</span>
        </div>
        </fieldset>
  
        <!-- Password -->
        <fieldset>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            minlength="8"
            pattern=".*[$%^&*].*"
            title="Password must contain at least one special character ($, %, ^, &, *)"
          />
          <span v-if="!valid.password" class="error">Password must be at least 8 characters and include a special character ($, %, ^, &, *).</span>
        </div>
        </fieldset>
  
        <!-- Confirm Password -->
        <fieldset>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            required
          />
          <span v-if="!valid.confirmPassword" class="error">Confirm Password must match Password.</span>
        </div>
      </fieldset>
  
      <!-- Email -->
      <fieldset>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
          />
          <span v-if="!valid.email" class="error">Please enter a valid email address.</span>
        </div>
      </fieldset>
  
      <!-- Postcode -->
      <fieldset>
        <div>
          <label for="postcode">Postcode:</label>
          <input
            type="text"
            id="postcode"
            v-model="form.postcode"
            required
            pattern="^\d{4}$"
            title="Postcode must be 4 digits"
          />
          <span v-if="!valid.postcode" class="error">Postcode must be exactly 4 digits.</span>
        </div>
      </fieldset>
  
      <!-- Mobile Number -->
      <fieldset>
        <div>
          <label for="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            v-model="form.mobile"
            required
            pattern="^04\d{8}$"
            
          />
          <span v-if="!valid.mobile" class="error">Mobile number must start with 04 and be 10 digits long.</span>
        </div>
      </fieldset>
  
      <!-- Date of Birth -->
      <fieldset>
        <div>
          <label for="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            v-model="form.dob"
            required
          />
          <span v-if="!valid.dob" class="error">You must be at least 16 years old.</span>
        </div>
      </fieldset>
  
      <!-- Job Category -->
      <fieldset>
        <div>
          <label for="jobCategory">Preferred Job Category:</label>
          <select id="jobCategory" v-model="form.jobCategory" required>
            <option value="">Select</option>
            <option value="AI">AI</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
          </select>
          <span v-if="!valid.jobCategory" class="error">Please select a job category.</span>
        </div>
      </fieldset>
  
      <!-- Submit Button -->
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          postcode: '',
          mobile: '',
          dob: '',
          jobCategory: '',
          terms: false,
        },
        showTerms: false,
        valid: {
          firstName: true,
          lastName: true,
          username: true,
          password: true,
          confirmPassword: true,
          email: true,
          postcode: true,
          mobile: true,
          dob: true,
          jobCategory: true,
        },
      };
    },
    methods: {
        handleSubmit() {
            this.validateForm();
        },
      validateForm() {
        this.valid.firstName = /^[A-Za-z]+$/.test(this.form.firstName);
        this.valid.lastName = /^[A-Za-z]+$/.test(this.form.lastName);
        this.valid.username = this.form.username.length >= 3;
        this.valid.password = /[$%^&*]/.test(this.form.password) && this.form.password.length >= 8;
        this.valid.confirmPassword = this.form.password === this.form.confirmPassword;
        this.valid.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
        this.valid.postcode = /^\d{4}$/.test(this.form.postcode);
        this.valid.mobile = /^04\d{8}$/.test(this.form.mobile);
        this.valid.dob = this.calculateAge(this.form.dob) >= 16;
        this.valid.jobCategory = !!this.form.jobCategory;
      },
      calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 0.8rem;
  }
  .terms-text {
    font-size: 0.9rem;
    color: #555;
  }

/* Box around the form */
form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Fieldset styling */
fieldset {
  border: none;
  margin-bottom: 20px;
  padding: 10px;
}

/* Legends styling */
legend {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Label styling */
label {
  display: block;
  margin: 5px 0;
  font-size: 1rem;
  font-weight: bold;
}

/* Input fields and select dropdowns */
input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"],
input[type="date"],
select {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Button styling */
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

/* Responsive Design */
@media screen and (max-width: 600px) {
  form {
    width: 100%;
    padding: 15px;
  }

  button[type="submit"] {
    width: 100%;
  }
}
</style>