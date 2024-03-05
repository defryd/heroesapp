import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublioshers = ['Marvel Comics', 'DC Comics'];

    if (!validPublioshers.includes(publisher)) {
        throw new Error(`Invalid publisher ${publisher}`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}