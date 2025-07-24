# Student Registration Form – Test Cases & Scenarios
This document contains test cases to validate the HTML5 Student Registration Form functionality.



## Test Scenarios

### 1.Form Submission with All Valid Inputs
 **Input:** Name = "John Doe", Email = "john@example.com", Age = 25
 **Expected Result:** Form submits successfully (if backend is present), no validation error.


### 2.Empty Name Field
**Input:** Name = "", Email = "john@example.com", Age = 25
**Expected Result:** Browser shows validation error: "Please fill out this field."


### 3.Invalid Email Format
**Input:** Name = "John Doe", Email = "john@", Age = 25
**Expected Result:** Browser shows email format validation error.


### 4.Age Below Minimum (e.g., 9)
**Input:** Name = "John Doe", Email = "john@example.com", Age = 9
**Expected Result:** Browser prevents form submission, shows message about age range.


### 5.Age Above Maximum (e.g., 120)
**Input:** Name = "John Doe", Email = "john@example.com", Age = 120
**Expected Result:** Browser prevents form submission, shows message about age range.


### 6.All Fields Empty
**Input:** Name = "", Email = "", Age = ""
**Expected Result:** Browser shows validation messages for all required fields.


**Expected Result:** All fields are cleared.


##  Notes
These are client-side (HTML5) validations.
 No JavaScript or backend validation is included in this test.

