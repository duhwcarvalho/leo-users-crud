import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  id?: string
};

export type MyRouteComponentProps = RouteComponentProps<RouteParams>;