import { createActions } from 'redux-actions'

const identityActions = ['AUTH', 'UNAUTH']
export const actions = createActions({}, ...identityActions)

const { auth, unauth } = actions
export { auth, unauth }

export default actions
