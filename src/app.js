import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const playerGameSaving = await GameSavingLoader.load();
    // eslint-disable-next-line no-console
    console.log(playerGameSaving);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
})();
