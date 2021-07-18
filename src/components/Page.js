import Form from './Form';

import styles from './Page.module.css';

function Page() {
  return (
    <>
      <div className={`container is-max-desktop ${styles.container}`}>
        <h1 className={`title ${styles.title}`}>Can eat together?</h1>
        <p>
          Confused by the recent SG government Covid19 restrictions? Here's Eat
          Together to help you solve your dining arrangement problems
        </p>
        <br />
      </div>
      <Form />
      <p className="mt-6 has-text-centered is-size-7">
        Made by{` `}
        <a
          rel="noopener noreferrer"
          href="https://www.ngamanda.com/"
          target="_blank"
        >
          Amanda Ng
        </a>
      </p>
    </>
  );
}

export default Page;
