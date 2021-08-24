import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLaunchProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLaunch["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLaunch["size"];
}
interface RuxIconLaunchEvents {
}
interface RuxIconLaunchSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLaunch extends SvelteComponent {
    $$prop_def: RuxIconLaunchProps;
    $$events_def: RuxIconLaunchEvents;
    $$slot_def: RuxIconLaunchSlots;
    $on<K extends keyof RuxIconLaunchEvents>(type: K, callback: (e: RuxIconLaunchEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLaunchProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLaunchElement | undefined;
}
export default RuxIconLaunch;
