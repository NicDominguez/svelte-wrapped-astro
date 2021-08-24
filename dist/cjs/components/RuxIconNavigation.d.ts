import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNavigationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNavigation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNavigation["size"];
}
interface RuxIconNavigationEvents {
}
interface RuxIconNavigationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNavigation extends SvelteComponent {
    $$prop_def: RuxIconNavigationProps;
    $$events_def: RuxIconNavigationEvents;
    $$slot_def: RuxIconNavigationSlots;
    $on<K extends keyof RuxIconNavigationEvents>(type: K, callback: (e: RuxIconNavigationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNavigationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNavigationElement | undefined;
}
export default RuxIconNavigation;
