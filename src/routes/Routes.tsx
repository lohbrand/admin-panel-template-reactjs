import React, { FC, memo, Suspense } from "react";
import { Switch } from "react-router-dom";
import {
  setPermissions,
  PermissionEnum,
} from "features/permissions/permissions";
import RouteWrapper from "./RouteWrapper";
import { ROUTE_LIST } from "./Routes.config";

const Routes: FC = () => {
  // Set user's permission scope
  setPermissions([PermissionEnum.DASHBOARD]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {ROUTE_LIST.map(route => (
          <RouteWrapper key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default memo(Routes);