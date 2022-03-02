import { PUBLIC_PREFIX, ADMIN_URL } from 'configs/app-config';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PrivateView = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={`${ADMIN_URL}`} component={lazy(() => import('./main'))} />
                <Route exact path={`${ADMIN_URL}/usermg`} component={lazy(() => import('./usermg'))} />
            </Switch>
        </Suspense>
    )
}

export default PrivateView;