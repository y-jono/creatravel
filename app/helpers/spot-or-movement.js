import Ember from 'ember';
import {kSpot} from './../constants';

export function spotOrMovement(params/*, hash*/) {
  return params[0].kind === kSpot ? 'spot' : 'movement';
}

export default Ember.Helper.helper(spotOrMovement);
