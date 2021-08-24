import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewCompactProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewCompact["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewCompact["size"];
}
interface RuxIconViewCompactEvents {
}
interface RuxIconViewCompactSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewCompact extends SvelteComponent {
    $$prop_def: RuxIconViewCompactProps;
    $$events_def: RuxIconViewCompactEvents;
    $$slot_def: RuxIconViewCompactSlots;
    $on<K extends keyof RuxIconViewCompactEvents>(type: K, callback: (e: RuxIconViewCompactEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewCompactProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewCompactElement | undefined;
}
export default RuxIconViewCompact;
