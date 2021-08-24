import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMobileFriendlyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMobileFriendly["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMobileFriendly["size"];
}
interface RuxIconMobileFriendlyEvents {
}
interface RuxIconMobileFriendlySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMobileFriendly extends SvelteComponent {
    $$prop_def: RuxIconMobileFriendlyProps;
    $$events_def: RuxIconMobileFriendlyEvents;
    $$slot_def: RuxIconMobileFriendlySlots;
    $on<K extends keyof RuxIconMobileFriendlyEvents>(type: K, callback: (e: RuxIconMobileFriendlyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMobileFriendlyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMobileFriendlyElement | undefined;
}
export default RuxIconMobileFriendly;
