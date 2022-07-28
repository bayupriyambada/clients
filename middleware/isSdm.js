export default function ({ $auth, redirect }) {
  // validasi login jika false
  if (!$auth.loggedIn) {
    return redirect('sdm/sdmLogin')
  }
  // validasi cek role
  if ($auth.strategy.name !== 'sdm') {
    return redirect('/sdm/sdmLogin')
  }
}
