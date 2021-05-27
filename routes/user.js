const {Router} = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/user');

const router = Router();

router.get('/', usersGet);
router.post('/', usersPost);
router.put('/:id', usersPut);
router.delete('/', usersPatch);
router.patch('/', usersDelete);

module.exports = router;