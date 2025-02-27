export const validateContactForm = (formData) => {
  let errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required!";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email format!";
  }

  if (!formData.message.trim()) {
    errors.message = "Message cannot be empty!";
  } else if (formData.message.length < 5) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return errors;
};
