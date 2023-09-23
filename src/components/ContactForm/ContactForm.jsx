import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import { useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { contact, isLoading } = useContact();

  const onSubmit = (data) => {
    contact(data);
    reset();
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      headingText="Questions? Drop us a line!"
      btnText="Send Message"
      className="contact__heading"
      disabled={isLoading}
    >
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Name"
        disabled={isLoading}
        register={register}
        required="This field is required"
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
        disabled={isLoading}
        register={register}
        required="This field is required"
      />
      <div className="d-flex flex-column gap-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="p-4"
          disabled={isLoading}
          {...register("message", { required: "This field is required" })}
        ></textarea>
      </div>
    </Form>
  );
};

export default ContactForm;
