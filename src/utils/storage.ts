class Storage {
  prefix: string;

  constructor() {
    this.prefix = 'GMS';
  }

  setItem = (key: string, value: string) => localStorage.setItem(`${this.prefix}_${key}`, value)
  getItem = (key: string) => localStorage.getItem(`${this.prefix}_${key}`)
  removeItem = (key: string) => localStorage.removeItem(`${this.prefix}_${key}`)
  hasKey = (key: string) => !!this.getItem(key)
}

export default new Storage();
