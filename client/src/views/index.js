import { Route, Switch, Redirect } from 'react-router-dom';
import { PUBLIC_PREFIX, ADMIN_URL } from 'configs/app-config';
import PublicLayout from 'layout/public';
import PrivateLayout from 'layout/private';


const Views = () => {
    return(
        <Switch>
            <Route exact path="/">
                {/* <Redirect to={PUBLIC_PREFIX} /> */}
                <PublicLayout />
            </Route>
            <Route path={ADMIN_URL}>
                <PrivateLayout />
            </Route>
        </Switch>
    )
}

export default Views;