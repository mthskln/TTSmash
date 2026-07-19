// Polyfills the `window.storage` API that App.jsx was originally built
// against inside the Claude artifact environment, using the browser's
// built-in localStorage. This means App.jsx did not need to change at all.

function prefixedKey(key) {
  return `tt_${key}`;
}

const storage = {
  async get(key, _shared = false) {
    try {
      const raw = window.localStorage.getItem(prefixedKey(key));
      if (raw === null) return null;
      return { key, value: raw, shared: _shared };
    } catch (e) {
      return null;
    }
  },
  async set(key, value, _shared = false) {
    try {
      window.localStorage.setItem(prefixedKey(key), value);
      return { key, value, shared: _shared };
    } catch (e) {
      return null;
    }
  },
  async delete(key, _shared = false) {
    try {
      window.localStorage.removeItem(prefixedKey(key));
      return { key, deleted: true, shared: _shared };
    } catch (e) {
      return null;
    }
  },
  async list(prefix = '', _shared = false) {
    try {
      const keys = [];
      const full = `tt_${prefix}`;
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(full)) keys.push(k.slice(3));
      }
      return { keys, prefix, shared: _shared };
    } catch (e) {
      return null;
    }
  },
};

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = storage;
}

export default storage;
