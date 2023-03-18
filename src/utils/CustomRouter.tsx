import { BrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

type CustormRouter = {
    basename?: string;
    children: React.ReactNode;
    history: BrowserHistory;
};
const CustomRouter = (props: CustormRouter) => {
    const { basename, children, history } = props;

    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
            {children}
        </Router>
    );
};

export default CustomRouter;
