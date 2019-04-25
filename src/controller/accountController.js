const accountController = {
    getBalance: async (req, res, next) => {
        res.json({
            balance: 1000,
        });
    },
};

export default accountController;
