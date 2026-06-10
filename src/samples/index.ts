import { SaveFile } from '../app';
import { airplane } from './airplane';
import { crane } from './crane';

export type Sample = { name: string; file: SaveFile };

export const SAMPLES: Sample[] = [
    { name: 'Paper Airplane', file: airplane },
    { name: 'Origami Crane', file: crane }
];
