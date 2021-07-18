import { FULLY_VACINNATED, PARTIAL_VACINATED, UNVACCINATED } from './constants';

const canSameHouseholdDine = (people) => {
  return true;
};

const canDifferentHouseholdDine = (people) => {
  /* Can't dine if more than half are kids */
  const numKids = people.filter(({ isChild }) => isChild).length;
  if (numKids > people.length / 2) {
    return false;
  }

  return true;
};

const canDine = (people, household) => {
  if (people.length > 5) {
    return false;
  }

  /* Can dine if it's 2 people */
  if (people.length <= 2) {
    return true;
  }

  /* Can't dine if all are kids */
  if (people.every(({ isChild }) => isChild)) {
    return false;
  }

  /* Can dine if all are fully vaccinated */
  if (people.every(({ status }) => status === FULLY_VACINNATED.value)) {
    return true;
  }

  /* Can't dine if there are unvacinated adults */
  if (
    people.some(
      ({ isChild, status }) =>
        !isChild &&
        (status === UNVACCINATED.value || status === PARTIAL_VACINATED.value)
    )
  ) {
    return false;
  }

  if (household === 'same') {
    return canSameHouseholdDine(people);
  }

  return canDifferentHouseholdDine(people);
};

export default canDine;
