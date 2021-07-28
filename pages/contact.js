import React from 'react';
import styles from './contact.module.css';

function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const getStyle = () => {
    if (submitted) return styles.showtheresult;
    else return styles.hidetheresult;
  };

  const getButtonStyle = () => {
    if (submitted) return styles['btn-showtheresult'];
    else return styles['btn-hidetheresult'];
  };
  const handleMovClick = () => {
    setSubmitted(!submitted);
  };

  console.log(styles);
  return (
    <div>
      <section className="results">
        <h1 className={getStyle()}>Correct?</h1>
        <h1 className={styles.hidetheresult}>Incorrect?</h1>
        <button className={getButtonStyle()} onClick={handleMovClick}>
          An instruction
        </button>
      </section>
    </div>
  );
}

export default Contact;
