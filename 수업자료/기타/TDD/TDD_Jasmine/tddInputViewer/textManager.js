class TextManager {
  constructor() {
    this.value = { data: "Bye!" };
  }
  getValue() {
    return this.value.data;
  }
  setValue(newValue) {
    this.value = newValue;
  }
}
