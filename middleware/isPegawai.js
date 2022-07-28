export default function ({ $auth, redirect }) {
  // validasi login jika false
  if (!$auth.loggedIn) {
    return redirect('/pegawai/pegawaiLogin')
  }

  // check admin role
  if ($auth.strategy.name !== 'pegawai') {
    return redirect('/pegawai/pegawaiLogin')
  }
}
