import accountController from './controller/accountController';


const routes = (route) => {
    route.get('/', (req, res) => {
        res.send(`Api server in running (${new Date()})`);
    });

    route.route('/account')
        .get(accountController.getBalance);
};

export default routes;
