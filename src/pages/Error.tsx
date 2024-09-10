import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Whoa</h1>
      <p>This page probably doesn't exist</p>
      <p>Nothing is real</p>
      <p>
        <i>{(error as Error).message}</i>
      </p>
    </div>
  )
}