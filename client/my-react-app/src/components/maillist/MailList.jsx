import "./maillist.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">صرفه جویی وقت، صرفه جویی دارایی</h1>
      <span className="mailDesc">
        ثبت نام کنید تا بهترین ها را به شما پیشنهاد دهیم!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
