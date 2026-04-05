# NextMed

This is a web-browser only app for tracking a person's medication, especially, when to take the next dosage of medication.

This app uses IndexedDB to store medication schedule and history.  No internet connection is needed once the app has been downloaded to your browser.

This app runs a background loop, using the Web Workers API, that checks the time and the list of active medications, and will notify the user using the Notifications API.  The timing of the notifications can be configured, e.g. 15 minutes before the medication schedule.
