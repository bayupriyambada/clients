/* eslint-disable no-useless-return */
/* eslint-disable eqeqeq */
export default function ({ $auth, redirect }) {
  // check loggedIn "false"
  if (!$auth.loggedIn) {
    return redirect('/admin/adminLogin')
  }

  // check admin role
  if ($auth.strategy.name !== 'admin') {
    return redirect('/admin/adminLogin')
  } else {
    return
  }
}
