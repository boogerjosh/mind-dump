import { Redirect } from "expo-router";
import { GlobalStateProvider } from "../hook/GlobalState";

export default function Index() {
    return <GlobalStateProvider>
        <Redirect href="/home" />;
    </GlobalStateProvider>
}