import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAppsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconApps["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconApps["size"];
}
interface RuxIconAppsEvents {
}
interface RuxIconAppsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconApps extends SvelteComponent {
    $$prop_def: RuxIconAppsProps;
    $$events_def: RuxIconAppsEvents;
    $$slot_def: RuxIconAppsSlots;
    $on<K extends keyof RuxIconAppsEvents>(type: K, callback: (e: RuxIconAppsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAppsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAppsElement | undefined;
}
export default RuxIconApps;
