import { Components } from '@astrouxds/astro-web-components';
interface RuxGlobalStatusBarProps {
    /** Declares whether a rux-icon will be shown in the left-side slot */
    includeIcon?: Components.RuxGlobalStatusBar["includeIcon"];
    /** Declares whether the app-state component will be shown in the app-meta slot */
    includeAppState?: Components.RuxGlobalStatusBar["includeAppState"];
    /** Declares whether the username component will be shown in the app-meta slot */
    includeUsername?: Components.RuxGlobalStatusBar["includeUsername"];
    /** Sets the domain of the application to be displayed in the app-meta element */
    appDomain?: Components.RuxGlobalStatusBar["appDomain"];
    /** Sets the name of the application to be displayed in the app-meta element */
    appName?: Components.RuxGlobalStatusBar["appName"];
    /** Sets the version of the application to be displayed in the app-meta element */
    appVersion?: Components.RuxGlobalStatusBar["appVersion"];
    /** Sets the icon to be displayed in the default rux-icon component */
    menuIcon?: Components.RuxGlobalStatusBar["menuIcon"];
}
interface RuxGlobalStatusBarEvents {
}
interface RuxGlobalStatusBarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxGlobalStatusBar extends SvelteComponent {
    $$prop_def: RuxGlobalStatusBarProps;
    $$events_def: RuxGlobalStatusBarEvents;
    $$slot_def: RuxGlobalStatusBarSlots;
    $on<K extends keyof RuxGlobalStatusBarEvents>(type: K, callback: (e: RuxGlobalStatusBarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxGlobalStatusBarProps>): void;
    constructor(options: any);
    get includeIcon(): any;
    set includeIcon(includeIcon: any);
    get includeAppState(): any;
    set includeAppState(includeAppState: any);
    get includeUsername(): any;
    set includeUsername(includeUsername: any);
    get appDomain(): any;
    set appDomain(appDomain: any);
    get appName(): any;
    set appName(appName: any);
    get appVersion(): any;
    set appVersion(appVersion: any);
    get menuIcon(): any;
    set menuIcon(menuIcon: any);
    get getWebComponent(): HTMLRuxGlobalStatusBarElement | undefined;
}
export default RuxGlobalStatusBar;
