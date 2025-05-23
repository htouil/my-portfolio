import React from 'react';

const ContactMe = () => {
  const [result, setResult] = React.useState('');
  const contact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');

    const htmlForm = event.target as HTMLFormElement;
    const formData = new FormData(htmlForm);

    formData.append('access_key', '7d0353e3-8564-41f0-a25b-db1730dbfa1b');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const respData = await response.json();

    if (respData.success) {
      setResult('Form Submitted Successfully');
      htmlForm.reset();
    } else {
      console.log('Error', respData);
      setResult(respData.message);
    }
  };

  return (
    <div className="m-4 flex flex-col rounded-xl bg-slate-200/60 p-5">
      <form onSubmit={contact} className="flex grow flex-col gap-3 p-5">
        <div className="flex w-full gap-5">
          <input
            type="text"
            name="first_name"
            placeholder="Your First Name"
            required
            className="flex-1 rounded border border-gray-300 px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Your Last Name"
            required
            className="flex-1 rounded border border-gray-300 px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          required
          className="rounded border border-gray-300 px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="rounded border border-gray-300 px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="h-60 resize-none rounded border border-gray-300 px-2 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <span className='text-center'>{result}</span>
    </div>
  );
};

export default ContactMe;
