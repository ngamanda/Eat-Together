import { Fragment, useState } from 'react';
import produce from 'immer';
import {
  VACCINATION_OPTIONS,
  FULLY_VACINNATED,
  UNVACCINATED,
} from './constants';
import canDine from './canDine';

import styles from './Form.module.css';

const DEFAULT_PERSON = {
  name: '',
  status: FULLY_VACINNATED.value,
  isChild: false,
};

function Form() {
  const [household, setHousehold] = useState('same');
  const [people, setPeople] = useState([DEFAULT_PERSON]);

  const onAddPerson = () => {
    setPeople([...people, DEFAULT_PERSON]);
  };

  const onDeletePerson = (personIndex) => () => {
    const newPeopleState = produce(people, (tempState) => {
      tempState.splice(personIndex, 1);
    });

    setPeople(newPeopleState);
  };

  const onUpdateName = (personIndex) => (e) => {
    const newPeopleState = produce(people, (tempState) => {
      tempState[personIndex].name = e.target.value;
    });

    setPeople(newPeopleState);
  };

  const onUpdateStatus = (personIndex) => (e) => {
    const newPeopleState = produce(people, (tempState) => {
      tempState[personIndex].status = e.target.value;
    });

    setPeople(newPeopleState);
  };

  const onChangeChildStatus = (personIndex) => (e) => {
    const newPeopleState = produce(people, (tempState) => {
      const isChild = e.target.checked;
      tempState[personIndex].isChild = isChild;
      if (isChild) {
        tempState[personIndex].status = UNVACCINATED.value;
      }
    });

    setPeople(newPeopleState);
  };

  const onChangeHousehold = (e) => {
    setHousehold(e.target.value);
  };

  return (
    <>
      <div className="field">
        <label className="label">Household</label>
        <div className="control">
          <div className="select" style={{ width: '100%' }}>
            <select
              className={styles.vaccinationOpts}
              value={household}
              onChange={onChangeHousehold}
            >
              <option value="same">Same</option>
              <option value="different">Different</option>
            </select>
          </div>
        </div>
      </div>
      {people.map((person, index) => (
        <div className={`card ${styles.personCard}`} key={index}>
          <div className="card-content">
            <div className="columns is-mobile">
              <div className="column">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={`Person ${index + 1}`}
                    value={person.name}
                    onChange={onUpdateName(index)}
                  />
                </div>
              </div>
              <div className={`column ${styles.deleteBtn}`}>
                <button
                  className="button is-danger has-text-weight-medium is-outlined"
                  onClick={onDeletePerson(index)}
                  disabled={index === 0 && people.length === 1}
                >
                  &#10006;
                </button>
              </div>
            </div>
            <div className="columns">
              <div className="column is-full">
                <div className="control">
                  <div className="select" style={{ width: '100%' }}>
                    <select
                      disabled={person.isChild}
                      value={person.status}
                      className={styles.vaccinationOpts}
                      onChange={onUpdateStatus(index)}
                    >
                      {VACCINATION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={person.isChild}
                onChange={onChangeChildStatus(index)}
              />
              {` `}Is under 12 years old
            </label>
          </div>
        </div>
      ))}
      <button
        onClick={onAddPerson}
        className="mt-4 button is-primary has-text-weight-medium"
      >
        Add person
      </button>
      <footer className={`box ${styles.result}`}>
        <span className="has-text-weight-medium">Results:</span> {people.length}{' '}
        pax,
        {canDine(people, household) ? (
          <span className="tag is-primary is-medium has-text-weight-medium ml-2">
            Can eat
          </span>
        ) : (
          <span className="tag is-danger is-medium has-text-weight-medium ml-2">
            Cannot eat
          </span>
        )}
      </footer>
    </>
  );
}

export default Form;
