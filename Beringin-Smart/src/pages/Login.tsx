import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonToast,
  IonSpinner,
} from '@ionic/react';
import {
  mailOutline,
  lockClosedOutline,
  arrowForwardOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import api from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/home';
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Harap isi alamat email dan kata sandi Anda!');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      if (response.data && response.data.token) {
        const resolvedRole = response.data.role || response.data.user?.role || 'siswa';
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', resolvedRole);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/home';
      } else {
        setErrorMessage('Format respon server tidak valid.');
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else if (err.response && err.response.status === 401) {
        setErrorMessage('Kombinasi email dan kata sandi salah!');
      } else {
        setErrorMessage('Gagal terhubung ke server backend.');
      }
    } finally {
      setLoading(false);
    }
  };

  const setPresetUser = (presetEmail: string) => {
    setEmail(presetEmail);
    setPassword('password123');
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{
          '--background': 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } as React.CSSProperties}
      >
        <div style={{ maxWidth: '440px', margin: '40px auto 20px auto' }}>
          {/* Header Brand dengan Logo Sekolah Lingkaran Bercahaya */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div
              style={{
                width: '88px',
                height: '88px',
                margin: '0 auto 16px auto',
                background: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                boxShadow: '0 0 28px rgba(34, 197, 94, 0.45)',
                border: '3px solid #86efac',
              }}
            >
              <img
                src="/logo-smkn1beringin.png"
                alt="Logo SMKN 1 Beringin"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <h1
              style={{
                margin: '0 0 6px 0',
                fontSize: '1.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Beringin Smart
            </h1>
            <p style={{ margin: 0, color: '#bbf7d0', fontSize: '0.92rem', fontWeight: 500 }}>
              Portal Pengaduan Sarana & Prasarana • Nurul Husna Edition
            </p>
          </div>

          {/* Login Card dengan Aksen Botanical Sage */}
          <IonCard
            style={{
              margin: 0,
              borderRadius: '26px',
              background: '#ffffff',
              boxShadow: '0 20px 50px -10px rgba(5, 46, 22, 0.45)',
              border: '2px solid #bbf7d0',
              overflow: 'hidden',
            }}
          >
            <IonCardContent style={{ padding: '30px 24px' }}>
              <div style={{ marginBottom: '18px' }}>
                <h2
                  style={{
                    margin: '0 0 4px 0',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#14532d',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Selamat Datang
                </h2>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
                  Masuk menggunakan akun portal sarpras terdaftar
                </p>
              </div>

              {/* Quick Fill Pills */}
              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '0.72rem', color: '#15803d', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                  AKUN UJI COBA CEPAT:
                </span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setPresetUser('husna@beringin.sch.id')}
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#15803d',
                      cursor: 'pointer',
                    }}
                  >
                    👤 Husna (Siswa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('petugas@beringin.sch.id')}
                    style={{
                      background: '#fffbeb',
                      border: '1px solid #fde68a',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#b45309',
                      cursor: 'pointer',
                    }}
                  >
                    🛠️ Pak Zulkifli (Petugas)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('siswa@beringin.sch.id')}
                    style={{
                      background: '#f9fafb',
                      border: '1px solid #e5e7eb',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: '#4b5563',
                      cursor: 'pointer',
                    }}
                  >
                    👤 M. Rizki (Umum)
                  </button>
                </div>
              </div>

              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#14532d' }}>
                    Alamat Email
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f0fdf4',
                      border: '1.5px solid #bbf7d0',
                      borderRadius: '16px',
                      padding: '0 14px',
                    }}
                  >
                    <IonIcon icon={mailOutline} style={{ fontSize: '1.2rem', color: '#15803d', marginRight: '8px' }} />
                    <IonInput
                      type="email"
                      value={email}
                      onIonInput={(e) => setEmail(e.detail.value!)}
                      placeholder="nama@beringin.sch.id"
                      required
                      style={{ fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#14532d' }}>
                    Kata Sandi
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f0fdf4',
                      border: '1.5px solid #bbf7d0',
                      borderRadius: '16px',
                      padding: '0 14px',
                    }}
                  >
                    <IonIcon icon={lockClosedOutline} style={{ fontSize: '1.2rem', color: '#15803d', marginRight: '8px' }} />
                    <IonInput
                      type="password"
                      value={password}
                      onIonInput={(e) => setPassword(e.detail.value!)}
                      placeholder="••••••••"
                      required
                      style={{ fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <IonButton
                  expand="block"
                  type="submit"
                  disabled={loading}
                  style={{
                    height: '50px',
                    margin: 0,
                    '--background': 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
                    '--border-radius': '20px',
                    '--box-shadow': '0 10px 22px rgba(21, 128, 61, 0.4)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  {loading ? (
                    <IonSpinner name="crescent" color="light" />
                  ) : (
                    <>
                      Masuk ke Sistem <IonIcon slot="end" icon={arrowForwardOutline} />
                    </>
                  )}
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '0.78rem', color: '#bbf7d0' }}>
              © 2026-2027 SMK Negeri 1 Beringin • Nurul Husna (XI PPLG 2) • SKKNI No. 282/2016
            </span>
          </div>
        </div>

        <IonToast
          isOpen={!!errorMessage}
          onDidDismiss={() => setErrorMessage('')}
          message={errorMessage}
          duration={3500}
          color="danger"
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
