import "./Contact.scss";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="" alt=""></img>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
