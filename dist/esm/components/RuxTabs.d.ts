import { Components } from '@astrouxds/astro-web-components';
interface RuxTabsProps {
    /** If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. */
    small?: Components.RuxTabs["small"];
}
interface RuxTabsEvents {
}
interface RuxTabsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTabs extends SvelteComponent {
    $$prop_def: RuxTabsProps;
    $$events_def: RuxTabsEvents;
    $$slot_def: RuxTabsSlots;
    $on<K extends keyof RuxTabsEvents>(type: K, callback: (e: RuxTabsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTabsProps>): void;
    constructor(options: any);
    get small(): any;
    set small(small: any);
    get getWebComponent(): HTMLRuxTabsElement | undefined;
}
export default RuxTabs;
