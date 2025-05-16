const ContactMe = () => {
  return (
    <div className="m-4 flex rounded-xl bg-slate-950/60 p-5">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
