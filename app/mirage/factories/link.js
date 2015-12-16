import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.hacker.noun,
  url: faker.internet.url,
  description: faker.lorem.sentence
});
