export default function ({ $auth, redirect }) {
  // check loggedIn "true"
  if ($auth.loggedIn) {
    if ($auth.strategy.name === 'admin') {
      return redirect('/admin/dashboardAdmin')
    }

    if ($auth.strategy.name === 'sdm') {
      return redirect('/sdm/dashboardSdm')
    }
    if ($auth.strategy.name === 'pegawai') {
      return redirect('/pegawai/dashboardPegawai')
    }
  }
}
