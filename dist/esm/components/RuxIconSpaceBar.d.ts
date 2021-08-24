import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpaceBarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpaceBar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpaceBar["size"];
}
interface RuxIconSpaceBarEvents {
}
interface RuxIconSpaceBarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpaceBar extends SvelteComponent {
    $$prop_def: RuxIconSpaceBarProps;
    $$events_def: RuxIconSpaceBarEvents;
    $$slot_def: RuxIconSpaceBarSlots;
    $on<K extends keyof RuxIconSpaceBarEvents>(type: K, callback: (e: RuxIconSpaceBarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpaceBarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpaceBarElement | undefined;
}
export default RuxIconSpaceBar;
