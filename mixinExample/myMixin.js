export const MyMixin = (SuperClass) =>
  class extends SuperClass {
    getUpperCaseName() {
      return this.name.toUpperCase();
    }
  };
