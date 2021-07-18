import Form from './Form';

import styles from './Page.module.css';

function Page() {
  return (
    <div className={`container is-max-desktop ${styles.container}`}>
      <h1 className={`title ${styles.title}`}>Can eat together?</h1>
      <Form />
    </div>
  );
}

export default Page;
