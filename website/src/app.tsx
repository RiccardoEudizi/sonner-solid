// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import {MetaProvider} from '@solidjs/meta'

import './style.css';
import './globals.css';
export default function App() {
  return (
    <MetaProvider>
    <Router
      root={(props) => (
        <>
         
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
    </MetaProvider>
  );
}
