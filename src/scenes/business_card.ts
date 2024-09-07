import * as THREE from 'three';
// import { general_folding_scene } from './paper_folding_3';
import {build_thing_from_seed} from './build_thing'
import { OrbitalPointer } from '../controls';

export const business_card = build_thing_from_seed(
    [
        [-1.75, 1],
        [1.75, 1],
        [1.75, -1],
        [-1.75, -1], 
    ],
    // 0x000000,
    // 0x000000,
    // 0xffffff,
)