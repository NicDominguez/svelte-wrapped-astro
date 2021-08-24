import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDonutSmallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDonutSmall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDonutSmall["size"];
}
interface RuxIconDonutSmallEvents {
}
interface RuxIconDonutSmallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDonutSmall extends SvelteComponent {
    $$prop_def: RuxIconDonutSmallProps;
    $$events_def: RuxIconDonutSmallEvents;
    $$slot_def: RuxIconDonutSmallSlots;
    $on<K extends keyof RuxIconDonutSmallEvents>(type: K, callback: (e: RuxIconDonutSmallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDonutSmallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDonutSmallElement | undefined;
}
export default RuxIconDonutSmall;
