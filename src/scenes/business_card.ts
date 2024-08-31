import * as THREE from 'three';
import { general_folding_scene } from './paper_folding_3';



export const business_card = general_folding_scene(
    [
        [-1.75, 1],
        [1.75, 1],
        [1.75, -1],
        [-1.75, -1], 
    ],
    0x000000,
    0x000000,
    0xffffff,
)