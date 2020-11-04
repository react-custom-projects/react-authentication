class SessionStorageManager {
	static setItem(key, data) {
		window.sessionStorage.setItem(key, JSON.stringify(data));
	}
	static getItem(key) {
		const value = window.sessionStorage.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	}
	static removeItem(key) {
		const value = this.getItem(key);
		window.sessionStorage.removeItem(key);
		return value;
	}
	static clear() {
		window.sessionStorage.clear();
	}
}

export default SessionStorageManager;
