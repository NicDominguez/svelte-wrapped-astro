import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalBarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalBar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalBar["size"];
}
interface RuxIconLocalBarEvents {
}
interface RuxIconLocalBarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalBar extends SvelteComponent {
    $$prop_def: RuxIconLocalBarProps;
    $$events_def: RuxIconLocalBarEvents;
    $$slot_def: RuxIconLocalBarSlots;
    $on<K extends keyof RuxIconLocalBarEvents>(type: K, callback: (e: RuxIconLocalBarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalBarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalBarElement | undefined;
}
export default RuxIconLocalBar;
