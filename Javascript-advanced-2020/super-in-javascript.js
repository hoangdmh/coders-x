class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage);
  }
}
//subclass
class RangeHero extends Hero {
  constructor(name, hp, damage, range) {
    super(name, hp, damage); //inheritance method parent
    this.range = range;
  }
  attack(enemy) {
    super.attack(enemy);//call method parent
    this.hp += this.damage;
  }
}

const heroA = new RangeHero("Hero A", 100, 10, 50);
const heroB = new Hero("Hero B", 200, 5);

console.log({ heroA, heroB });
heroA.attack(heroB);
console.log("-------------------");
console.log({ heroA, heroB });
