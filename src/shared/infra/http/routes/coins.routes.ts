/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { CreateCoinController } from '@modules/coin/useCases/createCoin/CreateCoinController';
import { FindCoinByIdController } from '@modules/coin/useCases/findCoinById/FindCoinByIdController';
import { ImportCoinsController } from '@modules/coin/useCases/importCoins/ImportCoinsController';
import { ListCoinsController } from '@modules/coin/useCases/listCoins/ListCoinsController';
import { RemoveCoinController } from '@modules/coin/useCases/removeCoin/RemoveCoinController';
import { UpdateCoinController } from '@modules/coin/useCases/updateCoin/UpdateCoinController';
import { Router } from 'express';
import multer from 'multer';

export const coinsRoutes = Router();

const upload = multer({
	dest: './tmp'
});

const importCoinsController = new ImportCoinsController();
const createCoinController = new CreateCoinController();
const findCoinByIdController = new FindCoinByIdController();
const removeCoinController = new RemoveCoinController();
const updateCoinController = new UpdateCoinController();
const listCoinsController = new ListCoinsController();

coinsRoutes.post('/import', upload.single('file'), importCoinsController.handle);
coinsRoutes.post('/', createCoinController.handle);
coinsRoutes.delete('/:id', removeCoinController.handle);
coinsRoutes.put('/:id', updateCoinController.handle);
coinsRoutes.get('/:id', findCoinByIdController.handle);
coinsRoutes.get('/', listCoinsController.handle);
