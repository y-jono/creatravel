import Ember from 'ember';

export function spotOrMovement(params/*, hash*/) {
  Ember.Logger.debug(params[0].kind)
  return params[0].kind === 'spot' ? 'spot' : 'movement';
}

export default Ember.Helper.helper(spotOrMovement);
