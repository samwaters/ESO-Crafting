import { all, put } from '@redux-saga/core/effects'

import { bootstrap, ready } from '../actions/bootstrap.actions'

function * rootSaga() {
  yield all([
    put(bootstrap()),
    put(ready())
  ])
}

export { rootSaga }
