class LocalStorageManager {
	static setItem(key, data) {
		localStorage.setItem(key, JSON.stringify(data));
	}
	static getItem(key) {
		const value = localStorage.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	}
	static removeItem(key) {
		const value = this.getItem(key);
		localStorage.removeItem(key);
		return value;
	}
	static clear() {
		localStorage.clear();
	}
}

export default LocalStorageManager;
