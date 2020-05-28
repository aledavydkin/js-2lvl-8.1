class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    if (this.members.has(item)) {
      throw new Error('Такой персонаж уже есть');
    }
    return this.members.add(item);
  }

  addAll(...theArgs) {
    theArgs.forEach((el) => {
      this.members.add(el);
    });

    return this.members.add;
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
