import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCopyrightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCopyright["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCopyright["size"];
}
interface RuxIconCopyrightEvents {
}
interface RuxIconCopyrightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCopyright extends SvelteComponent {
    $$prop_def: RuxIconCopyrightProps;
    $$events_def: RuxIconCopyrightEvents;
    $$slot_def: RuxIconCopyrightSlots;
    $on<K extends keyof RuxIconCopyrightEvents>(type: K, callback: (e: RuxIconCopyrightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCopyrightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCopyrightElement | undefined;
}
export default RuxIconCopyright;
