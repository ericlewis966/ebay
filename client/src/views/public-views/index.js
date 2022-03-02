import { PUBLIC_PREFIX } from 'configs/app-config';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PublicViews = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${PUBLIC_PREFIX}`} component={lazy(() => import('./main'))} />
            </Switch>
        </Suspense>
    )
}

export default PublicViews;