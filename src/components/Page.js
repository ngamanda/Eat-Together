import Form from './Form';

import styles from './Page.module.css';

function Page() {
  return (
    <>
      <article class="message is-info">
        <div class="message-header">
          <p>20th July 2021 Update</p>
        </div>
        <div class="message-body">
          Given the recent announcements, this site is <b>no longer</b> a
          suitable reference for the latest updates on the restrictions. Please
          refer to{' '}
          <a
            rel="noopener noreferrer"
            href="https://www.moh.gov.sg/covid-19"
            target="_blank"
          >
            MOH
          </a>{' '}
          for more updates. Thanks for visiting!
        </div>
      </article>
      <div className={`container is-max-desktop ${styles.container}`}>
        <h1 className={`title ${styles.title}`}>Can eat together?</h1>
        <p>
          Confused by the recent SG government COVID-19 restrictions? Here's Eat
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
