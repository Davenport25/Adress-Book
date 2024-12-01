// Address Book

const readline = require('readline');

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Create an Address book object to store contacts
addressBook = {};

// Function to add a new contact
function addContact(name, phone, email, address) {
    if (addressBook[name]) {  // Handles the error of adding an existing name
        console.log(`Contact with the name "${name}" already exists.`);
    } else {
        addressBook[name] = { phone, email, address };
        console.log(`Contact "${name}" has been added successfully.`);
    }
}

// Function to search for a contact
function searchContact(name) {
    if (addressBook[name]) {
        console.log(`Contact details for "${name}":`);
        console.log(`Phone: ${addressBook[name].phone}`);
        console.log(`Email: ${addressBook[name].email}`);
        console.log(`Address: ${addressBook[name].address}`);
    } else {
        console.log(`Contact "${name}" not found.`);
    }
}

// Function to display all contacts
function displayAllContacts() {
    let contactNames = Object.keys(addressBook);  // used to retrieve all the keys (property names) from the addressBook object and store them in the contactNames array.
    if (contactNames.length === 0) {
        console.log("No contacts in the address book.");
    } else {
        console.log("All contacts:");
        contactNames.forEach((name) => {
            console.log(`- ${name}`);  // This prints each contact name in the array, prefixed by a dash (-)
        });
    }
}

// User prompt
function interactivePrompt() {
    console.log(`
Address Book Menu:
1. Add a new contact
2. Search for a contact
3. Display all contacts
4. Exit
`);

    rl.question("Enter your choice: ", (choice) => { // using the switch statement to execute different blocks of code based on the user's choice 
        switch (choice) {
            case "1":
                rl.question("Enter name: ", (name) => {
                rl.question("Enter phone number: ", (phone) => {
                rl.question("Enter email: ", (email) => {
                rl.question("Enter address: ", (address) => {
                   addContact(name, phone, email, address);  // Calling the function addContact
                interactivePrompt();
                            });
                        });
                    });
                });
                break;
            case "2":
                rl.question("Enter name to search: ", (name) => {
                    searchContact(name);
                    interactivePrompt();
                });
                break;
            case "3":
                displayAllContacts();
                interactivePrompt();
                break;
            case "4":
                console.log("Exiting Address Book. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                interactivePrompt();
                break;
        }
    });
}

// Start the process
interactivePrompt();
