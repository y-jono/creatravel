import Ember from 'ember';

export function spotOrMovement(params/*, hash*/) {
  return params[0].kind == Symbol.for('spot') ? 'spot' : 'movement';
}

export default Ember.Helper.helper(spotOrMovement);
