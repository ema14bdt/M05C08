const {check} = require('express-validator');

module.exports = [
    check('nombre').notEmpty().withMessage('Debe ingresar su nombre.'),

    check('email').isEmail().withMessage('Email inválido.'),

    check('colorFondo').notEmpty().withMessage('Debe seleccionar un color.'),

    check('edad').notEmpty().withMessage('Debe ingresar su edad.').bail().isNumeric().withMessage('Su edad debe ser ingresada en formato número.'),
];
