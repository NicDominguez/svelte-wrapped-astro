import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallMadeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallMade["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallMade["size"];
}
interface RuxIconCallMadeEvents {
}
interface RuxIconCallMadeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallMade extends SvelteComponent {
    $$prop_def: RuxIconCallMadeProps;
    $$events_def: RuxIconCallMadeEvents;
    $$slot_def: RuxIconCallMadeSlots;
    $on<K extends keyof RuxIconCallMadeEvents>(type: K, callback: (e: RuxIconCallMadeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallMadeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallMadeElement | undefined;
}
export default RuxIconCallMade;
