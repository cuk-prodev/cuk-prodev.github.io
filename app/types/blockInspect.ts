type BlockInspectOptions = {
  disableContextMenu?: boolean;
  disableDevToolsShortcut?: boolean;
  disableSelection?: boolean;
  disableCopy?: boolean;
  disableCut?: boolean;
  disablePaste?: boolean;
  allowedKeys?: string[];
  onInspectAttempt?: () => void;
  redirectOnInspect?: "back" | string;
};

export function blockInspect(options: BlockInspectOptions) {
  const {
    disableContextMenu,
    disableDevToolsShortcut,
    disableSelection,
    disableCopy,
    disableCut,
    disablePaste,
    allowedKeys = [],
    onInspectAttempt,
    redirectOnInspect,
  } = options;

  // === fungsi cek devtools terbuka ===
  const isDevToolsOpen = () => {
    const threshold = 160;
    return (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    );
  };

  // disable klik kanan
  if (disableContextMenu) {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  // disable shortcut DevTools
  if (disableDevToolsShortcut) {
    window.addEventListener("keydown", (e) => {
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) || // Ctrl+Shift+I/J/C
        e.key === "F12"
      ) {
        e.preventDefault();
        onInspectAttempt?.();
        if (redirectOnInspect === "back") window.history.back();
        else if (redirectOnInspect) window.location.href = redirectOnInspect;
      }
    });
  }

  // disable seleksi
  if (disableSelection) {
    document.addEventListener("selectstart", (e) => e.preventDefault());
  }

  // disable copy/paste/cut
  if (disableCopy) document.addEventListener("copy", (e) => e.preventDefault());
  if (disablePaste) document.addEventListener("paste", (e) => e.preventDefault());
  if (disableCut) document.addEventListener("cut", (e) => e.preventDefault());

  // cek berkala kalau devtools terbuka
  const interval = setInterval(() => {
    if (isDevToolsOpen()) {
      onInspectAttempt?.();
      if (redirectOnInspect === "back") window.history.back();
      else if (redirectOnInspect) window.location.href = redirectOnInspect;
    }
  }, 1000);

  // return API kecil
  return {
    isDevToolsOpen,
    destroy: () => clearInterval(interval),
  };
}
