const express = require('express')
const { body, validationResult } = require('express-validator')

const router = express.Router()

const doctors = require('./../data/doctors.json')
const path = require('path')
const emailTemplate = require('email-templates')

router.get('/', (req, res) => {
    res.render('form', {
        title: 'Appointment Booker',
        doctors: doctors
    })
})

router.post('/',
    [
        body('doctor')
            .not().isEmpty()
            .isNumeric()
            .withMessage('Please select a doctor'),
        body('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email address'),
        body('date')
            .isLength({ min: 1 })
            .withMessage('Please enter a date'),
        body('time')
            .isLength({ min: 1 })
            .withMessage('Please enter a time')
    ],
    (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {

            let doctor = doctors.find(d => d.id == req.body.doctor)

            const email = new emailTemplate({
                message: {
                    from: 'no-reply@example.com'
                },
                transport: {
                    jsonTransport: true
                }
            })

            email
                .send({
                    template: path.join(__dirname, '../emails', 'confirmation'),
                    message: {
                        to: req.body.email
                    },
                    locals: {
                        name: req.body.name,
                        date: req.body.date,
                        time: req.body.time,
                        doctor: doctor.name,
                        address: doctor.address
                    }
                })
                .catch(console.error)

            res.send('Thank you. Please check your email for confirmation')
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                doctors: doctors,
                data: req.body
            })
        }
    })

module.exports = router