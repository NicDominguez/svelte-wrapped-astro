import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccountCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccountCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccountCircle["size"];
}
interface RuxIconAccountCircleEvents {
}
interface RuxIconAccountCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccountCircle extends SvelteComponent {
    $$prop_def: RuxIconAccountCircleProps;
    $$events_def: RuxIconAccountCircleEvents;
    $$slot_def: RuxIconAccountCircleSlots;
    $on<K extends keyof RuxIconAccountCircleEvents>(type: K, callback: (e: RuxIconAccountCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccountCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccountCircleElement | undefined;
}
export default RuxIconAccountCircle;
