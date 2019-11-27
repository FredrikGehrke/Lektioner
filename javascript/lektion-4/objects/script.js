$(function () {

    let object = {};
    let objectArray = [];

    const person = {
        firstName: 'Hans',
        lastName: 'Mattin-Lassei',
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        addresses: {
            street: 'Pilgatan 2',
            zipcode: 12345,
            city: 'Västerås',
            fullAddress: function() {
                return `${this.street}, ${this.zipcode} ${this.city}`;
            }
        },
        phoneNumbers: [
            '073-123 12 12',
            '070-123 12 31'
        ],
        emailAddress: 'hans@domain.com'
    }

    // document.write(person.addresses.fullAddress());

    // JSON - Konvertera från ett Javascript objekt till JSON
    let json = JSON.stringify(person);
    document.write(json);

    // JSON - Konvertera från JSON till ett Javascript objekt
    let javascriptObj = JSON.parse(json);
    document.write(javascriptObj.firstName);

});