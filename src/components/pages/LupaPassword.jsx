import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reset password</h2>
            <h5>MASUKAN ALAMAT EMAIL ANDA DAN KAMI AKAN MENGIRIM KONFIRMASI RESET PASSWORD</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">ALAMT EMAIL</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">KIRIM EMAIL UNTUK RESET PASSWORD</button>
                </p>
            </form>
            <footer>
                <p>ANAK BARU? <Link to="/register">BUAT AKUN</Link>.</p>
                <p><Link to="/">KEMBALI KE HOME</Link>.</p>
            </footer>
        </div>
    )
}
