import { atom } from 'recoil';

import EAtoms from '@state/EAtoms';
import { User } from '@types';

const defaultState: User = {
    id: '',
    name: '',
}

const userAtom = atom<User>({
    key: EAtoms.USER,
    default: defaultState,
});

export default userAtom;