import { createActions } from 'redux-actions'

const identityActions = ['AUTH', 'UNAUTH']
export const actions = createActions({}, ...identityActions)
 
export default actions
