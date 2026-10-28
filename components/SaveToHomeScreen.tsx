
'use client';

import { useEffect, useState } from 'react';

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function SaveToHomeScreen() {
  const [installPrompt, setInstallPrompt] =
    useState<InstallPromptEvent | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    setIsIOS(ios);

    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in navigator &&
        (navigator as Navigator & { standalone?: boolean }).standalone === true);

    setIsStandalone(standalone);

    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    const handleInstalled = () => {
      setIsStandalone(true);
      setInstallPrompt(null);
      setShowInstructions(false);
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  async function handleSave() {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
    } else {
      setShowInstructions(value => !value);
    }
  }

  if (isStandalone) return null;

  return (
    <div style={{ marginTop: '16px' }}>
      <button
        type="button"
        onClick={handleSave}
        style={{
          background: '#1e293b',
          color: '#ffffff',
          border: '1px solid #38bdf8',
          borderRadius: '8px',
          padding: '12px 18px',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        ⬇ Save CryptoCalcGrid to Home Screen
      </button>

      {showInstructions && (
        <div
          role="status"
          style={{
            marginTop: '12px',
            padding: '14px',
            background: '#1e293b',
            color: '#ffffff',
            borderRadius: '8px',
            maxWidth: '460px',
            lineHeight: 1.6
          }}
        >
          {isIOS ? (
            <p>
              On iPhone or iPad, open this website in Safari,
              tap Share, then select Add to Home Screen.
            </p>
          ) : (
            <p>
              Open your browser menu and look for
              Install App, Add to Home Screen, or Create Shortcut.
              The available option depends on your browser.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

