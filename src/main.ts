import { App } from './app';
import { buildUI } from './ui/ui';

const gameView = document.getElementById('GameView') as HTMLDivElement;
const app = new App(gameView);
buildUI(app);

// handy for debugging and scripted profiling
(window as unknown as { app: App }).app = app;
