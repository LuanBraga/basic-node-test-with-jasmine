const Account = require('/home/luanbraga/Learn/basic-node-test-with-jasmine/main.js');

describe('Testing Account Object', () => {
    let account;

    beforeEach(() => {
        account = new Account('54321', '66666', '0');
    });
    
    it('Should init with correct parameters', () => {
        expect(account.agency).toEqual('54321');
    })

    it('Should initiate balance value equals 0', () => {
        expect(account.balance).toEqual(0);
    });
});

