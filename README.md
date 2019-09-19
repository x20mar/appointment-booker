# appointment-booker

Appointment Booker Assignment

## Notes/Thoughts while working

* `Build a proof of concept` - don't do unit tests
* `There is no need to store the appointment anywhere.` - Data storage is not required
* `This information should then be relayed back to the user in a
confirmation email.` - Email Templates would be useful here, mailhog for emails?
* `The user can view nearby doctors` - Config file of doctors? How do other providers currently do this?
* There should be a form with the following fields:
  * Selected Doctor
  * Patient's Name
  * Patient's E-mail Address
  * Preferred appointment time.
* Let's use univerities as address, it's mock data anyways
* In production use something like webpack to package all the js files rather than host them from CDNs

## Plan of action

* 1 service
* views and server side validation. Should also send emails
* dockerised
