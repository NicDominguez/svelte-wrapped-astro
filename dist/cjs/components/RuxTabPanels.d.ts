import { JSX } from '@astrouxds/astro-web-components';
interface RuxTabPanelsProps {
}
interface RuxTabPanelsEvents {
    /** Emits a list of the Tab Panels that have been passed in */
    "rux-register-panels": Parameters<JSX.RuxTabPanels["onRux-register-panels"]>[0];
}
interface RuxTabPanelsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTabPanels extends SvelteComponent {
    $$prop_def: RuxTabPanelsProps;
    $$events_def: RuxTabPanelsEvents;
    $$slot_def: RuxTabPanelsSlots;
    $on<K extends keyof RuxTabPanelsEvents>(type: K, callback: (e: RuxTabPanelsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTabPanelsProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTabPanelsElement | undefined;
}
export default RuxTabPanels;
